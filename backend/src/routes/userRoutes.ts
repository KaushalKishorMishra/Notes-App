import Router from "express";
import { UserControllers } from "../controllers/userController";
import { GlobalMiddleware } from "../middlewares/globalMiddleware";
import { UserValidator } from "../../validators/userValidator";

const router = Router();

router.get(
  "/get-users",
  GlobalMiddleware.authorization,
  GlobalMiddleware.checkTypeAdmin,
  UserControllers.getAllUsers
);
router.get(
  "/get-profile/:email",
  GlobalMiddleware.authorization,
  UserValidator.getProfileValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.userDetail
);

router.post(
  "/signup",
  UserValidator.signupValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.signUp
);
router.post(
  "/signin",
  UserValidator.loginValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.signIn
);
router.post(
  "/forgot-password",
  UserValidator.forgotPasswordValidation(),
  GlobalMiddleware.checkValidationError
  // UserControllers.forgotPassword
);

router.patch(
  "/verify-email/:value",
  UserValidator.verifyEmailValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.verifyEmail
);
router.patch(
  "/resend-verification-token",
  UserValidator.resendVerificationTokenValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.resendConfirmation
);
router.patch(
  "/reset-password",
  GlobalMiddleware.authorization,
  UserValidator.resetPasswordValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.resetPassword
);
router.patch(
  "/update-profile",
  GlobalMiddleware.authorization,
  UserValidator.updateProfileValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.updateUser
);

router.delete(
  "/delete-user",
  UserValidator.deleteUserValidation(),
  GlobalMiddleware.checkValidationError,
  UserControllers.deleteUser
);

// router.delete(
//   "/confirm-delete-user",
//   GlobalMiddleware.authorization,
//   UserValidator.confirmDeleteUserValidation(),
//   GlobalMiddleware.checkValidationError,
//   UserControllers.
// );

export default router;
