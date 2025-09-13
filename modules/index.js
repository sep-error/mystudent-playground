import { add, multiply } from './mathUtils.js';
import { students } from './student.js';

console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(4, 2)); 



students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});