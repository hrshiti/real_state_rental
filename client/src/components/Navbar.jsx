import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { useAuth } from './context/auth';

const Navbar = () => {
  const { isLoggedIn, LogoutUser } = useAuth(); // Access the isLoggedIn state from the context
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-screen  h-[80px] flex justify-between items-center  px-4 md:px-16 lg:px-32 text-[#F5F3F1] ">
      {/* Logo */}
      <h2 className="font-medium text-2xl md:text-3xl"> <Link t0="/" className='link'> LUXURY RENTALS </Link></h2>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 lg:gap-12 font-[Rufina] text-lg tracking-wide">
        <li className="hover:text-gray-200 cursor-pointer "> <Link to="/villas" className="text-white hover:text-gray-300 nav_links">VILLAS</Link></li>
        <li className="hover:text-gray-200 cursor-pointer "> <Link to="/aboutus"className='text-white hover:text-gray-300 nav_links'>About Us</Link></li>
        <li className="hover:text-gray-200 cursor-pointer nav_links"> <Link to="/footer" className='nav_links'>Contact Us</Link></li>
        
        <li className="hover:text-gray-200 cursor-pointer nav_links"> <Link to="/userBookedVillaForm" className='nav_links'>Book villa</Link></li>
     
      {isLoggedIn ? (

<li className="hover:text-gray-200 cursor-pointer nav_links  "> <button
onClick={() => {
  LogoutUser();
  setMenuOpen(false);
  // optionally navigate somewhere
}}
className="text-white hover:text-gray-300 "
>
Logout
</button></li>
) : (
<>
<li className="hover:text-gray-200 cursor-pointer nav_links"> <Link to="/login" className='nav_links'>Login</Link></li>
<li className="hover:text-gray-200 cursor-pointer nav_links"> <Link to="/signup" className='nav_links'>Signup</Link></li>
</>
)}
</ul>
      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50">
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-700 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 flex flex-col items-center pt-20 text-white text-xl`}
      >
        <ul className="w-full flex flex-col items-center gap-8">
         
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => setMenuOpen(false)}> <Link to="/villas">VILLAS</Link></li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => setMenuOpen(false)}><Link to="/aboutus">About Us</Link></li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => setMenuOpen(false)}><Link to="/footer">Contact us</Link></li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={() => setMenuOpen(false)}><Link to="/userBookedVillaForm">Book villa</Link></li>
          {isLoggedIn ? (

<li className="hover:text-gray-200 cursor-pointer nav_links  "> <button
onClick={() => {
  LogoutUser();
  setMenuOpen(false);
  // optionally navigate somewhere
}}
className="text-white hover:text-gray-300 "
>
Logout
</button></li>
) : (
<>
<li className="hover:text-gray-200 cursor-pointer nav_links"> <Link to="/login" className='nav_links'>Login</Link></li>
<li className="hover:text-gray-200 cursor-pointer nav_links"> <Link to="/signup" className='nav_links'>Signup</Link></li>
</>
)}
        </ul>
      </div>

      {/* Overlay to block background scrolling */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
