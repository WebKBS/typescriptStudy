// import Person, { makePerson } from "./person/Person";
import Iperson from "./person/IPerson";
import Person from "./person/Person";
import Chance from "chance";
import * as R from "ramda";

const chance = new Chance();
let persons: Iperson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);

console.log(persons);

// const testMakePerson = (): void => {
//   let jane: Iperson = makePerson("Jane");
//   let jack: Iperson = new Person("Jack");
//   console.log(jane, jack);
// };

//testMakePerson();