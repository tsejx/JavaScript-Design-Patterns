// ==============================
// 抽象类 ABSTRACTION CLASS
// ==============================

class Chicken {
  constructor(method) {
    this.method = method;
  }
  cook() {
    this.method.cook();
  }
}

export default Chicken;
