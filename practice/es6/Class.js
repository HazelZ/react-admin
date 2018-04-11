/**
 * @author hazel (hazel@hazelz.top)
 * @date    2018-04-02 23:23:27
 */
// class constructor类和构造函数的用法
// 定义一个类
class Animal{
	constructor(){
		this.name = 'tuotuo'
	}
	getName(){
		return this.name;
	}
}
// 实例化一个类
let animal = new Animal();
animal.getName();  //"tuotuo"


// 定义一个类
class Animal{
	constructor(name){
		this.name = name
	}
	getName(){
		return this.name;
	}
}

// 动态实例化一个类
let animal = new Animal("tuotuo aaa");
animal.getName();  //"tuotuo aaa"



// 类的继承
class Animal{
	constructor(){
		this.name = 'animal'
	}
	getName(){
		return this.name;
	}
}

class Cat extends Animal {
	constructor(){
		super();  //继承了父类的方法，后面就可以直接调用getName()方法而不用再写一个getName()方法了
		this.name = 'cat'
	}
}
var animal = new Animal();
var cat = new Cat();
animal.getName(); 
cat.getName(); 


// 对象的写法
// ES5
var name = 'tuotuo',
		age = 32;
var obj = {
	name:name,
	age:age,
	getName:function(){
		return this.name;
	},
	getAge:function(){
		return this.age;
	}
}


// 直接用标识符作为属性名 obj.foo = true
// 用表达式作为属性名：obj['a'+'bc'] = 123 //相当于   obj['abc'] = 123
// ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。
// var lastWord = 'last word';
//		var a = {
//		  'first word': 'hello',
//		  [lastWord]: 'world'
//		};

//		a['first word'] // "hello"
//		a[lastWord] // "world"
//		a['last word'] // "world"
//		
//表达式用来定义方法名
// let obj = {
//     ['say' + 'Something']() {
//         return 'hello word';
//     }
// };
// obj.saySomething(); // hello word
// 
// 
//		注意，属性名表达式与简洁表示法，不能同时使用，会报错。
//		注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。
//		
// ES6
let name = 'tuotuo',
		age = 32;
let obj ={
	// 变量名可以直接用作对象的属性名称
	name,
	age,
	// 对象里的方法可以简写为
	getName(){
		return this.name;
	},
	// 表达式作为属性名或者方法名
	['get' + 'Age'](){
		return this.age;
	}
}



// Object对象的扩展

Object.keys(obj); 
//返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
//在ES5里，如果此方法的参数不是对象（而是一个原始值），那么它会抛出 TypeError。在ES2015中，非对象的参数将被强制转换为一个对象。
Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)
Object.keys("foo");
// ["0", "1", "2"]                   (ES2015 code)


Object.getOwnPropertyNames(obj);
//返回一个所有元素为字符串的数组，其元素来自obj对象自身拥有的可枚举和不可枚举属性名称。 数组中枚举属性的顺序与通过 for...in 循环（或 Object.keys）迭代该对象属性时一致。数组中不可枚举属性的顺序未定义。
//在 ES5 中，如果参数不是一个原始对象类型，将抛出一个 TypeError  异常。在 ES2015 中，非对象参数被强制转换为对象 。

Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getOwnPropertyNames('foo');
// ['length', '0', '1', '2']  (ES2015 code)


Object.assign({a:1},obj); 
// 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。继承属性和不可枚举属性不能拷贝到。
// 浅拷贝，只有第一层覆盖，不会覆盖第二层第三层
//如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
//Object.assign()拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。















