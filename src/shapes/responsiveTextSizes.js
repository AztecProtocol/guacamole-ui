import generateResponsiveShape from '../utils/generateResponsiveShape';
import {
  fontSizeKeys,
} from '../config/styleConstants';

const sizeNames = ['', 'inherit', ...fontSizeKeys];

export default generateResponsiveShape(sizeNames);
