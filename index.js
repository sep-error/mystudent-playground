import { add, multiply } from './modules/mathUtils.js';
import { students } from './modules/students.js';
//Calculator
console.log("Add:", add(2, 3));        // 5
console.log("Multiply:", multiply(4, 2)); // 8.

//array
students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});