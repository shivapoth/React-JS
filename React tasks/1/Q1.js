const prompt=require('prompt-sync')();

let n=parseInt(prompt('Enter a number : '));


let sum=1;
if(n>0){
      for(let i=1;i<=n;i++){
            sum=sum*i;
            }        
          }
else{
  console.log("Enter a valid number..")
}
console.log(sum);