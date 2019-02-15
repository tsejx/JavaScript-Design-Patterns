// ========== 命名空间 ==========
var methods = {
    getNumber: function() {
        return 123
    },
    getStrings: function() {
        return 'Hello world!'
    },
    getMore: function() {
        return this.getStrings()
    }
}

console.log(methods.getNumber())
console.log(methods.getMore())

// ========== 无法修改的静态变量 ==========

var conf = (function(){
    // 私有变量
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 1,
        COUNT: 1000
    }
    // 返回取值器对象
    return {
        // 取值器方法
        get: function(name) {
            return conf[name] ? conf[name] : null;
        }
    }
})()

// ========== 惰性单例 ==========
var LazySingle = (function(){
    // 单例实例引用
    var _instance = null;
    // 单例
    function Single(){
        // 这里定义私有属性和方法
        return {
            publicMethod: function(){},
            publicProperty: '1.0'
        }
    }
    // 获取单例对象接口
    return function(){
        // 如果为创建单例将创建单例
        if (!_instance) {
            _instance = Single()
        }
        // 返回单例
        return _instance
    }
})()