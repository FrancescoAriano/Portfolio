import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

export const transporter = nodemailer.createTransport({
  host: host,
  port: port,
  secure: port == 465,
  auth: {
    user: user,
    pass: pass,
  },
});
