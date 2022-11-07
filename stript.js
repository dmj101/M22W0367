const students = [
    ["John", 55],
    ["Lara", 79],
    ["Roy", 97],
    ["Tabitha", 42],
    ["Tim", 81],
    ["Sandra", 96],
];


//console.log(students[0][0])
//console.log(students[1][0])

   
let sum = 0;
let count = 0;


for(let i =0 ; i < students.length;i++)
{

sum = sum + students[i][1]


 }
 console.log("Total "+sum)
 console.log("average score is "+sum/students.length)
 console.log("students over 90:")
for (let i = 0; i < students.length; i++)
{

for (let j = 0; j<1;j++)
{
if( students[i][1]>90)
 {
      console.log(students[i][0])
 }

}
}
console.log("students sorted by score :")
let newarry = students
let temp;
for (let i = 1; i < newarry.length; i++)
{

for (let j = 0; j<newarry.length;j++)
{

if (newarry[i][1]>newarry[j][1])
{
  
    
   temp = newarry[i];
   newarry[i] = newarry[j]
   newarry[j] = temp
   
  
}

}

}


for(let index = 0; index < newarry.length; index++) {
    console.log(newarry[index][0] + ' - ' + newarry[index][1]);
}


