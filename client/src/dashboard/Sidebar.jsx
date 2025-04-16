import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-68 h-6xl bg-gradient-to-br from-black via-blue-900 to-black '>
      <h3 className='relative text-lg font-semibold pb-2 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent pl-16 pt-12 mb-12'>Vision UI Free</h3>
      <ul className='pl-16 flex flex-col gap-8 '>
        <li>Overview Dashboard</li>
        <li>Villas Management</li>
        <li>Bookings Management</li>
        <li>User Management</li>
      </ul>
      <h5 className=' text-2xl  p-12 '>Account Pages</h5>
      <ul className='pl-16 flex flex-col gap-8 pb-14'>
        <li>Financial Reports</li>
        <li>Analytics & Insights</li>
        <li>Messages & Support</li>
        <li>Settings & Configuration</li>
        
      </ul>
    </div>
  )
}

export default Sidebar
