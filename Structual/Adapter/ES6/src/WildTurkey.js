import Turkey from './Turkey';

// ==============================
// 具体类 CONCRETE CLASS
// ==============================

class WildTurkey extends Turkey {
  fly() {
    console.log('Fly short distance!');
  }
  gobble() {
    console.log('Gobble!, Gobble!');
  }
}

export default WildTurkey;
