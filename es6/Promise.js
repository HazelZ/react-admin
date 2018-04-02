/**
 * @author hazel (hazel@hazelz.top)
 * @date    2018-04-02 22:23:22
 */


// Promise结构
new Promise((resolve,reject) => {
	// 异步函数
	$.ajax({
		url:'http://',
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err)
		}
	})
}).then((res)=>{
		// 成功，对应resolve
		console.log(res)
},(err) => {
		// 失败，对应reject
		console.log(err)
});


// 链式Promise
// 第一个请求接口
let p1 = new Promise((resolve,reject) => {
	$.ajax({
		url:url1,
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err)
		}
	});
});

// 第二个请求接口
let p2 = new Promise((resolve,reject) => {
	$.ajax({
		url:url2,
		type:'get',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err);
		}
	});
});

// 链式调用
p1.then(() => {   //p1 success方法
	return p2;			//返回p2
},() => {
	// 失败的处理
}).then(() => {
	// p2 success方法
})






