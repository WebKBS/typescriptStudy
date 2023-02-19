type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// &는 인터섹션 연산자 두 타입을 합해준다.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Kang",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
// 함수 타입 가드 ==================
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Kang", "Web");
result.split(" ");

// 선택적 옵셔널 체이닝
// 무슨 데이터가 들어올지 모를때
const fetchedUserData = {
  id: "u1",
  name: "Kang",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job.title);


// 고급타입
const userInput = null;

const storeData = userInput || "Default";

console.log(storeData);

// console.log(add("1", "4"));

// type UnknowEmoloyee = Employee | Admin;

// function printEmployeeInformation(emp: UnknowEmoloyee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("start Date: " + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Menu", startDate: new Date() });

// // 클래스 타입가드
// class Car {
//   drive() {
//     console.log("Driving..");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Drive Truck");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     //instanceof (js 내장메서드) 사용해서 조건 검사
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);

// // 구별된 유니온
// // 공통된 속성이 있어야한다. ex) type

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animail = Bird | Horse;

// function moveAnimal(animal: Animail) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // 형변환

// // 2가지 방법

// // 첫번쨰
// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );

// // 두번째
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// // ** 두가지 방법중 번갈아 사용하지 않게 일관성 유지해야 함.

// // ! 느낌표를 사용하는 이유: 앞의 표현식을 null로 반환하지 않겠다고 타입스크립트에게 인식시킴.

// userInputElement.value = "Hi there!";

// // 인덱스 속성
// interface ErrorContainer {
//   // {email: '이메일 양식이 유효하지 않습니다.', username: '문자로 시작해야합니다.'}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "이메일 양식이 유효하지 않습니다.",
//   username: "첫글자는 대문자여야 합니다.",
// };
