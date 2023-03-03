import React from 'react'

const TeamMember = (props) => {
  return (
    <>
      <img src={props.img} alt="member" className='mb-3' />

      <p className='bold'>{props.name}</p>
    </>

  )
}

export default TeamMember
