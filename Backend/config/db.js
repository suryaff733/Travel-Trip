import mongoose from "mongoose";


export const initDB= async(url)=>{
    try{
        await mongoose.connect(url)
    console.log("DB Connected")
    }catch(error){
        console.log(error)
        process.exit(1);
    }
}
