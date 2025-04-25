import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { faCartArrowDown, faFile, faGlobe, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GraphsPage from './GraphsPage';
import { useDashboardOverview } from '../components/context/dashboardOverview';
import { useVillaBooked } from '../components/context/villaBooked';

const Dashboard = () => {
  const { dashboardOverview } = useDashboardOverview();
  const { villaBooked } = useVillaBooked();

  useEffect(() => {
    if (villaBooked) {
      console.log("Villa Booked Data:", villaBooked);
    }
  }, [villaBooked]);

  useEffect(() => {
    if (dashboardOverview) {
      console.log("Dashboard Overview Data:", dashboardOverview);
    }
  }, [dashboardOverview]);

  return (
    <div className="w-screen h-auto bg-gradient-to-br from-black via-blue-900 to-black overflow-hidden text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4 mt-12 lg:mt-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 w-full mt-8 lg:mt-0 lg:ml-6 px-4 sm:px-6 md:px-8">
          {/* Navbar */}
          <Navbar />

          {/* Dashboard Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Card 1: Total Bookings */}
            <div className="flex flex-row items-center gap-4 bg-gray-900 p-6 rounded-lg border-2 border-black">
              <div>
                <p>Total bookings</p>
                <p className="mb-6">{dashboardOverview[0]?.totalUsers} <span className="text-green-700 text-sm">+55%</span></p>
              </div>
              <FontAwesomeIcon icon={faWallet} className="text-2xl" />
            </div>

            {/* Card 2: Active Listings */}
            <div className="flex flex-row items-center gap-4 bg-gray-900 p-6 rounded-lg border-2 border-black">
              <div>
                <p>Active listings</p>
                <p className="mb-6">{dashboardOverview[0]?.totalBookings} <span className="text-red-700 text-sm">/250</span></p>
              </div>
              <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
            </div>

            {/* Card 3: Total Users */}
            <div className="flex flex-row items-center gap-4 bg-gray-900 p-6 rounded-lg border-2 border-black">
              <div>
                <p>Total users</p>
                <p className="mb-6">{dashboardOverview[0]?.totalRevenue} <span className="text-green-700 text-sm">+35%</span></p>
              </div>
              <FontAwesomeIcon icon={faFile} className="text-2xl" />
            </div>

            {/* Card 4: Pending Inquiries */}
            <div className="flex flex-row items-center gap-4 bg-gray-900 p-6 rounded-lg border-2 border-black">
              <div>
                <p>Pending inquiries</p>
                <p className="mb-6">{dashboardOverview[0]?.totalProperties} <span className="text-green-700 text-sm">+25%</span></p>
              </div>
              <FontAwesomeIcon icon={faCartArrowDown} className="text-2xl" />
            </div>
          </div>

          {/* Graphs Section */}
          <div className="mt-12">
            <GraphsPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
