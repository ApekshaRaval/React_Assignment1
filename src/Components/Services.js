import React from 'react'
import "./scss/Services.scss"
import Engagementvector from "../Assets/Engagement vector .svg"
import Coominucationvector from "../Assets/Coominucation vector 1.svg"
import facilationvector from "../Assets/facilation vector 1.svg"
import Consultationvector from "../Assets/Consultation vector 1.svg"
import Trainingvector from "../Assets/Training and vector 1.svg"
import Asset5 from "../Assets/Asset 5 1.svg"
import LeftSec from './LeftPart'
import RightPart from './RightPart'
import LeftPart from './LeftPart'
const Services = () => {
  return (
    <div className="container-fluid row">
        <div className='col-md-12'>
       <div className=''> 
        {/* <img src={Asset5} className='Asset5 img-fluid' alt='Logo' /> */}
        <h1 className=' text-center'>SERVICES</h1>
        </div>
        </div>
        <div className='col-sm-12'>
        <LeftPart 
        img={Engagementvector}
         title={"ENGAGEMENT"}
         para={"We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."}
         />

         <RightPart
         img={Coominucationvector }
         title={"COMMUNICATIONS"}
         para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "}
         />

            <LeftPart 
        img={facilationvector }
         title={"FACILITATION"}
         para={"We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."}
         />

         <RightPart
         img={Consultationvector }
         title={"CONSULTATION AND RESEARCH"}
         para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.  "}
         />
       
       <LeftSec 
        img={Trainingvector}
         title={"TRANING & MENTORING"}
         para={"We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."}
         />
</div>
       </div>
  )
}

export default Services
