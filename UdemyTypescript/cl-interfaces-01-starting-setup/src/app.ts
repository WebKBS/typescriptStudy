// 관례상 클래스는 첫글자를 대문자로
abstract class Department {
  static fiscalYear = 2020;

  // private readonly id: string;
  // public name: string;
  protected employees: string[] = []; // 직원
  // private는 런타임에서는 불가능하다. 하지만 컴파일 과정에서 에러를 만든다.
  // private는 확장된 클래스에서도 사용 불가능.
  // protected는 private와 비슷하지만 이 클래스 뿐만아니라 확장된 클래스에서도 사용가능하다.

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    //console.log(Department.fiscalYear); // 정적메서드 접근하기 위해선 class이름을 꼭 써줘야한다.
  }

  // 정적 메서드 사용하기
  static createEmployee(name: string) {
    return { name: name };
  }

  // describe(this: Department) {
  //   console.log(`Department(${this.id}): ${this.name}`);
  // }

  abstract describe(this: Department): void;

  addEmployee(employees: string) {
    //this.id = "d2";
    this.employees.push(employees);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID : " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Plesae pass value");
    }
    this.addReport(value);
  }

  //private 를 사용하면 new 생성자를 막는다. 객체 생성 불가.
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - Id: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Kang") {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// 정적메서드 사용하기
const employee1 = Department.createEmployee("KANG");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Kang"]);
//const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "Year Report";

accounting.addReport("Somting went wrong....");
console.log("get: " + accounting.mostRecentReport); // 순서를 지켜야한다. addReport보다 위에 있으면 에러가남.

accounting.addEmployee("Hello");

// accounting.printReports();
// accounting.printEmployeeInformation();

accounting.describe();

it.addEmployee("Kang");
it.addEmployee("Menu");

//it.employees[2] = "Anna"; // 권장하지 않는 방법, class에 private 타입을 추가하면 실행되지 않는다.

it.describe();
it.name = "NEW NAME"; // public은 추가가 가능하다.
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = { name: "Dummy", describe: accouting.describe };

// // describe매개 변수로 this를 추가하고 class를 참조 해야한다.
// // accountingCopy에 name의 이름을 추가한다.
// // 위 조건을 만족하지 않으면 undefined를 출력
// accountingCopy.describe();
