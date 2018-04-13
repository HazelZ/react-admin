import React,{ Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import PageTitle from 'component/_pageTitle/index';
import './index.scss';

import MUtil from 'utils/mutil';
import Statistic from 'service/statisticService';
const mutil = new MUtil();
const _statistic = new Statistic();

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			userCount: '-',
			productCount: '-',
			orderCount: '-',
		}
	}

// 避免接口还没请求到时没有数据就会报错，所以didmount比较保险
	componentDidMount(){
		this._loadCount()
	}

	_loadCount(){
		_statistic.getHomeCount().then(res => {
			this.setState(res);
		}, err => {
			mutil.errorTips(srrMsg);
		})
	}

	render(){
		return(
			<div id="page-wrapper">
				<div id="page-inner">
					<PageTitle title="首页" />
					<div className="row">
						<div className="col-md-4 col-sm-12 col-xs-12 text-center mb-20">
							<Link to='/user' className='color-box green'>
								<p className="count">{this.state.userCount}</p>
								<p className="desc">
									<i className="fa fa-user-o"></i>
									<span>用户总数</span>
								</p>
							</Link>
						</div>
						<div className="col-md-4 col-sm-12 col-xs-12 text-center mb-20">
							<Link to='/product' className='color-box brown'>
								<p className="count">{this.state.productCount}</p>
								<p className="desc">
									<i className="fa fa-list"></i>
									<span>商品总数</span>
								</p>
							</Link>
						</div>
						<div className="col-md-4 col-sm-12 col-xs-12 text-center mb-20">
							<Link to='/order' className='color-box red'>
								<p className="count">{this.state.orderCount}</p>
								<p className="desc">
									<i className="fa fa-check-square-o"></i>
									<span>订单总数</span>
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Home;