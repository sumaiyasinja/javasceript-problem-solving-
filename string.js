// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
/*function removeChar(str){
  if(str.length==2){
    return str
  }else{
    return str.slice(1, -1);
  }
 };

 let myStrings= "sinja love u"
 console.log(removeChar(myStrings)) */
 function removeChar(str){
 
  return str.slice(1, -1);

};
let myStrings= "dada"
console.log(removeChar(myStrings))