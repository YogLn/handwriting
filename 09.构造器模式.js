/**
 * 构造器模式
 */

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.say = function () {
//     console.log('name, age', name, age);
//   };
// }

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log('name, age', this.name, this.age);
  }

  static setCont() {
    console.log('setCont');
  }
}

let u1 = new User('tom', 18);
let u2 = new User('tom', 22);

u1.say();
u2.say();
User.setCont();
