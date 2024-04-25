/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
let i = 1;
do {
    
    if (i % 2 ){
        i++;
        continue;
    }
        console.log(i);       
        i++;

    
} while (i <= 40);

