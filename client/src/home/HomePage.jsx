import React from 'react'
import Navbar from '../components/Navbar'
import FilterBox from '../components/FilterBox'




const HomePage = () => {
  return (
    <>
 <div className="w-screen overflow-x-hidden min-h-screen md:h-[924px] rounded-br-[150px] bg-[url('/home_bg.png')] bg-cover bg-center">
      <Navbar />

      {/* Hero Content */}
      <div className="w-full h-auto md:h-[836px] flex flex-col justify-center items-center text-center px-6">
        
        {/* Title & Subtitle */}
        <div className="w-full max-w-[650px]">
          <h1 className="text-white font-[Rufina] font-bold text-[48px] sm:text-[64px] md:text-[88px] leading-tight tracking-[-1px] mb-60">
            BE OUR GUEST
          </h1>
          <p className=" px-6 py-2 text-black bg-white rounded-md text-[14px] sm:text-[16px] md:text-[18px] ">
            LIVE LIKE A KING IN OUR BEST HOUSES
          </p>
        </div>

        {/* Filter Box */}
        <FilterBox />
      </div>
    </div>
   
       
    </>
  )
}

export default HomePage
