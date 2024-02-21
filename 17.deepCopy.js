// function deepCopy(obj) {
//   if (typeof obj === 'object') {
//     const res = obj instanceof Array ? [] : {};
//     for (const key in obj) {
//       if (typeof obj[key] === 'object') {
//         res[key] = deepCopy(obj[key]);
//       } else {
//         res[key] = obj[key];
//       }
//     }
//     return res;
//   } else {
//     return obj;
//   }
// }

// const obj = {
//   name: 'yogln',
//   age: 18,
//   friends: {
//     name: 'John',
//   },
// };
// const newObj = deepCopy(obj);
// newObj.friends.name = 'Kobe';
// console.log(obj.friends);

/**
 * 深拷贝考虑循环引用的版本
 */
function deepCopy(obj, cache = new WeakMap()) {
  // 如果是基本类型或者 null，则直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 如果是数组，则创建一个新数组
  if (Array.isArray(obj)) {
    // 防止循环引用
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    // 创建一个新数组，将每个元素递归地进行深拷贝
    const newArray = [];
    cache.set(obj, newArray);
    obj.forEach((item, index) => {
      newArray[index] = deepCopy(item, cache);
    });
    return newArray;
  }

  // 如果是对象，则创建一个新对象
  if (typeof obj === 'object') {
    // 防止循环引用
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    // 创建一个新对象，将每个属性递归地进行深拷贝
    const newObj = {};
    cache.set(obj, newObj);
    Object.keys(obj).forEach((key) => {
      newObj[key] = deepCopy(obj[key], cache);
    });
    return newObj;
  }
}

// 测试
const obj1 = {name: 'John'};
const obj2 = {name: 'Jane'};
obj1.obj2 = obj2;
obj2.obj1 = obj1;

const copiedObj = deepCopy(obj1);
console.log(copiedObj);
