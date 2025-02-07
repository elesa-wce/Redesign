import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.on("Error",(err)=>{
        console.log("Error", err);
        throw err;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}!!`);
    })
})
.catch((err)=>{
    console.log(`MongoDB not connected, error is: ${err}`);
})