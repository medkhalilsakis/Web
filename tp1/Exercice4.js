const t1 = [1, 2, 3];
const t2 = [4, 5, 6];
const f12 = [...array1, ...array2];
console.log(f12);  

const obj1 = { a: 1, b: 2 };
const objCopy = { ...obj1, b: 3 };
console.log(objCopy);