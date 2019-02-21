// ==============================
// 抽象类 ABSTRACTION CLASS
// ==============================

class Lamb {
  constructor(method) {
    this.method = method;
  }
  cook() {
    this.method.cook();
  }
}

export default Lamb;
