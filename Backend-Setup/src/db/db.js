import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://tasbihaanwaradil249_db_user:ays9mCR6AbJrSkqZ@ac-oh90tvi-shard-00-00.p34do6t.mongodb.net:27017,ac-oh90tvi-shard-00-01.p34do6t.mongodb.net:27017,ac-oh90tvi-shard-00-02.p34do6t.mongodb.net:27017/?ssl=true&replicaSet=atlas-snfg9n-shard-0&authSource=admin&appName=yt-complete-backend/learndb",
  );
  console.log("MongoDB connected");
};

export default connectDB;
