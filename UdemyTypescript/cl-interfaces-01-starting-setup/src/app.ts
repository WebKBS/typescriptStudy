interface Greetable {
  // 대문자로. 관례임
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Kang");

user1.greet("Hi there - I am");

console.log(user1);

// 인터페이스를 쓰는 이유.
// interface대신 type을 사용해도 작동하긴 하나,
// 인터페이스는 객체 구조를 설명하기 위해서만 사용한다.
