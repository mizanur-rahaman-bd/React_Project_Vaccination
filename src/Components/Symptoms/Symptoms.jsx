import React from 'react'
import './Symptoms.css'

const Symptoms = () => {
  return (
    <>
    <section className='symptoms_Section'>
        <div className="container">
        <div className="text_row">
            <h3>Covid-19 Prevention</h3>
            <h2><span className='text-Brand_color'>COVID-19</span> Symptoms</h2>
            <p className='w-[296px] md:w-[553px] lg:w-[952px]'>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.</p>
            <p className='w-[296px] md:w-[553px] lg:w-[952px]'>Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
            
        </div>
        <div className="img_row">
            <img src="Images/symptoms_img.png" alt="" />
        </div>

        </div>
        

    </section>
    
    </>
  )
}

export default Symptoms