import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/Connection.js';
import userModel from './Models/User.js';
import Post from './Models/Post.js';
import UserRoutes from './Routes/UserRoutes.js'
dotenv.config();
const app=express();
app.use(cors())
app.use(express.json());
//The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. 
app.use("/",UserRoutes);//:-----middleware...


const Database_Url=process.env.Database_URL;
connectDB(Database_Url);
// app.get('/',(req,res)=>{
//     res.send("hello my server starts good morning changes done");
//     // console.log(process.env.PORT);
// })
app.listen(process.env.PORT);