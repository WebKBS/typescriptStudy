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
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const mergeObj = merge({ name: "Kang", hobbies: ["sports"] }, { age: "30" });
