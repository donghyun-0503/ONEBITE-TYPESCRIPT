// 타입 추론

let a = 0;
let b = "hello";
let c = {
  id: 1,
  name: "John",
  profile: {
    nickname: "Jo",
  },
  url: ["https://winterlood.com"],
};
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// any타입의 진화
let d; // 암묵적 any
d = 10; // number로 진화
d.toFixed();
// d.toUpperCase();

d = "hello"; // string으로 진화
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];
