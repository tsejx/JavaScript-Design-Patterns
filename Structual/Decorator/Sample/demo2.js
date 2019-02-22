// ==============================
// AOP 装饰函数
// ==============================

Function.prototype.before = function(beforeFunc) {
  var that = this;
  return function() {
    beforeFunc.apply(this, arguments);
    return that.apply(this, arguments);
  };
};
Function.prototype.after = function(afterFunc) {
  var that = this;
  return function() {
    var ret = that.apply(this, arguments);
    afterFunc.apply(this, arguments);
    return ret;
  };
};

var foobar = function(x, y, z) {
  console.log(x, y, z);
};

var foo = function(x, y, z) {
  console.log(x / 10, y / 10, z / 10);
};

var bar = function(x, y, z) {
  console.log(x * 10, y * 10, z * 10);
};

foobar = foobar.before(foo).after(bar);

foobar(1, 2, 3);
// 0.1 0.2 0.3
// 1 2 3
// 10 20 30

// ==============================
// 由于原函数和装饰函数共用一个参数列表 所以我们可以用 AOP 改变函数参数
// ==============================

var data = {
  width: '100px',
  height: '100px',
};

var demo = function(data) {
  console.log(JSON.stringify(ata));
};

demo = demo.before(function(data) {
  data.color = 'red';
});

demo(data);
// {"width": "100px", "height": "100px", "color": "red"}

// ==============================
// 缺陷
// ==============================

var demo = function() {
  console.log(1);
};

demo.a = 123;

demo = demo.after(function() {
  console.log(2);
});

demo();

console.log(demo.a);

// undefined
