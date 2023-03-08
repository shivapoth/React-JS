
let arr1=[];

function divisible(...arr){
  
for(let i=0;i<arr.length;++i){
    if(arr[i]%2==0 ){
        arr1.push(arr[i]);
    }
    else if(arr[i]%3==0){
        arr1.push(arr[i]);
    }
    else if(arr[i]%4==0){
        arr1.push(arr[i]);
    }
    else if(arr[i]%5==0){
        arr1.push(arr[i]);
    }
}

   
}

divisible(1,2,3,4,5,6,7,8,9,10);
console.log(arr1);