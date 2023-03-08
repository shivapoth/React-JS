let array1 = [1,0,2,3,4];

let array2 = [3,5,6,7,8,13]

var result = [];

var c = 0;

var s=0;




while(c<array1.length && c<array2.length)

{

    result.push(array1[c]+array2[c]);

    c++;

}

if(c===array1.length)

{

    for(s=c;s<array2.length;s++)

    {

        result.push(array2[s]);

    }

}

else{

    for(s=c;s<array1.length;s++)

    {

        result.push(array1[s]);

    }

}

console.log(result)
