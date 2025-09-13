import { add, multiply } from './mathUtils.js';
import { students } from './students.js';
import { calculator } from './calculator.js'; import { remarks } from './grade.js';
import { task } from './task.js';

console.log("Add:", add(2, 3));    
console.log("Multiply:", multiply(4, 2)); 

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});


task.forEach(s => {
  console.log(`${s.task}, Deadline ${s.deadline}`);
});

console.log("2 + 3 =", calculator(2, 3, '+'));

remarks(98);