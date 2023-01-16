function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // 바닐라 자바스크립트로 했을 경우. 조건문으로 확인
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

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
