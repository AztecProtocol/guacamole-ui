import isGreaterThan, {
  isLargerInteger,
  isLargerDecimal,
} from './isGreaterThan';

test('isLargerInteger', () => {
  expect(isLargerInteger('1', '0')).toBe(true);
  expect(isLargerInteger('1', '')).toBe(true);
  expect(isLargerInteger('21', '12')).toBe(true);
  expect(isLargerInteger('124', '123')).toBe(true);
  expect(isLargerInteger('123', '12')).toBe(true);

  expect(isLargerInteger('0', '1')).toBe(false);
  expect(isLargerInteger('', '1')).toBe(false);
  expect(isLargerInteger('', '')).toBe(false);
  expect(isLargerInteger('1', '1')).toBe(false);
  expect(isLargerInteger('10', '11')).toBe(false);
  expect(isLargerInteger('123', '321')).toBe(false);
  expect(isLargerInteger('99', '100')).toBe(false);
});

test('isLargerDecimal', () => {
  expect(isLargerDecimal('1', '01')).toBe(true);
  expect(isLargerDecimal('01', '')).toBe(true);
  expect(isLargerDecimal('12', '11')).toBe(true);
  expect(isLargerDecimal('321', '123')).toBe(true);
  expect(isLargerDecimal('01', '001')).toBe(true);
  expect(isLargerDecimal('1', '021')).toBe(true);
  expect(isLargerDecimal('99', '1111')).toBe(true);
  expect(isLargerDecimal('10002', '10001')).toBe(true);

  expect(isLargerDecimal('1', '2')).toBe(false);
  expect(isLargerDecimal('', '01')).toBe(false);
  expect(isLargerDecimal('', '')).toBe(false);
  expect(isLargerDecimal('1', '1')).toBe(false);
  expect(isLargerDecimal('10', '11')).toBe(false);
  expect(isLargerDecimal('123', '321')).toBe(false);
  expect(isLargerDecimal('099', '1111')).toBe(false);
  expect(isLargerDecimal('012', '1')).toBe(false);
});

test('isGreaterThan', () => {
  expect(isGreaterThan('1', '0')).toBe(true);
  expect(isGreaterThan('21', '12')).toBe(true);
  expect(isGreaterThan('124', '123')).toBe(true);
  expect(isGreaterThan('123', '12')).toBe(true);
  expect(isGreaterThan('123', '-123')).toBe(true);
  expect(isGreaterThan('-1', '-2')).toBe(true);
  expect(isGreaterThan('1', '-2')).toBe(true);
  expect(isGreaterThan('0', '-1')).toBe(true);
  expect(isGreaterThan('0.01', '0.001')).toBe(true);
  expect(isGreaterThan('1.01', '1.001')).toBe(true);
  expect(isGreaterThan('2.01', '1.11')).toBe(true);
  expect(isGreaterThan('-0.1', '-0.2')).toBe(true);

  expect(isGreaterThan('', '')).toBe(false);
  expect(isGreaterThan('1', '')).toBe(false);
  expect(isGreaterThan('0', '')).toBe(false);
  expect(isGreaterThan('', '-1')).toBe(false);

  expect(isGreaterThan('1', '1')).toBe(false);
  expect(isGreaterThan('-1', '0')).toBe(false);
  expect(isGreaterThan('-12', '-10')).toBe(false);
  expect(isGreaterThan('-1.2', '-1.1')).toBe(false);
});
