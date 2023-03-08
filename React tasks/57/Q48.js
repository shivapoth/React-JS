let array1 = [1, 2, 3];
let array2 = [100, 2, 1, 10];


const union=[...new Set([...array1,...array2])];
console.log(union);