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
