import CaffeineBeverage from './CaffeineBeverage';

class Tea extends CaffeineBeverage {
  brew() {
    console.log('Steeping the tea!');
  }
  addCondiments() {
    console.log('Adding lemon!');
  }
  customerWantsConfiments() {
    return confirm('Do you want some lemon?');
  }
}
export default Tea;
