// index.js
// import { middleware } from "#middlewares/middlewares";
import { middleware } from "#middlewares/middleware.js";
import express from "express";

const app = express();
const port = process.env.PORT ?? "5000";

app.get("/", middleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});