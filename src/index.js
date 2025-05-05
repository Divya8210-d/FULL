import dotenv from 'dotenv';

dotenv.config(); // Load .env file


import connectDB from "./db/connect.js";
connectDB()