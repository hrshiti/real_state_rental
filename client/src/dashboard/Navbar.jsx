import React from 'react'
import { faBell, faHome, faSearch, faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className='w-[1254px] h-14 text-white bg-transparent flex flex-row justify-between items-center  '>
      <div className='pl-12 pt-6'>
        <p>Pages/Dashboard</p>
        <p>Dashboard</p>
        </div>
      <div className='flex flex-row justify-center items-center pt-6 gap-4 '>
        <FontAwesomeIcon icon={faSearch} className='text-xl pt-4 mr-4 mb-4'/>
        <input placeholder='type here...' type="search" name="search" id="" className='border-2'  />
        <p>sign in</p>
        <FontAwesomeIcon icon={faHome}/>
        <FontAwesomeIcon icon={faSpaghettiMonsterFlying}/>
        <FontAwesomeIcon icon={faBell}/>
      </div>
    </div>
  )
}

export default Navbar
