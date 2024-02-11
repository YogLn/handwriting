function inherit(target, origin) {
  function Fn() {}
  Fn.prototype = origin.prototype;
  const fn = new Fn();
  target.prototype = fn;
  fn.constructor = target;
}
function Animal() {
  this.name = 'Animal';
}

Animal.prototype.say = function () {
  console.log(`name: ${this.name}`);
};

function Dog() {
  Animal.call(this);
}

inherit(Dog, Animal);
const dog = new Dog();
dog.say();
