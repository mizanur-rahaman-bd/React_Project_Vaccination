import React from 'react'
import { Link } from 'react-router-dom'

const CommonButton = ({CommonButtonText}) => {

  return (
    <>
      <Link className='px-[25px] py-[16px] rounded-[20px] bg-Brand_color text-white font-montstarate font-bold text-[14px] md:text-[20px] lg:text-[24px] hover:bg-transparent border-2 border-solid border-Brand_color' to={'#'}>{CommonButtonText}</Link>
    
    </>
  )
}

export default CommonButton