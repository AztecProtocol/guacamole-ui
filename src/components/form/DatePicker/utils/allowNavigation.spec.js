import moment from 'moment';
import allowNavigation from './allowNavigation';

const currentMonth = moment();
const earlier = diff => currentMonth.clone().subtract(diff, 'months');
const later = diff => currentMonth.clone().add(diff, 'months');

test('always allow if min or max month is empty', () => {
  expect(allowNavigation(currentMonth, 1)).toBe(true);
  expect(allowNavigation(currentMonth, 1, later(1))).toBe(true);
  expect(allowNavigation(currentMonth, 1, null, earlier(1))).toBe(true);
});

test('allow if min and max months are both outside of visible window', () => {
  expect(allowNavigation(currentMonth, 1, earlier(1), later(1))).toBe(true);
});

test('allow if only one of min or max month is outside of visible window', () => {
  expect(allowNavigation(currentMonth, 1, earlier(3), earlier(2))).toBe(true);
  expect(allowNavigation(currentMonth, 1, later(2), later(3))).toBe(true);
});

test('do not allow if min and max months are both inside of visible window', () => {
  expect(allowNavigation(currentMonth, 3, currentMonth, later(1))).toBe(false);
  expect(allowNavigation(currentMonth, 3, later(1), later(2))).toBe(false);
});
