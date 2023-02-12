// 관례상 클래스는 첫글자를 대문자로
class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = []; // 직원
  // private는 런타임에서는 불가능하다. 하지만 컴파일 과정에서 에러를 만든다.

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Kang"]);
const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Somting went wrong....");
accounting.printReports();

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