/***
oddEven.js

Subtask-1:Find all the odd numbers from 61 to 100.

Subtask-2:Find all the even numbers from 78 to 98. */

for (let i = 61; i <=100 ; i++){
     i % 2 ?  console.log("odd number : " + i) : ""; //not recommended
}
let i = 78
while(i <= 98){
    i % 2 ? "": console.log("even number :",i); //not recommended

    i++;
}

/***
oddEven.js

Subtask-1: Find all the odd numbers from 61 to 100.
*/

for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("odd number : " + i);
    }
}

/***
Subtask-2: Find all the even numbers from 78 to 98.
*/

let j = 78;
while (j <= 98) {
    if (j % 2 === 0) {
        console.log("even number :", j);
    }
    j++;
}