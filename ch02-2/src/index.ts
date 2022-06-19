let MAX_AGE = 100;

interface Iperson {
  name: string;
  age: number;
}

class Person implements Iperson {
  constructor(public name: string, public age: number) {}
}

function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil(Math.random() * max);
}

const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age,
});

const testMakePerson = (): void => {
  let jane: Iperson = makePerson("Jane");
  let jack: Iperson = makePerson("Jack");
  console.log(jane, jack);
};

testMakePerson();
