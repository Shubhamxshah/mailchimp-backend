import { createTransport } from "nodemailer";

const transport = createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASSWORD
  }
})
