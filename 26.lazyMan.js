class _LazyMan {
  constructor(name) {
    this.list = [];
    this.name = name;
    this.sayName();
    setTimeout(async () => {
      for (const fn of this.list) {
        await fn();
      }
    });

    setTimeout(() => {
      this.list.forEach(async (fn) => await fn());
    });
  }
  sayName() {
    console.log(`i am ${this.name}`);
  }

  eat(what) {
    this.list.push(() => {
      console.log(`eat ${what}`);
    });
    return this;
  }

  _hold(seconds) {
    return function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`${seconds}s 后`);
          resolve();
        }, seconds * 1000);
      });
    };
  }
  sleep(seconds) {
    this.list.push(this._hold(seconds));
    return this;
  }

  sleepFirst(seconds) {
    this.list.unshift(this._hold(seconds));
    return this;
  }
}

//测试
const LazyMan = (name) => new _LazyMan(name);
LazyMan('jack').eat('lunch').sleep(2).eat('dinner').sleepFirst(2);
