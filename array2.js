//given array var fruits =['Apple', 'Banana', 'Orange'];
// find index of Banana and replace with mango
//remove Orange and add Watermelon
var fruits =['Apple', 'Banana', 'Orange'];
let ans1 = fruits.indexOf('Banana');
console.log(ans1);
fruits[fruits.indexOf('Banana')]= 'Mango';
console.log(fruits);

fruits.pop()
console.log(fruits);
fruits.push('Watermelon')
console.log(fruits);
