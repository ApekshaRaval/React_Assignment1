import React from 'react'
import aboutUs from '../Assets/aboutUs.svg'
import Enagagementicon from '../Assets/Enagagement icon 1.svg'
import communicationIcon from '../Assets/communicationIcon.svg'
import "./scss/home.scss"

const AboutUS = () => {
  return (
    <div className='container'>

      <div className='row'>

        <div className='col-md-6'>
          <img src={aboutUs} className='aboutUs img-fluid' alt='Logo' />
        </div>

        <div className='col-md-6'>

          <div className='row'>
            <h1 className=''>ABOUT US </h1>
            <p>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <img src={Enagagementicon} className='serviceIcon img-fluid' alt='Logo' />
              <h5 className='engagement'>ENGAGEMENT</h5>
              <p className='engagement'>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                READ MORE</p>
            </div>
            <div className='col-md-6'>
              <img src={communicationIcon} className='communicationIcon img-fluid' alt='Logo' />
              <h5 className='comm'>COMMUNICATIONS</h5>
              <p className='comm'>We are award-winning leaders in communications and campaign management.
                READ MORE</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUS
