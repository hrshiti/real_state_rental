import { faArrowRight, faCaretDown, faCartPlus, faClipboardCheck, faIcons, faLineChart, faMoneyBill, faShop, faSitemap, faToggleOff, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Graph from './GraphComponents/Graph'
import Graph2 from './GraphComponents/Graph2';

const GraphsPage = () => {
  return (
    <>
      <div className='flex flex-row w-[1600px] h-[813px] bg-transparent' >
        <div className=''>
          <div className='w-2xl h-96 ml-8 mt-[-142px]  '>
            <div className='relative top-46 z-10 left-8'>
              <p className=' opacity-45 pt-4'>Welcome Back</p>
              <h3 className='text-bold text-2xl pt-4 pb-6'>Rohit Sharma</h3>
              <p className=' opacity-45'>glad to see you again</p>
              <p className=' opacity-45 '>Ask me anything</p>
              <p className=' '>Tap to record <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div>

              <img src="/braden.png" alt="braden_img" className='absolute w-109' />
            </div>
          </div>
        </div>
        <div className='absolute ml-122 mt-10 h-59  bg-gradient-to-br from-black via-blue-900 to-black text-white  '>
          <h3 className='text-bold mt-4 ml-6'>Satisfaction Rate</h3>
          <p className='opacity-45 ml-6'>From all people</p>
          <img src="/Ellipse.png" alt="graph_img" className='w-56 mt-6 ml-8 h-56' />

          <div className=' bg-gray-850 relative top-[-130px] left-[-10px] w-76 h-18 justify-center z-10 bg-gray-1000 items-center flex flex-row gap-14 opacity-80 '>
            <p className='opacity-45'>0%</p>
            <p className='text-bold text-2xl'>75%</p>
            <p className='opacity-45'>100%</p>
          </div>
        </div>
        <div>
          <div className='absolute ml-28 mt-10 h-59 w-109 flex flex-row justify-between   bg-gradient-to-br from-black via-blue-900 to-black text-white  '>
            <h3 className='text-xl font-bold p-4 '>Refferal Trackking</h3>
            <FontAwesomeIcon icon={faToggleOff} className='p-4' />
          </div>
          <div>
            <div className='bg-gray-900 absolute ml-38 mt-30 w-34 h-14 p-3 '>
              <p className='opacity-45 text-xs'>Invited</p>
              <h3>145 People</h3>
            </div>
            <div className='bg-gray-900 absolute ml-38 mt-50 w-34 h-14 p-3 ' >
              <p className='opacity-45 text-xs'>Invited</p>
              <h3>145 People</h3></div>
          </div>
          <div className='z-100 absolute'>
            <img src="/Ellipse2.png" alt="graph_img" className='w-56 mt-16 ml-78 h-56 ' />
            <div className='ml-100 mt-[-168px]'>
            <p className='opacity-45 text-xl '>Safety</p>
            <h3 className='text-4xl'>9.3</h3>
            <p className='opacity-45 text-xl'>Total Score</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className='flex flex-row w-[1600px] h-[813px] bg-transparent mt-[-550px]' >
        <div className=''>
          <div className='w-2xl ml-6 mt-[-142px]  '>
          
            <div className='w-2xl h-105 mt-44 bg-gradient-to-br from-black via-blue-900 to-black text-white '>

              
             <Graph />
             
            
            </div>
          </div>
        </div>
       
        <div>
         
          <div className='  mt-10 h-105 w-129 ml-4  bg-gradient-to-br from-black via-blue-900 to-black text-white  '>
          <h3 className='text-xl font-bold p-4 '>Revenue</h3>
            <Graph2 />
            <h3 className="text-xm font-bold pl-4">Sales Overview</h3>
            <p className="text-xs text-green-500 pl-4">(+5) more in 2021</p>
            <div className='flex flex-row gap-16 ml-4 mt-6'>
            <div>

            <p><FontAwesomeIcon icon={faUser} /><span className='ml-3'>users</span></p>
            <p className='ml-1'>32,984</p>
            </div>
            <div>

            <p><FontAwesomeIcon icon={faClipboardCheck} /><span className='ml-3'>clicks</span></p>
            <p className='ml-2' >284 m</p>
            </div>
            <div>

            <p><FontAwesomeIcon icon={faCartPlus} /><span className='ml-3'>sales</span></p>
            <p className='ml-4'>984</p>
            </div>
            <div>

            <p><FontAwesomeIcon icon={faSitemap} /><span className='ml-3'>items</span></p>
            <p className='ml-4'>32</p>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='flex flex-row w-[1600px] h-[813px] bg-transparent  mt-[-300px]' >

          <div className='  mt-10 h-145 w-200 ml-4  bg-gradient-to-br from-black via-blue-900 to-black text-white  '>
        <h3 className="text-xm font-bold pl-4">Projects</h3>
            <p className="text-xs text-green-500 pl-4">(30) done this month</p>
            <div className='border-b-2 border-gray-400'>
              <ul className='flex flex-rom justify-between p-4 items-center gap-16 ml-4 mt-6'>
                <li>COMPANIES</li>
                <li>BUDGET</li>
                <li>MEMBERS</li>
                <li>COMPELETION</li>
              </ul>
            </div>
            <div className='border-b-2 border-gray-400'>
              <ul className='flex flex-rom justify-between p-4 items-center gap-16 ml-4 mt-6 text-xs'>
                <li > <span className='mr-2' > <FontAwesomeIcon icon={faLineChart} className='text-red-500 '/></span>Nayka</li>
                <li >$145</li>
                <li className='flex flex-row mr-4'>
                <img src="/people1.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 </li>
                <li>
                <p>64%</p>
                <p></p>
                </li>
              </ul>
            </div>
             <div className='border-b-2 border-gray-400'>
              <ul className='flex flex-rom justify-between p-4 items-center gap-16 ml-4 mt-6 text-xs'>
                <li > <span className='mr-2' > <FontAwesomeIcon icon={faLineChart} className='text-red-500 '/></span>Mayntra</li>
                <li >$160</li>
                <li className='flex flex-row mr-4'>
                <img src="/people1.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 </li>
                <li>
                <p>80%</p>
                <p></p>
                </li>
              </ul>
            </div>
            <div className='border-b-2 border-gray-400'>
              <ul className='flex flex-rom justify-between  p-4 items-center gap-16 ml-4 mt-6 text-xs'>
                <li > <span className='mr-2' > <FontAwesomeIcon icon={faLineChart} className='text-red-500 '/></span>Cooper</li>
                <li >$500</li>
                <li className='flex flex-row mr-4'>
                <img src="/people1.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 </li>
                <li>
                <p>70%</p>
                <p></p>
                </li>
              </ul>
            </div>
             <div className='border-b-2 border-gray-400'>
              <ul className='flex flex-rom justify-between p-4 items-center gap-16 ml-4 mt-6 text-xs'>
                <li > <span className='mr-2' > <FontAwesomeIcon icon={faLineChart} className='text-red-500 '/></span>Nestle</li>
                <li >$40</li>
                <li className='flex flex-row mr-4'>
                <img src="/people1.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 </li>
                <li>
                <p>30%</p>
                <p></p>
                </li>
              </ul>
            </div>
             <div className='border-b-2 border-gray-400'>
              <ul className='flex flex-rom justify-between p-4 items-center gap-16 ml-4 mt-6 text-xs'>
                <li > <span className='mr-2' > <FontAwesomeIcon icon={faLineChart} className='text-red-500 '/></span>Funky</li>
                <li >$1400</li>
                <li className='flex flex-row mr-4'>
                <img src="/people1.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 <img src="/people2.png" alt="people" className='h-4 w-4 rounded-2xl' />
                 </li>
                <li>
                <p>90%</p>
                <p></p>
                </li>
              </ul>
            </div>
           
            
   
        </div>
          <div className='  mt-10 h-145 w-90 ml-4  bg-gradient-to-br from-black via-blue-900 to-black text-white p-4 '>
      
        
        <h3 className="text-xl font-bold pl-4">Orders Overviews</h3>
            <p className="text-xm text-green-500 pl-4">(30%) done this month</p>
           
            <div >
              <ul className='flex flex-col text-xm  items-left gap-6 p-4 pt-8'>
                <li >
                   <span className='mr-2' > <FontAwesomeIcon icon={faLineChart} className='text-green-500 '/></span>
                   <span> $2400, Design changes</span>
                   <p>22 DEC 7:20 PM</p>
                 
                   </li>
                <li >   <span className='mr-2' > <FontAwesomeIcon icon={faIcons} className='text-green-500 '/></span>
                   <span> New order #4219423</span>
                   <p>22 DEC 7:20 PM</p></li>
                <li >   <span className='mr-2' > <FontAwesomeIcon icon={faCaretDown} className='text-green-500 '/></span>
                   <span> Server Payments for April</span>
                   <p>22 DEC 7:20 PM</p></li>
                <li >   <span className='mr-2' > <FontAwesomeIcon icon={faShop} className='text-green-500 '/></span>
                   <span> Server Payments for April</span>
                   <p>22 DEC 7:20 PM</p></li>
                <li >   <span className='mr-2' > <FontAwesomeIcon icon={faMoneyBill} className='text-green-500 '/></span>
                   <span> Unlock packages for Development</span>
                   <p>22 DEC 7:20 PM</p></li>
              
              </ul>
            </div>
            
     
        </div>
        
   
      </div>
    </>
  )
}

export default GraphsPage
