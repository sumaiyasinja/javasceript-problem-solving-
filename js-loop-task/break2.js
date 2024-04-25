/* 
Write a while loop that adds numbers starting from 1,
 but stops (using break) as soon as the sum reaches or
 exceeds 100
*/
let i = 1;
let total = 1;
while (true){
    if(total >= 100){
        break;
    }
    console.log(i,total);
    total += i
    i++;
}