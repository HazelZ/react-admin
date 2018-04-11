
class MUtil{
  request(param){
    return new Promise((resolve,reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        data: param.data || null,
        success(res) {
          // 请求成功
          if( 0 === res.status){
            typeof resolve === 'function' && resolve(res.data, res.msg)
          }else if(10 === res.status){
            // 没有登录状态，强制登录
            this.doLogin()
          }else{
            typeof reject === 'function' && reject(res.msg || res.data)
          }
        },
        error(err){
          typeof reject === 'function' && reject(err.statusText); //http请求error对象里的
        }
      })
    })
  }
  // 跳转登录
  doLogin(){
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
  }
  
  // 获取Url参数
  getUrlParam(name){
    // xxx.com?param=122&param1=sdsds
    let queryString = window.location.search.slice(1),
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        result = queryString.match(reg);  
    return result ? decodeURIComponent(result[2]) : null
  }

  // 错误提示
  errorTips(errMsg){
    alert(errMsg || '好像哪里不对~')
  }
}

export default MUtil;