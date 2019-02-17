var getGuangdonCity = function(){
    var guangdongCity = [
        {
            name: 'shenzhen',
            id: 11,
        }, {
            name: 'guangzhou',
            id: 12
        }
    ]
    return guangdongCity
}

var render = function( fn ) {
    console.log('开始渲染广东地图')
    document.write(JSON.stringify(fn()))
}

render(getGuangdongCity)

// 稳定运行一段时间
// 发现数据不可靠
// 缺少很多城市
// 网上找到另外数据资源
// 这次数据资源更全面
// 但数据结构与正运行项目不一致

var guangdongCity = {
    shenzhen: 11,
    guangzhou: 12,
    zhuhai: 13
}

// 第一种方法 改写渲染页面前端代码
// 第二种方法 新增数据格式转换的适配器

var getGuangdongCity = function(){
    var guangdongCity = [
        {
            name: 'shenzhen',
            id: 11
        },
        {
            name: 'guangzhou',
            id: 12,
        }
    ]
    return guangdongCity
}

var render = function( fn ) {
    console.log('开始渲染广东省地图')
    document.write(JSON.stringify(fn()))
}

var addressAdapter = function( oldAddressfn ) {
    var address = {},
        oldAddress = oldAddressfn()

    for (var i = 0, c; c = oldAddress[i++];) {
        address[c.name] = c.id
    }

    return function(){
        return address
    }
}

render(addressAdapter(getGunagdongCity))