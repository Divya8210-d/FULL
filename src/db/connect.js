import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import express from "express";


const app = express()


const connectDB = async () => {

try {const instance = await mongoose.connect(`${process.env.MONGODB_URI}`)

console.log("DB connected ");


} catch (error) {
    console.log(error);
    
}

    
    
}
export default connectDB