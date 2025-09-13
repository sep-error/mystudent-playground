import { add, multiply, div, modulo } from './mathUtils.js';
import { students } from './student.js';


console.log("Add:", add(10, 5));        
console.log("Multiply:", multiply(10, 5)); 
console.log("Divide:", div(10, 5));        
console.log("Modulo:", modulo(10, 5)); 

students.forEach(s => {
  console.log(`${s.name} loves ${s.language}`);
});

