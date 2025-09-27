import { add, multiply } from './mathUtils.js';

console.log("Add:", add(10, 3));        
console.log("Multiply:", multiply(15, 2)); 

import { students } from './students.js';

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

