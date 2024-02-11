/**
 * 怎么判断是一个promise
 * 定义：promiseA+闺房中 promise是一个object或者是一个函数并且有then方法
 * 原因：因为历史原因，类promise对象都实现了then接口
 * 注意：不用instanceof 和 Object.prototype.toString()
 */
function isPromiseList(value) {
  return !!value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function';
}

const p = new Promise(() => {});

console.log(isPromiseList(p));
console.log(isPromiseList(null));
