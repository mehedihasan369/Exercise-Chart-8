import React from 'react';
import NewCard from '../NewCard/NewCard';
import './cards.css'

const Cards = () => {
    return (
        <div className='cardcompo container'>
            <h1 className='text-success'>Exercise Chart</h1>
             <h3>See todays exercise...</h3>
             <div>
                <NewCard></NewCard>
             </div>
        </div>
    );
};







export default Cards;