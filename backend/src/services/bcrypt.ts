import * as bcrypt from "bcrypt";

export class bcryptServices {
  static encryptPassword = async (plainPassword: string) => {
    const saltRounds: number = 12;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  };

  static comparePassword = async (
    plainPassword: string,
    hashedPassword: string
  ) => {
    const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isPasswordMatch;
  };
}
