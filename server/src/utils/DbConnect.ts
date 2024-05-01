import mongoose from "mongoose";
import env from "dotenv";

env.config();

export const connection = mongoose.connect(process.env.MONGO_URI!, {});
