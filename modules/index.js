import { add, multiply } from './mathUtils.js';
import { students } from './students.js';
import { remarks } from './grade.js';


console.log("Add:", add(2, 3));        // 5
console.log("Multiply:", multiply(4, 2)); // 8


students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

remarks(98);