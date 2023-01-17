# Typescript 공부방

## Node Js 다운로드

https://nodejs.org/ko/

## Typescript 설치

#### npm install -g typescript

## 개별 파일 컴파일

#### tsc 파일이름.ts

### npm init

### npm install --save-dev lite-server

lite-server를 설치한 뒤 package.json "script"에
"start"를 추가하고 lite-server를 입력한다.

\*\*\* IDE에서 타입스크립트 파일과 바닐라JS파일이 같이 열려있으면 에러가 나타난다. (주의)!

### tsc -w 파일이름.ts

실시간 변경된 파일을 감지해서 컴파일 해준다.

## 타입 추론

타입 추론은 명시된 타입이 타입스크립트가 자동으로 해석한 방법이다.
ex) const a = 1;
a는 숫자 1이 할당되었으므로 타입스크립트는 자동으로 number로 인식한다.
const a: number = 1;
이처럼 타입추론이 가능한 곳에는 타입을 따로 지정하지 않는것이 좋다.
