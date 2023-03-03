import React from 'react'
import "./scss/Clients.scss"
import Layer1 from '../Assets/Layer1.svg'
import Layer19 from '../Assets/Layer19.svg'
import Layer2 from '../Assets/Layer2.svg'
import Layer20 from '../Assets/Layer20.svg'
import Layer3 from '../Assets/Layer3.svg'
import Layer21 from '../Assets/Layer21.svg'
import Layer4 from '../Assets/Layer4.svg'
import Layer22 from '../Assets/Layer22.svg'
import Layer5 from '../Assets/Layer55.svg'
import Layer23 from '../Assets/Layer23.svg'
import Layer24 from '../Assets/Layer24.svg'
import Layer6 from '../Assets/Layer6.svg'
import Layer25 from '../Assets/Layer25.svg'
import Layer7 from '../Assets/Layer7.svg'
import Layer26 from '../Assets/Layer.svg'
import Layer8 from '../Assets/Layer8.svg'
import Layer27 from '../Assets/Layer27.svg'
import Layer9 from '../Assets/Layer9.svg'
import Asset91 from "../Assets/Assets 9 1.svg"

const Clients = () => {

  return (
    <div className='container-fluid client'>
      <img src={Asset91} className='Asset91 img-fluid' alt='Logo' />
      <div className='container'>
        <div className='mb-4'>
          <h1 className='text-center bold'>OUR CLIENTS</h1>
          <hr className='style' />
        </div>
        <div className='row space base'>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img src={Layer19} onMouseOver={(e) => e.target.src = Layer1} onMouseOut={(e) => e.target.src = Layer19} alt="logo" className='space' />
          </div>
          <div className='col-lg-2 col-md-12 text-center'>
            <img src={Layer2} onMouseOver={(e) => e.target.src = Layer20} onMouseOut={(e) => e.target.src = Layer2} alt="logo" className='space' />
          </div>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img src={Layer3} onMouseOver={(e) => e.target.src = Layer21} onMouseOut={(e) => e.target.src = Layer3} alt="Facebook" className='space' />
          </div>
          <div className='col-lg-2 col-sm-12 text-center'>
            <img src={Layer4} onMouseOver={(e) => e.target.src = Layer22} onMouseOut={(e) => e.target.src = Layer4} alt="Facebook" className='space' />
          </div>
          <div className='col-lg-2 col-sm-12 text-center'>
            <img src={Layer5} onMouseOver={(e) => e.target.src = Layer23} onMouseOut={(e) => e.target.src = Layer5} alt="Facebook" className='space' />
          </div>
        </div>

        <div className='row space base'>
          <div className='col-lg-3 col-sm-12 text-center '>
            <img src={Layer6} onMouseOver={(e) => e.target.src = Layer24} onMouseOut={(e) => e.target.src = Layer6} alt="Facebook" className='space' />
          </div>
          <div className='col-lg-3 col-sm-12 text-center '>
            <img src={Layer7} onMouseOver={(e) => e.target.src = Layer25} onMouseOut={(e) => e.target.src = Layer7} alt="Facebook" className='space image' />
          </div>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img src={Layer8} onMouseOver={(e) => e.target.src = Layer26} onMouseOut={(e) => e.target.src = Layer8} alt="Facebook" className='space img2' />
          </div>
          <div className='col-lg-3 col-sm-12 text-center'>
            <img src={Layer9} onMouseOver={(e) => e.target.src = Layer27} onMouseOut={(e) => e.target.src = Layer9} alt="Facebook" className='space img2' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Clients
