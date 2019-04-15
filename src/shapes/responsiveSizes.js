import generateResponsiveShape from '../helpers/generateResponsiveShape';
import {
  sizeKeys,
} from '../config/layout';

const sizeNames = ['', 'none', ...sizeKeys];

export default generateResponsiveShape(sizeNames);
