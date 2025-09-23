import { Router } from "express";
import { loginUser, signupUser } from "../controllers/userController.js";
import auth from "../middleware/auth.js";
import { createTrip } from "../controllers/newTripController.js";
import cookieParser from "cookie-parser"
const route=Router();



route.post("/signup",signupUser);

route.post("/login",loginUser);

route.use(auth)
route.post("/newTrip",createTrip)
export default route