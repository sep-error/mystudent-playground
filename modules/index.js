import { add, multiply } from './mathUtils.js';
import { students } from './students.js';
import { getRandomLeader } from './teams.js';


console.log("Add:", add(2, 3));      
console.log("Multiply:", multiply(4, 2)); 

console.log(" ");

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

console.log(" ");

const leader = getRandomLeader();
console.log(`${leader.name} is the random leader!`);

