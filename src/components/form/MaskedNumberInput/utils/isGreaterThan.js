import parseValue from './parseValue';

export const isLargerInteger = (largeValue, smallValue) => {
  if (largeValue.length !== smallValue.length) {
    return largeValue.length > smallValue.length;
  }

  let isLargerThan = false;
  for (let i = 0; i < largeValue.length; i += 1) {
    if (largeValue[i] !== smallValue[i]) {
      isLargerThan = largeValue[i] > smallValue[i];
      break;
    }
  }

  return isLargerThan;
};

export const isLargerDecimal = (largeDecimal, smallDecimal) => {
  const vL = largeDecimal.replace(/0{1,}$/, '');
  const vS = smallDecimal.replace(/0{1,}$/, '');

  let isLargerThan = false;
  for (let i = 0; i < vL.length; i += 1) {
    if (vL[i] !== vS[i]) {
      isLargerThan = !vS[i] || (vL[i] > vS[i]);
      break;
    }
  }

  return isLargerThan;
};

export default function isGreaterThan(largeValue, smallValue) {
  if (largeValue === '' || smallValue === '') {
    return false;
  }

  const vL = parseValue(largeValue);
  const vS = parseValue(smallValue);

  if (vL.sign !== vS.sign) {
    return !vL.sign;
  }

  if (vL.integerValue !== vS.integerValue) {
    const isLarger = isLargerInteger(vL.integerValue, vS.integerValue);
    return !!(isLarger ^ !!vL.sign); // eslint-disable-line no-bitwise
  }

  if (vL.decimals !== vS.decimals) {
    const isLarger = isLargerDecimal(vL.decimals, vS.decimals);
    return !!(isLarger ^ !!vL.sign); // eslint-disable-line no-bitwise
  }

  return false;
}
