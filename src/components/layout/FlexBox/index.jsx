import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    className={classnames(
      className,
      styles['flex-box'],
      generateResponsiveStyleNames('direction', direction, notEmptyString).map((n) => styles[n]),
      generateResponsiveStyleNames('align', align, notEmptyString).map((n) => styles[n]),
      generateResponsiveStyleNames('valign', valign, notEmptyString).map((n) => styles[n]),
      generateResponsiveStyleNames('nowrap', nowrap).map((n) => styles[n]),
      {
        [styles.expand]: expand,
        [styles.fixedWidth]: fixedWidth,
        [styles.stretch]: stretch,
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

export default FlexBox;
