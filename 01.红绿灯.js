function red() {
  console.log('red', new Date());
}

function green() {
  console.log('green', new Date());
}

function yellow() {
  console.log('yellow', new Date());
}

function task(time, light) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (light === 'red') {
        red();
      } else if (light === 'green') {
        green();
      } else {
        yellow();
      }
      resolve();
    }, time);
  });
}

function promiseRunTask() {
  task(3000, 'red')
    .then(() => task(2000, 'green'))
    .then(() => task(1000, 'yellow'))
    .then(() => promiseRunTask());
}

promiseRunTask();

async function asyncRunTask() {
  await task(3000, 'red');
  await task(2000, 'green');
  await task(1000, 'yellow');
}

asyncRunTask();
