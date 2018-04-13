import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import Pagination from 'utils/pagination/index';
import PageTitle from 'component/_pageTitle/index';

import TableList from 'utils/tableList/index';
import MUtil from 'utils/mutil';
import User from 'service/userService';

const _mutil = new MUtil();
const _user = new User();

class UserList extends Component{
	constructor(props){
		super(props);
		this.state = {
			list: [],
			pageNum:1
		}
	}

	componentDidMount(){
		this._loadUserList();
	}
	
	_loadUserList(){
		_user.getUserList(this.state.pageNum).then(res =>{
			this.setState(res);
		}, (errMsg) => {
			this.setState({
				list: []
			});
			_mutil.errorTips(errMsg);
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
		let tableHeads = [
			'ID','用户名','邮箱','电话','注册时间'
		]
		return(
			<div id="page-wrapper">
				<div id="page-inner">
				<PageTitle title='用户列表'></PageTitle>
					<TableList tableHeads={tableHeads}>
          {
            this.state.list.map((user,index) => {
              return (
                <tr key={index}>
								<td>{user.id}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{new Date(user.createTime).toLocaleString()}</td>
							</tr>
              )
            })
          }
        </TableList> 
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