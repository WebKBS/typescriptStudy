// 데코레이터를 사용하려면 tsconfig.json에서 experimentalDecorators를 활성화 해야한다.

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplete(templete: string, hookId: string) {
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
@WithTemplete("<h1>My Person Object </h1>", "app")
class Person {
  name = "Kang";

  constructor() {
    console.log("person 객체 만들기");
  }
}

const pers = new Person();

console.log(pers);
