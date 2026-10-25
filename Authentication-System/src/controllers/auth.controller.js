import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

//Register User

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({
      email,
    });

    if (isUserAlreadyExists) {
      return res.status(409).json({
        message: "user already exists",
      });
    }

    const user = await userModel.create({
      username,
      email,
      password,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);
    res.status(201).json({
      message: "user created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
