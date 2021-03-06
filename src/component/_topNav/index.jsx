import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import MUtil from 'utils/mutil';
import User from 'service/userService';

const _mutil = new MUtil();
const _user = new User();

class TopNav extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: _mutil.getStorage('userInfo').username || ''
    }
  }

  //退出登录
  onLogout(){
    _user.logout().then(res => {
      _mutil.removeStorage('userInfo');
      // this.props.history.push('/login');
      window.location.href = '/login';
    }, errMsg => {
      _mutil.errorTips(errMsg);
    })
  }

	render(){
		return(
			<div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>Hazel</b>Mall</Link>
        </div>
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle"  href="javascript:;" aria-expanded="false">
                      <i className="fa fa-user fa-fw"></i> 
                      {
                        this.state.username ? 
                        <span>欢迎，{this.state.username}</span>
                        : <span>欢迎您</span>
                      }
                      <i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-user">
                    <li>
                      <a onClick={()=>{this.onLogout()}}>
                        <i className="fa fa-sign-out fa-fw"></i> 
                        <span>退出</span>
                      </a>
                    </li>
                  </ul>
                </li>
            </ul>
        </div>
			);
	}
}

export default TopNav;