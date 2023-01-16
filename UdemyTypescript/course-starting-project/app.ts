function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // 바닐라 자바스크립트로 했을 경우. 조건문으로 확인 (런타임에서만 확인가능하다.)
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("숫자가 아닙니다.");
  // }

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// 변수에 타입을 지정하지 않은 경우 타입을 따로 정해주자
let number1: number;
number1 = 5;

// const를 사용했을땐 상수를 변경할 수 없으므로 타입이 추가 되지 않아도 된다.
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
