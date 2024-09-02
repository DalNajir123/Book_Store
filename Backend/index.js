import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// connect to mongoDB
try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected successfully...");
} catch (error) {
  console.log("ERROR: While connecting to MongoDB", error);
}

// Define Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// connect to server
app.listen(PORT, () => {
  console.log(`"Server running on port ${PORT} ..."`);
});
