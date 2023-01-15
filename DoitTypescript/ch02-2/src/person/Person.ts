import { makeRandomNumber } from "../utils/makeRandomNumber";
import Iperson from "./IPerson";

export default class Person implements Iperson {
  constructor(public name: string, public age: number = makeRandomNumber()) {}
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age,
});
