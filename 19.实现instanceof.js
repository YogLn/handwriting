function newInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  while (true) {
    if (proto === prototype) return true;
    if (proto === null) return false;
    proto = Object.getPrototypeOf(proto);
  }
}
// 测试
class Parent {}
class Child extends Parent {}
const child = new Child();
console.log(newInstanceOf(child, Parent), newInstanceOf(child, Child), newInstanceOf(child, Array));
