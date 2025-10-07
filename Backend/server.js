import express from "express";
import { initDB } from "./config/db.js";
import "dotenv/config"
import cors from "cors";
import route from "./routes/routes.js";
import cookieParser from "cookie-parser";



const app=express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(route)
const url=process.env.URL

app.use("/api/user",route)



app.get("/",()=>{
    res.status(200).json({message:"asdasdasd"})
})
if(!url){
    console.log("Invalid Url")
}

const connectDB=async ()=>{
   try {
    app.listen(5005,async(req,res)=>{
        try{
            await initDB(url);
            console.log("server Started")
        }catch(error){
            console.log(error)
            process.exit(1)
        }
    })
   } catch (error) {
    console.log(error)
    process.exit(1)
   }
}

connectDB();