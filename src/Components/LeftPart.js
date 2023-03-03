import React from 'react'

const LeftPart = (props) => {

    return (
        <div className='row p-4'>
            <div className='col-md-6 col-sm-12  m-auto'>
                <h4 className='right bold mb-4'>{props.title}</h4>
                <p className='right'>{props.para}</p>
            </div>
            <div className='col-md-6 col-sm-12'>
                <img src={props.img} alt="logo" className=' img-fluid' />
            </div>


        </div>
    )
}

export default LeftPart
