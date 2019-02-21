import Chicken from './src/Chicken';
import Lamb from './src/Lamb';
import Bake from './src/Bake';
import Fry from './src/Fry';

const message = new Chicken(new Bake());

message.cook();

const error = new Lamb(new Fry());

error.cook();

// http://luopq.com/2015/11/11/design-pattern-bridge/
