# Typescript 공부방

## Node Js 다운로드

https://nodejs.org/ko/

## Typescript 설치
```
npm install -g typescript
```

## 개별 파일 컴파일

#### tsc 파일이름.ts

### npm init

### npm install --save-dev lite-server

lite-server를 설치한 뒤 package.json "script"에
"start"를 추가하고 lite-server를 입력한다.

\*\*\* IDE에서 타입스크립트 파일과 바닐라JS파일이 같이 열려있으면 에러가 나타난다. (주의)!

### tsc -w 파일이름.ts

실시간 변경된 파일을 감지해서 컴파일 해준다.

## 파일 여러개, 다수 파일일 때 컴파일

### tsc 만 사용하면 한번에 모든 파일 감지
### tsc -w 실시간 감지

## 특정 파일 제외하기
tsc --init
tsconfig.json 파일 생성.
json 파일 가장아래 exclude 를 입력하고, 제외할 파일이름을 문자열로 적는다.
** node_modules도 제외시킬 수 있지만. default값으로 제외 되어있어서 굳이 하지 않아도 된다.

*.dev.ts -> .dev.ts 이름을 가진 모든 파일 제외.
**/*.dev.ts -> 모든 폴더안의 dev.ts 파일 제외

### 위와 반대로 includes를 사용하면 esclude와 반대로 작동한다. 지정한, 포함된 파일만 컴파일.


## compilerOptions 살펴보기
"target": "es2016", : javascript 버전을 뜻한다.
"lib": [], lib을 설정하게 되면 javascript 내장 API 기능들을 선택적으로 사용할 수 있다.
"sourceMap": true,  scss처럼 javascript map 파일 생성, 크롬 콘솔 source에서 ts파일을 보고 디버깅을 할 수 있다.



## 타입 추론

타입 추론은 명시된 타입이 타입스크립트가 자동으로 해석한 방법이다.

```
ex) const a = 1;
```

a는 숫자 1이 할당되었으므로 타입스크립트는 자동으로 number로 인식한다.
```
const a: number = 1;
```
이처럼 타입추론이 가능한 곳에는 타입을 따로 지정하지 않는것이 좋다.
