// 데코레이터를 사용하려면 tsconfig.json에서 experimentalDecorators를 활성화 해야한다.

function Logger(constructor: Function) {
  console.log("logging...");
  console.log(constructor);
}

// 데코레이터는 인수를 받는다.
@Logger

class Person {
  name = "Kang";

  constructor() {
    console.log("person 객체 만들기");
  }
}

const pers = new Person();

console.log(pers);
