import Booking from "./Booking/Booking";
import Navbar from "./nav";


function newTrip() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-roboto">
      {/* Navbar */}
      <Navbar />
      <Booking/>
      
      </div>
  );
}

export default newTrip;