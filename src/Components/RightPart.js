import React from 'react'

const RightPart = (props) => {
  return (
    <div className='row'>
  
    <div className='col-md-6 col-sm-12'>
        <img src={props.img} alt="logo" className='img-fluid' />
    </div>
    <div className='col-md-6 col-sm-12'>
        <h4 className=''>{props.title}</h4>
        <p className=''>{props.para}</p>
    </div>

</div>
  )
}

export default RightPart
