import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css'

const logo = (props) =>(
    <div className={classes.Logo}>
        <img src= {burgerlogo} alt="My Burger"></img>
    </div>
);

export default logo;