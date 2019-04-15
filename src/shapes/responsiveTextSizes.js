import generateResponsiveShape from '../helpers/generateResponsiveShape';
import {
  sizeKeys,
} from '../config/layout';

const sizeNames = ['', 'inherit', ...sizeKeys];

export default generateResponsiveShape(sizeNames);
