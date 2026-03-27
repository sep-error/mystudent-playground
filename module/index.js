import { add, multiply } from './mathUtils.js';

console.log("Add:", add(2, 3));          // 5
console.log("Multiply:", multiply(4, 2)); // 8


import { students } from './/students.js';

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});