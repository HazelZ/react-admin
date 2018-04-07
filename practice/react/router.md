## router原理：
- 历史  
- 跳转  
- 事件  


##常见的Router：
- 页面Router(浏览器路由)：刷新整个页面，重新加载或渲染，传统的模式。  
	前进：window.location.href = "http://xxx.com"  
	回退：history.back();
- Hash Router 只有路径hash值发生改变，整个页面不会刷新，兼容性好，可以模拟浏览器路由   
	window.location = '#hash';
	window.onhashchange = function(){ console.log('current hash': window.location.hash) }; 

- H5 Router js的history对象里添加的方法，在路由历史里push新的router记录，能操作整个路径，和前者相似，兼容性比前者差,onhashchange事件.只处理后退，不处理前进  
推进路由状态  
	history.pushState('name','title','/path');
替换一个状态  
 history.replaceState('name','title','/path')；
事件popstate  
 	window.onpopstate = function(){ 
	 console.log(window.location.href); //取到的是当前全路径www.xxx.com/xxx
	 console.log(window.location.pathname); //取绝对路径
	 console.log(window.location.hash); //取hash
	 console.log(window.location.search); //取从当前URL的?号开始的字符串

};    
--
window.location 对象所包含的属性
属性	描述
hash	从井号 (#) 开始的 URL（锚）
host	主机名和当前 URL 的端口号
hostname	当前 URL 的主机名
href	完整的 URL
pathname	当前 URL 的路径部分
port	当前 URL 的端口号
protocol	当前 URL 的协议
search	从问号 (?) 开始的 URL（查询部分）