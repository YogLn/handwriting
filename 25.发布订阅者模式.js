class EventEmitter {
  constructor() {
    this.cache = [];
  }

  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name, fn) {
    if (this.cache[name]) {
      let tasks = this.cache[name];
      const index = tasks.findIndex((t) => t === fn);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    }
  }

  emit(name, once = false) {
    if (this.cache[name]) {
      this.cache[name].forEach((fn) => fn());
    }
    if (once) {
      delete this.cache[name];
    }
  }
}

const e = new EventEmitter();
const task1 = () => console.log('Task1');
const task2 = () => console.log('Task2');
e.on('task', task1);
e.on('task', task2);
e.off('task', task1);
// e.emit('task', true);
console.log(e.cache);
