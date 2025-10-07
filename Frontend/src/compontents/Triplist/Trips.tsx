

import { useState } from "react";
import { Link } from "react-router";

export default function Trips({trips,deleteTrip}) {
  



  const [selectedTrip, setSelectedTrip] = useState<number | null>(null);



  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};



  if (trips.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      
        <svg width="40" height="69" viewBox="0 0 40 69" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33.3333 68.5714H28.8889H11.1111H6.66667H4.44444C1.98984 68.5714 0 65.5015 0 61.7143V17.1429C0 13.3558 1.98984 10.2857 4.44444 10.2857H11.1111V3.42857C11.1111 1.53504 11.5 0 13.3333 0H26.6667C28.5 0 28.8889 1.53504 28.8889 3.42857V10.2857H35.5556C38.0102 10.2857 40 13.3558 40 17.1429V61.7143C40 65.5015 38.0102 68.5714 35.5556 68.5714H33.3333ZM35.5556 17.1429H4.44444V61.7143H35.5556V17.1429ZM26.5 2H13.5V10.2857H26.5V2Z" fill="#304766"/>
  <path d="M35.5556 17.1429H4.44444V61.7143H35.5556V17.1429Z" fill="#304766"/>
  </svg>
  
        <h1 className="text-2xl font-semibold text-slate-800">No upcoming trips.</h1>
        <p className="text-slate-500 text-sm max-w-md">
          When you book a trip, you will see your trip details here.
        </p>
        <Link to='/newTrips' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">Book a New Trip</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-2xl font-semibold text-slate-800 mb-8">My Trips</h1>
      <div className="space-y-5">
        {trips.map((trip) => (
          <div
            key={trip._id}
            onClick={() => setSelectedTrip(trip._id)}
            

            
            className={`flex justify-between items-center p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] 
              ${
                selectedTrip === trip._id
                  ? "border-blue-400 bg-blue-50 scale-[1.02] shadow-md"
                  : "border-slate-200 bg-white"
              }
            `}
          >
            <div>
               
              <h2 className="text-lg font-semibold text-slate-800">{trip.name}</h2>
              <p className="text-sm text-slate-400">Date:</p><p className="text-slate-600 text-sm">
                {formatDate(trip.startDate)} to {formatDate(trip.endDate)}
              </p>
              
              <p className="text-sm text-slate-400">Destination:</p>
              <p className="text-slate-600 text-sm">{trip.start} to {trip.end}</p>
            </div>
            <button
              
              className="text-blue-600 border-blue-300 hover:bg-blue-50"
              onClick={()=>{
                deleteTrip(trip._id)
                
              }}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
