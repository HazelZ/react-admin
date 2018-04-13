import React,{ Component } from 'react';

import TopNav from 'component/_topNav/index';
import SideNav from 'component/_sideNav/index';
import './theme.scss';
import './index.scss';

class Layout extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
				<div id="wrapper">
					<TopNav />
					<SideNav />
					{this.props.children}
				</div>
			)
	}
}

export default Layout;