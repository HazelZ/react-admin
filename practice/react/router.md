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


### window.location 对象所包含的属性  
属性	描述  
hash	从井号 (#) 开始的 URL（锚）  
host	主机名和当前 URL 的端口号  
hostname	当前 URL 的主机名  
href	完整的 URL  
pathname	当前 URL 的路径部分  
port	当前 URL 的端口号  
protocol	当前 URL 的协议  
search	从问号 (?) 开始的 URL（查询部分）  

## SPA原理  
- hash  
  window.location.hash='xxx'   //改变hash  
  window.addEventListener('hashchange',fun)    //监听hash的改变  
- url  
	history.pushState(obj,title,'/url')    //改变url  
	window.addEventListener('popstate',fun)   //当浏览器前进后退时，触发该事件   


### React-router-4  
- Router
- Router是一个外层，最后render的是它的子组件，不渲染具体业务组件。  
- 分为HashRouter(通过改变hash)、BrowserRouter(通过该表url)、MemoryRouter  
- Router负责选取哪种方式作为单页应用的方案，hash或browser或其他的，把HashRouter换成BrowserRouter，代码可以继续运行  
- Router的props中有一个history对象，history是对window.history的封装，history负责管理与浏览器历史记录的交互，history会作为childContext里的一个属性传下去  

- Route  
- 负责渲染具体的业务组件，负责匹配url和对应的组件  
- 有三种渲染组件的方式：component(对应的组件),render(是一个函数，函数里渲染组件),children(无论哪种路由都会渲染)  
	<Route component>  
 	<Route render>  
  <Route children>  

- Switch  
- 匹配到一个Route子组件就返回不再继续匹配其他组件 

- Link 
- 跳转路由时的组件，调用history.push改变url  

- <BrowserRouter>  
  使用HTML5历史记录API（pushState，replaceState和popstate事件）的<Router>来保持您的UI与URL同步。  
- <HashRouter>  
  使用URL的哈希部分（即window.location.hash）的<Router>来保持您的UI与URL同步。  
  重要的提示：Hash history不支持location.key或location.state。在以前的版本中，我们试图减少行为，但是有一些边缘案例我们无法解决。 
  任何需要此行为的代码或插件将无法正常工作。由于此技术仅用于支持旧版浏览器，因此我们建议您将服务器配置为使用<BrowserHistory>。  
- <Prompt>

- <MemoryRouter>  
将“URL”的历史记录保存在内存中（不读取或写入地址栏）的<路由器>。在测试和非浏览器环境（如React Native）中很有用  
- <Redirect>  
渲染<Redirect>将导航到新位置。新位置将覆盖历史堆栈中的当前位置，如服务器端重定向（HTTP 3xx）  

- <StaticRouter>  
一个从不改变位置的<Router>。当用户实际上没有点击时，这在服务器端渲染场景中很有用，因此该位置从未实际改变。因此，名称：static。当您只需插入一个位置并在渲染输出上作出断言时，它也可用于简单的测试。以下是一个示例节点服务器，为<Redirect>发送302状态代码，并为其他请求发送常规HTML







## 应用场景
- 状态提升：组件层级扁平，兄弟组件通信情况很少
- 发布订阅：业务规模小，层级较深的业务
- redux单向数据流:业务复杂，组件层级较深，保存数据多，兄弟组件通信密切





















