function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
} // void는 아무 작업도 수행하지 않는다.

printResult(add(5, 12));

//let combineValues: Function;

let combineValues: (a: number, b: number) => number; // return 값도 number가 나오도록

combineValues = add;
//combineValues = printResult;

console.log(combineValues(8, 8));

//console.log(printResult(add(5, 12))); // undefined

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
