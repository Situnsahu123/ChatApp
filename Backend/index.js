import express from "express"
import http from "http"
import dotenv from "dotenv"
import './db.js'; 
import userRoute from "./routes/user.routes.js"
import MessageRoute from "./routes/message.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import {app, server} from "./SocketIo/server.js"


app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(cors({
  origin: 'http://localhost:4001', //
  credentials: true,
}));

app.get("/",(req,res,next)=> {
  res.send("hello world my name is situn ")
})

app.use("/api/user",userRoute);
app.use("/api/message",MessageRoute);


server.listen(process.env.port || 3000, ()=>{
    console.log(`server vis runing on port http://localhost:${process.env.port}`)
})