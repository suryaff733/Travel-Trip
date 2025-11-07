import { Router } from "express";
import { loginUser, signupUser } from "../controllers/userController.js";
import auth from "../middleware/auth.js";

import { createTrip,  deleteTrip,  getName,  getTrip } from "../controllers/newTripController.js";
import rateLimit from "express-rate-limit";

const route=Router();

const authLimit = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10
})


route.post("/signup",authLimit, signupUser);
route.post("/login", authLimit,loginUser);



route.post("/newTrip",auth,createTrip)
route.get("/getTrips",auth,getTrip)
route.get("/getName",auth,getName)
route.delete("/deleteTrip/:id",auth,deleteTrip)
export default route