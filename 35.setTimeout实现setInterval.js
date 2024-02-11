function myInterval(fn, time) {
  let timer;

  function interval() {
    timer = setTimeout(() => {
      fn();
      interval();
    }, time);
  }

  interval();

  return () => {
    clearInterval(timer);
  };
}

const cancel = myInterval(() => console.log(Date.now()), 1000);

cancel();
