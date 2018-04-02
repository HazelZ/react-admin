/**
 * @author hazel (hazel@hazelz.top)
 * @date    2018-04-02 21:52:31
 */
// 箭头函数 arrow function
// 继承外层作用域,没有独立作用域  
 var obj = {
 	commenFun: function(){
 		console.log(this);
 	},
 	arrowFun: () => {
 		console.log(this)
 	}
 }
 obj.commenFun(); //this指向obj，因为commenFun()的调用者是obj
 obj.arrowFun(); //this指向obj所在作用域Window,因为arrow function没有独立作用域，是和自己的调用者obj共享作用域的

 // 不能用作构造函数 
 let Animal = function(){

 }

 let animal = new Animal();
 console.log(animal);   //返回Animal的实例

 let Animal =  () => {
 }

 let animal = new Animal()
 console.log(animal);   //Uncaught TypeError: Animal is not a constructor

 	// 没有prototype属性 
 	let commonfun = function(){

 	}
 	let arrowfun = () => {
		
	}

console.log(commonfun.prototype);  //返回constructor
console.log(arrowfun.prototype);    //undefined






