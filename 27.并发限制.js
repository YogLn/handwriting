class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.count = 0;
    this.list = [];
  }

  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(order);
        }, time);
      });
    };
    this.list.push(promiseCreator);
  }

  start() {
    for (let i = 0; i < this.list.length; i++) {
      this.next();
    }
  }

  next() {
    if (this.list.length && this.count < this.limit) {
      this.count++;
      this.list
        .shift()()
        .then((value) => {
          console.log(value);
          this.count--;
          this.next();
        });
    }
  }
}

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
scheduler.start();
