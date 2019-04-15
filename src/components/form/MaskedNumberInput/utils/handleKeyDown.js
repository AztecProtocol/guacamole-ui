import getPositionBoundaries from './getPositionBoundaries';

export default function handleKeyDown(e, selection, updateCursorPosition, {
  allowNegative = false,
  allowDecimal = false,
  prefix = '',
  suffix = '',
} = {}) {
  const {
    keyCode, target,
  } = e;
  const {
    value,
  } = target;
  const {
    start,
    end,
  } = selection;
  const boundaries = getPositionBoundaries(e, {
    allowNegative,
    prefix,
    suffix,
  });

  switch (keyCode) {
    case 8: {
      if (start === end) {
        if (!boundaries.some(([min, max]) => start > min && start <= max)) {
          e.preventDefault();
          const boundIndex = boundaries.findIndex(([min]) => start === min);
          if (boundIndex > 0) {
            updateCursorPosition(boundaries[boundIndex - 1][1]);
          }
        } else if (value[start - 1] === ',') {
          e.preventDefault();
          updateCursorPosition(start - 1);
        }
      }
      break;
    }
    case 37: {
      const nextStart = start - 1;
      if (value[nextStart - 1] === ',' && !e.shiftKey) {
        e.preventDefault();
        updateCursorPosition(start - 2);
      } else {
        const boundIndex = boundaries.findIndex(([, max]) => nextStart <= max);
        if (boundIndex < 0 || nextStart < boundaries[boundIndex][0]) {
          e.preventDefault();
          if (boundIndex === 0) {
            updateCursorPosition(boundaries[0][0]);
          } else if (boundIndex > 0) {
            updateCursorPosition(boundaries[boundIndex - 1][1]);
          } else {
            updateCursorPosition(boundaries[boundaries.length - 1][1]);
          }
        }
      }
      break;
    }
    case 38:
      e.preventDefault();
      updateCursorPosition(boundaries[0][0]);
      break;
    case 39: {
      if (value[end] === ',' && !e.shiftKey) {
        e.preventDefault();
        updateCursorPosition(end + 2);
      } else {
        const boundIndex = boundaries.findIndex(([, max]) => end <= max);
        if (boundIndex < 0 || end === boundaries[boundIndex][1]) {
          e.preventDefault();
          if (boundIndex < 0 || boundIndex === boundaries.length - 1) {
            updateCursorPosition(boundaries[boundaries.length - 1][1]);
          } else {
            updateCursorPosition(boundaries[boundIndex + 1][0]);
          }
        }
      }
      break;
    }
    case 40:
      e.preventDefault();
      updateCursorPosition(boundaries[boundaries.length - 1][1]);
      break;
    default: {
      const char = e.key;
      if (start === end
      && char.length === 1
      && (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey)
      ) {
        const isValidDigit = char.match(/[0-9]/) && (start !== 0 || !value.startsWith(`-${prefix}`));
        const isValidSign = char === '-' && allowNegative && !value.startsWith(`-${prefix}`);
        const isValidDecimal = char === '.' && allowDecimal && value.indexOf('.') === -1; // will always be false if prefix or suffix has a dot
        if (!isValidDigit && !isValidSign && !isValidDecimal) {
          e.preventDefault();
        }
      }
    }
  }
}
