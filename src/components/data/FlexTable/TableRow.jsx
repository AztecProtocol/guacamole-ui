import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import Block from '../../layout/Block';
import Row from '../../layout/Row';
import styles from './table.scss';

const TableRow = ({
  testId,
  className,
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
    testId={testId}
    className={classnames(
      className,
      styles['row-wrapper'],
      {
        [styles['row-no-divider']]: noDivider,
        [styles[`v-${verticalPadding}`]]: verticalPadding,
        [styles.highlight]: highlight,
      },
    )}
    hasBorder={border}
    align={textAlign}
    background={highlight ? 'grey-lightest' : 'white'}
  >
    <Row
      className={styles.row}
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
  testId: PropTypes.string,
  className: PropTypes.string,
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
  testId: undefined,
  className: '',
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

export default TableRow;
