function shangdi(){}
shangdi.prototype.zaoren_yanjing = function(first_argument){
	console.log('眼睛');
}
shangdi.prototype.zaoren_bizi = function(first_argument){
	console.log('鼻子');
}
shangdi.prototype.zaoren_zuiba = function(first_argument){
	console.log('嘴巴');
}
shangdi.prototype.aihao = function(first_argument){
	throw new Error('我只是个钩子');
}

/*小明*/
function xiaoming(){
	console.log('小明是上帝的子类');
	shangdi.call(this);
}

xiaoming.prototype = new Shangdi();
xiaoming.prototype.aihao = function(){
	console.log('小明爱讲笑话');
}