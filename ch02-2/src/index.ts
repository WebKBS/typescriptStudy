import Person, { makePerson } from "./person/Person";
import Iperson from "./person/IPerson";

const testMakePerson = (): void => {
  let jane: Iperson = makePerson("Jane");
  let jack: Iperson = new Person("Jack");
  console.log(jane, jack);
};

testMakePerson();
