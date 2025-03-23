import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const FilterBox = () => {
  // Define the Dropdown as an inner component
  const Dropdown = ({ label, options }) => {
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => setOpen(prev => !prev);

    return (
      <div className="relative w-full md:w-auto">
        <button
          onClick={toggleDropdown}
          className="w-full md:w-56 h-18 border-r-2 border-gray-500 pt-5 text-2xl flex justify-between items-center"
        >
          {label} <FontAwesomeIcon icon={faCaretDown} className="pr-2" />
        </button>
        {open && (
          <ul className="absolute top-full left-0 z-10 bg-white border mt-1 w-full shadow-lg">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  console.log(`Selected ${option}`);
                  setOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const clickhandle = () => {
    console.log("Search button clicked");
  };

  return (
    <div className="w-full max-w-7xl p-4 text-black bg-white rounded-b-xl 
    border-b-4 border-[#c9bdab] shadow-[0_20px_0px_0px_#181D24B8] 
    flex flex-col md:flex-row items-center justify-between mt-12 ml-16">
  
  {/* Dropdown Section */}
  <div className="flex flex-wrap gap-4 w-full md:w-auto justify-center md:justify-start">
    <Dropdown label="Italy" options={["Italy", "France", "Spain"]} />
    <Dropdown label="Select class" options={["Economy", "Business", "First Class"]} />
    <Dropdown label="2 guest" options={["1 guest", "2 guests", "3 guests"]} />
    <Dropdown label="Prize" options={["$100", "$200", "$300"]} />
  </div>

  {/* Button Section */}
  <div className="w-full sm:w-auto flex justify-center mt-4 md:mt-0">
    <button 
      onClick={clickhandle} 
      className="w-full sm:w-44 h-12 border-r-2 border-gray-500 text-xl 
          text-white bg-gray-900 px-4 py-2 btn ml-6 flex items-center justify-center gap-2"
    >
      Search <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  </div>

</div>
);
};
export default FilterBox;
