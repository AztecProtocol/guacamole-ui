import {
  sizeKeys,
} from '../config/styleConstants';

export default function shiftSize(size, diff) {
  let newIndex = sizeKeys.indexOf(size) + diff;
  if (newIndex < 0) {
    newIndex = 0;
  } else if (newIndex >= sizeKeys.length) {
    newIndex = sizeKeys.length - 1;
  }

  return sizeKeys[newIndex];
}
