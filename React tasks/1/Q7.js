let str="windows"
let str2=""

for(let i=0;i<str.length;i++){
    if(str.charAt(i)!='w'){
        str2+=str.charAt(i);
    }
}

console.log(str2);


