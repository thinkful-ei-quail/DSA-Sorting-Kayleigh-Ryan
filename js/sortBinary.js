function sortBinary(arr) {
  // stuff
  if (arr.length === 0) {
    return arr;
  }
  const zeroes = [];
  const ones = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (arr[i] === 0) {
      zeroes.push(arr[i]);
    } else {
      ones.push(value);
    }
  }
  return zeroes.concat(ones);
}

console.log(sortBinary([0, 1, 1, 0, 1, 0, 1, 1])); // [0, 0, 0, 1, 1, 1, 1, 1]
console.log(sortBinary([1, 1, 1, 1, 1, 0, 0, 0]));
console.log(sortBinary([1, 1, 1, 1, 1]));
console.log(sortBinary([0, 0, 0]));
console.log(sortBinary([0, 0, 0]));
console.log(sortBinary([]));
