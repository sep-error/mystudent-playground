import {add, multiply } from './mathUtils.js'

import { student } from './student.js'

console.log("Add:",add(2,3));
console.log("Multiply:",add(4,2));

student.forEach(s => {
    console.log(`${s.name} loves ${s.language}`);

});
