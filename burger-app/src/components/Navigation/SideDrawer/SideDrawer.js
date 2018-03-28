import React from 'react';
import logo from '../../logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {

    return (
        <div className={classes.sideDrawer}>
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>
        </div>
    );
}

export default sideDrawer;