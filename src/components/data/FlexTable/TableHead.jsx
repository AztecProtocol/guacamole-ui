import React from 'react';
import PropTypes from 'prop-types';
import {
  ASC,
  DESC,
} from 'utils/sort';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import Block from '../../layout/Block';
import Text from '../../general/Text';
import TextButton from '../../general/TextButton';
import Icon from '../../general/Icon';
import TableRow from './TableRow';
import TableCell from './TableCell';
import styles from './table.scss';

const TableHead = ({
  align: defaultAlign,
  columns,
  nowrap,
  sortBy,
  sortOrder,
  onClickColumn,
}) => (
  <TableRow
    textAlign={defaultAlign}
    nowrap={nowrap}
    highlight
  >
    {columns.map(({
      fieldName,
      label,
      align,
      width,
      defaultSortingOrder,
    }, i) => (
      <TableCell
        key={+i}
        className={styles['table-head-cell']}
        width={width}
        align={align}
      >
        {((!sortBy || defaultSortingOrder === undefined) && (
          <Text
            text={label.toUpperCase()}
            color="label"
            size="xxs"
          />
        )) || (
          <TextButton
            className={styles['sort-button']}
            color="label"
            size="xxs"
            onClick={() => onClickColumn(fieldName)}
          >
            <span>{label.toUpperCase()}</span>
            {fieldName === sortBy && (
              <Block
                className="lh0"
                left="xs"
              >
                <Icon
                  name={sortOrder === ASC ? 'arrow_upward' : 'arrow_downward'}
                  size="xs"
                />
              </Block>
            )}
          </TextButton>
        )}
      </TableCell>
    ))}
  </TableRow>
);

TableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    fieldName: PropTypes.string,
    width: PropTypes.string,
    align: generateResponsiveShape(['', 'left', 'center', 'right']),
    label: PropTypes.string.isRequired,
    defaultSortingOrder: PropTypes.oneOf([DESC, ASC]),
  })).isRequired,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.oneOf([DESC, ASC]),
  align: generateResponsiveShape(['', 'left', 'center', 'right']),
  nowrap: generateResponsiveShape([true, false]),
  onClickColumn: PropTypes.func,
};

TableHead.defaultProps = {
  align: '',
  nowrap: false,
  sortBy: '',
  sortOrder: DESC,
  onClickColumn() {},
};

export default TableHead;
