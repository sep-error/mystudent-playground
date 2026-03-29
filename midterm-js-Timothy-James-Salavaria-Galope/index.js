import { add, multiply } from './mathUtils.js';
import { student } from './students.js';

console.log("Add:", add(2, 3));          
console.log("Multiply:", multiply(4, 2)); 

student.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});