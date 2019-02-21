import Animal from './Animal';

// ==============================
// 具体类 CONCRETE CLASS
// ==============================

class Dog extends Animal {
  eat() {
    return "Dog: 'Meat, please!'\n";
  }
}

export default Dog;
