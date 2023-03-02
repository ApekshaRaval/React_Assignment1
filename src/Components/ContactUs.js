import React from 'react'
import "./scss/Footer.scss"
import facebook from '../Assets/facebook.svg'
import Google from '../Assets/Google.svg'
import linkedin from '../Assets/linkedin.svg'


const ContactUs = () => {
  return (
    <div className='container-fluid '>
      <div className='container main'>
      <div className='row contact'>

        <div className='col-md-3 col-sm-12 text-center space'>

          <span className='highlight '>Social</span>
          <br/>
          <img src={facebook} alt="Facebook" className=''/>
          <span className=''>Facebook</span>
          <br/>
          <img src={linkedin} alt="Facebook" className='' />
          <span className=''>Linkedin</span>
          <br/>
          <img src={Google} alt="Facebook" className='' />
          <span className=''>Google +</span>
        </div>


        <div className='col-md-3 col-sm-12 text-center space'>

          <span className='highlight'>Explore</span>
          <br/>        
            <span className=''>Services</span>
            <br/>
            <span className=''>Team</span>
            <br/>
            <span className=''>Clients</span>
         
        </div>


        <div className='col-md-3 col-sm-12 text-center space'>

          <span className='highlight'>Contact</span>
          <br />
          <span className=''>Lorem Ipsum dummy address</span>
          <br />
          <span className=''>used for display</span>
          <br/>
          <span className=''>1234567890</span>

        </div>

        <div className='col-md-3 col-sm-12 text-center space'>
          <span className='highlight'>Email</span>
          <br />
          <span className=''>mendlesoncommunication@email.com</span>
        </div>


      </div>
    </div>
    </div>

  )
}

export default ContactUs
