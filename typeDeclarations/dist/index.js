"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// const url = "https://jsonplaceholder.typicode.com/users/1";
// axios
//   .get<User>(url)
//   .then((res) => {
//     console.log("hi");
//     printUser(res.data);
//     // const { data } = res;
//     // data.company.catchPhrase;
//   })
//   .catch((e) => {
//     console.log("error", e);
//   });
// function printUser(user: User) {
//   console.log(user.company);
//   console.log(user.name);
// }
const url = "https://jsonplaceholder.typicode.com/users";
axios_1.default
    .get(url)
    .then((res) => {
    console.log("hi");
    res.data.forEach(printUser);
    // const { data } = res;
    // data.company.catchPhrase;
})
    .catch((e) => {
    console.log("error", e);
});
function printUser(user) {
    console.log(user.company);
    console.log(user.name);
}
