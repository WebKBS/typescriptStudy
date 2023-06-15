import Dog from "./Dog.js";

export default class ShelterDong extends Dog {
  constructor(
    name: string,
    breed: string,
    age: number,
    public shelter: string
  ) {
    super(name, breed, age);
  }
}
