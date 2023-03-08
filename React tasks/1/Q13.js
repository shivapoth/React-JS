var data1={
    name:"Hello",
    data2:[{
        name:"Hello1",
        age1:21
          },
          {
        name1:[{
            name2:"Hello2",
            age2:22
        }]
    }],
    age:20
};

 console.log("["+data1.name+","+data1.data2[0].name+","+data1.data2[1].name1[0].name2
 + "," +(data1.data2[0].age1+data1.data2[1].name1[0].age2+data1.age)+"]");