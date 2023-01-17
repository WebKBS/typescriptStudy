// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
const person = {
  name: "Kang",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteAcivities: string[];
favoriteAcivities = ["Sports"];

console.log(person.name);

for (const bobby of person.hobbies) {
  console.log(bobby);
}
