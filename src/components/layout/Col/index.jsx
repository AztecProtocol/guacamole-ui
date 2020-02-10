import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import generateResponsiveStyleNames from 'src/utils/generateResponsiveStyleNames';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import responsiveColumns from 'src/shapes/responsiveColumns';
import responsiveTextAlign from 'src/shapes/responsiveTextAlign';
import responsiveSizes from 'src/shapes/responsiveSizes';
import styles from './col.scss';

const Col = ({
  className,
  column,
  shift,
  margin,
  background,
  align,
  style,
  children,
}) => (
  <div
    className={classnames(
      className,
      column && generateResponsiveStyleNames('col', column).map((n) => styles[n]),
      shift && shift !== 0
        ? generateResponsiveStyleNames('shift', shift).map((n) => styles[n])
        : '',
      margin && margin !== 'none'
        ? generateResponsiveStyleNames('margin', margin).map((n) => styles[n])
        : '',
      (align && generateResponsiveStyleNames('align', align).map((n) => styles[n])) || '',
      {
        [styles[`bg-${background}`]]: background,
      },
    )}
    style={style}
  >
    {children}
  </div>
);

Col.propTypes = {
  className: PropTypes.string,
  column: responsiveColumns,
  shift: generateResponsiveShape([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  margin: responsiveSizes,
  background: PropTypes.string,
  align: responsiveTextAlign,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

Col.defaultProps = {
  className: '',
  column: 'auto',
  shift: 0,
  margin: 'm',
  background: '',
  align: '',
  style: null,
  children: null,
};

export default Col;
