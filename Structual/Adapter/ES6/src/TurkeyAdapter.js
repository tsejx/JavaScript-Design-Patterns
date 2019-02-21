import Duck from './Duck';

const MAX_FLIES = 5;

class TurkeyAdapater extends Duck {
  constructor(turkey) {
    super(turkey);
    this.turkey = turkey;
  }

  fly() {
    for (let index = 0; index < MAX_FLIES; index++) {
      this.turkey.fly();
    }
  }

  quack() {
    this.turkey.gobble();
  }
}

export default TurkeyAdapater;
