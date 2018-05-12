//这是一个抽象工厂模式
var XMLHttpFactory = function(){

};
XMLHttpFactory.prototype = {
    createFactory:function(){
        throw new Error('This is an abstract class');
    }
}

//派生子类
var XHRHandler = function(){
    XMLHttpFactory.call(this);
}
XHRHandler.prototype = new XMLHttpFactory();
XHRHandler.prototype.constructor = XHRHandler;

XHRHandler.prototype.createFactory = function(){
    var XMLHttp =null;
    if(window.XMLHttpRequest){
        XMLHttp = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
      XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return XMLHttp;
};

var AjaxHandler = function(){
    var XMLHttp = XHRHandler.createFactory();
}
