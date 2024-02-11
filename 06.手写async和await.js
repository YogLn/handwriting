// 1. 定义一个promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p'), 500);
});

const myAsync = (generator) => {
  const iterator = generator();

  const handle = (iteratorResult) => {
    if (iteratorResult.done) {
      return;
    }

    const iteratorValue = iteratorResult.value;
    if (iteratorValue instanceof Promise) {
      iteratorValue.then((result) => handle(iterator.next(result))).catch((err) => iterator.throw(err));
    }
  };

  handle(iterator.next());
};

myAsync(function* generaFun() {
  const data = yield p;
  console.log(data);
});
