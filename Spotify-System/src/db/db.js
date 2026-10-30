import mongoose from "mongoose";
import "dotenv/config.js";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Error Connecting to MongoDB");
  }
};
