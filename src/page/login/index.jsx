import React,{ Component } from 'react';

import './index.scss';
import MUtil from 'utils/mutil';
import User from 'service/userService';

const _mutil = new MUtil();
const _user = new User();

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      redirect: _mutil.getUrlParam('redirect') || '/'
    }
  }

  componentWillMount(){
    document.title = '登录 - HazelMall';
  }

// 当用户名发生改变
  onInputChange(e){
    let inputName = e.target.name;
    let inputValue = e.target.value;
    this.setState({
      [inputName]:inputValue
    })
  }
// 按回车提交登录
  onKeyUp(e){
    // 13为enter键
    if(e.keyCode === 13){
      this.onSubmit()
    }
  }

// 提交登录
  onSubmit(){
    let loginInfo = {
        username: this.state.username,
        password: this.state.password
      },
      checkResult = _user.checkLoginInfo(loginInfo);
    // 验证通过
    if(checkResult.status){
      _user.login(loginInfo).then((res) => {
        _mutil.setStorage('userInfo',res);
        this.props.history.push(this.state.redirect);
      },(errMsg) => {
        _mutil.errorTips(errMsg);
      })
    }
    // 验证不过
    else{
      _mutil.errorTips(checkResult.msg);
    }
  }

  render(){
    return(
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default panel-login">
          <div className="panel-heading">
            <h3 className="panel-title text-center">欢迎登录 - HAZELMALL管理系统</h3>
          </div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input type="text"
                       name='username'  
                       className="form-control" 
                       placeholder="请输入用户名"
                       onKeyUp={ e => this.onKeyUp(e)}
                       onChange={ e => this.onInputChange(e)} />
              </div>
              <div className="form-group">
                <input type="password"
                       name='password' 
                       className="form-control" 
                       placeholder="请输入密码"
                       onKeyUp={ e => this.onKeyUp(e)} 
                       onChange={ e => this.onInputChange(e)}/>
              </div>
              <button className="btn btn-primary btn-block"
                      onClick={() => this.onSubmit()}>登录</button>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Login;