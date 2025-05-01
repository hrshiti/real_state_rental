import React from 'react'
import {faCar, faDumbbell, faPaw, faStamp, faWaveSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PropSpecialities = () => {
  return (
    <div className="w-screen h-screen bg-[#F8EFE2] text-black md: pt-74 sm:pt-74 flex flex-col items-center justify-center py-12 px-4">
      
      {/* Heading Section */}
      <div className="text-center max-w-[857px]">
        <h1 className="font-[Rufina] font-bold text-3xl sm:text-4xl md:text-5xl text-[#181d24]">
          Our properties specialities
        </h1>
      </div>

      {/* Features Section */}
      <div className="w-full flex flex-wrap justify-center gap-8 mt-6 max-w-[1293px]">
        
        {/* Seafront */}
        <div className="flex flex-col items-center text-center w-[160px]">
          <FontAwesomeIcon icon={faWaveSquare} className="text-3xl sm:text-4xl mt-2 text-gray-700" />
          <h3 className="text-lg sm:text-xl font-bold mt-3">Seafront</h3>
          <p className="text-sm sm:text-base">have a look</p>
        </div>

        {/* Pet Friendly */}
        <div className="flex flex-col items-center text-center w-[160px] border-l-2 pl-6">
          <FontAwesomeIcon icon={faPaw} className="text-3xl sm:text-4xl mt-2 text-gray-700" />
          <h3 className="text-lg sm:text-xl font-bold mt-3">Pet Friendly</h3>
          <p className="text-sm sm:text-base">pets allowed</p>
        </div>

        {/* Electric Car */}
        <div className="flex flex-col items-center text-center w-[160px] border-l-2 pl-6">
          <FontAwesomeIcon icon={faCar} className="text-3xl sm:text-4xl mt-2 text-gray-700" />
          <h3 className="text-lg sm:text-xl font-bold mt-3">Electric Car</h3>
          <p className="text-sm sm:text-base">charge your car</p>
        </div>

        {/* Fitness/Gym */}
        <div className="flex flex-col items-center text-center w-[160px] border-l-2 pl-6">
          <FontAwesomeIcon icon={faDumbbell} className="text-3xl sm:text-4xl mt-2 text-gray-700" />
          <h3 className="text-lg sm:text-xl font-bold mt-3">Fitness/Gym</h3>
          <p className="text-sm sm:text-base">workout</p>
        </div>

        {/* Boat Mooring */}
        <div className="flex flex-col items-center text-center w-[160px] border-l-2 pl-6">
          <FontAwesomeIcon icon={faStamp} className="text-3xl sm:text-4xl mt-2 text-gray-700" />
          <h3 className="text-lg sm:text-xl font-bold mt-3">Boat Mooring</h3>
          <p className="text-sm sm:text-base">take a trip</p>
        </div>
      
      </div>
    </div>
  )
}

export default PropSpecialities

