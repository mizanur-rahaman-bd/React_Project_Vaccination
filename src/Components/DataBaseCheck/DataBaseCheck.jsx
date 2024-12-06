import React from 'react'
import './DataBaseCheck.css'
import { Link } from 'react-router-dom'

const DataBaseCheck = () => {
  return (
    <>
    <section className='DataBaseCheck'>
        <div className="data_base_row">
            <div className='dataBaseHeadingtext'>
                <h3>Check your COVID-19 result on our Database</h3>
            </div>
            <div className="input_section">
              <input placeholder='Okeowo' type="text" />
              <input placeholder='NIK Number' type="text" />
              <button>Check</button>
            </div>
            <div className='certificate_text'>
              <h3>Need a certificate for your COVID-19 result? Please <Link to={''}>click <span className='underline'>here</span> </Link> </h3>
            </div>

        </div>

    </section>
    
    </>
  )
}

export default DataBaseCheck