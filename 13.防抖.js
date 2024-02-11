const debounce = (fn, delay = 300) => {
  let timer = null;
  return function (...args) {
    clearInterval(timer);
    const context = this;
    const args = arguments;
    timer = setTimeout(() => {
      fn.apply(context, apply);
    }, delay);
  };
};
