function quickSort(arr) {
  if (arr.length < 2) return arr;
  const left = [];
  const right = [];
  let pivot = arr.shift();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [5, 2, 1, 6, 8, 3, 4, 5, 6, 7];
console.log(quickSort(arr));
