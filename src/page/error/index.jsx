import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'component/_pageTitle/index';

class Error extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="page-wrapper">
				<div id="page-inner">
					<PageTitle title='出错啦！~'/>
					<div className="row">
						<div className="col-md-12">
						<span>找不到该路径，</span>
						<Link to='/'>点我返回首页</Link>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Error;