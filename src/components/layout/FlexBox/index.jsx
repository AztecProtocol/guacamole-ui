import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import generateResponsiveStyleNames, {
  notEmptyString,
} from 'src/utils/generateResponsiveStyleNames';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import styles from './flex.scss';

export const FlexBox = ({
  className,
  direction,
  align,
  valign,
  expand,
  fixedWidth,
  stretch,
  nowrap,
  children,
}) => (
  <div
    className={className}
    styleName={classnames(
      'flex-box',
      generateResponsiveStyleNames('direction', direction, notEmptyString),
      generateResponsiveStyleNames('align', align, notEmptyString),
      generateResponsiveStyleNames('valign', valign, notEmptyString),
      generateResponsiveStyleNames('nowrap', nowrap),
      {
        expand,
        fixedWidth,
        stretch,
      },
    )}
  >
    {children}
  </div>
);

FlexBox.propTypes = {
  className: PropTypes.string,
  direction: generateResponsiveShape([
    '',
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
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
  expand: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  stretch: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

FlexBox.defaultProps = {
  className: '',
  direction: 'row',
  align: '',
  valign: '',
  expand: false,
  fixedWidth: false,
  stretch: false,
  nowrap: false,
};

export default CSSModules(FlexBox, styles, {
  allowMultiple: true,
});
