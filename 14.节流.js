const throttle = (fn, delay) => {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
};
