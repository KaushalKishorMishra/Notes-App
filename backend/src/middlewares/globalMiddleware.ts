import { NextFunction, Request, Response } from "express";
import { JWT } from "../services/jwt";
import { validationResult } from "express-validator";

export class GlobalMiddleware {
  static authorization = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const header_auth = req.headers.authorization;
    const token = header_auth ? header_auth.slice(7) : null;
    
    try {
      console.log("Error from authorization.");
      const decoded = await JWT.VerifyJwt(token!);
      req.body.decoded = decoded;
      next();
    } catch (e) {
      next(e);
    }
  };

  static checkValidationError = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log("Error from checkValidationError.");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    } else {
      next();
    }
  };

  static checkTypeAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userType = req.body.decoded.type;
    try {
      console.log("Error from admin type.");
      if (userType !== "admin") {
        res.status(401).json({ message: "Unauthorized User." });
      }
      next();
    } catch (err) {
      res.status(400).json({ message: "Error while checking user type." });
    }
  };
}
