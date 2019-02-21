class Shoes {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  bussiness() {
    var current = new Date().getHours();
    return current >= 8 && current <= 20 ? that.getName() : '非营业时间！';
  }
}
