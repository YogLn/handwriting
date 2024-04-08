function myReduce(callback, initialValue) {
  // 如果数组为空且没有提供初始值，则抛出错误
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}

// 将 myReduce 方法添加到 Array.prototype 上
Array.prototype.myReduce = myReduce;

// 示例用法
const arr = [1, 2, 3, 4, 5];

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 输出 15
