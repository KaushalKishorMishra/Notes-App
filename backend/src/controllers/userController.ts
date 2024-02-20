import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repository/userRepository";
import { bcryptServices } from "../services/bcrypt";
import { Services } from "../services/utils";
import { NodeMailer } from "../services/nodeMailer";
import { TokenRepository } from "../repository/tokenRepository";
import crypto from "crypto";
import { JWT } from "../services/jwt";

export class UserControllers {
  static signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        name,
        password,
        email,
        phone,
        gender,
        date_of_birth,
        avatar,
        type,
      } = req.body;

      if (await UserRepository.findOne({ email: email })) {
        return res.status(409).json({ message: "Email already registered." });
      }
      if (await UserRepository.findOne({ phone: phone })) {
        return res.status(409).json({ message: "Phone already registered." });
      }
      const hashedPassword = await bcryptServices.encryptPassword(password);

      const user = await UserRepository.create({
        name,
        password: hashedPassword,
        email,
        phone,
        gender,
        date_of_birth,
        avatar,
        type,
      });

      const token = await TokenRepository.create({
        value: crypto.randomBytes(16).toString("hex"),
        userId: user.id,

      });
      if (!token) {
        return res.status(400).json({ error: "Failed to generate token." });
      }

      const url = `https://localhost:5000/user/verify-email/${token.value}`;

      await NodeMailer.sendEmail({
        from: "notes@kaushal.com.np",
        to: user.email,
        subject: "Email Verification",
        text: `To verify your account use the following ${url}`,
        html: `<a href="${url}">Click to verify email ${user.name}</a>`,
      });

      res.status(400).json({ error: "Failed to send email." });

      return res.status(200).json({ message: "Account Created", user });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };

  static verifyEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = await TokenRepository.findOne({ value: req.params.value });

      if (!token) {
        return res
          .status(404)
          .json({ error: "Token not found or might have expired." });
      }

      let user = await UserRepository.findOne({ id: token.userId });

      if (!user) {
        return res.status(404).json({ message: "User not found.", user: user });
      }

      if (user.email_verified === true) {
        return res
          .status(400)
          .json({ message: "User already verified.", user: user });
      } else {
        user = await UserRepository.update(
          { email_verified: true },
          { id: token.userId }
        );

        console.log("User verified." + user);

        if (!user) {
          return res.status(400).json({ message: "User not verified" });
        }
        return res.status(200).json({ message: "User verified." });
      }
    } catch (error) {
      return res.status(400).json({ message: "User Verification failed" });
    }
  };

  static getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const type = req.body.type;
      console.log(type);
      let user;
      if (type === "admin") {
        user = await UserRepository.findAll({ type: "admin" });
        console.log(user);
      } else {
        user = await UserRepository.findAll({ type: "all" });
      }
      console.log(user);
      if (!user) {
        return res.status(404).json({ message: "No users in table." });
      }
      return res.status(200).send({ user });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error while fetching users.", error: err });
    }
  };

  static signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await UserRepository.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      console.log(user.email_verified);
      if (!user.email_verified) {
        return res
          .status(400)
          .json({ message: "Email not verified.", user: user });
      }
      const comparePassword = await bcryptServices.comparePassword(
        password,
        user.password
      );
      if (comparePassword !== true) {
        return res.status(400).json({ message: "Incorrect Password." });
      }

      const payload = {
        userId: user.id,
        email: user.email,
        type: user.type,
        purpose: "sign-in",
      };
      const jwt = JWT.SignJwt(payload, "10d");

      return res.status(200).json({
        message: "login successful",
        jwt: jwt,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error while signing in.", error: err });
    }
  };

  static resendConfirmation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let user = await UserRepository.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ error: "Email not registered." });
      }
      if (user.email_verified) {
        return res.status(400).json({ error: "Email already verified." });
      }
      let token = await TokenRepository.create({
        value: crypto.randomBytes(16).toString("hex"),
        userId: user.id,
      });

      if (!token) {
        return res.status(400).json({ message: "Failed to generate token." });
      }

      const url = `https://localhost:5000/user/verify-email/${token.value}`;

      await NodeMailer.sendEmail({
        from: "notes@kaushal.com.np",
        to: user.email,
        subject: "Email Verification",
        text: `To verify your account use the OTP ${url}`,
        html: `<a href="${url}">Click to verify ${token.userId}</a>`,
      });

      return res
        .status(200)
        .json({ message: "Verification link sent to your mail." });
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Error while resending confirmation mail." });
    }
  };

  static forgetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await UserRepository.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      let token = await TokenRepository.create({
        value: crypto.randomBytes(16).toString("hex"),
        userId: user.id,
      });

      if (!token) {
        return res
          .status(400)
          .json({ error: "Error while generating token.", message: token });
      }

      const url = `https://localhost:5000/user/verify-email/${token.value}`;

      await NodeMailer.sendEmail({
        from: "notes@kaushal.com.np",
        to: user.email,
        subject: "Email Verification",
        text: `To verify your account use the OTP ${url}`,
        html: `<a href="${url}">Click to verify ${token.userId}</a>`,
      });

      return res
        .status(200)
        .json({ message: "Password reset link has been sent to your email." });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Error while sending forgot password mail." });
    }
  };

  static resetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = await UserRepository.findOne({ value: req.params.value });
      if (!token) {
        return res.status(404).json({ error: "Token not found." });
      }

      let user = await UserRepository.findOne({ id: token.userId });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      const password = req.body.password;
      const hashedPassword = await bcryptServices.encryptPassword(password);

      user = await UserRepository.update(
        { password: hashedPassword },
        { id: user.id }
      );

      if (!user) {
        return res.status(400).json({ error: "Failed to update password." });
      }
      return res.status(200).json({ message: "Password reset successfully." });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error whole resetting password.", error: err });
    }
  };

  static userDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await UserRepository.findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      return res.status(200).send(user);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error while getting user detail.", error: err });
    }
  };

  static updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await UserRepository.findOne({ id: req.params.id });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      const { name, avatar, email } = req.body;
      const updateUser = await UserRepository.update(
        { name, avatar, email },
        { id: user.id }
      );
      return res
        .status(200)
        .json({ message: "Updated user successfully.", data: updateUser });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error while updating user.", error: err });
    }
  };

  static deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await UserRepository.findOne({
        id: req.params.id,
        email: req.params.email,
      });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      const deleteUser = await UserRepository.delete({
        id: user.id,
        email: user.email,
      });
      return res
        .status(200)
        .json({ message: "User successfully deleted.", data: deleteUser });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error while deleting user.", error: err });
    }
  };
}
