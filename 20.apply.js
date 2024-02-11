Function.prototype.myApply = function (ctx) {
  ctx = ctx || globalThis;
  ctx.fn = this;
  let args = Array.from(arguments).slice(1);
  ctx.fn(...args);
  delete ctx.fn;
};

let obj = {name: 'yogln'};
function sayName() {
  console.log(...arguments);
  console.log('my name is ' + this.name);
}
sayName.myApply(obj, 123);
