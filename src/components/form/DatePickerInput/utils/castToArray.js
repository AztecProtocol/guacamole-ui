export default function castToArray(strOrArr) {
  if (!strOrArr) {
    return [];
  }

  if (typeof strOrArr === 'string') {
    return [strOrArr];
  }

  return strOrArr;
}
