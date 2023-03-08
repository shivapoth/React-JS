var a=[{
    name:"shiva",
    personalDetails:{
        studyDetails:[
            {
                graduation:"btech",
                percentage:70
            },
            {
                Secondhighestqualification:"Intermediate",
                percentage:87
            },
            {
                ssc:10,
                percentage:80,
                Subjectandpercentage:{
                    maths:100,
                    english:87
                }
            }
        ]
    }
}]


console.log(a[0].personalDetails.studyDetails[0].percentage+a[0].personalDetails.studyDetails[1].percentage+
    a[0].personalDetails.studyDetails[2].percentage+a[0].personalDetails.studyDetails[2].Subjectandpercentage.english+
    a[0].personalDetails.studyDetails[2].Subjectandpercentage.maths);





//alternate way 
let [ssc,Intermediate,btech]=a[0].personalDetails.studyDetails;

let {maths,english}=a[0].personalDetails.studyDetails[2].Subjectandpercentage;

console.log(ssc.percentage+Intermediate.percentage+btech.percentage+maths+english);
