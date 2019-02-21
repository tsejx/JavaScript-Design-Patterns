import Animal from './Animal';

// ==============================
// 具体类 CONCRETE CLASS
// ==============================

class Rabbit extends Animal {
  eat() {
    return "Rabbit: 'A carrot would be great!'\n";
  }
}

export default Rabbit;
