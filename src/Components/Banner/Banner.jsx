import React from 'react'
import './Banner.css'
import CommonButton from '../Common/CommonButton'

const Banner = () => {
  return (
    <>
    <section className='banner'>
      <div className="container">
      <div className="banner_row">
        <div className="text_img_row lg:flex lg:justify-between">
          <div className="banner_text_col">
            <h2>Get Vaccinated. Boost your Immune System</h2>
            <h1>COVID-19 Vaccination
                Got Easier With, </h1>
                <span className='text-Brand_color font-montstarate font-extrabold text-[24px] md:text-[36px] lg:text-[48px] mb-[20px] md:mb-[40px] lg:mb-[50px]'>Vaccination.ng</span>
                <p>Vaccination.ng will help you find the nearest
                centre for vaccination, in all 36 states in Nigeria.</p>
                <div className='banner_button mb-[50px] md:mb[55px] lg:mb-0 flex gap-[20px]'>
                  <CommonButton CommonButtonText={'Get Vaccine'} />
                  <CommonButton CommonButtonText={'Help Centre'} />
                </div>

          </div>
          <div className="banner_img_col">
            <img src="Images/banner.png" alt="banner" />

          </div>

        </div>
        <div className="schedule_row">

        </div>

      </div>

      </div>
      

    </section>
    
    </>
  )
}

export default Banner