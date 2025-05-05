import dotenv from 'dotenv';

dotenv.config(); // Load .env file


import connectDB from "./db/connect.js";
import { app } from './app.js';
connectDB()
.then(()=>{


app.listen(process.env.PORT||8000,()=>{
    console.log("port connected");
    
})






})