import Bonus from './src/Bonus';
import PerformanceS from './src/PerformanceS';
import PerformanceA from './src/PerformanceA';
import PerformanceB from './src/PerformanceB';

const bonus = new Bonus();

bonus.setSalary(10000);

// 设置策略对象
bonus.setStrategy(new PerformanceS());

console.log(bonus.getBonus()); // Output: 40000

bonus.setStrategy(new PerformanceA());

console.log(bonus.getBonus()); // Output: 30000
