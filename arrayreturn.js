const reverseSeq = n => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};
  
  const n = 4;
  console.log(reverseSeq(n)); // Output: [5, 4, 3, 2, 1]
  