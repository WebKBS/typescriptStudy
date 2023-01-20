// type aliases 타입 별칭 사용
// 타입 별칭을 사용하면 리팩토링 처럼 불필요한 반족을 피하고 타입 중심에서 관리할 수 있다.
// 유니온 타입 가능뿐만아니라 객체 타입도 가능하다.

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor // 투 문자열만 특정하여 지정
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNAmes = combine("Max", "Anna", "as-text");
console.log(combineNAmes);
