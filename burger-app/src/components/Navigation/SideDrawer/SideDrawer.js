import React from 'react';
import logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [classes.sideDrawer, classes.Closed];
    if(props.open){
        attachedClasses = [classes.sideDrawer, classes.Open]
    }
    return (
        <Aux>
             <Backdrop show={props.open} clicked={props.closed}/>   
            <div className={attachedClasses.join(' ')}>
            <logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;