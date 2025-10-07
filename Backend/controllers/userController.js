import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModule from "../Model/UserModule.js";

// signup controller
export const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check user exists
    const existingUser = await UserModule.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // save new user
    const newUser = new UserModule({
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in signup", error: error.message });
  }
};

// login controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await UserModule.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate JWT
    const token = jwt.sign(
      { id:user._id,email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
   //backend cookie storing
    // res.cookie("token",token,{
    //   httpOnly:true,
    //   secure:false,
    //   sameSite:"lax",
    //   maxAge:3600000
    // })
    // console.log("Set-Cookie header:",res.getHeaders()["set-cookie"])
    
    res.json({ message: "Login successful", token});

  } catch (error) {
    res.status(500).json({ message: "Error in login", error: error.message });
  }
};