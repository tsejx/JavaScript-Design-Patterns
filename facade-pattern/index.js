function addEvent(dom, type, fn){
    // 对于支持 DOM2 级事件处理程序 addEventListener 方法的浏览器
    if (dom.addEventListener){
        dom.addEventListener(type, fn, false)
    } else if (dom.attachEvent) {
        // 对于不支持 addEventListener 方法但支持 attachEvent 方法的浏览器
        dom.attachEvent('on' + type, fn)
    } else {
        // 对于不支持 addEventListener 方法也不支持 attachEvent 方法，但支持 on + '事件名'的浏览器
        dom['on' + type] = fn
    }
}