import handleKeyDown from './handleKeyDown';

const keyCodeMap = {
  Backspace: {
    code: 8,
  },
  ' ': {
    code: 32,
    char: ' ',
  },
  ArrowLeft: {
    code: 37,
  },
  ArrowUp: {
    code: 38,
  },
  ArrowRight: {
    code: 39,
  },
  ArrowDown: {
    code: 40,
  },
  0: {
    code: 48,
    char: '0',
  },
  1: {
    code: 49,
    char: '1',
  },
  a: {
    code: 65,
    char: 'a',
  },
  '-': {
    code: 189,
    char: '-',
  },
  '.': {
    code: 190,
    char: '.',
  },
};

const testKeyDown = (keys, prevValue, selection, props) => {
  const [, extra, key] = keys.match(/^(shift|alt|ctrl|meta)?\+?(.{1,})$/);
  const {
    code,
    char,
  } = keyCodeMap[key];
  const updateCursorPosition = jest.fn();

  const event = {
    key,
    keyCode: code,
    target: {
      value: char === undefined && code !== 8
        ? prevValue
        : prevValue.substring(0, selection.start) + (char || '') + prevValue.substring(selection.end),
    },
    preventDefault: jest.fn(),
    [`${extra}Key`]: true,
  };

  handleKeyDown(
    event,
    selection,
    updateCursorPosition,
    props,
  );

  return {
    ...event,
    updateCursorPosition,
  };
};

const allowNegative = true;

test('digit keys', () => {
  const pressOne = testKeyDown('1', '', {
    start: 0,
    end: 0,
  });
  expect(pressOne.preventDefault).not.toBeCalled();
  expect(pressOne.updateCursorPosition).not.toBeCalled();

  const pressZeroAfterOne = testKeyDown('0', '1', {
    start: 1,
    end: 1,
  });
  expect(pressZeroAfterOne.preventDefault).not.toBeCalled();
  expect(pressZeroAfterOne.updateCursorPosition).not.toBeCalled();

  const pressZeroBeforeOne = testKeyDown('0', '1', {
    start: 0,
    end: 0,
  });
  expect(pressZeroBeforeOne.preventDefault).not.toBeCalled();
  expect(pressZeroBeforeOne.updateCursorPosition).not.toBeCalled();

  const hundredToThousand = testKeyDown('0', '100', {
    start: 3,
    end: 3,
  });
  expect(hundredToThousand.preventDefault).not.toBeCalled();
  expect(hundredToThousand.updateCursorPosition).not.toBeCalled();

  const afterPrefix = testKeyDown('0', '$ ', {
    start: 2,
    end: 2,
  }, {
    prefix: '$ ',
  });
  expect(afterPrefix.preventDefault).not.toBeCalled();
  expect(afterPrefix.updateCursorPosition).not.toBeCalled();

  const afterPrefixDigit = testKeyDown('0', '$ 12', {
    start: 2,
    end: 2,
  }, {
    prefix: '$ ',
  });
  expect(afterPrefixDigit.preventDefault).not.toBeCalled();
  expect(afterPrefixDigit.updateCursorPosition).not.toBeCalled();

  const beforeSuffix = testKeyDown('0', '12 /p', {
    start: 2,
    end: 2,
  }, {
    suffix: ' /p',
  });
  expect(beforeSuffix.preventDefault).not.toBeCalled();
  expect(beforeSuffix.updateCursorPosition).not.toBeCalled();

  const withWholeRange = testKeyDown('0', '100', {
    start: 0,
    end: 3,
  });
  expect(withWholeRange.preventDefault).not.toBeCalled();
  expect(withWholeRange.updateCursorPosition).not.toBeCalled();
});

test('non-digit keys', () => {
  const pressA = testKeyDown('a', '', {
    start: 0,
    end: 0,
  });
  expect(pressA.preventDefault).toBeCalled();
  expect(pressA.updateCursorPosition).not.toBeCalled();

  const pressDot = testKeyDown('.', '12', {
    start: 2,
    end: 2,
  });
  expect(pressDot.preventDefault).toBeCalled();
  expect(pressDot.updateCursorPosition).not.toBeCalled();

  const pressMinus = testKeyDown('-', '12', {
    start: 0,
    end: 0,
  });
  expect(pressMinus.preventDefault).toBeCalled();
  expect(pressMinus.updateCursorPosition).not.toBeCalled();

  const pressSpace = testKeyDown(' ', '12', {
    start: 1,
    end: 1,
  });
  expect(pressSpace.preventDefault).toBeCalled();
  expect(pressSpace.updateCursorPosition).not.toBeCalled();
});

test('press left arrow key', () => {
  const atEnd = testKeyDown('ArrowLeft', '123', {
    start: 3,
    end: 3,
  });
  expect(atEnd.preventDefault).not.toBeCalled();
  expect(atEnd.updateCursorPosition).not.toBeCalled();

  const atStart = testKeyDown('ArrowLeft', '123', {
    start: 0,
    end: 0,
  });
  expect(atStart.preventDefault).toBeCalled();
  expect(atStart.updateCursorPosition).toBeCalledWith(0);

  const inMiddle = testKeyDown('ArrowLeft', '123', {
    start: 2,
    end: 2,
  });
  expect(inMiddle.preventDefault).not.toBeCalled();
  expect(inMiddle.updateCursorPosition).not.toBeCalled();

  const afterComma = testKeyDown('ArrowLeft', '1,234', {
    start: 2,
    end: 2,
  });
  expect(afterComma.preventDefault).not.toBeCalled();
  expect(afterComma.updateCursorPosition).not.toBeCalled();

  const afterCommaDigit = testKeyDown('ArrowLeft', '1,234', {
    start: 3,
    end: 3,
  });
  expect(afterCommaDigit.preventDefault).toBeCalled();
  expect(afterCommaDigit.updateCursorPosition).toBeCalledWith(1);

  const withShift = testKeyDown('shift+ArrowLeft', '1,234', {
    start: 3,
    end: 3,
  });
  expect(withShift.preventDefault).not.toBeCalled();
  expect(withShift.updateCursorPosition).not.toBeCalled();

  const afterSign = testKeyDown('ArrowLeft', '-1,234', {
    start: 1,
    end: 1,
  }, {
    allowNegative,
  });
  expect(afterSign.preventDefault).not.toBeCalled();
  expect(afterSign.updateCursorPosition).not.toBeCalled();

  const afterSignDigit = testKeyDown('ArrowLeft', '-1,234', {
    start: 2,
    end: 2,
  }, {
    allowNegative,
  });
  expect(afterSignDigit.preventDefault).not.toBeCalled();
  expect(afterSignDigit.updateCursorPosition).not.toBeCalled();

  const afterSignPrefix = testKeyDown('ArrowLeft', '-$ 1,234', {
    start: 3,
    end: 3,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSignPrefix.preventDefault).toBeCalled();
  expect(afterSignPrefix.updateCursorPosition).toBeCalledWith(1);

  const afterSignPrefixDigit = testKeyDown('ArrowLeft', '-$ 1,234', {
    start: 4,
    end: 4,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSignPrefixDigit.preventDefault).not.toBeCalled();
  expect(afterSignPrefixDigit.updateCursorPosition).not.toBeCalled();

  const afterSignBeforePrefix = testKeyDown('ArrowLeft', '-$ 1,234', {
    start: 1,
    end: 1,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSignBeforePrefix.preventDefault).not.toBeCalled();
  expect(afterSignBeforePrefix.updateCursorPosition).not.toBeCalled();

  const afterSignAsPrefix = testKeyDown('ArrowLeft', '-1,234', {
    start: 1,
    end: 1,
  }, {
    prefix: '-',
  });
  expect(afterSignAsPrefix.preventDefault).toBeCalled();
  expect(afterSignAsPrefix.updateCursorPosition).toBeCalledWith(1);

  const beforeSign = testKeyDown('ArrowLeft', '-$ 1,234', {
    start: 0,
    end: 0,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(beforeSign.preventDefault).toBeCalled();
  expect(beforeSign.updateCursorPosition).toBeCalledWith(0);

  const afterSuffix = testKeyDown('ArrowLeft', '123 x', {
    start: 5,
    end: 5,
  }, {
    suffix: ' x',
  });
  expect(afterSuffix.preventDefault).toBeCalled();
  expect(afterSuffix.updateCursorPosition).toBeCalledWith(3);

  const beforeSuffix = testKeyDown('ArrowLeft', '123 x', {
    start: 3,
    end: 3,
  }, {
    suffix: ' x',
  });
  expect(beforeSuffix.preventDefault).not.toBeCalled();
  expect(beforeSuffix.updateCursorPosition).not.toBeCalled();

  const withWholeRange = testKeyDown('ArrowLeft', '$ 123 /p', {
    start: 0,
    end: 8,
  }, {
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(withWholeRange.preventDefault).toBeCalled();
  expect(withWholeRange.updateCursorPosition).toBeCalledWith(2);

  const withRangeCoveringPartOfPrefix = testKeyDown('ArrowLeft', 'USD 123', {
    start: 2,
    end: 6,
  }, {
    prefix: 'USD ',
  });
  expect(withRangeCoveringPartOfPrefix.preventDefault).toBeCalled();
  expect(withRangeCoveringPartOfPrefix.updateCursorPosition).toBeCalledWith(4);
});

test('press right arrow key', () => {
  const atEnd = testKeyDown('ArrowRight', '123', {
    start: 3,
    end: 3,
  });
  expect(atEnd.preventDefault).toBeCalled();
  expect(atEnd.updateCursorPosition).toBeCalledWith(3);

  const atStart = testKeyDown('ArrowRight', '123', {
    start: 0,
    end: 0,
  });
  expect(atStart.preventDefault).not.toBeCalled();
  expect(atStart.updateCursorPosition).not.toBeCalled();

  const inMiddle = testKeyDown('ArrowRight', '123', {
    start: 1,
    end: 1,
  });
  expect(inMiddle.preventDefault).not.toBeCalled();
  expect(inMiddle.updateCursorPosition).not.toBeCalled();

  const beforeComma = testKeyDown('ArrowRight', '1,234', {
    start: 1,
    end: 1,
  });
  expect(beforeComma.preventDefault).toBeCalled();
  expect(beforeComma.updateCursorPosition).toBeCalledWith(3);

  const beforeDigitComma = testKeyDown('ArrowRight', '01,234', {
    start: 1,
    end: 1,
  });
  expect(beforeDigitComma.preventDefault).not.toBeCalled();
  expect(beforeDigitComma.updateCursorPosition).not.toBeCalled();

  const withShift = testKeyDown('shift+ArrowRight', '1,234', {
    start: 1,
    end: 1,
  });
  expect(withShift.preventDefault).not.toBeCalled();
  expect(withShift.updateCursorPosition).not.toBeCalled();

  const beforeSign = testKeyDown('ArrowRight', '-1,234', {
    start: 0,
    end: 0,
  }, {
    allowNegative,
  });
  expect(beforeSign.preventDefault).not.toBeCalled();
  expect(beforeSign.updateCursorPosition).not.toBeCalled();

  const beforeSignPrefix = testKeyDown('ArrowRight', '-$ 1,234', {
    start: 0,
    end: 0,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(beforeSignPrefix.preventDefault).not.toBeCalled();
  expect(beforeSignPrefix.updateCursorPosition).not.toBeCalled();

  const afterSignBeforePrefix = testKeyDown('ArrowRight', '-$ 1,234', {
    start: 1,
    end: 1,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSignBeforePrefix.preventDefault).toBeCalled();
  expect(afterSignBeforePrefix.updateCursorPosition).toBeCalledWith(3);

  const afterSuffix = testKeyDown('ArrowRight', '1,234 /p', {
    start: 8,
    end: 8,
  }, {
    suffix: ' /p',
  });
  expect(afterSuffix.preventDefault).toBeCalled();
  expect(afterSuffix.updateCursorPosition).toBeCalledWith(5);

  const beforeSuffix = testKeyDown('ArrowRight', '1,234 /p', {
    start: 5,
    end: 5,
  }, {
    suffix: ' /p',
  });
  expect(beforeSuffix.preventDefault).toBeCalled();
  expect(beforeSuffix.updateCursorPosition).toBeCalledWith(5);

  const withWholeRange = testKeyDown('ArrowRight', '$ 123 /p', {
    start: 0,
    end: 8,
  }, {
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(withWholeRange.preventDefault).toBeCalled();
  expect(withWholeRange.updateCursorPosition).toBeCalledWith(5);

  const withRangeCoveringSuffix = testKeyDown('ArrowRight', '$ 123 /p', {
    start: 0,
    end: 7,
  }, {
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(withRangeCoveringSuffix.preventDefault).toBeCalled();
  expect(withRangeCoveringSuffix.updateCursorPosition).toBeCalledWith(5);
});

test('press up arrow key', () => {
  const atStart = testKeyDown('ArrowUp', '123', {
    start: 0,
    end: 0,
  });
  expect(atStart.preventDefault).toBeCalled();
  expect(atStart.updateCursorPosition).toBeCalledWith(0);

  const atEnd = testKeyDown('ArrowUp', '123', {
    start: 3,
    end: 3,
  });
  expect(atEnd.preventDefault).toBeCalled();
  expect(atEnd.updateCursorPosition).toBeCalledWith(0);

  const inMiddle = testKeyDown('ArrowUp', '123', {
    start: 1,
    end: 1,
  });
  expect(inMiddle.preventDefault).toBeCalled();
  expect(inMiddle.updateCursorPosition).toBeCalledWith(0);

  const afterPrefix = testKeyDown('ArrowUp', '$ 123', {
    start: 4,
    end: 4,
  }, {
    prefix: '$ ',
  });
  expect(afterPrefix.preventDefault).toBeCalled();
  expect(afterPrefix.updateCursorPosition).toBeCalledWith(2);

  const beforeSign = testKeyDown('ArrowUp', '-$ 123', {
    start: 0,
    end: 0,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(beforeSign.preventDefault).toBeCalled();
  expect(beforeSign.updateCursorPosition).toBeCalledWith(0);

  const afterSign = testKeyDown('ArrowUp', '-$ 123', {
    start: 1,
    end: 1,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSign.preventDefault).toBeCalled();
  expect(afterSign.updateCursorPosition).toBeCalledWith(0);

  const afterSignPrefix = testKeyDown('ArrowUp', '-$ 123', {
    start: 3,
    end: 3,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSignPrefix.preventDefault).toBeCalled();
  expect(afterSignPrefix.updateCursorPosition).toBeCalledWith(0);

  const withWholeRange = testKeyDown('ArrowUp', '$ 123 /p', {
    start: 0,
    end: 8,
  }, {
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(withWholeRange.preventDefault).toBeCalled();
  expect(withWholeRange.updateCursorPosition).toBeCalledWith(2);
});

test('press down arrow key', () => {
  const atStart = testKeyDown('ArrowDown', '123', {
    start: 0,
    end: 0,
  });
  expect(atStart.preventDefault).toBeCalled();
  expect(atStart.updateCursorPosition).toBeCalledWith(3);

  const atEnd = testKeyDown('ArrowDown', '123', {
    start: 3,
    end: 3,
  });
  expect(atEnd.preventDefault).toBeCalled();
  expect(atEnd.updateCursorPosition).toBeCalledWith(3);

  const inMiddle = testKeyDown('ArrowDown', '123', {
    start: 1,
    end: 1,
  });
  expect(inMiddle.preventDefault).toBeCalled();
  expect(inMiddle.updateCursorPosition).toBeCalledWith(3);

  const beforeSuffix = testKeyDown('ArrowDown', '123 /p', {
    start: 1,
    end: 1,
  }, {
    suffix: ' /p',
  });
  expect(beforeSuffix.preventDefault).toBeCalled();
  expect(beforeSuffix.updateCursorPosition).toBeCalledWith(3);

  const afterPrefix = testKeyDown('ArrowDown', '$ 123', {
    start: 3,
    end: 3,
  }, {
    prefix: '$ ',
  });
  expect(afterPrefix.preventDefault).toBeCalled();
  expect(afterPrefix.updateCursorPosition).toBeCalledWith(5);

  const beforeSign = testKeyDown('ArrowDown', '-$ 123 /p', {
    start: 0,
    end: 0,
  }, {
    allowNegative,
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(beforeSign.preventDefault).toBeCalled();
  expect(beforeSign.updateCursorPosition).toBeCalledWith(6);

  const afterSign = testKeyDown('ArrowDown', '-$ 123 /p', {
    start: 1,
    end: 1,
  }, {
    allowNegative,
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(afterSign.preventDefault).toBeCalled();
  expect(afterSign.updateCursorPosition).toBeCalledWith(6);

  const withWholeRange = testKeyDown('ArrowDown', '$ 123 /p', {
    start: 0,
    end: 8,
  }, {
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(withWholeRange.preventDefault).toBeCalled();
  expect(withWholeRange.updateCursorPosition).toBeCalledWith(5);
});

test('press delete key', () => {
  const atStart = testKeyDown('Backspace', '123', {
    start: 0,
    end: 0,
  });
  expect(atStart.preventDefault).toBeCalled();
  expect(atStart.updateCursorPosition).not.toBeCalled();

  const atEnd = testKeyDown('Backspace', '123', {
    start: 3,
    end: 3,
  });
  expect(atEnd.preventDefault).not.toBeCalled();
  expect(atEnd.updateCursorPosition).not.toBeCalled();

  const inMiddle = testKeyDown('Backspace', '123', {
    start: 1,
    end: 1,
  });
  expect(inMiddle.preventDefault).not.toBeCalled();
  expect(inMiddle.updateCursorPosition).not.toBeCalled();

  const afterComma = testKeyDown('Backspace', '12,345', {
    start: 3,
    end: 3,
  });
  expect(afterComma.preventDefault).toBeCalled();
  expect(afterComma.updateCursorPosition).toBeCalledWith(2);

  const afterCommaDigit = testKeyDown('Backspace', '12,345', {
    start: 4,
    end: 4,
  });
  expect(afterCommaDigit.preventDefault).not.toBeCalled();
  expect(afterCommaDigit.updateCursorPosition).not.toBeCalled();

  const withRangeAfterComma = testKeyDown('Backspace', '12,345', {
    start: 0,
    end: 3,
  });
  expect(withRangeAfterComma.preventDefault).not.toBeCalled();
  expect(withRangeAfterComma.updateCursorPosition).not.toBeCalled();

  const afterPrefix = testKeyDown('Backspace', '$ 12', {
    start: 2,
    end: 2,
  }, {
    prefix: '$ ',
  });
  expect(afterPrefix.preventDefault).toBeCalled();
  expect(afterPrefix.updateCursorPosition).not.toBeCalled();

  const afterPrefixDigit = testKeyDown('Backspace', '$ 12', {
    start: 3,
    end: 3,
  }, {
    prefix: '$ ',
  });
  expect(afterPrefixDigit.preventDefault).not.toBeCalled();
  expect(afterPrefixDigit.updateCursorPosition).not.toBeCalled();

  const afterSign = testKeyDown('Backspace', '-$ 12', {
    start: 1,
    end: 1,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSign.preventDefault).not.toBeCalled();
  expect(afterSign.updateCursorPosition).not.toBeCalled();

  const afterSignPrefix = testKeyDown('Backspace', '-$ 12', {
    start: 3,
    end: 3,
  }, {
    allowNegative,
    prefix: '$ ',
  });
  expect(afterSignPrefix.preventDefault).toBeCalled();
  expect(afterSignPrefix.updateCursorPosition).toBeCalledWith(1);

  const withWholeRange = testKeyDown('Backspace', '-$ 12 /p', {
    start: 0,
    end: 8,
  }, {
    allowNegative,
    prefix: '$ ',
    suffix: ' /p',
  });
  expect(withWholeRange.preventDefault).not.toBeCalled();
  expect(withWholeRange.updateCursorPosition).not.toBeCalled();
});
