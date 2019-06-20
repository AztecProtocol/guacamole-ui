import generateResponsiveShape from '../utils/generateResponsiveShape';
import withEmptyOrDefault from './withEmptyOrDefault';
import {
  sizeKeys,
} from '../config/styleConstants';

const sizeNames = withEmptyOrDefault(sizeKeys);

export default generateResponsiveShape(sizeNames);
