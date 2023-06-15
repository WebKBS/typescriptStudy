import Dog from "./Dog";
export default class ShelterDong extends Dog {
  constructor(name, breed, age, shelter) {
    super(name, breed, age);
    this.shelter = shelter;
  }
}
