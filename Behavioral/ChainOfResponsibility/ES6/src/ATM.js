import MoneyStack from './MoneyStack'

class ATM {
    constructor(){
        var stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);

        stack100.setNextStack(stack50);
        stack50.setNextStack(stack20);
        stack20.setNextStack(stack10);
        stack10.setNextStack(stack5);
        stack5.setNextStack(stack1);

        this.moneyStacks = stack100;
    }
    withdraw(amount){
        this.moneyStacks.withdraw(amount);
    }
}

export default ATM;