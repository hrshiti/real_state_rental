import React from 'react';
import { faBell, faHome, faSearch, faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className='w-full h-14 text-white bg-transparent flex flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12'>
      <div className='hidden md:flex flex-col pt-6'>
        <p>Pages/Dashboard</p>
        <p>Dashboard</p>
      </div>

      <div className='flex flex-row justify-center items-center pt-6 gap-4'>
        <FontAwesomeIcon icon={faSearch} className='text-xl pt-4  mr-4 mb-4' />
        <input placeholder='Type here...' type="search" name="search" className='border-2 p-2 w-32 rounded-md' />
        <p className='hidden sm:block'>Sign In</p>
        <div className='flex gap-4'>
          <FontAwesomeIcon icon={faHome} className='text-xl' />
          <FontAwesomeIcon icon={faSpaghettiMonsterFlying} className='text-xl' />
          <FontAwesomeIcon icon={faBell} className='text-xl' />
        </div>
      </div>

      {/* Mobile View (for smaller screens) */}
      <div className='md:hidden flex justify-between items-center w-full'>
        <div className='text-center'>
          <FontAwesomeIcon icon={faHome} className='text-xl mx-2' />
          <FontAwesomeIcon icon={faSpaghettiMonsterFlying} className='text-xl mx-2' />
          <FontAwesomeIcon icon={faBell} className='text-xl mx-2' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
