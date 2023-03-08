let array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

const duplicates=array=>array.filter((item,index)=>array.indexOf(item)!==index);
const findduplicates=duplicates(array);
console.log(findduplicates);