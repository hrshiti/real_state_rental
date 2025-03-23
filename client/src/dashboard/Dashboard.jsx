import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { faCartArrowDown, faFile, faGlobe, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Graph from './Graph';

const Dashboard = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-br from-black via-blue-900 to-black text-white'>
            <div className='flex flex-row '>

                <div className='mt-12'>
                    <Sidebar />

                </div>
                <div>

                    <Navbar />
                <div className='w-[1600px] h-20 flex flex-row gap-6 text-white mt-8 ml-6 '>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black mt-1  '>
                        <div className='pl-12 pt-6'>
                            <p>Todays Money</p>
                            <p className='mb-6'>$53,000 <span className='text-green-700 text-12'>+55%</span></p>
                        </div>
                        <FontAwesomeIcon icon={faWallet} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black mt-1  '>
                    <div className='pl-12 pt-6'>
                            <p>Todays Money</p>
                            <p className='mb-6'>$53,000 <span className='text-green-700 text-12'>+55%</span></p>
                        </div>
                        <FontAwesomeIcon icon={faGlobe} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black mt-1  '>
                    <div className='pl-12 pt-6'>
                            <p>Todays Money</p>
                            <p className='mb-6'>$53,000 <span className='text-green-700 text-12'>+55%</span></p>
                        </div>
                        <FontAwesomeIcon icon={faFile} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-18 border-2 border-black mt-1  '>
                    <div className='pl-12 pt-6'>
                            <p>Todays Money</p>
                            <p className='mb-6'>$53,000 <span className='text-green-700 text-12'>+55%</span></p>
                        </div>
                        <FontAwesomeIcon icon={faCartArrowDown} className='text-2xl pt-4 mr-8 mb-6'/>
                    </div>
                </div>
                <div>
                    <Graph />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
