
// 查看cookie
document.cookie;

// 添加cookie
document.cookie ='name=tuotuo;domain=xxx.com;path=/index.html;expires=一个时间字符串';

// 修改cookie
document.cookie ='name=tuotuo2;domain=xxx.com;path=/index.html';

// 删除cookie
document.cookie ='name=tuotuo2;domain=xxx.com;path=/index.html;expires=0或者较早时间';


// 添加localStorage 
window.localStorage.setItem('name','tuotuo');

// 当值是一个对象时
window.localStorage.setItem('name',{name:'tuotuo'});
window.localStorage.getItem('name');   //返回[object Object]，因为把对象值默认调用了toString()方法

// 正确用法
window.localStorage.setItem('name',JSON.stringify({name:'tuotuo'});
window.localStorage.getItem('name');  //{'name':'tuotuo'}

// 查看localStorage 
window.localStorage.getItem('name');

// 删除localStorage 
window.localStorage.removeItem('name');

