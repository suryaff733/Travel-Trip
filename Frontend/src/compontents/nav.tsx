import { useState } from "react";
import { Link,useNavigate } from "react-router";


function Navbar() {
  const navigate = useNavigate();
  const [username,setUsername] = useState([]);

  const fetchDetails= async()=>{
    const token = localStorage.getItem("token") || "";
    const res= await fetch(`${process.env.url}/api/user/getName`,{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    if(res.ok){
        const Data= await res.json();
        setUsername(Data)
    }
  }
fetchDetails();
  
  const logoutHandle = () => {
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <nav className="bg-[#304766] text-white flex justify-between items-center px-6 md:px-12 py-4">
      {/* Logo */}
      <h1
        className="text-2xl font-bold"
        style={{ fontFamily: "Caveat, cursive" }}
        
      >
        <Link to="/home">Travel Trip</Link>
      </h1>

      {/* Links */}
      <div className="flex justify-center gap-6 text-sm md:text-base">
        <Link to="/home" className="font-semibold hover:underline">Home</Link>
        <Link to="/my-trips" className="hover:underline">My Trips</Link>        
      </div>
      

      <div className="flex gap-6 text-sm md:text-base ">
        <p><span className="font-semibold">Currently us:</span> {username}</p>
      </div>

      {/* Logout Button */}
      <button className="bg-white text-[#304766] px-4 py-2 rounded-md shadow hover:bg-gray-100 text-sm md:text-base"  onClick={logoutHandle}>Logout</button>
      
    </nav>
  );
}

export default Navbar;
