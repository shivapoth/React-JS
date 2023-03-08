// function concatString(str,num){
//     let val;
//    for(let i=0;i<num;i++){
//     val=val+" "+'${str}';
//    }
// // console.log(`{val}`)
// }
// concatString("hi",3);
function concatString(str,num){
        let val=[];
      
       for(let i=0;i<num;i++){
         val.push(str);
       }
       if(num==null){
         val.push(str);
       }
    let value=val.join("")
       console.log('\"' +value+'\"')
    }


    
    concatString("hi!");
    concatString("hi!",2);
    concatString("hi!",3);