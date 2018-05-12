// var j;
// //test();
// j=1000;
// test();


// function test()
// {
// 	if(false)
// 	{
// 		var i=10;

// 	}
// 	else
// 	{
// 		var t=100;
// 	}
// 	console.log(j);
// }

//code snipplet
//面试常问的问题：
// ~ 负责把函数转化为表达式
// var j=100;
// ~(function test(){
//    console.log(j);
// })();

//code snipplet
// var j=100;
// ~function test(){
//    console.log(j);
// }();

//code segment
// var j = 100;
// function test(){
// 	alert(j);//undefined
// 	//var j; //j替换了外部j
// }
// test();

var j = 100;
function test() {
	var j;
	j=10;
	var k=1000;
	//closure
	return function(){
		return k;
	}
	alert(j);
}

var t = test()();
alert(t);
