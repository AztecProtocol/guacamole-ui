import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import generateResponsiveStyleNames from 'src/helpers/generateResponsiveStyleNames';
import generateResponsiveShape from 'src/helpers/generateResponsiveShape';
import responsiveColumns from 'src/shapes/responsiveColumns';
import responsiveTextAlign from 'src/shapes/responsiveTextAlign';
import responsiveSizes from 'src/shapes/responsiveSizes';
import styles from './col.scss';

export const Col = ({
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
    className={className}
    styleName={classnames(
      column && generateResponsiveStyleNames('col', column),
      shift && shift !== 0
        ? generateResponsiveStyleNames('shift', shift)
        : '',
      margin && margin !== 'none'
        ? generateResponsiveStyleNames('margin', margin)
        : '',
      (align && generateResponsiveStyleNames('align', align)) || '',
      {
        [`bg-${background}`]: background,
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

export default CSSModules(Col, styles, {
  allowMultiple: true,
});
