import React from "react";
import Navbar from "./components/Navbar";
import { faSave, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VillaDetails from "./components/VillaDetails";
import Footer from "./home/Footer";
import Calendar from "react-calendar";
import ContactInfo from "./components/ContactInfo";


const Villa = () => {
   


  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background Blur */}
        <div className="absolute inset-0 bg-[url('/allVillaBg.png')] bg-cover bg-center filter blur-[100px] md:blur-[180px] lg:blur-[250px] z-[-1]"></div>
        
        <Navbar />

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto flex flex-col justify-center px-4">
          {/* Top Section */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-white mt-10 md:mt-12">
            <h1 className="text-2xl md:text-3xl font-semibold">VILLA SOHO</h1>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="flex items-center">
                Save <FontAwesomeIcon icon={faSave} className="pl-2" />
              </span>
              <span className="flex items-center">
                Share <FontAwesomeIcon icon={faShare} className="pl-2" />
              </span>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
            {/* Left Side - Single Large Image */}
            <div className="w-full h-[300px] md:h-[500px] lg:h-[574px]">
              <img
                src="/villa01.png"
                alt="Villa Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Side - 2x2 Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[300px] md:h-[500px] lg:h-[574px]">
              <img
                src="/coastline.png"
                alt="Coastline"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/mountain.png"
                alt="Mountain"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/villa01.png"
                alt="Villa"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/villa2.png"
                alt="Villa 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Villa Details Section */}
        <VillaDetails />

        {/* Location Section */}
        <div className="mt-20 lg:ml-52 px-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">Location</h1>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.972901290079!2d75.89233897515547!3d22.729248579380517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd17439904d3%3A0xa83c4dd4ddeb7146!2sCoderwing%2032%2C%20Shri%20Nagar%20Main%20Rd%2C%20Shree%20Nagar%20Ext%2C%20Shree%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1739857546334!5m2!1sen!2sin"
            className="w-full md:w-[800px] lg:w-[1000px] h-[300px] md:h-[400px] border-0 rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Availability & Contact Section */}
        <div className="w-full bg-[#f5f3f1] flex flex-col md:flex-row justify-center items-center gap-12 mt-14 mb-14 p-6">
          {/* Availability Calendar */}
          <div className="w-full max-w-lg">
            <h2 className="text-xl md:text-2xl font-medium mb-4">Availability</h2>
            <Calendar className="w-full shadow-lg p-2 rounded-lg" />
          </div>

          {/* Contact Info */}
          <div className="w-full max-w-lg">
            <ContactInfo />
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default Villa;
