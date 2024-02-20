export class Services {
  static generateOTP(digit: number = 6): string {
    let otp: string = "";
    for (let i = 0; i < digit; i++) {
      if (i === 0) {
        // first digit can't be zero
        otp += Math.floor(Math.random() * 9 + 1);
      } else {
        otp += Math.floor(Math.random() * 10);
      }
    }
    return otp;
  }

  static generateVerificationTime(base: Date, minutesAdded: number): Date {
    base.setMinutes(base.getMinutes() + minutesAdded);
    return base;
  }
}
