import React from 'react'

const RightPart = (props) => {
  return (
    <div className='row p-4'>
  
    <div className='col-md-6 col-sm-12'>
        <img src={props.img} alt="logo" className='img-fluid' />
    </div>
    <div className='col-md-6 col-sm-12'>
        <h4 className='left'>{props.title}</h4>
        <p className='left'>{props.para}</p>
    </div>

</div>
  )
}

export default RightPart
