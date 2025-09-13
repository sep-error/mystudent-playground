/*import { add, multiply } from './mathUtils.js';
import { students } from './students.js';


console.log("Add:", add(2, 3));         
console.log("Multiply:", multiply(4, 2)); 


console.log("\nStudent Preferences:");
students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});*/


// index.js

import { add, multiply } from './mathUtils.js';
import { students } from './students.js';
import { getRandomLeader } from './team.js';

// Math operations
console.log("Add:", add(2, 3));           // Output: 5
console.log("Multiply:", multiply(4, 2)); // Output: 8

// Student preferences
console.log("\nStudent Preferences:");
students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

// Random team leader
const leader = getRandomLeader();
console.log(`\nTeam Leader: ${leader.name} (loves ${leader.language})`);

