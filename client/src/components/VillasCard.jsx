

import { faPerson, faBed, faToilet, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const VillasCard = ({ img_src, alt_text, span1, span2, heading, icon_span, icon_span2, icon2_span, icon2_span2, onClick, onUpdate,
  onDelete,
  showActions = false, }) => {

 

  return (
    <div onClick={onClick} className="w-full max-w-[432px] bg-white rounded-lg shadow-md p-4 cursor-pointer">
      
      {/* Image Section */}
      <div >
       
          <img 

         
            src={img_src} 
            alt={alt_text} 
            className="w-screen h-[300px] object-cover rounded-br-[50px]" 
          />
         
      </div>

      {/* Text Content */}
      <div className="mt-6 px-4">
        
        {/* Tags & Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <span className="text-[15px] font-bold text-[#181d24]">{span1}</span>
          <span className="text-[15px] text-[#181d24]">{span2}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold font-[Rufina] text-[#181d24] mt-2">{heading}</h1>

        {/* Icon Section */}
        <div className="mt-4 space-y-2">
          
          {/* Row 1 */}
          <div className="flex justify-between text-sm md:text-base">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPerson} /> {icon_span}
            </span>
            <span className="flex items-center  mr-12 gap-2">
              <FontAwesomeIcon icon={faBed} /> {icon_span2}
            </span>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between text-sm md:text-base">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faRecycle} /> {icon2_span}
            </span>
            <span className="flex items-center mr-12 gap-2">
              <FontAwesomeIcon icon={faToilet} /> {icon2_span2}
            </span>
          </div>

        </div>

      </div>
      {showActions && (
          <div className="flex justify-between mt-4">
            <button onClick={onUpdate} className="  text-black px-4 py-1 rounded hover:bg-yellow-500 transition ">Update</button>
            <button onClick={onDelete} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition">Delete</button>
          </div>
        )}
    </div>
  )
}

export default VillasCard
