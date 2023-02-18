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

// 함수 타입 가드 ==================
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add("1", "4"));

type UnknowEmoloyee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmoloyee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Menu", startDate: new Date() });

// 클래스 타입가드
class Car {
  drive() {
    console.log("Driving..");
  }
}

class Truck {
  drive() {
    console.log("Drive Truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    //instanceof (js 내장메서드) 사용해서 조건 검사
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

// 구별된 유니온
// 공통된 속성이 있어야한다. ex) type

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animail = Bird | Horse;

function moveAnimal(animal: Animail) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
