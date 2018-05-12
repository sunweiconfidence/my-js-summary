function test(){
	alert(2);
	return "me test";
}

Function.prototype.before = function(fn){
	var __self=this;
	return function(){
		//this point to 调用的函数
		//console.log(this);
		if(fn.apply(this,arguments)==false)
		{
			return false;
		}
		return __self.apply(__self,arguments);
	}
}

Function.prototype.after = function(fn){
	//after先执行本身this,在执行回调
	var __self=this;
	return function(){
		var result = __self.apply(__self,arguments);
        if(result==false){
        	return false;
        };
        fn.apply(this,arguments);
        return result;
	}
}

//默认函数执行2遍，test作为中转
//before回调和before一起送到after去

test.after(function(){
	alert(3);
}).before(function(){
	alert(1);
})();