import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav'

const NavBar = () => {
  return (
    <>
      <nav className='menu'>
        <div className="container">
            <div className="menu_row px-[35px] md:px-[50px] lg:px-0 flex justify-between items-center">
                <div className="menu_logo">
                    <img className='w-[200px] lg:w-[251px] h-[31px] md:h-[35px] lg:h-[44px]' src="Images/logo.png" alt="LOgo" />

                </div>
                <div className="menu_content_row">
                <div className="menu_content">
                <div className="main_menu">
                    <ul>
                        
                          <li><Link to=''>Home</Link></li>
                          <li><Link to=''>Services</Link></li>
                          <li><Link to=''>Schedule</Link></li> 
                          <li><Link to=''>Contact us</Link></li>   
                            
                            
                        
                    </ul>

                </div>
                <div className="menu_button">
                    <button>Check Status</button>

                </div>

                </div>

                </div>
                <ResponsiveNav />
                
                
            </div>
        </div>
      </nav>
    
    </>
    
  )
}

export default NavBar