// * 2. Understanding Quick Sort

const dataSet = [3, 9, 1, 14, 17, 24, 22, 20];
const dataSet2 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
// The pivot could have been 14 or 14 after the first partition is
// 3 9 1 14 17 24 22 20.
//

// console.log(quickSort(dataSet));

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

// Lomuto's algorithm:

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    console.log({ array, i, j });
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

console.log(quickSort(dataSet2));
