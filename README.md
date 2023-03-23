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
\*\* node_modules도 제외시킬 수 있지만. default값으로 제외 되어있어서 굳이 하지 않아도 된다.

_.dev.ts -> .dev.ts 이름을 가진 모든 파일 제외.
\*\*/_.dev.ts -> 모든 폴더안의 dev.ts 파일 제외

### 위와 반대로 includes를 사용하면 esclude와 반대로 작동한다. 지정한, 포함된 파일만 컴파일.

## compilerOptions 살펴보기

#### "target": "es2016", : javascript 버전을 뜻한다.

#### "lib": [], lib을 설정하게 되면 javascript 내장 API 기능들을 선택적으로 사용할 수 있다.

#### "sourceMap": true, scss처럼 javascript map 파일 생성, 크롬 콘솔 source에서 ts파일을 보고 디버깅을 할 수 있다.

#### "outDir": "./dist", 컴파일할 폴더를 지정한다.

#### "rootDir": "./src", outDir 사용시 root파일을 감시하여 dist파일에 포함한다.

#### "removeComments": true, 모든 주석을 컴파일시에 제외한다.

#### "noEmitOnError": true, 기본값 false 만약 true로 설정하면 typescript 컴파일시 javascript파일을 생성하지 않는다.

#### "strict": true, strict 모드 기본값은 true

"noImplicitAny": true, 매개변수와 값의 타입을 명확하게 할떄 사용한다.
"strictNullChecks": true, button엘리먼트를 사용할때 !를 추가해줘야하는데 false로 하면 추가하지 않아도 된다.
--> dom 노드를 선택할때 null을 반환하면, true이면 에러를 발생

"strictBindCallApply": true, bind() 메서드를 사용할때 타입 검사
"alwaysStrict": true, 자바스크립트 파일에 항상 'use strict' 문자열을 추가할지 안할지 선택

#### "noUnusedLocals": true, 사용되지 않은 변수를 알려준다.

#### "noUnusedParameters": true, 사용되지 않은 파라미터를 알려준다.

#### "noImplicitReturns": true, 함수에서 return 값이 제대로 되지 않을때 알려준다.

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

# 웹팩

### 설치

npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader;
webpack, webpack-cli, webpack-dev-server, typescript ts-loader를 설치한다.

### tsconfig json에서 설정 확인하기.

이후 webpack.config.js 파일 생성

각 javascript파일(또는 ts파일)에서 import 구분의 url에서 .js 문자를 지운다.
타입스크립트에서 컴파일된 dist폴더 파일을 모두 삭제 한다.

webpack.config.js에서 각 설정 후
npm run build로 실행.
ex) bundle.js 생성 후
index HTML에서 bundle.js를 불러온다.

- 크롬 개발자 도구 source 탭에서 디버깅 가능.

## webpack dev서버.

package.json 에서 scripts - start부분에 'webpack-dev-server' 로 바꿔준다.
