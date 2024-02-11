const me = {name: 'Jack'};

Function.prototype.myCall = function (ctx) {
  ctx = ctx || globalThis;
  ctx.fn = this;
  const args = Array.from(arguments).slice(1);
  ctx.fn(...args);
  delete ctx.fn;
};
function say() {
  console.log(...arguments);
  console.log(`My name is ${this.name || 'default'}`);
}
say.myCall(me, 123, 456);
