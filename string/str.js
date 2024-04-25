function areEqualCaseInsensitive(str1, str2) {
    console.log(str1, str2);
  const areEqual = str1.toUpperCase()
  const areEqual2 = str2.toUpperCase();
  console.log(areEqual,areEqual2);
}
console.log(areEqualCaseInsensitive('sinja', 'SINJA'));

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String('strPrim'); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
