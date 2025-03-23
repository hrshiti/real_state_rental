import React from 'react'

const OurRegions = () => {
  return (
    <div className="w-screen h-auto bg-[#C9BDAB] flex flex-col justify-center items-center py-12">
      <div className="flex flex-col gap-12 w-full max-w-[1536px] text-center px-4">
        
        {/* Heading Section */}
        <div className="w-full max-w-[1257px] mx-auto">
          <h1 className="w-full max-w-[596px] font-[Rufina] font-bold text-4xl sm:text-5xl md:text-6xl text-[#181d24] mx-auto">
            OUR REGIONS
          </h1>
          <p className="w-full max-w-[757px] font-[Raleway] font-medium text-sm sm:text-base text-[#181d24] mx-auto pt-4 sm:pt-6">
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl. Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex flex-wrap justify-center gap-12 mt-6">
          
          {/* Mountains */}
          <div className="relative w-full max-w-[545px]">
            <img 
              src="/mountain.png" 
              alt="Mountains" 
              className="w-full h-auto sm:h-[510px] rounded-tl-[3px] rounded-tr-[80px] rounded-br-[3px] rounded-bl-[80px]"
            />
            <div className="absolute bottom-6 left-6 text-white font-bold">
              <h3 className="text-2xl sm:text-3xl md:text-[44px]">Mountains</h3>
              <p className="text-base sm:text-lg">78 properties</p>
            </div>
          </div>

          {/* Coastline */}
          <div className="relative w-full max-w-[545px]">
            <img 
              src="/coastline.png" 
              alt="Coastline" 
              className="w-full h-auto sm:h-[510px] rounded-tl-[3px] rounded-tr-[80px] rounded-br-[3px] rounded-bl-[80px]"
            />
            <div className="absolute bottom-6 left-6 text-white font-bold">
              <h3 className="text-2xl sm:text-3xl md:text-[44px]">Coastline</h3>
              <p className="text-base sm:text-lg">102 properties</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurRegions
