import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
  ASC,
  DESC,
} from 'utils/sort';
import fieldShape from 'src/shapes/fieldShape';
import responsiveTextAlign from 'src/shapes/responsiveTextAlign';
import TableHead from '../FlexTable/TableHead';
import sortRowValuesWithDefault from './utils/sortRowValuesWithDefault';
import TableRow from './TableRow';

class SmartTable extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      sortable,
    } = nextProps;
    if (!sortable) {
      return null;
    }

    const {
      rowsData,
    } = nextProps;
    const {
      rowsData: prevRowsData,
    } = prevState.prevProps;

    if (rowsData === prevRowsData) {
      return null;
    }

    const {
      sortBy,
      sortOrder,
      sortedData: prevSortedData,
    } = prevState;
    const {
      tableConfig,
      getRowKey,
      isEditing,
    } = nextProps;
    let sortedData;
    if (!isEditing) {
      const {
        fields,
      } = tableConfig;
      sortedData = sortRowValuesWithDefault(
        rowsData,
        sortBy,
        sortOrder,
        getRowKey,
        fields,
      );
    } else {
      const newDataMap = new Map();
      rowsData.forEach((row) => newDataMap.set(getRowKey(row), row));
      const orderedData = [];
      prevSortedData.forEach((row) => {
        const key = getRowKey(row);
        if (newDataMap.has(key)) {
          orderedData.push(newDataMap.get(key));
          newDataMap.delete(key);
        }
      });
      sortedData = [
        ...orderedData,
        ...newDataMap.values(),
      ];
    }

    return {
      sortedData,
      prevProps: {
        rowsData,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      tableConfig,
    } = props;
    const {
      defaultSortBy,
      fields,
    } = tableConfig;
    const defaultSortByField = fields.find(({
      fieldName,
    }) => fieldName === defaultSortBy);

    this.state = {
      sortBy: defaultSortBy,
      sortOrder: defaultSortByField
        ? defaultSortByField.defaultSortingOrder
        : ASC,
      sortedData: [],
      prevProps: { // eslint-disable-line react/no-unused-state
        rowsData: [],
      },
    };

    this.handleChangeSortingMethod = this.handleChangeSortingMethod.bind(this);
  }

  handleChangeSortingMethod(sortBy) {
    const {
      sortedData: prevSortedData,
      sortBy: prevSortBy,
      sortOrder: prevSortOrder,
    } = this.state;
    if (sortBy === prevSortBy) {
      this.setState({
        sortOrder: prevSortOrder === DESC ? ASC : DESC,
        sortedData: [...prevSortedData].reverse(),
      });
    } else {
      const {
        tableConfig,
        getRowKey,
      } = this.props;
      const {
        fields,
      } = tableConfig;
      const sortOrder = fields.find(({
        fieldName,
      }) => fieldName === sortBy)
        .defaultSortingOrder;
      this.setState({
        sortBy,
        sortOrder,
        sortedData: sortRowValuesWithDefault(
          prevSortedData,
          sortBy,
          sortOrder,
          getRowKey,
          fields,
        ),
      });
    }
  }

  renderFormContent() {
    const {
      tableConfig,
      numberOfPlaceholderRows,
      isLoading,
      sortable,
      rowsData,
    } = this.props;
    const {
      sortedData,
    } = this.state;
    const {
      align: defaultAlign,
      fields,
      isRowDeletable,
    } = tableConfig;
    const rows = sortable ? sortedData : rowsData;

    if (isLoading && !rows.length) {
      return Array.from({
        length: numberOfPlaceholderRows,
      }, (_, i) => (
        <TableRow
          key={+i}
          align={defaultAlign}
          fieldsConfig={fields}
          isLoading
        />
      ));
    }

    const {
      formData,
      getRowKey,
      isEditing,
      isUpdating,
      readOnly,
      onChange,
      onTriggerEdit,
      onDeleteRow,
    } = this.props;

    return rows.map((row) => (
      <TableRow
        key={getRowKey(row)}
        align={defaultAlign}
        fieldsConfig={fields}
        data={row}
        formData={formData}
        isEditing={isEditing}
        isLoading={isLoading || row.isLoading}
        isUpdating={isUpdating}
        deletable={isRowDeletable}
        onChange={onChange}
        onTriggerEdit={!readOnly ? onTriggerEdit : null}
        onDelete={onDeleteRow}
      />
    ));
  }

  render() {
    const {
      tableConfig,
      formData,
      isEditing,
      sortable,
    } = this.props;
    const {
      sortBy,
      sortOrder,
    } = this.state;
    const {
      align: defaultAlign,
      fields,
    } = tableConfig;
    const contentRows = this.renderFormContent();
    const visibleFields = fields.filter(({
      visible,
    }) => visible === undefined
      || (typeof visible !== 'function' ? visible : visible({
        formData,
      })));

    return [
      <TableHead
        key="head"
        columns={fields.length === visibleFields.length ? fields : visibleFields}
        align={defaultAlign}
        sortBy={isEditing || !sortable ? '' : sortBy}
        sortOrder={sortOrder}
        onClickColumn={this.handleChangeSortingMethod}
        nowrap
      />,
      ...contentRows,
    ];
  }
}

SmartTable.propTypes = {
  tableConfig: PropTypes.shape({
    align: responsiveTextAlign,
    defaultSortBy: PropTypes.string,
    isRowDeletable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    fields: PropTypes.arrayOf(PropTypes.shape(fieldShape)).isRequired,
  }).isRequired,
  rowsData: PropTypes.arrayOf(PropTypes.object),
  formData: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  getRowKey: PropTypes.func,
  numberOfPlaceholderRows: PropTypes.number,
  onChange: PropTypes.func,
  onTriggerEdit: PropTypes.func,
  onDeleteRow: PropTypes.func,
  sortable: PropTypes.bool,
  readOnly: PropTypes.bool,
  isLoading: PropTypes.bool,
  isEditing: PropTypes.bool,
  isUpdating: PropTypes.bool,
};

SmartTable.defaultProps = {
  rowsData: [],
  formData: {},
  getRowKey: ({
    id,
  }) => id,
  onChange() {},
  onTriggerEdit: null,
  onDeleteRow() {},
  numberOfPlaceholderRows: 3,
  sortable: false,
  readOnly: false,
  isLoading: false,
  isEditing: false,
  isUpdating: false,
};

export default SmartTable;
