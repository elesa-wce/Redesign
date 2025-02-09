import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import memberRoutes from "./routes/members.routes.js";
import adminRoutes from "./routes/adminLogin.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());
app.set('trust proxy',1);

app.use("/api/v1/memb",memberRoutes);
app.use("/api/v1/admin", adminRoutes);


export {app}
