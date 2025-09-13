import { students } from './students.js';

export function getRandomLeader() {
  const index = Math.floor(Math.random() * students.length);
  return students[index];
}
