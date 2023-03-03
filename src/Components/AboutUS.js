import React from 'react'
import aboutUs from '../Assets/aboutUs.svg'
import Enagagementicon from '../Assets/Enagagement icon 1.svg'
import communicationIcon from '../Assets/communicationIcon.svg'
import "./scss/AboutUs.scss"

const AboutUS = () => {
  return (
    <div className='container About'>

      <div className='row'>

        <div className='col-md-6 m-auto col-sm-12'>
          <img src={aboutUs} className=' img-fluid' alt='Logo' />
        </div>

        <div className='col-md-6 m-auto col-sm-12 about1'>

          <div className='row'>
            <div className='mb-3'>
              <h1 className='bold'>ABOUT US </h1>

            </div>

            <p>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
          </div>

          <div className='row mt-3'>
            <div className='col-md-6 col-sm-12'>
              <img src={Enagagementicon} className='serviceIcon img-fluid' alt='Logo' />
              <h5 className='engagement'>ENGAGEMENT</h5>
              <p className=''>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                READ MORE</p>
            </div>
            <div className='col-md-6 col-sm-12'>
              <img src={communicationIcon} className='communicationIcon img-fluid' alt='Logo' />
              <h5 className='engagement'>COMMUNICATIONS</h5>
              <p className=''>We are award-winning leaders in communications and campaign management.
                READ MORE</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUS
