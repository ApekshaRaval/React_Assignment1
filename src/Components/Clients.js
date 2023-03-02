import React from 'react'
import "./scss/Clients.scss"
import Layer1 from '../Assets/Layer1.svg'
import Layer2 from '../Assets/Layer2.svg'
import Layer3 from '../Assets/Layer3.svg'
import Layer4 from '../Assets/Layer4.svg'
import Layer5 from '../Assets/Layer55.svg'
import Layer6 from '../Assets/Layer6.svg'
import Layer7 from '../Assets/Layer7.svg'
import Layer8 from '../Assets/Layer8.svg'
import Layer9 from '../Assets/Layer9.svg'
import Asset91 from "../Assets/Assets 9 1.svg"

const Clients = () => {
  return (
    <div className='container-fluid client'>
        <img src={Asset91} className='Asset91 img-fluid' alt='Logo' />
        <div className='container'>
          <div>
        <h1 className='text-center'>OUR CLIENTS</h1>
        <hr className='style'/>
        </div>
        <div className='row space'>
        <div className='col-lg-2 col-sm-12 text-center'>
        <img src={Layer1} alt="logo" className='space' />
        </div>
        <div className='col-lg-2 col-md-12 text-center'>
        <img src={Layer2} alt="logo" className='space' />
        </div>
        <div className='col-lg-2 col-sm-12 text-center'>
        <img src={Layer3} alt="Facebook" className='space' />
        </div>
        <div className='col-lg-2 col-sm-12 text-center'>
        <img src={Layer4} alt="Facebook" className='space' />
        </div>
        <div className='col-lg-2 col-sm-12 text-center'>
        <img src={Layer5} alt="Facebook" className='space' />
        </div>
        </div>

        <div className='row space'>
        <div className='col-lg-3 col-sm-12 text-center'>
        <img src={Layer6} alt="Facebook" className='space' />
        </div>
        <div className='col-lg-3 col-sm-12 text-center'>
        <img src={Layer7} alt="Facebook" className='space' />
        </div>
        <div className='col-lg-3 col-sm-12 text-center'>
        <img src={Layer8} alt="Facebook" className='space' />
        </div>
        <div className='col-lg-3 col-sm-12 text-center'>
        <img src={Layer9} alt="Facebook" className='space' />
        </div>
       
        </div>
        </div>
    </div>
  )
}

export default Clients
