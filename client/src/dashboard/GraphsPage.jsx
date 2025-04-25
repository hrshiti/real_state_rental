import { faArrowRight, faCaretDown, faCartPlus, faClipboardCheck, faIcons, faLineChart, faMoneyBill, faShop, faSitemap, faToggleOff, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/userSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Graph from './GraphComponents/Graph'
import Graph2 from './GraphComponents/Graph2';

const GraphsPage = () => {
   const dispatch = useDispatch()
   const {users, loading, error} = useSelector((state) => state.users)

   useEffect(() => {
      dispatch(fetchUsers())
   }, [dispatch])

   if (loading) return <p>Loading users...</p>;
   if (error) return <p>Error: {error}</p>;

   return (
      <>
         <div className="flex flex-col lg:flex-row w-full h-auto bg-transparent">
            {/* Left Section */}
            <div className="lg:w-1/3 p-4">
               <div className="w-full h-96 relative mt-[-50px]">
                  <div className="absolute top-20 left-8">
                     <p className="opacity-45">Welcome Back</p>
                     <h3 className="font-bold text-2xl pt-4 pb-6">Rohit Sharma</h3>
                     <p className="opacity-45">Glad to see you again</p>
                     <p className="opacity-45">Ask me anything</p>
                     <p>Tap to record <FontAwesomeIcon icon={faArrowRight} /></p>
                  </div>
                  <div>
                     <img src="/braden.png" alt="braden_img" className="absolute w-full object-cover" />
                  </div>
               </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-2/3 flex flex-col lg:flex-row mt-8 lg:mt-0 p-4 gap-6">
               <div className="w-full lg:w-1/2 bg-gradient-to-br from-black via-blue-900 to-black text-white p-4 rounded-md">
                  <h3 className="text-bold mt-4 ml-6">Satisfaction Rate</h3>
                  <p className="opacity-45 ml-6">From all people</p>
                  <img src="/Ellipse.png" alt="graph_img" className="w-56 mt-6 ml-8 h-56" />
                  <div className="bg-gray-850 relative top-[-130px] left-[-10px] w-76 h-18 justify-center z-10 bg-gray-1000 items-center flex flex-row gap-14 opacity-80">
                     <p className="opacity-45">0%</p>
                     <p className="text-bold text-2xl">75%</p>
                     <p className="opacity-45">100%</p>
                  </div>
               </div>

               <div className="w-full lg:w-1/2 flex flex-col bg-gradient-to-br from-black via-blue-900 to-black text-white p-4 rounded-md">
                  <div className="flex justify-between items-center">
                     <h3 className="text-xl font-bold p-4">Referral Tracking</h3>
                     <FontAwesomeIcon icon={faToggleOff} className="p-4" />
                  </div>
                  <div className="bg-gray-900 mt-4 p-3">
                     <p className="opacity-45 text-xs">Invited</p>
                     <h3>145 People</h3>
                  </div>
                  <div className="bg-gray-900 mt-4 p-3">
                     <p className="opacity-45 text-xs">Invited</p>
                     <h3>145 People</h3>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Section */}
         <div className="flex flex-col lg:flex-row w-full mt-8 p-4 gap-6">
            <div className="w-full lg:w-2/3 bg-gradient-to-br from-black via-blue-900 to-black text-white p-4 rounded-md">
               <h3 className="text-xl font-bold p-4">Revenue</h3>
               <Graph2 />
               <h3 className="text-xl font-bold pl-4">Sales Overview</h3>
               <p className="text-xs text-green-500 pl-4">(+5) more in 2021</p>
               <div className="flex flex-col lg:flex-row gap-6 ml-4 mt-6">
                  <div className="w-full lg:w-1/4">
                     <p><FontAwesomeIcon icon={faUser} /><span className="ml-3">users</span></p>
                     <p className="ml-1">32,984</p>
                  </div>
                  <div className="w-full lg:w-1/4">
                     <p><FontAwesomeIcon icon={faClipboardCheck} /><span className="ml-3">clicks</span></p>
                     <p className="ml-2">284 m</p>
                  </div>
                  <div className="w-full lg:w-1/4">
                     <p><FontAwesomeIcon icon={faCartPlus} /><span className="ml-3">sales</span></p>
                     <p className="ml-4">984</p>
                  </div>
                  <div className="w-full lg:w-1/4">
                     <p><FontAwesomeIcon icon={faSitemap} /><span className="ml-3">items</span></p>
                     <p className="ml-4">32</p>
                  </div>
               </div>
            </div>

            {/* Orders Overview */}
            <div className="w-full lg:w-1/3 bg-gradient-to-br from-black via-blue-900 to-black text-white p-4 rounded-md">
               <h3 className="text-xl font-bold pl-4">Orders Overview</h3>
               <p className="text-xs text-green-500 pl-4">(30%) done this month</p>
               <ul className="flex flex-col text-xs gap-6 p-4 pt-8">
                  <li>
                     <span className="mr-2"><FontAwesomeIcon icon={faLineChart} className="text-green-500" /></span>
                     <span>$2400, Design changes</span>
                     <p>22 DEC 7:20 PM</p>
                  </li>
                  <li>
                     <span className="mr-2"><FontAwesomeIcon icon={faIcons} className="text-green-500" /></span>
                     <span>New order #4219423</span>
                     <p>22 DEC 7:20 PM</p>
                  </li>
                  <li>
                     <span className="mr-2"><FontAwesomeIcon icon={faCaretDown} className="text-green-500" /></span>
                     <span>Server Payments for April</span>
                     <p>22 DEC 7:20 PM</p>
                  </li>
                  <li>
                     <span className="mr-2"><FontAwesomeIcon icon={faShop} className="text-green-500" /></span>
                     <span>Server Payments for April</span>
                     <p>22 DEC 7:20 PM</p>
                  </li>
                  <li>
                     <span className="mr-2"><FontAwesomeIcon icon={faMoneyBill} className="text-green-500" /></span>
                     <span>Unlock packages for Development</span>
                     <p>22 DEC 7:20 PM</p>
                  </li>
               </ul>
            </div>
         </div>

         {/* User Table */}
         <div className="overflow-x-auto mt-8 px-4 w-full">
            <h2 className="text-2xl font-semibold mb-4 text-white text-center">User Information</h2>
            <div className="rounded-lg shadow-md w-full overflow-hidden">
               <table className="min-w-full bg-gradient-to-br from-black via-blue-900 to-black text-white">
                  <thead className="bg-blue-800">
                     <tr>
                        <th className="py-3 px-4 text-left border-b border-gray-600">Name</th>
                        <th className="py-3 px-4 text-left border-b border-gray-600">Email</th>
                        <th className="py-3 px-4 text-left border-b border-gray-600">Contact</th>
                        <th className="py-3 px-4 text-left border-b border-gray-600">Password</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((user) => (
                        <tr key={user._id} className="border-b border-gray-700 hover:bg-blue-950 transition duration-300">
                           <td className="py-3 px-4">{user.username}</td>
                           <td className="py-3 px-4">{user.email}</td>
                           <td className="py-3 px-4">{user.number}</td>
                           <td className="py-3 px-4">{user.password}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   )
}

export default GraphsPage;
