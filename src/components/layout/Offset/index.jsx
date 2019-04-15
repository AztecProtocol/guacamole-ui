import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import generateResponsiveStyleNames, {
  responsiveStyleConfigAdaptor,
} from 'src/helpers/generateResponsiveStyleNames';
import parseCssSizeValues from 'src/helpers/parseCssSizeValues';
import responsiveCssSizes from 'src/shapes/responsiveCssSizes';
import styles from './offset.scss';

export const Offset = ({
  className,
  margin,
  top,
  right,
  bottom,
  left,
  children,
}) => {
  const sizeMap = {
    top,
    right,
    bottom,
    left,
    ...parseCssSizeValues(margin),
  };

  const sizeStyleNames = ['all', 'top', 'right', 'bottom', 'left']
    .filter(size => sizeMap[size])
    .map(size => generateResponsiveStyleNames(size, responsiveStyleConfigAdaptor(sizeMap[size])));

  return (
    <div
      className={className}
      styleName={sizeStyleNames.join(' ')}
    >
      {children}
    </div>
  );
};

Offset.propTypes = {
  className: PropTypes.string,
  margin: responsiveCssSizes,
  top: responsiveCssSizes,
  right: responsiveCssSizes,
  bottom: responsiveCssSizes,
  left: responsiveCssSizes,
  children: PropTypes.node,
};

Offset.defaultProps = {
  className: '',
  margin: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
  children: null,
};

export default CSSModules(Offset, styles, {
  allowMultiple: true,
});
