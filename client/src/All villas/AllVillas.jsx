import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../home/Footer';
import VillasCard from '../components/VillasCard';
import FilterBox from '../components/FilterBox';
import { useNavigate } from 'react-router-dom';

const AllVillas = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const clickHandle = (id) => {
    navigate(`/villa/${id}`);
  };
  
  

  useEffect(() => {
    fetch('https://real-state-backend-uvau.onrender.com/clientdata')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setClients(data.msg);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-[url('/allVillaBg.png')] bg-cover bg-center filter blur-[120px] sm:blur-[200px] lg:blur-[250px] z-[-1]"></div>

        {/* Content Layer */}
        <div className="relative z-10 "> 
          <Navbar />

          {/* Main Container */}
          <div className="w-full px-4 sm:px-6 lg:px-8 mt-16 mx-auto max-w-7xl">
            {/* Title */}
            <div className="w-full mb-8 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold">All Villas</h1>
              <p className="text-lg text-gray-600 mt-2">124 results</p>
            </div>

            {/* Filter Centered */}
            <div className="mr-6 mb-12 ">
              <FilterBox />
            </div>

            {/* Villas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black gap-8 px-4 sm:px-0 mb-12">
              {clients.map((client) => (
                <VillasCard
                onClick={() => clickHandle(client._id)}
                  key={client._id}
                  img_src={`https://real-state-backend-uvau.onrender.com${client.photo}`}
                  alt_text={client.villaName}
                  span1={client.checkin}
                  span2={client.location}
                  heading={client.villaName}
                  icon_span={`45 guests`}
                  icon2_span="460m2"
                  icon_span2={client.
                    numberOfRooms
                    }
                  icon2_span2={client.
                    numberOfRooms
                    }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllVillas;
