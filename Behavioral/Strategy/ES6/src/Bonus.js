class Bonus {
  constructor() {
    // 原始工资
    this.salary = null;
    // 绩效等级对应的策略对象
    this.strategy = null;
  }

  setSalary(salary) {
    // 设置员工的原始工资
    this.salary = salary;
  }

  setStrategy(strategy) {
    // 设置员工绩效等级对应的策略对象
    this.strategy = strategy;
  }

  getBonus() {
    // 把计算奖金的操作委托给对应的策略对象
    return this.strategy.calculate(this.salary);
  }
}

export default Bonus;
