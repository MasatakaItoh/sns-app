import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { authRouter } from "./routes/auth";
import { postsRouter } from "./routes/posts";
import { usersRouter } from "./routes/users";

dotenv.config();

const app = express();
const PORT = 4000;

// connect DB
mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URL ?? "")
  .then(() => {
    console.log("connected DB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// middleware
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => console.log("running server!"));
