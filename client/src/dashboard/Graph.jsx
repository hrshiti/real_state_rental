import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Graph = () => {
  return (
    <div className='w-[1600px] h-[813px] bg-transparent'>
      <div className='w-2xl h-96 ml-12 mt-[-142px]  '>
        <div className='relative top-46 z-10 left-8'>
            <p className=' opacity-45 pt-4'>Welcome Back</p>
            <h3 className='text-bold text-2xl pt-4 pb-6'>Rohit Sharma</h3>
            <p className=' opacity-45'>glad to see you again</p>
            <p className=' opacity-45 '>Ask me anything</p>
            <p className=' '>Tap to record <FontAwesomeIcon icon={faArrowRight}/></p>
        </div>
        <div>

        <img src="/braden.png" alt="braden_img" className='absolute w-142'/>
        </div>
      </div>
      <h3 className='text-bold'>Satisfaction Rate</h3>
      <p className='opacity-45'>From all people</p>
      <div className=' bg-gray-950  '>
        <p className='opacity-45'>0%</p>
        <p className='text-bold text-2xl'>75%</p>
        <p className='opacity-45'>100%</p>
      </div>
    </div>
  )
}

export default Graph
