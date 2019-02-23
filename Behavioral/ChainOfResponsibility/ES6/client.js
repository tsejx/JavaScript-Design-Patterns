import ATM from './src/ATM';

const atm = new ATM();

atm.withdraw(186);
/* outputs:
    1 $100 bill(s) has/have been spit out
    1 $50 bill(s) has/have been spit out
    1 $20 bill(s) has/have been spit out
    1 $10 bill(s) has/have been spit out
    1 $5 bill(s) has/have been spit out
    1 $1 bill(s) has/have been spit out
*/

atm.withdraw(72);
/* outputs:
    1 $50 bill(s) has/have been spit out
    1 $20 bill(s) has/have been spit out
    2 $1 bill(s) has/have been spit out
*/