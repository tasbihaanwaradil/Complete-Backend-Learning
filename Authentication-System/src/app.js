import express from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

//post routes
app.use("/api/post", postRouter);

export default app;
