import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbConnect() {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
}
dbConnect();
