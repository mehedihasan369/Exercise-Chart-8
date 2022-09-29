import React, { useEffect, useState } from 'react';
import NewCard from '../NewCard/NewCard';
import './cards.css'

const Cards = () => {
  
    const [data,setData] = useState([]);

    useEffect( () =>{
        fetch('./data.JSON')
        .then(res=> res.json())
        .then(data => setData(data))
    }, []);

    return (
        <div className='cardcompo container'>
            <h1 className='text-success'>Exercise Chart</h1>
             <h3>See todays exercise...</h3>
             <div className='cards row '>
                {data.map(data => <NewCard  key={data.id} fullData={data}></NewCard>)}
               
             </div>
        </div>
    );
}







export default Cards;