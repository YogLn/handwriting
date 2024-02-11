/**
 * 超时请求：如果超过n秒，返回请求超时
 */

function overTime(request, time) {
  function failTask() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('请求失败'));
      }, time);
    });
  }
  return Promise.race([request(), failTask()]);
}

const getData1 = () => {
  return new Promise((resolve) => [
    setTimeout(() => {
      resolve('success');
    }, 1000),
  ]);
};

const getData2 = () => {
  return new Promise((resolve) => [
    setTimeout(() => {
      resolve('success');
    }, 4000),
  ]);
};

console.log(new Date());
overTime(getData1, 3000)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log('err', err);
  });

overTime(getData2, 3000)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log('err', err);
  });
