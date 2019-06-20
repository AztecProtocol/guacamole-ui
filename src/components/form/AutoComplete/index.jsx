import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import isObjectEmpty from 'utils/isObjectEmpty';
import {
  inputThemeNames,
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/styleConstants';
import itemGroupShape from 'src/shapes/itemGroupShape';
import iconShape from 'src/shapes/iconShape';
import SelectMenu from '../../data/SelectMenu';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import {
  makeItemGroupsFilter,
} from './utils/itemGroupsFilter';
import defaultGetMatchingDistance from './utils/defaultGetMatchingDistance';

class AutoComplete extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      value,
      itemGroups,
      itemGroupsSource,
      getMatchingDistance,
      maxVisibleItems,
      showZeroMatch,
    } = nextProps;
    const {
      value: uncontrolledValue,
      isControlled,
      isItemGroupsControlled,
      prevProps,
    } = prevState;
    const {
      value: prevValue,
      itemGroupsSource: prevItemGroupsSource,
      getMatchingDistance: prevGetMatchingDistance,
      maxVisibleItems: prevMaxVisibleItems,
      showZeroMatch: prevShowZeroMatch,
    } = prevProps;

    const nextState = {};

    if (isControlled) {
      nextState.value = value;
    }

    if (isItemGroupsControlled) {
      nextState.itemGroups = itemGroups;
    } else if (
      (isControlled && value !== prevValue)
      || itemGroupsSource !== prevItemGroupsSource
      || getMatchingDistance !== prevGetMatchingDistance
      || maxVisibleItems !== prevMaxVisibleItems
      || showZeroMatch !== prevShowZeroMatch
    ) {
      const itemGroupsFilter = makeItemGroupsFilter(
        itemGroupsSource,
        {
          getMatchingDistance,
          maxVisibleItems,
          showZeroMatch,
        },
      );
      nextState.itemGroupsFilter = itemGroupsFilter;
      nextState.itemGroups = itemGroupsFilter(isControlled ? value : uncontrolledValue);
    }

    if (isObjectEmpty(nextState)) {
      return null;
    }

    return {
      ...nextState,
      prevProps: {
        value,
        itemGroupsSource,
        getMatchingDistance,
        maxVisibleItems,
        showZeroMatch,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      value,
      defaultValue,
      itemGroups,
      defaultItemGroups,
    } = props;

    this.state = {
      isControlled: value !== null,
      isItemGroupsControlled: itemGroups !== null,
      value: defaultValue,
      itemGroups: defaultItemGroups,
      itemGroupsFilter: () => [],
      prevProps: { // eslint-disable-line react/no-unused-state
        value: '',
        itemGroupsSource: [],
        getMatchingDistance: () => {},
        maxVisibleItems: -1,
        showZeroMatch: false,
      },
    };
  }

  handleSelect = (value, item) => {
    const {
      isControlled,
      isItemGroupsControlled,
      itemGroupsFilter,
    } = this.state;
    const {
      onSelect,
      formatSelectedItem,
    } = this.props;

    if (!isControlled) {
      const formatedValue = formatSelectedItem(item);
      this.setState({
        value: formatedValue,
      });

      if (!isItemGroupsControlled) {
        this.setState({
          itemGroups: itemGroupsFilter(formatedValue),
        });
      }
    }

    onSelect(value, item);
  }

  handleChange = (value) => {
    const {
      isControlled,
      isItemGroupsControlled,
      itemGroupsFilter,
    } = this.state;
    const {
      onChange,
    } = this.props;

    if (!isControlled) {
      this.setState({
        value,
      });

      if (!isItemGroupsControlled) {
        this.setState({
          itemGroups: itemGroupsFilter(value),
        });
      }
    }

    onChange(value);
  }

  render() {
    const {
      className,
      theme,
      size,
      placeholder,
      enableClearSelected,
      hasItemDivider,
      icon,
      noResultsMessage,
      tabIndex,
      InputComponent,
      MenuComponent,
    } = this.props;
    const {
      value,
      itemGroups,
    } = this.state;
    let displayedGroups = itemGroups;
    if (!displayedGroups.length && value && noResultsMessage) {
      displayedGroups = [{
        caption: {
          title: noResultsMessage,
        },
      }];
    }

    return (
      <SelectInput
        className={className}
        theme={theme}
        size={size}
        value={value}
        itemGroups={displayedGroups}
        placeholder={placeholder}
        enableClearSelected={enableClearSelected}
        hasItemDivider={hasItemDivider}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
        icon={icon}
        tabIndex={tabIndex}
        InputComponent={InputComponent}
        MenuComponent={MenuComponent}
        editable
      />
    );
  }
}

AutoComplete.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(inputThemeNames),
  size: PropTypes.oneOf(inputSizeKeys),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  itemGroups: PropTypes.arrayOf(itemGroupShape),
  defaultItemGroups: PropTypes.arrayOf(itemGroupShape),
  itemGroupsSource: PropTypes.arrayOf(itemGroupShape), // eslint-disable-line react/no-unused-prop-types
  formatSelectedItem: PropTypes.func,
  getMatchingDistance: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  maxVisibleItems: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  showZeroMatch: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  enableClearSelected: PropTypes.bool,
  hasItemDivider: PropTypes.bool,
  icon: iconShape,
  noResultsMessage: PropTypes.string,
  tabIndex: PropTypes.number,
  InputComponent: PropTypes.func,
  MenuComponent: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
};

AutoComplete.defaultProps = {
  className: '',
  theme: 'default',
  size: defaultInputSizeKey,
  placeholder: '',
  value: null,
  defaultValue: '',
  itemGroups: null,
  defaultItemGroups: [],
  itemGroupsSource: [],
  formatSelectedItem: item => item.title,
  getMatchingDistance: defaultGetMatchingDistance,
  maxVisibleItems: -1,
  showZeroMatch: false,
  enableClearSelected: false,
  hasItemDivider: false,
  icon: {
    name: 'search',
  },
  noResultsMessage: '',
  tabIndex: 0,
  InputComponent: TextInput,
  MenuComponent: SelectMenu,
  onSelect() {},
  onChange() {},
};

export default AutoComplete;
