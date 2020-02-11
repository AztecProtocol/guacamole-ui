import React from 'react';
import PropTypes from 'prop-types';
import responsiveColumns from 'src/shapes/responsiveColumns';
import responsiveTextAlign from 'src/shapes/responsiveTextAlign';
import Col from '../../layout/Col';
import styles from './table.scss';

const TableCell = ({
  testId,
  className,
  width,
  column,
  align,
  children,
  placeholder,
  isLoading,
}) => (
  <Col
    testId={testId}
    className={className}
    margin="s"
    align={align}
    column={column}
    style={!width
      ? null
      : {
        flex: `1 1 ${width}`,
        maxWidth: width,
      }}
  >
    {isLoading && (placeholder || (
      <div className={styles['placeholder-cell']} />
    ))}
    {!isLoading && children}
  </Col>
);

TableCell.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  column: responsiveColumns,
  align: responsiveTextAlign,
  children: PropTypes.node,
  placeholder: PropTypes.node,
  isLoading: PropTypes.bool,
};

TableCell.defaultProps = {
  testId: undefined,
  className: '',
  width: '',
  column: '',
  align: '',
  children: null,
  placeholder: null,
  isLoading: false,
};

export default TableCell;
