const LinkedList = require('./LinkedList');

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
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

function llmSort(list) {
  let currentNode = list.head;
  if (currentNode.next === null) {
    return list;
  }

  const middle = middleOfList(list);
  let left = currentNode;
  currentNode = currentNode.next;
  let right = currentNode.next;

  console.log({ left, middle, right });
  // return sorted linked list
}

const dataSet = [89, 30, 25, 32, 72, 70, 51];
// makes a new linked list
const link = new LinkedList();

// fills the linked list with the array
function populateLink() {
  for (let i = 0; i < dataSet.length; i++) {
    link.insertLast(dataSet[i]);
  }
}
populateLink();
// console.log(link);
llmSort(link);

function getSize(list) {
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

// O(n)
function middleOfList(list) {
  const size = getSize(list);
  let currNode = list.head;
  let midNode = list.head;

  if (size % 2 === 0)
    while (currNode !== null) {
      currNode = currNode.next.next;
      midNode = midNode.next;
    }
  else if (size % 2 === 1)
    while (currNode.next !== null) {
      currNode = currNode.next.next;
      midNode = midNode.next;
    }
  return midNode;
}

console.log(link.length);
