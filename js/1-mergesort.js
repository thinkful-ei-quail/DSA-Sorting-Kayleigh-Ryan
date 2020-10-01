// * 1. Understanding Merge Sort

const dataSet = [1, 21, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

console.log(dataSet.length / 2);
const middle = 8; // value = 9

// pivot = 9

console.log(mergeSort(dataSet));
// * 1 - 3 recursive calls
// first round splits in half
// second round splits in fourths
// third round splits in eights, down to single item array

// * 2 Resulting list after 16 recursive calls
const sortedDataSet = [
  1,
  2,
  9,
  16,
  21,
  26,
  27,
  28,
  29,
  34,
  39,
  40,
  43,
  45,
  46,
  49,
];

// * What are the first 2 lists to be merged?
// The first two items in the array always get merged first

// The Merge Sort Function
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  // console.log({ left, right });
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  console.log('merged!');
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    console.log({ left, right, array });
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
