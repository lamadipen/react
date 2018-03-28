import React from 'react';
import logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {

    return (
        <div className={classes.sideDrawer}>
        <logo height="11%"/>
        <nav>
            <NavigationItems/>
        </nav>
        </div>
    );
}

export default sideDrawer;