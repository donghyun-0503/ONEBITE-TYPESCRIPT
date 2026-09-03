// 인터페이스의 확장

type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  // name: number; // 에러
  isBark: boolean;
}

const dog: Dog = {
  name: "hello",
  color: "",
  isBark: false,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
