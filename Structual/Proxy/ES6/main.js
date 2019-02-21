import Star from './src/Star';
import Assistant from './src/Assistant';
import Shoes from './src/Shoes';
import Advertisement from '. /Advertisement';

const stephy = new Star();
const mary = new Assistant(stephy);

// 代理应用

mary.buyShoes(new Shoes('高跟鞋'));

// 保护代理

mary.init(new Advertisement(5));
// '拒绝小制作！'
mary.init(new Advertisement(500));
// 广告费500万元
