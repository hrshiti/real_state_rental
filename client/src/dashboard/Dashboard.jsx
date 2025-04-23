import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { faCartArrowDown, faFile, faGlobe, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GraphsPage from './GraphsPage';
import { useDashboardOverview } from '../components/context/dashboardOverview';
import { useVillaBooked } from '../components/context/villaBooked';


const Dashboard = () => {
const {dashboardOverview} = useDashboardOverview()
const {villaBooked} = useVillaBooked()

// Log the villa booked data when it changes
useEffect(() => {
    if (villaBooked) {
        console.log("Villa Booked Data:", villaBooked);
    }
}, [villaBooked]);
  // Log the dashboard overview data when it changes

useEffect(() => {
    if (dashboardOverview) {
      console.log("Dashboard Overview Data:", dashboardOverview);
    }
  }, [dashboardOverview]);
    return (
        <div className='w-screen h-auto bg-gradient-to-br from-black via-blue-900 to-black overflow-hidden  text-white'>
            <div className='flex flex-row '>

                <div className='mt-12'>
                    <Sidebar />

                </div>
                <div>

                    <Navbar />
                <div className='w-[1600px] h-20 flex flex-row gap-6 text-white mt-8 ml-6 '>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black  bg-gray-900 mt-1  '>
                        <div className='pl-12 pt-6'>
                            <p>Total bookings</p>
                            <p className='mb-6'>{dashboardOverview[0]?.totalUsers} <span className='text-green-700 text-12'>+55%</span></p>
                        </div>
                        <FontAwesomeIcon icon={faWallet} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black  bg-gray-900 mt-1  '>
                    <div className='pl-12 pt-6'>
                            <p>Active listings</p>
                            <p className='mb-6'>{dashboardOverview[0]?.totalBookings} <span className='text-red-700 text-12'>/250</span></p>
                        </div>
                        <FontAwesomeIcon icon={faGlobe} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black  bg-gray-900 mt-1  '>
                    <div className='pl-12 pt-6'>
                            <p>Total users</p>
                            <p className='mb-6'>{dashboardOverview[0]?.totalRevenue} <span className='text-green-700 text-12'>+35%</span></p>
                        </div>
                        <FontAwesomeIcon icon={faFile} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black  bg-gray-900 mt-1  '>
                    <div className='pl-12 pt-6'>
                            <p>Pending inquiries</p>
                            <p className='mb-6'>{dashboardOverview[0]?.totalProperties} <span className='text-green-700 text-12'>+25%</span></p>
                        </div>
                        <FontAwesomeIcon icon={faCartArrowDown} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                </div>
                <div>
                    <GraphsPage />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
