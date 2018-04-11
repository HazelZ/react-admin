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
			pageNum:1
		}
	}

	componentDidMount(){
		this._loadUserList();
	}
	
	_loadUserList(){
		_user.getUserList(this.state.pageNum).then(res =>{
			this.setState(res)
		},err => {
			_request.errorTips(errMsg);
		})
	}

	render(){
		return(
			<div id="page-wrapper">
				<div id="page-inner">
				<PageTitle title='用户列表'></PageTitle>
					<div className="row">
						<div className="col-md-12">
							<table className="table table-striped table-bordered table-hover">
								<thead>
									<tr>
										<th>ID</th>
										<th></th>
										<th></th>
										<th></th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>123</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>123</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<Pagination current={11} total={399} onChange={(current) => console.log(current)} />
				</div>
			</div>
			)
	}
}

export default UserList;