/***
sumRange.js

Subtask-1:

Display sum of all the odd numbers from 91 to 129.



Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let oddsum = 0;
// for ( let i= 91; i <= 129; i++){
//  if (i % 2 !== 0){
//     oddsum += i

//  }
// }
// console.log(oddsum);

let evensum = 0;
// for ( let i= 91; i <= 129; i++){
//  if (i % 2 === 0){
//     evensum += i

//  }
// }
// console.log(evensum);

// not recommended to use ternary use if,else instead
for ( let i= 91; i <= 129; i++){
    i % 2 ?  oddsum += i : evensum += i
   }
   console.log(oddsum,evensum);