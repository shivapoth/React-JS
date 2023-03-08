
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var count=0;
var count1=1;
var item;
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            count++;
        }
        if(count1<count){
            count1=count;
            item=arr1[i];
        }
    }
    count=0;
}

console.log(item +"is repeated"+count1+"times")