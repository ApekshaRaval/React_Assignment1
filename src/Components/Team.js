import React from 'react'
import TeamMember from './TeamMember'
import Person1 from "../Assets/Person1.svg"
import Person2 from "../Assets/Person2.svg"
import Person3 from "../Assets/Person3.svg"
import "./scss/Team.scss"

const Team = () => {
  return (
    <div className='container Team'>
       

      <div className='col-12'>
        <h2 className='text-center'>OUR TEAM</h2>
      </div>

      <div className='row text-center'>
      <div className='col'>
        <TeamMember 
        img={Person1}
        name={"Jessica D'suza"} className="img"/>
         </div>
         <div className='col'>
         <TeamMember 
        img={Person2}
        name={"Johny Williams"}/>
         </div>
        
        <div className='col'>
        <TeamMember 
        img={Person3}
        name={"Sanya R"}/>
        </div>
      
     
    </div>
    </div> 
  )
}

export default Team
