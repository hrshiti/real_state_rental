import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const FilterBox = () => {
const [filterData, setFilterData] = useState({
locations:[],
classes:[],
guests:[],
prizes:[]
});
const [selectedLocation, setSelectedLocation] = useState("Select Location");
const [selectedClass, setSelectedClass] = useState("Select Class");
const [selectedGuest, setSelectedGuest] = useState("Select Guest");
const [selectedPrize, setSelectedPrize] = useState("Select Prize");
useEffect(() => {
const fetchFilterData = async ()=>{
  try {
    const response = await fetch("https://real-state-backend-uvau.onrender.com/filterGetdata")
    const data = await response.json()
    console.log("API Response:", data);
    if(response.ok){
      if(data.msg.length>0){
        setFilterData(data.msg[0])
        console.log("Extracted Filter Data:", data.msg[0]); 
      }
    }
    else{
      console.error("failed to fetch filterData ", data.msg)
    }

  } catch (error) {
    console.error("error fetching filter data ",error)
  }
}
fetchFilterData()
},[])
  // Define the Dropdown as an inner component
  const Dropdown = ({ selectedValue, setSelectedValue, options }) => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen((prev) => !prev);

    return (
      <div className="relative w-full md:w-auto">
        <button
          onClick={toggleDropdown}
          className="w-full md:w-56 h-18 border-r-2 border-gray-500 pt-5 text-2xl flex justify-between items-center"
        >
          {selectedValue} <FontAwesomeIcon icon={faCaretDown} className="pr-2" />
        </button>
        {open && (
          <ul className="absolute top-full left-0 z-10 bg-white border mt-1 w-full shadow-lg">
            {options.length > 0 ? (
              options.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedValue(option); // ✅ Update selected value
                    setOpen(false); // ✅ Close dropdown after selection
                  }}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No options available</li>
            )}
          </ul>
        )}
      </div>
    );
  };

  const clickhandle = () => {
    console.log("Search button clicked");
  };

  return (
    <div className="w-full max-w-7xl p-4 text-black bg-white 
     
    border-b-4 border-[#c9bdab] shadow-[0_20px_0px_0px_#181D24B8] 
    flex flex-col md:flex-row items-center justify-between mt-12 ml-16">
  
  {/* Dropdown Section */}
  <div className="flex flex-wrap gap-4 w-full md:w-auto justify-center md:justify-start">
  <Dropdown
          label="Location"
          options={filterData.locations}
          selectedValue={selectedLocation}
          setSelectedValue={setSelectedLocation}
        />
        <Dropdown
          label="Class"
          options={filterData.classes}
          selectedValue={selectedClass}
          setSelectedValue={setSelectedClass}
        />
        <Dropdown
          label="Guest"
          options={filterData.guests}
          selectedValue={selectedGuest}
          setSelectedValue={setSelectedGuest}
        />
        <Dropdown
          label="Prize"
          options={filterData.prizes}
          selectedValue={selectedPrize}
          setSelectedValue={setSelectedPrize}
        />
  </div>

  {/* Button Section */}
  <div className="w-full sm:w-auto flex justify-center mt-4 md:mt-0">
    <NavLink to="/villas">  
    <button 
      onClick={clickhandle} 
      className="w-full sm:w-44 h-12 border-r-2 border-gray-500 text-xl 
          text-white bg-gray-900 px-4 py-2 btn ml-6 flex items-center justify-center gap-2"
    >
      Search <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
    </NavLink>
  </div>

</div>
);
};
export default FilterBox;
