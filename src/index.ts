import { Hono } from "hono";
import { cors } from "hono/cors";
import { dbConnect } from "./config/db-config";

const app = new Hono();
app.use(cors())

dbConnect();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
