import { Hono } from "hono";
import {v4 as uuid} from "uuid";
import Track from "../model/track.model";
import { sendMail } from "../utils/send-mail";

const app = new Hono();

app.post("/send-mail", async (c) => {
  const { emails, password } = await c.req.json();

  if (!emails || !password) {
    return c.json({ error: "email & password are required" });
  }

  if (password !== Bun.env.PASSWORD) {
    return c.json({ error: "wrong password " });
  }

  // tracking id
  const trackingId = uuid();

  try {
    await Track.create({ trackingId })
    await sendMail(emails, trackingId)
  } catch (error) {
    console.log(error)
    return c.json({error: "failed to send email"})
  }

});

export default app;
