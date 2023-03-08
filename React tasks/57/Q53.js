function humanizedFormat(num)

{

if(num%100 >=11 && num%100 <=13)

{

    return num +"th"

}

switch(num%10)

{

    case 1: return num +"st";

    case 2: return num +"nd";

    case 3: return num +"rd";

}

return num+"th";

}

console.log(humanizedFormat(1))

console.log(humanizedFormat(8))

console.log(humanizedFormat(301))

console.log(humanizedFormat(402))

console.log(humanizedFormat(25))

console.log(humanizedFormat(45))