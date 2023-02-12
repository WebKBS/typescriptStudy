// 관례상 클래스는 첫글자를 대문자로
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accouting = new Department("Accounting");
accouting.describe();

const accountingCopy = { name: "Dummy", describe: accouting.describe };

// describe매개 변수로 this를 추가하고 class를 참조 해야한다.
// accountingCopy에 name의 이름을 추가한다.
// 위 조건을 만족하지 않으면 undefined를 출력
accountingCopy.describe();
