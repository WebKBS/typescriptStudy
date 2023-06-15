import Dog from "./Dog";
import { add, multiply, divide } from "./utils";
import ShelterDong from "./ShelterDog";
const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();
console.log(add(4, 5));
console.log(multiply(14, 25));
console.log(divide(40, 5));
const buffy = new ShelterDong("Buffy", "Pitbull", 5, "가나다라맙사");
