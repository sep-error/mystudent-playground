import { add, multiply } from './mathUtils.js';
import { students } from './students.js';
import { getRandomLeader } from './team.js';


console.log("Add:", add(2, 3));           
console.log("Multiply:", multiply(4, 2)); 


console.log("\nStudent Preferences:");
students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});


const leader = getRandomLeader();
console.log(`\nTeam Leader: ${leader.name} (loves ${leader.language})`);

