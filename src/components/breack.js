import React from 'react';

const AddBreak = (props) => { 
    const {numbers,handleAddToNumber} = props
    console.log(numbers)
//     const doubled = numbers.map((number) => number * 2);
// console.log(doubled);


    return (<button onClick={() => handleAddToNumber(numbers)} className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>{numbers}min</button> );
        
};

export default AddBreak;



{/* <button onClick className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>{doubled}min</button> */}
// onClick={() => handleAddToInfo(fullData)}