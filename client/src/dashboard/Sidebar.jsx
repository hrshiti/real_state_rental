import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-68 h-6xl bg-gradient-to-br from-black via-blue-900 to-black '>
      <h3 className='relative text-lg font-semibold pb-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent pl-16 pt-12 mb-12'>Vision UI Free</h3>
      <ul className='pl-16 flex flex-col gap-8'>
  <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200">Overview Dashboard</li>
  <li className="hover:text-blue-400 hover:underline cursor-pointer transition-all duration-200"><Link to='/villamanagementpage'> Villas Management </Link></li>
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
  )
}

export default Sidebar
