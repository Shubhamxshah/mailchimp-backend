import { Hono } from "hono";
import { cors } from "hono/cors";
import { dbConnect } from "./config/db-config";
import trackMailRoute from "./api/track-mail";
import sendMailRoute from "./api/sendMail";

const app = new Hono();
app.use(cors())

dbConnect();

// routes 
app.route('/track', trackMailRoute);
app.route('/api', sendMailRoute);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
