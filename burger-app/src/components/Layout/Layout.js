import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
 
class Layout extends Component{
	state ={
		showSideDrawer: true
	}

	SideDrawerCloseHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () =>{
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer}
		});
	}
	render(){
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
				<SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler}/>
				<main className={classes.Container}> {this.props.children} </main>
			</Aux>
		);
	}
}

export default Layout;