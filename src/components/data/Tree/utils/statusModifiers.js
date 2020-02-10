import replaceValue from 'utils/replaceValue';

export const hasStatus = (modifier, status) => (modifier && modifier.has(status)) || false;

export const getModifier = (modifiers, value) => (modifiers && modifiers[value]) || null;

export const addStatus = (modifiers, value, status) => {
  const prevModifier = getModifier(modifiers, value);
  if (prevModifier && prevModifier.has(status)) {
    return modifiers;
  }

  const modifier = new Set(prevModifier);
  modifier.add(status);

  return replaceValue(
    modifiers || {},
    value,
    modifier,
    true,
  );
};

export const removeStatus = (modifiers, value, status) => {
  const prevModifier = getModifier(modifiers, value);
  if (!prevModifier || !prevModifier.has(status)) {
    return modifiers;
  }

  let modifier = new Set(prevModifier);
  modifier.delete(status);
  if (!modifier.size) {
    modifier = null;
  }

  return replaceValue(
    modifiers,
    value,
    modifier,
  );
};

export const toggleStatus = (modifiers, value, status) => {
  const modifier = getModifier(modifiers, value);
  return hasStatus(modifier, status)
    ? removeStatus(modifiers, value, status)
    : addStatus(modifiers, value, status);
};
