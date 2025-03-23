import React, { useEffect } from "react";
import ContactInfo from "./ContactInfo";
import { fetchClients } from "../redux/slices/clientSlice";
import {useDispatch, useSelector} from "react-redux"

const VillaDetails = () => {
  const dispatch = useDispatch()
   const {clients,loading,error} = useSelector((state)=> state.clients)

   useEffect(()=>{
    dispatch(fetchClients())

   }, [dispatch])
  
   if (loading) return <p>Loading clients...</p>;
   if (error) return <p>Error: {error}</p>;


  return (

    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center gap-8 p-4">
    
      {/* Left Section */}
      <div className="w-full lg:max-w-3xl text-black p-4">
        
        {/* Title Section */}
        
        {clients.map((client)=>(
        <div key={client._id} className="mt-6 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-medium">Dalmatia</h2>
          <p className="text-lg md:text-xl font-medium font-[Raleway] text-black">
            {client.guest} / {client.bedroom} bedrooms / {client.bathroom}bathrooms / 280m²
          </p>
        </div>
      ))}

        {/* Check-in / Check-out Section */}
        <div className="mt-6 md:mt-8">
          <div className="flex justify-between text-lg md:text-2xl">
            <span>Check in</span> <span>Check out</span>
          </div>
          <div className="flex justify-between text-sm md:text-lg">
            <span>untill 8:00</span> <span>until 11:00</span>
          </div>
        </div>
        {/* Amenities Section */}
        <div className="mt-6 md:mt-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Column 1 */}
            <div>
              <p>✔️ Swimming pool</p>
              <p>✔️ Indoor pool</p>
              <p>✔️ Free WiFi</p>
            </div>

            {/* Column 2 */}
            <div>
              <p>✔️ Air conditioning</p>
              <p>✔️ Private parking</p>
              <p>✔️ Pet friendly</p>
            </div>

            {/* Column 3 */}
            <div>
              <p>✔️ Garden view</p>
              <p>✔️ Fully equipped kitchen</p>
              <p>✔️ Balcony</p>
            </div>

          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-auto mt-6 md:mt-12 lg:mt-0 p-4">
        <ContactInfo />
      </div>
 
    </div>
  );
};

export default VillaDetails;
