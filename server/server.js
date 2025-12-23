import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRouters.js";
import hotelRouter from "./routes/hotelRoutes.js";

dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json());
app.use(clerkMiddleware());

// API listen to clerk webhooks
app.use('/api/clerk' , clerkWebhooks)


// Test route
app.get('/', (req, res) => res.send("API is working"));
app.use('/api/user',userRouter);
app.use('/api/hotels',hotelRouter);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://admin:123@cluster0.fxaje3d.mongodb.net/studentDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
