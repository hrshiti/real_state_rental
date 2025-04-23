import React,{useEffect} from "react";
import { useVillaBooked } from "./context/villaBooked";


const BookingTable = () => {
  const { villaBooked } = useVillaBooked()


  useEffect(() => {
      if (villaBooked) {
          console.log("Villa Booked Data:", villaBooked);
      }
  }, [villaBooked]);
  return (
    <div className="p-6 w-screen">
      <h2 className="text-2xl font-semibold mb-4 text-white">Villa Bookings</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full text-sm text-white bg-gray-800">
          <thead className="bg-blue-700 text-white text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Check-In</th>
              <th className="px-4 py-3">Check-Out</th>
              <th className="px-4 py-3">Guests #</th>
              <th className="px-4 py-3">Guests Type</th>
              <th className="px-4 py-3">Villa Type</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(villaBooked) && villaBooked.length > 0 ? (
              villaBooked.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700 transition duration-300"
                >
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3">{booking.email}</td>
                  <td className="px-4 py-3">{booking.phone}</td>
                  <td className="px-4 py-3">{booking.checkIn}</td>
                  <td className="px-4 py-3">{booking.checkOut}</td>
                  <td className="px-4 py-3">{booking.guestsNumb}</td>
                  <td className="px-4 py-3">{booking.guests}</td>
                  <td className="px-4 py-3">{booking.villaType}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-400">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
