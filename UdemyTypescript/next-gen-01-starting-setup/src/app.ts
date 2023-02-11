const userNAme = "Kang";
let age = 30;

age = 29;

var result;

function add(a: number, b: number) {
  result = a + b;
  return result;
}

// arrow함수
// *** 한줄로 쓰면 중괄호와 return을 쓴것 처럼 즉시 반환한다.
// 매개변수 기본 값의 설정은 두번째 파라미터부터 사용
const add2 = (a: number, b: number = 10) => a + b;

const printOutput = (output: number | string) => console.log(output);
printOutput(add2(10, 23));

// 스프레드 문법
const hobbies = ["sports", "Cooking"];
const activeHobbies = ["Hiking"];
//const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

const [...hobbie] = hobbies;
console.log(hobbie);
console.log(hobbies);
console.log(activeHobbies);

// 객체 스프레드 연산자를 사용해서 불변성 유지
const person = {
  name: "Kang",
  age: 30,
};

const copiedPerson = { ...person };

copiedPerson.name = "Kim";
console.log(person);
console.log(copiedPerson);

// 나머지 매개변수 타입 지정
const add3 = (...numbers: number[]) => {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

const addNumber = add3(1, 2, 3, 5, 5);
console.log(addNumber);
