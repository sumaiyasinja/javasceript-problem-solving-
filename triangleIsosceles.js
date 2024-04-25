//  you are given a triangle with the sides 9,8,9. 
// write a program to check whether a triangle is Isosceles or not using if - else condition 
// let side1= 9, side2=8, side3=9;
let side1= prompt("Enter The first side value of TRIANGLE");
let side2= prompt("Enter The second side value of TRIANGLE");
let side3= prompt("Enter The third side value of TRIANGLE");


if (side1==side2 || side2==side3 || side1==side3 )  {
    console.log('The triangle is Isosceles');
}
else{
    console.log('The triangle is not Isosceles');
}

