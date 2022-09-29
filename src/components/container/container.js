import React from 'react';
import Cards from '../cards/cards';
import Info from '../info/info';
import './container.css'


const Container = () => {
    return (
        <div className='container1'>
             <Cards></Cards>
             <Info></Info>
        </div>
    );
};

export default Container;