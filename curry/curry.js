// function add(num1,num2)
// {
// 	return num1,num2;
// }

// function totalAdd(num3)
// {
// 	return 50+add(1,2);
// }

// alert(totalAdd(50));

function curry(fn){
	var args = Array.prototype.slice.call(arguments,1);
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		console.log(finalArgs);
		return fn.apply(this,finalArgs);
	}
}

function add(sum1,sum2,sum3)
{
   return sum1+sum2+sum3;
}

var t = curry(add,50)(1,2);
console.log(t);
alert(t);