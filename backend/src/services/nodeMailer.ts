import nodemailer, { Transporter } from "nodemailer";
import dotenv from "dotenv";
// import { google } from "googleapis";

dotenv.config()

interface Email {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export class NodeMailer {
  private static transporter: Transporter;

  private static initializeTransporter() {
    NodeMailer.transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });
  }

  static async sendEmail(email: Email) {
    if (!NodeMailer.transporter) {
      NodeMailer.initializeTransporter();
    } else {
      try {
        const mail = await NodeMailer.transporter.sendMail({
          from: email.from,
          to: email.to,
          subject: email.subject,
          text: email.text,
          html: email.html,
        });
        console.log("Message Sent: ", mail.messageID);
      } catch (e) {
        console.log("Error Sending Email: ", e);
      }
    }
  }
}
