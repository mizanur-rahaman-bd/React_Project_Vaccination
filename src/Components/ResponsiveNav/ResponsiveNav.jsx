import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './ResponsivNav.css'

const ResponsiveNav = () => {
  const [show, setShow] = useState(false)
  


  return (
    <>
      <section className='responsiveNav'>
      <RiMenu3Line onClick={()=> setShow(!show)} className='w-[45px] h-[45px] bg-[#C4C4C426] rounded-[10px] text-white p-[7px]' />

        {
          show&&
          <div className="resmenu">
                <div className="resmenulink">
                    <ul>
                        
                          <li><Link to=''>Home</Link></li>
                          <li><Link to=''>Services</Link></li>
                          <li><Link to=''>Schedule</Link></li> 
                          <li><Link to=''>Contact us</Link></li>   
                            
                            
                        
                    </ul>

                </div>
                <div className="resmenubutton">
                    <button>Check Status</button>

                </div>

                </div>

        }
       
      
  
      </section>
    
    </>
  )
}

export default ResponsiveNav