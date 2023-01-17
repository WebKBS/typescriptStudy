// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Kang",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
//person.role = [0, "admin", 'user'];

let favoriteAcivities: string[];
favoriteAcivities = ["Sports"];

console.log(person.name);

for (const bobby of person.hobbies) {
  console.log(bobby);
}
