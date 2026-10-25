import express from "express";
import "dotenv/config.js";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const postRouter = express.Router();

postRouter.post("/create-post", async (req, res) => {
  console.log(req.body);
  console.log(req.cookies);

  const token = req.cookies.token;

  //check token
  if (!token) {
    return res.status(401).json({
      message: "unauthorised",
    });
  }

  //token is valid
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded.id,
    });

    console.log(user);
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized User, Please Register First",
    });
  }

  res.send("Post created successfully");
});
export default postRouter;
