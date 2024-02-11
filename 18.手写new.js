function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const newObj = fn.call(obj, ...args);
  return newObj instanceof Object ? newObj : obj;
}
// 测试
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};
const me = _new(Person, 'Jack');
me.sayName();
console.log(me);
