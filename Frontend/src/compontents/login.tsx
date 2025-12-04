import React, { useState } from "react";
import { useNavigate } from "react-router";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  


  const handlAPI=async(e:React.FormEvent)=>{
    e.preventDefault();

    const res= await fetch(`${process.env.url}/login`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    })
    const data=await res.json();

    if(res.ok){
      localStorage.setItem("token",data.token);
     
      navigate('/home')
    }
    else{
      alert("Login Failed")
      console.log(Error)
    }




  }




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        {/* Logo */}
        <h1
          className="text-3xl text-center mb-6"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Travel Trip
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Username"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              data-testid="show-password"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition" onClick={handlAPI}>
          Login
        </button>

        {/* Switch to Signup */}
        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};





export default Login;
