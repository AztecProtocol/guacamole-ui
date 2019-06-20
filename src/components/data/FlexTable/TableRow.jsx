import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import Block from '../../layout/Block';
import Row from '../../layout/Row';
import styles from './table.scss';

const TableRow = ({
  verticalPadding,
  margin,
  textAlign,
  align,
  valign,
  children,
  highlight,
  noDivider,
  nowrap,
  border,
  ...blockProps
}) => (
  <Block
    {...blockProps}
    styleName={classnames('row-wrapper', {
      'row-no-divider': noDivider,
      [`v-${verticalPadding}`]: verticalPadding,
      highlight,
    })}
    hasBorder={border}
    align={textAlign}
    background={highlight ? 'grey-lightest' : 'white'}
  >
    <Row
      styleName="row"
      margin={margin}
      valign={valign}
      align={align}
      nowrap={nowrap}
    >
      {children}
    </Row>
  </Block>
);

TableRow.propTypes = {
  verticalPadding: PropTypes.string,
  margin: PropTypes.string,
  textAlign: generateResponsiveShape(['', 'left', 'center', 'right']),
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
  children: PropTypes.node.isRequired,
  highlight: PropTypes.bool,
  noDivider: PropTypes.bool,
  border: PropTypes.bool,
};

TableRow.defaultProps = {
  verticalPadding: 's',
  margin: 's',
  textAlign: '',
  align: 'space-between',
  valign: 'center',
  nowrap: false,
  highlight: false,
  noDivider: false,
  border: false,
};

export default CSSModules(TableRow, styles, {
  allowMultiple: true,
});
