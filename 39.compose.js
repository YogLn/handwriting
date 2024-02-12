// 递归实现
// function compose(...funcs) {
//   let count = funcs.length - 1;
//   let res = 0;
//   return function fn(x) {
//     if (count < 0) return res;
//     res = funcs[count--](x);
//     return fn(res);
//   };
// }

// 迭代实现
// function compose(...funcs) {
//   function callback(f, g) {
//     return function (x) {
//       return f(g(x));
//     };
//   }
//   return funcs.reduce(callback);
// }

function compose(...funcs) {
  return function (x) {
    let res = x;
    for (let i = funcs.length - 1; i >= 0; i--) {
      res = funcs[i](res);
    }
    return res;
  };
}

// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
