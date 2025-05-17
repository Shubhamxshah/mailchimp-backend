import { Hono } from "hono";
import { cors } from "hono/cors";
import { dbConnect } from "./config/db-config";
import trackMailRoute from "./api/track-mail";
import sendMailRoute from "./api/sendMail";
import getMailStatusRoute from "./api/get-mail-status";

const app = new Hono();
app.use(cors())

dbConnect();

// routes 
app.route('/track', trackMailRoute);
app.route('/api', sendMailRoute);
app.route("/status", getMailStatusRoute)

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
