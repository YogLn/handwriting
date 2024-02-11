// function add(...arg1) {
//   let x = arg1.reduce((a, b) => a + b, 0);
//   return function (...arg2) {
//     if (arg2.length === 0) return x;
//     let y = arg2.reduce((a, b) => a + b, 0);
//     return add(x + y);
//   };
// }

// console.log(add(1)(2)(3, 4, 5)()); // 15

function curry(fn) {
  return function curried(...args) {
    if (args.length === fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); //6
