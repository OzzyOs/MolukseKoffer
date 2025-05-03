import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connection connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`);
        process.exit(1); // 1 code means failure, 0 means success
    }
}