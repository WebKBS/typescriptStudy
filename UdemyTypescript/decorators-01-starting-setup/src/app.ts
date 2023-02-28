// 데코레이터를 사용하려면 tsconfig.json에서 experimentalDecorators를 활성화 해야한다.

function Logger(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplete(templete: string, hookId: string) {
  console.log("Templete Factory");
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = templete;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// 데코레이터는 인수를 받는다.
//@Logger("Loggin - Person")
@Logger("Logger")
@WithTemplete("<h1>My Person Object </h1>", "app") // 다중 데코레이터 함수 실행은 아래부터 시작한다.
class Person {
  name = "Kang";

  constructor() {
    console.log("person 객체 만들기");
  }
}

const pers = new Person();

console.log(pers);
