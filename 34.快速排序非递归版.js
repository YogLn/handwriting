function quickSort(arr) {
  let list = [[0, arr.length - 1]];
  while (list.length) {
    let now = list.pop();
    let [left, right] = [now[0], now[1]];
    if (left >= right) continue;
    let pivot = arr[left];
    while (left < right) {
      while (left < right && arr[right] >= pivot) right--;
      arr[left] = arr[right];
      while (left < right && arr[left] <= pivot) left++;
      arr[right] = arr[left];
    }
    arr[left] = pivot;
    list.push([now[0], left - 1]);
    list.push([left + 1, now[1]]);
  }
  return arr;
}

const arr = [5, 2, 1, 6, 8, 3, 4, 5, 6, 7];
console.log(quickSort(arr));
