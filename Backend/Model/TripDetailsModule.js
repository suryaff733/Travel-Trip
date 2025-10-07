import mongoose from "mongoose";

const TripDetailsModule = new mongoose.Schema(
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: { type: String, required: true },
      start: { type: String, required: true },
      end: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      adults: { type: Number, default: 1 },
      children: { type: Number, default: 0 },
      infants: { type: Number, default: 0 },
      assistance: { type: Boolean, default: false },
      assistanceType: { type: String, default: "" },
      confirmed: { type: Boolean, default: false },
    },
    { timestamps: true }
  );

  export default mongoose.model("TripDetails",TripDetailsModule);


