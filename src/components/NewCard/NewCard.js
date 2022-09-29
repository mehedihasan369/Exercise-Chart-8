import React from 'react';
import './NewCard.css'
const NewCard = (props) => {
    const {name,img , time} = props.fullData
    return (
        <div className='img-bg   col-3  m-1 p-2'>
            <img src={img} alt="" className='w-100 h-75' />
            <div className='w-100 h-50'>
            <p className='fs-5 fw-bold'>{name}</p>
            <p className=''>Time required : {time} minutes</p>
            
            </div>
            <button className='btn btn-outline-success text-dark fw-bold '>Add to list</button>

        </div>
    );
};

export default NewCard;