Function.prototype.myBind = function (ctx) {
  let that = this;
  let args = Array.from(arguments).slice(1);
  console.log('this', this);

  function fBind() {
    that.apply(this instanceof fBind ? this : ctx, args.concat(Array.from(arguments).slice(1)));
  }
  fBind.prototype = Object.create(this.prototype);
  return fBind;
};

const me = {name: 'yogln'};
function sayName() {
  console.log(`my name: ${this.name}`);
}

sayName.myBind(me)();
