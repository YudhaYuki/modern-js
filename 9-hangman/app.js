// Primitive Value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.protoype --> Object.prototype --> null
// Number: myString --> Number.protoype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.protoype --> Object.prototype --> null



const product = 'Computer';
console.log(product);

const otherProduct = new String('Phone');
console.log(otherProduct);