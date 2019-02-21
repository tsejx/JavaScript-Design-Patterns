import Model from './Model';

// ==============================
// 构建享元工厂
// ==============================

class ModelFactory {
  // 单例模式
  static create(id, gender) {
    if (this[gender]) {
      return this[gender];
    }
    return (this[gender] = new Model(id, gender));
  }
}

export default ModelFactory;
