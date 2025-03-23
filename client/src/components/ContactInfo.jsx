import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] 
    h-auto p-6 flex flex-col justify-center items-center 
    bg-black text-white rounded-lg rounded-br-[50px]">
  
  <h1 className="w-full text-center font-[Rufina] font-bold 
      text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] 
      text-[#f5e9d6] mb-6">
    Let's connect
  </h1>

  <div className="w-full flex flex-col gap-6 text-base sm:text-lg md:text-xl text-white">
    <div className="flex items-center">
      <span className="font-semibold">Phone:</span>
      <span className="ml-2">916260491554</span>
    </div>

    <div className="flex items-center text-white">
      <span className="font-semibold">Email:</span>
      <span className="ml-2">xyz@gmail.com</span>
    </div>

    <div className="flex flex-col">
      <span className="font-semibold">Address:</span>
      <span className="mt-1">Prospekt Ltd, Drazice 138, 51 000 Rijeka, Croatia</span>
    </div>

    <div className="flex h-22 gap-6 mt-4 text-2xl">
      <FontAwesomeIcon icon={faPhone} />
      <FontAwesomeIcon icon={faVoicemail} />
      <FontAwesomeIcon icon={faAddressBook} />
    </div>
  </div>
</div>
);
};


export default ContactInfo
