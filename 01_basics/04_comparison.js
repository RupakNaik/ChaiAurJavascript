// compare between different
// console.log("4">1);
// console.log("05">2);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
/**
 * The reason is that an equality check == and comparisons > < >= <= work differently
 * Comparisons convert null to a number, treating is as 0.
 * Thats why (null >= 0) is true
 * 
 */

console.log(undefined == 0);

// === do strict chaek like chek data type
console.log("2"===2);
