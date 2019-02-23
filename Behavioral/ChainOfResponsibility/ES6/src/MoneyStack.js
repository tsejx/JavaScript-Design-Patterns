class MoneyStack {
  constructor(billSize) {
    this.billSize = billSize;
    this.next = null;
  }
  withdraw(amount) {
    var numOfBills = Math.floor(amount / this.billSize);

    if (numOfBills > 0) {
      // 打印当前面额日志
      this.ejectMoney(numOfBills);
      // 计算除去当前面额总金额后剩余金额
      amount = amount - this.billSize * numOfBills;
    }

    // 如果有总金额剩余，则请求下个面额实例计算
    amount > 0 && this.next && this.next.withdraw(amount);
  }
  setNextStack(stack) {
    this.next = stack;
  }
  ejectMoney(numOfBills) {
    console.log(`${numOfBills} $ ${this.billSize} bill(s) has/have been spit out`);
  }
}

export default MoneyStack;
