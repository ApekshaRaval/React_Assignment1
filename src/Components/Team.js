import React from 'react'
import TeamMember from './TeamMember'
import Person1 from "../Assets/Person1.svg"
import Person2 from "../Assets/Person2.svg"
import Person3 from "../Assets/Person3.svg"
import "./scss/Team.scss"
import Asset52 from "../Assets/Asset 5 2.svg"
import Asset83 from "../Assets/Asset 8 3.svg"


const Team = () => {
  return (
    <div className='container-fluid Team '>
      <img src={Asset52} className='Asset52 img-fluid' alt='Logo' />
      <img src={Asset83} className='Asset83 img-fluid' alt='Logo' />

      <div className='container '>

        <div className='col-12 mb-4'>
          <h2 className='text-center bold'>OUR TEAM</h2>
        </div>

        <div className='row text-center'>
          <div className='col'>
            <TeamMember
              img={Person1}
              name={"Jessica D'suza"} className="img" />
          </div>
          <div className='col'>
            <TeamMember
              img={Person2}
              name={"Johny Williams"} />
          </div>

          <div className='col'>
            <TeamMember
              img={Person3}
              name={"Sanya R"} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team
