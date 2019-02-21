import ModelFactory from './ModelFactory';

class TakeClothesManager {
  // 添加衣服款式
  static addClothes(id, gender, clothes) {
    const model = ModelFactory.create(id, gender);
    this[id] = {
      clothes,
      model,
    };
  }
  // 拍照
  static takePhoto(id) {
    const obj = this[id];
    console.log(`${obj.model.gender}模特${obj.model.name}穿${obj.clothes}拍了张照`);
  }
}

export default TakeClothesManager;
