export default function deepMerge(obj1, obj2) {
  if (!obj1 || !obj2) {
    return obj1 || obj2;
  }

  if (typeof obj1 !== 'object' || Array.isArray(obj2)) {
    return obj2;
  }

  if (typeof obj2 !== 'object') {
    return obj1;
  }

  const obj = {};
  Object.keys(obj1).forEach((key) => {
    obj[key] = deepMerge(obj1[key], obj2[key]);
  });
  Object.keys(obj2).forEach((key) => {
    if (!(key in obj)) {
      obj[key] = obj2[key];
    }
  });

  return obj;
}
