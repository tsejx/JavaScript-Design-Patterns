import Plane from './src/Plane'
import MissileDecorator from './src/MissileDecorator'

// 形成装饰链（聚合对象）
// 当函数执行时，会把请求转给链中的下一个对象
var plane = new Plane()

plane = new MissileDecorator(plane)

plane.fire()