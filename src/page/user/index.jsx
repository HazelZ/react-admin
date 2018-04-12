import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import Pagination from 'utils/pagination/index';
import PageTitle from 'component/_pageTitle/index';

import MUtil from 'utils/index';
import User from 'service/userService';

const _request = new MUtil();
const _user = new User();

class UserList extends Component{
	constructor(props){
		super(props);
		this.state = {
			list: [],
			pageNum:1,
			firstLoading:true
		}
	}

	componentDidMount(){
		this._loadUserList();
	}
	
	_loadUserList(){
		_user.getUserList(this.state.pageNum).then(res =>{
			this.setState(res,() => {
				this.setState({
					firstLoading:false
				})
			});
		}, (errMsg) => {
			this.setState({
				list: []
			});
			_request.errorTips(errMsg);
		})
	}

// 页数发生变化时，传入当前选中页面，调用this._loadUserList()刷新列表
	onPageNumChange(pageNum){
		this.setState({
			pageNum
		},() => {
			this._loadUserList()
		})
	}

	render(){
		let listBody = this.state.list.map((user,index) => {
				return (
					<tr key={index}>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
						<td>{new Date(user.createTime).toLocaleString()}</td>
					</tr>
				)
			});
		let listError = (
			<tr>
				<td colSpan="5" className='text-center'>
					{this.state.firstLoading ? '正在加载数据~' : '没有找到相应的结果~'}
				</td>
			</tr>
			);
		let tableBody = this.state.list.length > 0 ? listBody : listError;

		return(
			<div id="page-wrapper">
				<div id="page-inner">
				<PageTitle title='用户列表'></PageTitle>
					<div className="row">
						<div className="col-md-12">
							<table className="table table-striped table-bordered table-hover">
								<thead>
									<tr>
										<th>用户ID</th>
										<th>用户名</th>
										<th>邮箱</th>
										<th>电话</th>
										<th>注册时间</th>
									</tr>
								</thead>
								<tbody>
									{ tableBody }							
								</tbody>
							</table>
						</div>
					</div>
					<Pagination 
						current={this.state.pageNum} 
						total={this.state.total} 
						onChange={(pageNum) => this.onPageNumChange(pageNum)} />
				</div>
			</div>
			)
	}
}

export default UserList;