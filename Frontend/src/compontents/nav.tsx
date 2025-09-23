import { Link,useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem("token");
    navigate("/login")
  };

  return (
    <nav className="bg-[#304766] text-white flex justify-between items-center px-6 md:px-12 py-4">
      {/* Logo */}
      <h1
        className="text-2xl font-bold"
        style={{ fontFamily: "Caveat, cursive" }}
        
      >
        <Link to="/">Travel Trip</Link>
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-sm md:text-base">
        <Link to="/" className="font-semibold hover:underline">Home</Link>
        <Link to="/my-trips" className="hover:underline">My Trips</Link>
        
      </div>

      {/* Logout Button */}
      <button className="bg-white text-[#304766] px-4 py-2 rounded-md shadow hover:bg-gray-100 text-sm md:text-base"  onClick={logoutHandle}>Logout</button>
      
    </nav>
  );
}

export default Navbar;
