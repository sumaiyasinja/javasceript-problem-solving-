//Print numbers from 1 to 10
for (let i = 0; i <= 100; i+=2) {
    if (i >=1) {
        console.log(i)
    }
}


// Print the multiplication table with 7

// for(let i = 1; i <= 10; i++)
// {
//     let row = "7 * " + i + " = " + 7 * i;
//     console.log(row);
// }

for (let i = 0; i <= 10; i++) {
    let row = "10 *" + i + "=" +10*i;
    console.log(row);
}

// calculate 10! 

let sum = 1;
for (let i = 1; i < 10; i++) {
    sum *= i;
}
console.log(sum);

// Calculate the sum of odd numbers greater than 10 and less than 30

let total = 0;
for (let i = 10; i < 30; i += 2) {
    total += i; 
}

console.log(total);


// Create a function that will convert from Celsius to Fahrenheit

function convertFahrenheit(celsius) {
    var calculate = celsius * 1.8 + 32;
    return calculate;
}

console.log(convertFahrenheit(32));

//Create a function that will convert from Fahrenheit to Celsius


function convertCelsius(farenheite) {
    var resultF = (farenheite - 32) / 1.8;
    return resultF.toFixed(2);
}

console.log(convertCelsius(100));


//  Calculate the sum of numbers in an array of numbers

function TotalSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
var totalMarks = [12, 23, 34, 21,23];
var finalResul = TotalSum(totalMarks);
console.log(finalResul);


// Calculate the average of the numbers in an array of numbers

function avarageMark(marks) {
    let sum = 0;
    let lenth = 0;
    for (let i = 0; i < marks.length; i++) {
        lenth += i;
        sum += marks[i];
        
    }
    return sum / lenth;
}

var markList = [
    23, 233, 43, 23,34
];
var final = avarageMark(markList);
console.log(final);

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
function givePositiveNumber(numbers) {
    let get= [];
   for (let i = 0; i < numbers.length; i++) {
        let even = numbers[i];
        if (even > 1 || even == 0) {
            get.push(even);
        }
    
   }
   return get;

}


var mark = [ -12, 23, 23, -34,12];
var finalnumber = givePositiveNumber(mark);
console.log(finalnumber);


var final = avarageMark(finalnumber);
console.log(final);


// Find the maximum number in an array of numbers
