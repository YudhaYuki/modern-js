// import './utilities';
import { add, name } from './utilities';
import { scream } from './scream';

console.log('index.js');
console.log(add(32, 1));
console.log(name);
console.log(scream(name));


// 1. Create a new file called scream.js
// 2. Export a "scream" function that takes a string
//      a. Covert that string to uppercase
//      b. Add "!" onto the end
// 3. Import scream into index.js and use it