/**
 * @author hazel (hazel@hazelz.top)
 * @date    2018-04-02 22:09:48
 */

// 基本用法
let str = `
<div>
	<p>2333</p>
</div>
`;
document.querySelector('body').innerHTML = str;


// 嵌套变量
let name = 'Ada';
let str = `
<div>
	<p>hi,${name}</p>
</div>`
document.querySelector('body').innerHTML = str;

// 嵌套函数的用法
let getName = () => {
	return 'your name';
}
let str = `
<div>
	<p>${getName()}</p>
</div>
`;
document.querySelector('body').innerHTML = str;



// 循环嵌套
let names = ['ada','lili','lucy'];
let str = `
<ul>
	${
		names.map((name) => `<li>Hi,${name}</li>`).join('')
	}
</ul>
`
document.querySelector('body').innerHTML = str;








