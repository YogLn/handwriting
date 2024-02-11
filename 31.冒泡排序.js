function bubbleSort(arr) {
  let flag;
  for (let i = 0; i < arr.length; i++) {
    flag = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!flag) {
      break;
    }
  }
  return arr;
}

const arr = [5, 2, 1, 6, 8, 3, 4, 5, 6, 7];
console.log(bubbleSort(arr));
