import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import generateResponsiveShape from 'src/helpers/generateResponsiveShape';
import generateResponsiveStyleNames from 'src/helpers/generateResponsiveStyleNames';
import responsiveSizes from 'src/shapes/responsiveSizes';
import FlexBox from '../FlexBox';
import styles from './row.scss';

export const Row = ({
  margin, ...props
}) => (
  <FlexBox
    styleName={classnames((margin && margin !== 'none' && generateResponsiveStyleNames('margin', margin)) || '')}
    {...props}
  />
);

Row.propTypes = {
  className: PropTypes.string,
  margin: responsiveSizes,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  align: generateResponsiveShape([
    '',
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  valign: generateResponsiveShape([
    '',
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  nowrap: generateResponsiveShape([true, false]),
  stretch: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Row.defaultProps = {
  className: '',
  margin: 'm',
  direction: 'row',
  align: '',
  valign: '',
  nowrap: false,
  stretch: false,
};

export default CSSModules(Row, styles, {
  allowMultiple: true,
});
