import React from 'react'
import Project1 from "../Assets/Project1.svg"
import Project2 from "../Assets/Project2.svg"
import Project3 from "../Assets/Project3.svg"

const Projects = () => {
  return (
    <div className='container'>
       <div className='row'>
        <div>
        <h2 className='text-center'>OUR PROJECTS</h2>
        </div>
        </div>
       <div className='row'>
            <div className='col-lg-6'>
            <img src={Project1} alt="member"className='p-2 m-2'/>
            </div>
            <div className='col-lg-6'>
                <div>
                <img src={Project2} alt="member"className='p-2 m-2'/>
                </div>
                <div>
                <img src={Project3} alt="member"className='p-2 m-2'/>
                </div>
            </div>
            </div>
      
    </div>
  )
}

export default Projects
