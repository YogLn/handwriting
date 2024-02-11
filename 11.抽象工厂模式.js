/**
 * 抽象工厂模式
 * 银行：存钱 - 取钱 - 理财
 * 农行、建行、中国银行
 */

class Bank {
  constructor(name, type, steps) {
    this.name = name;
    this.type = type;
    this.steps = steps;
  }

  say() {
    console.log('name: ' + this.name);
  }

  setCount() {}
}

class LHBank extends Bank {
  constructor(name) {
    super(name, 'inMoney', []);
  }
}
class JHBank extends Bank {
  constructor(name) {
    super(name, 'outMoney', []);
  }
}
class ZGBank extends Bank {
  constructor(name) {
    super(name, 'money', []);
  }
}

function createFactory(name) {
  switch (name) {
    case 'LHBank':
      return LHBank;
    case 'JHBank':
      return JHBank;
    case 'ZGBank':
      return ZGBank;
  }
}

let A = createFactory('LHBank');
let a = new A('建行');
a.say();
