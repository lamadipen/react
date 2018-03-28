import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
 
const layout = (props) => {
	return (
		<Aux>
			<Toolbar>toolbar, sidedrawer ,backdrop</Toolbar>
			<SideDrawer/>
			<main className={classes.Container}> {props.children} </main>
		</Aux>
	);
}

export default layout;