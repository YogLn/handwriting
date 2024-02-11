// 1. 定义类
class Scheduler {
  constructor() {
    this.queue = [];
    this.runningCount = 0;
  }

  add(promiseCreator) {
    if (this.runningCount < 2) {
      this.runningCount++;
      return this.run(promiseCreator);
    } else {
      return new Promise((resolve) => {
        this.queue.push(() => promiseCreator().then(resolve));
      });
    }
  }

  run(promiseCreator) {
    return promiseCreator().then(() => {
      this.runningCount -= 1;
      if (this.queue.length) {
        this.run(this.queue.shift());
      }
    });
  }
}

// 2.实例化类
const scheduler = new Scheduler();
// 3.封装异步
const timeout = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

// 4.发送异步请求
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order, new Date()));
};

// 5.模拟请求
addTask(1000, '1');
addTask(2000, '2');
addTask(3000, '3');
addTask(4000, '4');

// 输出：
// output: 1 2 3
