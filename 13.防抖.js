// const debounce = (fn, delay = 300) => {
//   let timer = null;
//   return function (...args) {
//     clearInterval(timer);
//     const context = this;
//     const args = arguments;
//     timer = setTimeout(() => {
//       fn.apply(context, apply);
//     }, delay);
//   };
// };

// 进阶，增加一个参数，控制立即执行
const debounce = (fn, delay = 1000, immediate = false) => {
  let timer = null;
  return function (...args) {
    let that = this;
    timer && clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) {
        fn.call(that, ...args);
      }
    } else {
      timer = setTimeout(() => {
        fn.call(that, ...args);
      }, delay);
    }
  };
};
