// three num has been given 13,79, 45 find largest using if else 
let n1= 13, n2=79, n3=45;
// if(n1>n2) {
  
//     if(n1>n3){
//         console.log("n1 is the largest number")
//     }
// }
// else if(n2>n1){
  
//     if(n2>n3){
//         console.log("n2 is the largest number")
//     }
// }
// else{
//     console.log("n3 is the largest number")
// }
if (n1 > n2 && n1 > n3) {
    console.log("n1 is the largest number");
} else if (n2 > n1 && n2 > n3) {
    console.log("n2 is the largest number");
} else {
    console.log("n3 is the largest number");
}
