// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Kang",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 0,
  AUTHOR = "AUTHOR",
}
// enum은 숫자로 순서를 조정할 수 있으며 각각 숫자를 넣을수 있고 문자도 넣을수 있다.

const person = {
  name: "Kang",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("admin");
//person.role = [0, "admin", 'user'];

let favoriteAcivities: string[];
favoriteAcivities = ["Sports"];

console.log(person.name);

for (const bobby of person.hobbies) {
  console.log(bobby);
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
