function get(obj, path, defaultVal) {
  path = Array.isArray(path) ? path : path.split('.');
  for (let item of path) {
    if (!obj || typeof obj !== 'object') {
      return defaultVal;
    }
    obj = obj[item];
  }
  return obj === undefined ? defaultVal : obj;
}

const obj = {
  a: {
    b: {
      c: 'ccc',
    },
  },
};

console.log(get(obj, 'a.b.c', 'default'));
console.log(get(obj, 'a.b.d', 'default'));
console.log(get(obj, ['a', 'b', 'c'], 'default'));
