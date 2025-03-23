

import { Form } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

const Footer = () => {
  return (
    <>
    <div className="w-screen  ">
      {/* Background Image Section */}
      <div className="w-full h-auto md:h-[835px] relative">
        <img src="/footer_img.png" alt="Footer Image" className="w-full h-auto object-cover" />
      </div>

      {/* Contact Form & Info Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:absolute md:-[50%] md:translate-y-[-50%] px-4">
        
        {/* Contact Info Box */}
        <div className="w-full md:w-[500px] lg:w-[1000px] h-auto md:h-[406px] flex justify-center items-center rounded-lg  text-white p-6">
          <ContactInfo />
        </div>

        {/* Form Box */}
        <div className="w-full md:w-[500px] lg:w-[850px] h-auto md:h-[406px] bg-white text-black rounded-lg p-6 mr-12 rounded-br-[90px]">
          <div className="w-full max-w-[690px] ">
            <h1 className="text-[32px] md:text-[52px] font-[Rufina] font-bold mt-4 md:mt-8 mb-4">
              We’d love to hear from you
            </h1>
            <Form className="w-full ">
              <input type="text" placeholder="Name" className="w-full border-b-2 py-2 mb-4" />
              <input type="email" placeholder="Email" className="w-full border-b-2 py-2 mb-4" />
              <input type="text" placeholder="Message" className="w-full border-b-2 py-2 mb-4" />
              
              <label className="text-[14px] flex items-center gap-2">
                <input type="radio" /> I accept the Terms and Conditions
              </label>

              <button className="w-full max-w-[137px] h-[48px] mt-4 bg-gray-700 text-black btn rounded-md">
                Send
              </button>
            </Form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full bg-[#dfe3e7] flex flex-col justify-center items-center py-10">
        
        {/* Company Info */}
        <div className="w-full max-w-[1066px] flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 px-6  mt-70">
          <div className="max-w-[615px]">
            <h2 className="text-[20px] text-black">LUXURY RENTALS</h2>
            <p className="text-[16px] text-[#5b656f] mt-2">
              We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <p className="text-black text-xl">Connect With Us</p>
            <p className="text-black pt-2">00000000000</p>
            <p className="text-black pt-1">hrtiinf@gmail.com</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full max-w-[1066px] flex flex-col md:flex-row justify-between items-center text-black text-[14px] mt-6 px-6">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            <li>Terms and Conditions</li>
            <li>Privacy Notice and Cookies</li>
            <li>Imprint</li>
          </ul>
          <p className="text-center md:text-right mt-4 md:mt-0 ">
            Luxury rentals. | © All rights reserved 2022-2023
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer