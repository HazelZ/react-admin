// 第一种
// modules.js 输出对象
let str = 'string';
let obj = {
	name:'tuotuo'
};
let fn = ()=>{
	console.log('2333')
}

export{
	str,
	obj,
	fn
}


// index.js
import { str, obj,fn } from './modules.js';
// 或者 自己改名str为string
import { str as string, obj,fn } from './modules.js';
// =========================================


// 第二种

// modules.js  默认输出
export default {a:1};

// index.js  foo可以自己取名
import foo from './modules.js'








