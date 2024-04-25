// sum inarray all numbers to the element 
function getSum(numbers){
       var sum = 0;
       for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i];
       }
       return sum;
}

// var SubjectNumbers = [ 23, 34,12, 85, 39, 84, 34];
// var finResult = getSum(SubjectNumbers);
// console.log(finResult);

// in array get odd number and even number with for loop or while loop

function getOddEvenNumbers(numbers) {
   var sumEven = [];
   var sumOdd = [];
   for (let i = 0; i < numbers.length; i++) {
       const resultNumber = numbers[i];
       if (resultNumber % 2 === 0) {
           sumEven.push(resultNumber); // Use parentheses () instead of square brackets [] for push()
       }
       else{
            sumOdd.push(resultNumber);
       }
   }
   return {
      sumEven,
      sumOdd
   };// Return the result instead of using console.log()
}

var numbersArray = [12,13,15, 14];
var getResult = getOddEvenNumbers(numbersArray);
console.log(getResult);

// Get oldd or even number sum

var getSumResult1 = getSum(getResult.sumEven);// need to add defrent value 
var getSumResult2 = getSum(getResult.sumOdd);// same 

console.log(getSumResult1,getSumResult2)

// isleapYear logical term 

function isLeapYear(year) {
   if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
      var result = "Yes Your years is leapYear :-" +" "+ + year ; // need to add year so you can including + oparetor
      return result;
   }
   else{
      var result = "No ! Your Years not A Leapers :- "+ year ;
      return result;
   }
}

var resultYear = isLeapYear(1200);
console.log(resultYear );


// Factorial probelms solve  6! need to solve this 

function factorialNum(number){

   if (number == 1 || number  == 0) {
      return 1;
   }
   else{
      return number *factorialNum(number-1);// need to add factorial 
   }
}

var resultFact = factorialNum(7);
console.log(resultFact);

// convert meters to kilometers 

function metersTokilometers(number) {
   if (number <=  100) {
      var mitter = number * 1000;
      return mitter;
   }
   else if (number <= 1000){
      var centimetter = number * 100;
      return centimetter;
   }
}

var finalMeters = metersTokilometers(4);
console.log(finalMeters);


// reversing factorial 

function revergeFactorial(factorialValue){
        
    let number = 1;
    let factorial = 1;
    while (factorial < factorialValue) {
      number ++;
      factorial *= number;
    }
    if (factorial === factorialValue) {
      return number;
    }
    else {
      return " No Reverse factorial number is it value";
    }
}

console.log(revergeFactorial(721));

// convert a minute or sece or hours 


function convertMinute(minute) {
  
   var minute = minute / 60;
   return minute;

}

console.log(convertMinute(140));


// Find the maximum number in an array of numbers
function maxNumber(numbers) {
   let getnumber = [];
   for (let i = 0; i < numbers.length; i++) {
      getnumber = numbers[i];
      if (numbers[i] > getnumber) {
         getnumber = numbers[i];
      }
   }
   return getnumber;
}

var allNumbers = [ 70, 100, 79, 29, 69, 120];

var finalResult = maxNumber(allNumbers);
console.log(finalResult);


//Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n) // problems that it 
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n = findFibonacci(10);
console.log(n);



//Print the first 10 Fibonacci numbers without recursion

function isPrime(numbers) {
   if (numbers > 2) {
      return false;
   }
   if (numbers === 2) {
      return true;
   }
   let maxDiv = math.sqrt(numbers);
   for (let i = 2; i < numbers.length; i++) {
      if (n % i === 0) {
         return false;
      } 
   }
   return true;
}


console.log(isPrime(3));

//  Calculate the sum of digits of a positive integer number

function sumDigits(numbers) {
   let s = numbers.toString();
   let sum = 0 ;
   for (let char of s) {
      let digit = parseInt(char)
      sum += digit;
      
   }
   return sum ;
}

let sum =sumDigits(12423334);
console.log(sumDigits(sum));


//Print the first 100 prime numbers

//function prints the first nPrime numbers

function primeNumbers(nPrime) {
   let n = 0;
   let i = 2;
   while (n < nPrime) {
      if(isPrime(i)){
         print(n," --> ",i );
         n++;
      }
      n++;
   }
}

//Returns true if a number is prime

function isPrime(n) {
   if(n < 2) return false;
   if( n == 2) return true;
   let maxDiv = math.sqrt(n);
   for (let i = 0; i < maxDiv; i++) {
      if (n % i == 0) {
         return false;
      }
      
   }
   return true;

}

