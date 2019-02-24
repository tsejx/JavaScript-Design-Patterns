class CaffeineBeverage {
  prepareRecipe() {
    // 煮沸水
    this.boilWater();
    // 浸泡酿造
    this.brew();
    // 倒进杯子
    this.pourOnCup();
    // 添加调味剂
    if (this.customerWantsConfiments()) {
      this.addCondiments();
    }
  }

  boilWater() {
    console.log('Put water on fire until the water starts boiling!');
  }

  pourOnCup() {
    console.log('Put beverage on Cup!');
  }

  brew() {
    throw new Error('This method must be overwritten!');
  }

  addCondiments() {
    throw new Error('This method must be overwritten!');
  }

  customerWantsConfiments() {
    return true;
  }
}

export default CaffeineBeverage;
