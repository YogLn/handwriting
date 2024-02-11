function deepCopy(obj) {
  if (typeof obj === 'object') {
    const res = obj instanceof Array ? [] : {};
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        res[key] = deepCopy(obj[key]);
      } else {
        res[key] = obj[key];
      }
    }
    return res;
  } else {
    return obj;
  }
}

const obj = {
  name: 'yogln',
  age: 18,
  friends: {
    name: 'John',
  },
};
const newObj = deepCopy(obj);
newObj.friends.name = 'Kobe';
console.log(obj.friends);
