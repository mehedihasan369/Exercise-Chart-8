import React, { useEffect, useState } from 'react';
import './info.css'


const Info = () => {

    // const [cart,setCart] = useState ([])

    // useEffect( () =>{
    //     fetch('./data.JSON')
    //     .then(res=> res.json())
    //     .then(data => setCart(data))
    // }, []);

    // const handleAddToCart =(data) => {console.log(data)}

    

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
                  
                      <button className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>2 min</button>
                      <button className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>4 min</button>
                      <button className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>6 min</button>
                      <button className='btn btn-outline-light w-25  p-2 m-2 fw-bold'>8 min</button>
                       </div>

                       <p className='fw-bold fs-4'>Exercise Details</p>
                       

                       <div className=' border m-2'>
                       <p className='m-3'><span className='fw-bold fs-6'>Exercise time :  </span>  <span>   </span></p>
                       </div>
                       <div className=' border m-2'>
                       <p className='m-3'><span className='fw-bold fs-6'>Breaktime :  </span><span>shhzdhj</span></p>
                       </div>

                        <button className='btn btn-outline-light w-75  p-2 ms-4 m-2 fw-bold fs-6'>Activity completed</button>     

       </div>
    );
};

export default Info;