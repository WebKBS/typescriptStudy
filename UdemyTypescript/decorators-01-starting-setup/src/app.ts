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
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super();
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = templete;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

///// -------

// 데코레이터
function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log("Parametor decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

// 데코레이터는 클래스가 정의 되었을떄 작동하는 함수이다.ㄴ

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("price가 다릅니다.");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("book", 19);
const p2 = new Product("book", 29);
