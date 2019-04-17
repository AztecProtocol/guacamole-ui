import generateResponsiveShape from '../helpers/generateResponsiveShape';
import withEmptyOrDefault from './withEmptyOrDefault';
import {
  sizeKeys,
} from '../config/layout';

const sizeNames = withEmptyOrDefault(sizeKeys);

export default generateResponsiveShape(sizeNames);
