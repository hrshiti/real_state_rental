import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Graph = () => {
  return (
    <>
    <div className='flex flex-row w-[1600px] h-[813px] bg-transparent' >
    <div className=''>
      <div className='w-2xl h-96 ml-12 mt-[-142px]  '>
        <div className='relative top-46 z-10 left-8'>
            <p className=' opacity-45 pt-4'>Welcome Back</p>
            <h3 className='text-bold text-2xl pt-4 pb-6'>Rohit Sharma</h3>
            <p className=' opacity-45'>glad to see you again</p>
            <p className=' opacity-45 '>Ask me anything</p>
            <p className=' '>Tap to record <FontAwesomeIcon icon={faArrowRight}/></p>
        </div>
        <div>

        <img src="/braden.png" alt="braden_img" className='absolute w-122'/>
        </div>
      </div>
      </div>
      <div className='absolute ml-142 mt-10 h-64  bg-gradient-to-br from-black via-blue-900 to-black text-white  '>
      <h3 className='text-bold mt-4 ml-6'>Satisfaction Rate</h3>
      <p className='opacity-45 ml-6'>From all people</p>
<img src="/Ellipse.png" alt="graph_img" className='w-56 mt-6 ml-8 h-56'/>
    
      <div className=' bg-gray-850 relative top-[-130px] left-[-10px] w-76 h-18 justify-center z-10 bg-gray-1000 items-center flex flex-row gap-14 opacity-80 '>
        <p className='opacity-45'>0%</p>
        <p className='text-bold text-2xl'>75%</p>
        <p className='opacity-45'>100%</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Graph
