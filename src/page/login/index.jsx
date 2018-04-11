import React,{ Component } from 'react';

import './index.scss'
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }

  onInputChange(e){
    let inputName = e.target.name;
    let inputValue = e.target.value;
    console.log(inputName,inputValue);
    this.setState({
      inputName:inputValue
    })
  }

  onSubmit(){
    
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
                       onChange={ e => this.onInputChange(e)} />
              </div>
              <div className="form-group">
                <input type="password"
                       name='password' 
                       className="form-control" 
                       placeholder="请输入密码" 
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