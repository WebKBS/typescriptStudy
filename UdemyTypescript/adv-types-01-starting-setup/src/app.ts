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
