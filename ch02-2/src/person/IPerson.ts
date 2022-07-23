// exprot default 모듈 내보내기는 기능중 오직 한개만 붙일 수 있다.
// exprot default 기능은 import로 불러올때 {} 중괄호를 생략 할 수 있다.
// export 가 있는 파일에서도 사용 할 수 있다.

export default interface Iperson {
  name: string;
  age: number;
}
