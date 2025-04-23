import React from 'react'


const AboutPage = () => {
 
  return (
    <div className=" w-screen bg-[#F8EFE2] overflow-x-hidden flex justify-center items-center p-4">
      <div className="w-full max-w-[1366px] flex flex-col md:flex-row justify-center items-center md:ml-12">
        
        {/* Left Section */}
        <div className="w-full md:w-[696px] h-auto md:h-[699px] text-black text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="w-full md:w-[513px] h-auto md:h-[444px] pt-6 md:pt-12 text-base md:text-lg">
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
            Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.
            Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat.
          </p>
          <div className="w-full md:w-[696px] h-auto md:h-[79px] rounded-[3.06px] bg-[#dfe3e7] mt-4 md:mt-8 p-4">
            <h4 className="font-[Rufina] font-normal text-lg md:text-[26px] text-black">
              We strive to offer you best possible homes to stay.
            </h4>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-[756px] h-auto md:h-[787px] flex justify-center mt-8 md:mt-0">
          <div className="relative w-[90%] max-w-[588px]">
            <img
              src="people2.png"
              alt="image"
              className="w-full h-auto rounded-tl-[6px] rounded-tr-[60px] rounded-br-[6px] rounded-bl-[6px]"
            />
            <img
              src="people1.png"
              alt="image"
              className="absolute top-0 left-0 w-[60%] md:w-[359.3px] h-auto md:h-[510.3px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[60px] border-8 border-[#F8EFE2]"
            />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default AboutPage
