let userInput: unknown;
// 입력값이 무엇인지 모를때 사용.
// unknown은 아무 값이나 와도 통과 된다.
// 그러나 any와 unknown 은 다르게 동작한다.

let userName: string;

userInput = 5;
userName = "Hello";

//예시
//userName = userInput;
// username에 userInput을 할당할 수 없다.
// unknown은 할당할 수 없고, any는 가능하다.

// 조건문을 사용하여 원하는 타입을 지정하고 통과시킬 수 있다.
if (typeof userInput === "string") {
  userName = userInput;
}
