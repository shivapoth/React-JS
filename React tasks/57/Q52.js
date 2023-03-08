function insideString(mstring,istring,position)

{

    if(typeof(position)=="undefined")

    {

        position=0;

    }

    if(typeof(istring)=="undefined")

    {

        istring="";

    }

    return mstring.slice(0,position)+istring+mstring.slice(position)

}

console.log(insideString('We are doing some exercises.'))

console.log(insideString('We are doing some exercises.','JavaScript '))

console.log(insideString('We are doing some exercises.','JavaScript ',18))