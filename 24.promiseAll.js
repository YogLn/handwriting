function myPromiseAll(list) {
  return new Promise((resolve, reject) => {
    const res = [];
    let completed = 0;
    for (let i = 0; i < list.length; i++) {
      list[i]
        .then((value) => {
          res[i] = value;
          completed++;
          if (completed === list.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('Simulated error')); // 拒绝 Promise 并抛出错误
//   }, 1000);
// });

// let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);
myPromiseAll([p1, p2, p3])
  .then((value) => {
    console.log('value', value);
  })
  .catch((err) => {
    console.log('err', err);
  });
