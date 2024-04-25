// Write a program to find avarage marks of Math, Chemistry,Biology,Physics & Bangla of a student.
// sample input 75.25, 65, 80, 35.45, 99.50 
// output : 71. 04
const marks =[75.25, 65, 80, 35.45, 99.50 ];
let sumMarks=0;
for(let i=0; i<marks.length; i++){
    sumMarks+=marks[i];
}
let avarage= sumMarks/marks.length;
console.log(avarage.toFixed(2));