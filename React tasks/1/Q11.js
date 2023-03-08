var b=["2","3","4","2","3"];

function remove(b){
    return b.filter((item,index)=>b.indexOf(item)===index);
}

console.log(remove(b))