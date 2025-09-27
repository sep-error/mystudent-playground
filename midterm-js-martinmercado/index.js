import { add, multiply } from './mathUtils.js';
import { students } from './students.js';


console.log('Add 2 + 3 =', add(2, 3));
console.log('Multiply 4 * 5 =', multiply(4, 5));


students.forEach(student => {
  console.log(`${student.name} loves ${student.favoriteLanguage}`);
});
