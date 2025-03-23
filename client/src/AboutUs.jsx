import React from 'react'
import Navbar from './components/Navbar'
import AboutPage from './home/AboutPage'
import Footer from './home/Footer'

const AboutUs = () => {
  return (
    <div className="h-full w-screen relative">
  {/* Background Blur Image */}
  <div className="absolute inset-0 bg-[url('/allVillaBg.png')] bg-cover bg-center filter blur-[120px] sm:blur-[200px] lg:blur-[250px] z-[-1]"></div>

  <Navbar />

  {/* Main Content Section */}
  <div className="bg-[#F8EFE2] w-screen flex justify-center items-center py-12 px-4">
    <div className="w-screen max-w-none flex flex-col lg:flex-row justify-center items-center gap-12 px-4 sm:px-8">
      
      {/* Image Section */}
      <div className="relative w-full max-w-[756px] flex justify-center">
        <img 
          src="villa02.png" 
          alt="Villa" 
          className="w-full max-w-[559px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[60px] border-8 border-[#F8EFE2] shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full max-w-[696px] text-center lg:text-left px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#181d24] leading-tight">
          Your peace of mind, our priority
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies. Morbi nec tempus dui, sit amet facilisis nisl.
          Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris eleifend, id tempor purus ultricies.
          <br /><br />
          Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna.
          <br /><br />
          Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra. Quisque at libero purus.
        </p>
      </div>
    </div>
  </div>


            <AboutPage />
            <Footer />
      
    </div>
  )
}

export default AboutUs
