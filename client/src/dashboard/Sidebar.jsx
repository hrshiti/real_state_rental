import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the sidebar on mobile

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Icon */}
      <div className='md:hidden flex justify-end p-4'>
        <button onClick={toggleSidebar} className='text-white'>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`w-68 h-full bg-gradient-to-br from-black via-blue-900 to-black 
          ${isOpen ? 'block' : 'hidden'} md:block fixed top-0 left-0 z-50 md:relative`}
      >
        <h3 className='relative text-lg font-semibold pb-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent pl-16 pt-12 mb-12'>
          Vision UI Free
        </h3>
        <ul className='pl-16 flex flex-col gap-8'>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">Overview Dashboard</li>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">
            <Link to='/villamanagementpage'> Villas Management </Link>
          </li>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">
            <Link to="/bookingtable">Bookings Management</Link>
          </li>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">
            <Link to="/table">User Management</Link>
          </li>
        </ul>

        <h5 className='text-2xl p-12'>Account Pages</h5>

        <ul className='pl-16 flex flex-col gap-8 pb-14'>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">Financial Reports</li>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">Analytics & Insights</li>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">Messages & Support</li>
          <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">Settings & Configuration</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
