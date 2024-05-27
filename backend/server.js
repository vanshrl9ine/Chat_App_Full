import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"//authrouter
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongoDB from "./db/Dbconnector.js"
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
dotenv.config();

const app=express();
app.use(express.json());//to parse incoming req wiht json body
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send("hello");
})

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

const port=process.env.PORT || 5000;
server.listen(port,()=>{
    connectToMongoDB();
    console.log(`http://localhost:${port}`);
})