class Assistant {
  constructor(star) {
    this.star = star;
  }
  buyShoes(shoes) {
    this.star.buyShoes(shoes.getName());
  }

  init(ad) {
    var money = ad.getPrice();
    if (money > 300) {
      this.receiveAd(money);
    } else {
      this.rejectAd();
    }
  }

  receiveAd() {
    star.receiveAd();
  }

  rejectAd() {
    star.rejectAd();
  }
}
