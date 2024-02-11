function mySetTimeout(fn, delay) {
  let timer;
  timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, delay);
}

mySetTimeout(() => console.log('hello world'), 1000);
