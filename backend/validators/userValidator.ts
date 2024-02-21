import { body, param } from "express-validator";

export class UserValidator {
  static signupValidation() {
    return [
      body("name", "name is required").isString(),
      body("email", "Email is required").isEmail(),
      body("password", "Password is required")
        .isAlphanumeric()
        .isLength({ min: 8, max: 32 })
        .withMessage("Password must be between 8-32 characters"),
      body("phone", "Phone number is required").isString().optional(),
      body("type", "User type is required").isString().optional(),
      body("date_of_birth", "Date of birth is required").optional(),
      body("gender", "Gender is required").isString().optional(),
    ];
  }

  static verifyEmailValidation() {
    return [param("value", "Token is required").isString()];
  }

  static resendVerificationTokenValidation() {
    return [body("email", "Email is required.").isEmail()];
  }

  static loginValidation() {
    return [
      body("email", "Email is required").isEmail(),
      body("password", "Password is required").isAlphanumeric(),
    ];
  }

  static forgotPasswordValidation() {
    return [body("email", "Email is required").isEmail()];
  }

  static resetPasswordValidation() {
    return [
      body("email", "Email is required").isEmail(),
      body("password_reset_token", "Password reset OTP is required").isString(),
    ];
  }

  static getProfileValidation() {
    return [param("email", "Email is required").isEmail()];
  }

  static updateProfileValidation() {
    return [
      body("email", "Email is required").isEmail(),
      body("name").optional().isString(),
      body("phone").optional().isString(),
      body("type").optional().isString(),
    ];
  }

  static deleteUserValidation() {
    return [
      body("email", "Email is required").isEmail(),
      body("password", "Password is required").isAlphanumeric(),
    ];
  }

  static confirmDeleteUserValidation() {
    return [
      body("email", "Email is required").isEmail(),
      body("delete_user_token", "Delete user OTP is required").isString(),
    ];
  }
}
