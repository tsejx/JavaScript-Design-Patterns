import Duck from './Duck';

// ==============================
// 具体类 CONCRETE CLASS
// ==============================

class MallardDuck extends Duck {
  fly() {
    console.log('Can fly long distance!');
  }
  quack() {
    console.log('Quack!Quack!');
  }
}

export default MallardDuck;
