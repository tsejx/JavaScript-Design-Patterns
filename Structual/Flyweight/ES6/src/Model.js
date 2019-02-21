// ==============================
// 构建享元对象
// ==============================

class Model {
  constructor(id, gender) {
    this.gender = gender;
    this.name = `张${gender}${id}`;
  }
}

export default Model;
