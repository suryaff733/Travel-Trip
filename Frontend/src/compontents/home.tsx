
import Navbar from "./nav";
import { Link } from "react-router";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-roboto">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row flex-1 justify-between items-center px-6 md:px-20 py-10 md:py-20">
        {/* Left Text */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#304766] mb-6 leading-snug">
            Travel. Relax. <br /> Memories.
          </h2>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            With travel trip you can experience new travel and the best tourist
            destinations.
          </p>
          <Link to="/newTrips" className="bg-[#304766] text-white px-6 py-3 rounded-md hover:bg-[#2563eb] transition">Book a New Trip</Link>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dipmeqcvx/image/upload/v1757848157/travel_vcjy7b.png"
            alt="traveller"
            className="w-972 md:w-[420px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
