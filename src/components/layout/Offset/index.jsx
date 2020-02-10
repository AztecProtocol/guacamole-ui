import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import generateResponsiveStyleNames from 'src/utils/generateResponsiveStyleNames';
import parseCssSizeValues from 'src/utils/parseCssSizeValues';
import responsiveCssSizes from 'src/shapes/responsiveCssSizes';
import styles from './offset.scss';

const Offset = ({
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
    .filter((size) => sizeMap[size])
    .map((size) => generateResponsiveStyleNames(size, sizeMap[size]).map((n) => styles[n]));

  return (
    <div
      className={classnames(className, sizeStyleNames)}
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

export default Offset;
