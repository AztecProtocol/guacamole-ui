import PropTypes from 'prop-types';
import {
  ASC,
  DESC,
} from 'src/utils/sort';
import responsiveColumns from './responsiveColumns';
import responsiveTextAlign from './responsiveTextAlign';
import itemGroupShape from './itemGroupShape';

export default {
  fieldName: PropTypes.string,
  inputType: PropTypes.oneOf([
    'text',
    'number',
    'select',
    'switch',
    'checkbox',
    'date',
    'button',
  ]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  column: responsiveColumns,
  shift: responsiveColumns,
  width: PropTypes.string,
  align: responsiveTextAlign,
  itemGroups: PropTypes.oneOfType([
    PropTypes.arrayOf(itemGroupShape),
    PropTypes.func,
  ]),
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  defaultSortingOrder: PropTypes.oneOf([ASC, DESC]),
  sortGet: PropTypes.func,
  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  formatValue: PropTypes.func,
  validate: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  Component: PropTypes.func,
};
