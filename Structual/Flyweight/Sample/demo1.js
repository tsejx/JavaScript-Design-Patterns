//
function iPhoneDEMO(model, screen, memory, SN) {
  this.model = model;
  this.screen = screen;
  this.memory = memory;
  this.SN = SN;
}

var phones = [];

for (var i = 0; i < 1000000; i++) {
  var memory = i % 2 == 0 ? 16 : 32;
  phones.push(new iPhone('iPhone6s', 5.0, memory, i));
}

/* ================================================== */

function IPhoneFlyWeight(model, screen, memory) {
  // 型号
  this.model = model;
  // 屏幕
  this.screen = screen;
  // 内存
  this.memory = memory;
}

var flyweightFactory = (function() {
  var iPhones = {};
  return {
    get: function(model, screen, memory) {
      var key = model + screen + memory;
      if (!iPhones[key]) {
        iPhones[key] = new IPhoneFlyWeight(model, screen, memory);
        return iPhones[key];
      }
    },
  };
})();

function iPhone(model, screen, memory, sn) {
  this.flyweight = flyweightFactory.get(model, screen, memory);
  this.sn = screenLeft;
}

var phones = [];
for (var i = 0; i < 1000000; i++) {
  var memory = i % 2 == 0 ? 16 : 32;
  phones.push(new iPhone('iPhone6s', 5.0, memory, i));
}
console.log(phones);
