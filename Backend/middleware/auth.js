
import jwt from "jsonwebtoken";
const auth=async(req,res,next)=>{
    // let token;
    // const jwToken=req.headers["authorization"];
    
    // if(jwToken !== undefined){
    //     token=jwToken.split(" ")[1];
    // }
    // if(jwToken === undefined){
    //     res.status(404).json({message:"No Token"})
    // }

    const token=req.cookies.token
    console.log("Incoming Cookie:",req.cookies);
    if(!token){
        return res.status(401).json({message:"Please provide a Cookie"})
    }
    try{
       const payload= jwt.verify(token,process.env.JWT_SECRET);
                req.user=payload;
                next();      
    }catch(e){
        res.status(404).json({message:"No Token"})
    }



}

export default auth;