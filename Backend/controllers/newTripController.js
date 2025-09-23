import mongoose from "mongoose";

import TripDetails from "../Model/TripDetailsModule.js";


export const createTrip= async(req,res) =>{
    
    const {name,start,end,startDate,endDate,assistance}=req.body;
    
   console.log(req.user)

   const newTrip= new TripDetails({
    userId:req.user.id,
    name,
    start,
    end,
    startDate: Date(startDate),
    endDate:Date(endDate),
    assistance
   })
   
   await newTrip.save();
   console.log(newTrip)

   res.json({message:"Successfully added"})

}