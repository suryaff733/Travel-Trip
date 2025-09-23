import mongoose from "mongoose";

const TripDetailsModule=mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true,unique:true},
    name:{type:String,require:true},
    start:{type:String,require:true},
    end:{type:String,require:true},
    startDate:{type:Date,require:true},
    endDate:{type:Date,require:true},
    adults:{type:Number},
    children:{type:Number},
    infants:{type:Number},
    assistance:{type:Boolean,require:true},
    assistanceType:{type:String}
})

const TripDetails=mongoose.model("TripDetails",TripDetailsModule);
export default TripDetails

