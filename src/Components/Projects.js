import React from 'react'
import "./scss/Project.scss"
import Project1 from "../Assets/Project1.svg"
import Project2 from "../Assets/Project2.svg"
import Project3 from "../Assets/Project3.svg"
 const image = "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

const Projects = () => {
  return (
    <div className='container-fluid project'>
      <div className='container text-center'>
        <div className='row'>
          <div className='mb-3'>
            <h2 className='text-center bold'>OUR PROJECTS</h2>
          </div>
        </div>
        <div className='row '>
          <div className='col-lg-1'></div>
          <div className='col-lg-5 m-auto '>
            <img src={Project1} onMouseOver={(e) => e.target.src = image} onMouseOut={(e) => e.target.src = Project1}alt="member" className='img-fluid' />
            
          </div>
          <div className='col-lg-5'>
            <div className='row'>
              <div className='col-md-12 p-2'>
                <img src={Project2} alt="member" className='img-fluid' />
              </div>
              <div className='col-md-12 p-2'>
                <img src={Project3} alt="member" className='img-fluid' />
              </div>
              
            </div>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>

    </div>
  )
}

export default Projects
