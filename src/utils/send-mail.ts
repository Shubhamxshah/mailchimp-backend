import { createTransport } from "nodemailer";

const transport = createTransport({
  host: 'smtp.gmail.com',
  port: 465, 
  secure: true,
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASSWORD
  }
})

export const sendMail = async(emails: string[], trackingId: string) => {
  const trackingURL = `${process.env.BASE_URL}/track/track-mail/${trackingId}`

  const mailOptions = {
    from: process.env.SMTP_USER, 
    to: emails, 
    subject: 'Tracking dead pixel', 
    html: `
      <h1> Tracking ID: ${trackingId} </h1>
      <img 
        src="${trackingURL}"
        alt="dead pixel"
        style = "display:none;"
      />
    `,
  }

  try {
    await transport.sendMail(mailOptions) 
  } catch (error) {
    console.log(error);
    throw new Error("failed to send mail")
  }
}
