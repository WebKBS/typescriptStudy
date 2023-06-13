import axios from "axios";
import _ from "lodash";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

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
axios
  .get<User[]>(url)
  .then((res) => {
    console.log("hi");

    res.data.forEach(printUser);
    // const { data } = res;
    // data.company.catchPhrase;
  })
  .catch((e) => {
    console.log("error", e);
  });

function printUser(user: User) {
  console.log(user.company);
  console.log(user.name);
}
