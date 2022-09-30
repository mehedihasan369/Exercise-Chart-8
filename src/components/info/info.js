import React, { useEffect, useState } from 'react';
import AddBreak from '../breack';
import './info.css'


const Info = (props) => {

    

    const { cart } = props;
    console.log(cart);

    let total = 0;
    for(const data of cart){
        
        total = total + data.time ;
    }

    const [number, setNum] = useState([]);
    const numbers = [2, 4,8,10];
    

    // useEffect( () =>{
    //     fetch('[2, 4,8,10]')
    //     .then(res=> res.json())
    //     .then(numbers => setNum(numbers))
    // }, []);
    

    
    // console.log(numbers[0])

    const handleAddToNumber = (abc) =>{
        console.log( abc);
        const newNumber = [...numbers,abc];
        setNum(newNumber)
        
    }

    
    let timeTotal = 0
    for(const number of numbers){
        
        timeTotal = timeTotal +number
    }
        
   

        
   

        
    

   
       
    
   
 
    return (
        <div className='info  text-light w-25 p-2'>
           <div className='p-3'>
           <h5 >Mehedi Hasan</h5>
            <p>Dhaka,Bangladesh</p>
           </div>

           <div className='d-flex border m-3'>
            <div className='p-3 w-25 '>
                <p><span className='fw-bold fs-4'>75</span>Kg</p>
                <p >Weight</p>
            </div>
            <div className='p-3 w-25'>
                <p><span className='fw-bold fs-4'>6.5</span></p>
                <p>Height</p>
            </div>
            <div className='p-3 w-25'>
                <p><span className='fw-bold fs-4'>25</span>years</p>
                <p >Age</p>
            </div>

           </div>

           <p className='fw-bold fs-4'>Add a break</p>

           <div className='d-flex border m-3'>
           {/* <button onClick={() => handleAddToNumber(numbers[0])}  className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>{numbers[0]}min</button> */}
           {/* numbers.map(<button onClick={() => handleAddToNumber()}  className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>{numbers[1]}min</button> */}
           
                {numbers.map(numbers => <AddBreak numbers={numbers}  handleAddToNumber={handleAddToNumber}></AddBreak>)}
                </div>

                  {/* <AddBreak className='d-flex border m-3' ></AddBreak>
                        */}

                       <p className='fw-bold fs-4'>Exercise Details</p>
                       

                       <div className=' border m-2'>
                       <p className='m-3'><span className='fw-bold fs-6'>Exercise time :  </span>  <span> {total}  </span></p>
                       </div>
                       <div className=' border m-2'>
                       <p className='m-3'><span className='fw-bold fs-6'>Breaktime :  </span><span number={number}>{timeTotal}</span></p>
                       </div>

                        <button className='btn btn-outline-light w-75  p-2 ms-4 m-2 fw-bold fs-6'>Activity completed</button>     

       </div>
    );
};

export default Info;