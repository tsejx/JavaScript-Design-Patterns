import MallardDuck from './MallardDuck';
import WildTurkey from './WildTurkey';
import TurkeyAdapter from './TurkeyAdapater';

let mallardDuck = new MallardDuck();
let wildTurkey = new WildTurkey();
let turkeyAdapter = new TurkeyAdapter();

// 原有鸭子的方法
mallardDuck.fly();
mallardDuck.quack();

// 原有火鸡的方法
wildTurkey.fly();
wildTurkey.gobble();

// 适配火鸡的行为
turkeyAdapter.fly();
turkeyAdapter.quack();
