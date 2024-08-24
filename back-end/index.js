import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';
const app = express();
import dotenv from "dotenv";
import connectDB from "./utlis//db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
dotenv.config({});

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


//Default REST API
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Running on port ${PORT}`);
});