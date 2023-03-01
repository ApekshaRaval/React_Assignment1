import React from 'react'
import "./scss/home.scss"
import Asset1 from '../Assets/Asset 1.svg'
import Asset2 from '../Assets/Asset 2.svg'
import Asset3 from '../Assets/Assets 3.svg'
import Asset4 from '../Assets/Assets 4.svg'
import cloud from '../Assets/cloud.svg'
import ManwithSpeaker from '../Assets/ManwithSpeaker.svg'


import NavBar from './NavBar'


const Home = () => {
    return (

        <div className="home container-fluid">
            {/* header section */}
            <div className='container'>
                <img src={Asset1} className='Asset1 img-fluid' alt='Logo' />
                <img src={Asset2} className='Asset2 img-fluid' alt='Logo' />
                <NavBar />
            </div>

           {/* section 2 */}
            <div className='row'>
                <div className='col-lg-6 col-md-2'>
                <img src={cloud} className='cloud img-fluid' alt='Logo' />
                <img src={ManwithSpeaker} className='ManwithSpeaker img-fluid' alt='Logo' />
             
                </div>
                
                <div className='col-md-6 text'>
               
                    <h3 className=''>Mendleson Communication and Engagement</h3>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                </div>
                </div>
                
                <div>
                <img src={Asset3} className='Asset3 img-fluid' alt='Logo' />
                <img src={Asset4} className='Asset4 img-fluid' alt='Logo' />
                </div>
               
           

            {/* section 3 */}
          
        </div>
    )
}

export default Home
