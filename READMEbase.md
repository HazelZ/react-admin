## 页面加载过程  
-资源加载过程：   
--url解析：协议（http/https） + 域名 + 端口 + 路径（定位资源位置）+ 参数（用来传递请求资源的特点）+ 哈希（前端页面锚点，用来标记页面位置）
--DNS查询（拿着解析到的域名，转化成IP），浏览器-----域名/IP----DNS服务器（DNS缓存，缓存有过期时间）  
------dns-prefetch: `<link rel="dns-prefetch" href="xxxx.com" />` 在页面一加载时马上去请求这些指定域名做域名查询并缓存起来，提高加载速度
--资源请求（带着所有请求信息，去IP地址上请求资源，把服务器返回的资源下载下来）  
------浏览器------>request-header+参数url或body------>后端服务器  
			浏览器------<status+response-header+body<-------后端服务器
--浏览器解析:DOM


## ES6常用语法   
- let,const   
	不能重复定义/块级作用域    
- 箭头函数   
	继承外层作用域,没有独立作用域   
	不能用作构造函数   
	没有prototype属性  
- 模板字符串  
	反引号标识``  
	支持多行字符串  
	支持字符串里嵌套变量和表达式   
- 面向对象-类		
	关键词 class
	语法糖，对应function(){}    
	构造函数 constructor  
- 类的继承:   
	extends: 子类 extends 父类
	super:子类是没有this对象的，在子类里想调用父类的方法，就需要在子类的构造方法里调用super()方法，这样就可以继承父类的this对象，子类里面可以用this来操作父类的属性和方法  
- 面向对象-对象   
  对象里属性的简写：属性和值同名，即可只写属性名  
  对象里方法的简写：同上    
  属性名可以为表达式  
  其他扩展：Object.keys(obj);Object.getOwnPropertyNames(obj);Object.assign({a:1},obj);  

- ES6模块化  
	export,import
  






















  

## 本地存储  
