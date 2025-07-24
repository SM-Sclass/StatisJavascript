function isPositiveInteger(num) {
  if (typeof num !== 'number') {
    return false;
  }
  if (!Number.isInteger(num)) {
    return false;
  }
  return num > 0;
}

console.log(isPositiveInteger(5));      // true
console.log(isPositiveInteger(-3));     // false
console.log(isPositiveInteger(3.5));    // false
console.log(isPositiveInteger("10"));   // false

