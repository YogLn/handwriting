/**
 * 观察者模式：
 * 观者者： 股民（张三、李四、王五）
 * 被观察者： 股票公司（阿里、京东）
 * 状态：上涨 下跌 =》 买入 卖出 观望
 */

// 观察者
class Observer {
  constructor(name, fn) {
    this.name = name;
    this.fn = fn;
  }

  stateChange(state) {
    console.log(this.name, '股票' + state);
  }
}

// 创建观察者
let o1 = new Observer('张三', (cName, state) => {
  console.log(cName + ': ' + state + '卖出');
});
let o2 = new Observer('李四', (cName, state) => {
  console.log(cName + ': ' + state + '买入');
});

// 被观察者

class Subject {
  observers = []; // 收集观察者
  constructor(state) {
    this.state = state;
  }

  // 设置状态: 股票变化 =》 股民的操作
  setState(state, cName) {
    if (state !== this.state) {
      this.observers.forEach((item) => {
        item.fn(cName, this.state);
        item.stateChange(this.state);
      });
    }
  }

  // 获取当前股票状态
  getState() {
    return this.state;
  }

  // 添加股民
  addObserver(obs) {
    this.observers = this.observers.filter((item) => item !== obs);
    this.observers.push(obs);
  }

  // 取消股民
  cancelObserver(obs) {
    this.observers = this.observers.filter((item) => item !== obs);
  }
}

let ali = new Subject('上涨');
ali.addObserver(o1);
ali.addObserver(o2);
ali.cancelObserver(o1);
ali.setState('下跌', 'ali股票');
