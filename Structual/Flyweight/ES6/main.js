import TakeClothesManager from "./src/TakeClothesManager";

for (let i = 0; i < 50; i++) {
    TakeClothesManager.addClothes(i, '男', `服装${i}`)
    TakeClothesManager.takePhoto(i)
}

for (let i = 50; i < 100; i++) {
    TakeClothesManager.addClothes(i, '女', `服装${i}`)
    TakeClothesManager.takePhoto(i)
}