/**
 * 单例模式
 * 全局缓存，全局状态管理，核心是保障全局只有一个对象访问
 */

function Animal() {}

Animal.prototype.setCont = function (name, age) {
  this.name = name;
  this.age = age;
  console.log('name, age', this.name, this.age);
};

const singleton = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Animal();
      return instance;
    }
    return instance;
  };
})();

const a1 = new singleton();
const a2 = new singleton();
a1.setCont('yogln', 17);
a2.setCont('jack', 22);
console.log('a1 === a2', a1 === a2);
