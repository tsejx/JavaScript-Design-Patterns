// ==============================
// 缓存函数引用 改写函数
// ==============================

// Before
var foo = function() {
  console.log('foo');
};

// After
var foo = function() {
  console.log('foo');
};

var _foo = foo;

foo = function() {
  _foo();
  console.log('bar');
};
