function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log(`i am ${this.name}`);
};
function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dog = new Dog('旺财');
dog.sayName();
