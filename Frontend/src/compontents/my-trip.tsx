
import { useState } from 'react';
import Navbar from './nav';

import Trips from './Triplist/Trips';

function MyTrip() {
  const [trips, setTrips] = useState([]);

  const fetchDetails= async()=>{
    const token = localStorage.getItem("token") || "";
    const res= await fetch("https://travel-trip-gkwe.onrender.com/api/user/getTrips",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
    if(res.ok){
        const Data= await res.json();
        setTrips(Data)
    }
  }


  const deletTrip= async(id) =>{
    const token=localStorage.getItem('token')
    const res= await fetch(`https://travel-trip-gkwe.onrender.com/api/user/deleteTrip/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })

    if(res.ok){
        alert("Delete Successfully")
    }
    
}
fetchDetails();

  return (
    <div>
      <Navbar/>
      <Trips trips={trips} deleteTrip={deletTrip}/>
      
    </div>
  )
}

export default MyTrip;
