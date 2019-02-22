class TotalOrders {
  constructor() {
    this.orderList = [];
  }
  addOrder(order) {
    this.orderList.push(order);
  }
  create(order) {
    for (var i = 0, length = this.orderList.length; i < length; i++) {
      this.orderList[i].create();
    }
  }
}

export default TotalOrders;
