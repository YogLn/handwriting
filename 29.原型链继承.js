function Animal() {
  this.name = 'animal';
}

Animal.prototype.getName = function () {
  return this.name;
};

function Dog() {}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

const dog = new Dog();
console.log(dog.getName());
