import * as jwt from "jsonwebtoken";

export class JWT {
  static async SignJwt(
    payload: object,
    secretKey: string,
    expiresIn: string = "10d"
  ) {
    return await jwt.sign(payload, secretKey, {
      expiresIn,
      algorithm: "HS256",
    });
  }

  static async VerifyJwt(
    token: string,
    secretKey: string = process.env.JWT_SECRET_KEY!
  ) {
    return await jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return err;
      } else if (!decoded) {
        const error = new Error("Token is not valid");
        return error;
      } else {
        return decoded;
      }
    });
  }
}
