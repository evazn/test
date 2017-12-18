function test(a,b,c) {
    console.log(this,a,b,c);
};

var obj = {name: "leo"}
// obj.fn =test;
// obj.fn();
// test();//执行该函数，此时this表示全局global
test.call(1,2);// 调用test函数，此时this为对象1（对象类型为Number），a=2，b 无值，c 无值。
test.apply(1,[0,1,2,3]);// 调用test函数，此时this为对象1（对象类型为Number），a = 0,b = 1. c = 2。
test.bind(obj)();//  一个新的函数，与call不同之处。

f2 = function  (context) {
     var f1 = this;
 return function () {
     f1.call(context);
 };
 f3=f2();
f3();
// var fn= test.bind(obj);
// fn();
// fn("aaa");
// test.bind(obj)("aaa","bbb","ccc");



// var fn= 5;
// console.log(fn);

