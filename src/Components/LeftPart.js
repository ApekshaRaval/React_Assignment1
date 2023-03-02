import React from 'react'

const LeftPart = (props) => {

    return (
        <div className='row p-4'>
            <div className='col-md-6 col-sm-12 p-2'>
                <h4 className='right'>{props.title}</h4>
                <p className='right'>{props.para}</p>
            </div>
            <div className='col-md-6 col-sm-12'>
                <img src={props.img} alt="logo" className=' img-fluid' />
            </div>


        </div>
    )
}

export default LeftPart
