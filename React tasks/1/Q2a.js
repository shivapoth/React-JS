let a=[1,[1,2],[2,3],[4,5],8]

let b=[]


function rev(a){

        a.map((data)=>{

                if(Array.isArray(data)){
                    rev(data)
                }
                else{
                        b.push(data)
                }
        }


        )
}
rev(a);

console.log([...new Set(b)]);