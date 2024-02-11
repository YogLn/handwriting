// function flatten(arr) {
//   return arr.flat(Infinity);
// }

// function flatten(arr) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res.push(...flatten(arr[i]));
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// function flatten(arr) {
//   while (arr.some((item) => Array.isArray(item))) {
//     arr = [].concat(...arr);
//   }
//   return arr;
// }

// 指定deep

function flatten(arr, deep = 0) {
  if (deep === 0) return arr;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flatten(arr[i], deep - 1));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

const arr = [[1, 2], 3, [3, [4, 5]]];
// console.log(flatten(arr));
console.log(flatten(arr, 1));
