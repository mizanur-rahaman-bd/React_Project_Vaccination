import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import ResponsiveNav from '../ResponsiveNav/ResponsiveNav'

const NavBar = () => {
  return (
    <>
      <nav className='menu'>
        <div className="container">
            <div className="menu_row flex justify-between items-center">
                <div className="menu_logo">
                    <img src="Images/logo.png" alt="LOgo" />

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