import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    
    </>
  )
}

export default LayoutOne