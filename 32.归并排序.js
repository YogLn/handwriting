function merge(left, right) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  if (i < left.length) {
    res.push(...left.slice(i));
  } else {
    res.push(...right.slice(j));
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
const arr = [5, 2, 1, 6, 8, 3, 4, 5, 6, 7];
console.log(mergeSort(arr));
