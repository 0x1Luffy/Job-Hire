import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';
const app = express();
import dotenv from "dotenv";
import connectDB from "./utlis//db.js";
dotenv.config({});

app.get("/home",(req,res)=>{
    return res.status(200).json(
        {
            message:"Message from server"
        }
    )
})

// App Middlewares 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials:true
}

app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Running on port ${PORT}`);
});