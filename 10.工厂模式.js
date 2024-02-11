/**
 * 工厂模式
 * 银行：存钱 - 取钱 - 理财
 */

function Bank(type, steps) {
  this.type = type;
  this.steps = steps;
}

function bankFactory(type) {
  switch (type) {
    case 'inMoney':
      return new Bank('inMoney', ['存钱']);
    case 'outMoney':
      return new Bank('outMoney', ['取钱']);
    case 'money':
      return new Bank('money', ['理财']);
  }
}

const b1 = bankFactory('inMoney');
console.log('b1', b1);
