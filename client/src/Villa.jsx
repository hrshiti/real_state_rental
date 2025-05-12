import React from "react";
import Navbar from "./components/Navbar";
import { faSave, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./home/Footer";
import Calendar from "react-calendar";
import ContactInfo from "./components/ContactInfo";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Villa = () => {
  const { id } = useParams();
  const [clients, setClients] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://real-state-backend-uvau.onrender.com/clientdata/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setClients(data.msg);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading villa data...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!clients) return <p>No villa data found.</p>;

  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-lg md:text-2xl font-semibold">VILLA SOHO</h1>
          <div className="flex space-x-4">
            <button className="flex items-center">
              Save <FontAwesomeIcon icon={faSave} className="pl-2" />
            </button>
            <button className="flex items-center">
              Share <FontAwesomeIcon icon={faShare} className="pl-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-60 md:h-96">
            <img
              src={`https://real-state-backend-uvau.onrender.com${clients.photo[0]}`}
              alt="Villa"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/coastline.png" alt="Coastline" className="w-full h-28 md:h-44 object-cover rounded-lg" />
            <img src="/mountain.png" alt="Mountain" className="w-full h-28 md:h-44 object-cover rounded-lg" />
            <img src="/villa01.png" alt="Villa" className="w-full h-28 md:h-44 object-cover rounded-lg" />
            <img src="/villa2.png" alt="Villa 2" className="w-full h-28 md:h-44 object-cover rounded-lg" />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-medium">{clients.villaName}</h2>
          <p className="text-sm md:text-lg">
            {clients.location} / {clients.numberOfRooms} bedrooms / {clients.bathroom} bathrooms / 280m²
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <p>✔️ Swimming pool</p>
            <p>✔️ Indoor pool</p>
            <p>✔️ Free WiFi</p>
            <p>✔️ Air conditioning</p>
            <p>✔️ Private parking</p>
            <p>✔️ Pet friendly</p>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full md:w-auto">
            <Link to="/userBookedVillaForm">Book Villa</Link>
          </button>
        </div>
      </div>

      <div className="mt-12 px-4">
        <h1 className="text-lg md:text-xl font-semibold mb-4">Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="w-full h-64 md:h-80 lg:h-96 rounded-lg"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-gray-100 mt-12 p-4 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-medium mb-4">Availability</h2>
          <Calendar className="w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <ContactInfo />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Villa;
