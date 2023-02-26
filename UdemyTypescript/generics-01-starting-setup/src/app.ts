// //const names = ["Kang", "Manuel"];
// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// <T> 는 Type의 첫글자를따서 관례상 T라고 적는다. 두번째 파라미터에는 U를 사용한다.
// extends를 사용하면 더욱 엄격한 제약 조건을 만들수있다.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const mergeObj = merge({ name: "Kang", hobbies: ["sports"] }, { age: "30" });

/////////////
interface Lengthy {
  length: number;
}

// length를 사용하기 위해서는 별도로 타입을 지정해줘야한다.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

//////// keyof

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Kang" }, "name");

/////////////// 제네릭 클래스 사용법

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Kang");
textStorage.addItem("Menu");
textStorage.removeItem("Kang");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// const kangObj = { name: "Kang" };

// objStorage.addItem(kangObj);
// objStorage.addItem({ name: "Menu" });
// objStorage.removeItem(kangObj); // 배열의 마지막 요소를 식별할수 없으므로 마지막 요소가 남아 Kang이 남는다. 조건문처리
// console.log(objStorage.getItems());

/////////////////// 제네릭 유틸리티

interface CourseGoal {
  title: string;
  description: string;
  completeUntile: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntile = date;
  return courseGoal as CourseGoal;

  //return { title: title, description: description, completeUntile: date };
}

const names: Readonly<string[]> = ["Kang", "Sports"];
// names.push("Menu"); // readonly는 추가 삭제 변경 등 불가
