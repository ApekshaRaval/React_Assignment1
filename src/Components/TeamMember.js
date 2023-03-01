import React from 'react'

const TeamMember = (props) => {
  return (
        <>
        <img src={props.img} alt="member"className=''/>
       
         <p className=''>{props.name}</p>
         </>
    
  )
}

export default TeamMember
