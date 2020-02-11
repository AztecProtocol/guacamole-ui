import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isObjectEmpty from 'utils/isObjectEmpty';
import {
  inputThemeNames,
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/styleConstants';
import itemGroupShape from 'src/shapes/itemGroupShape';
import iconShape from 'src/shapes/iconShape';
import getItemByValue from '../../data/SelectMenu/utils/getItemByValue';
import SelectMenu from '../../data/SelectMenu';
import ClickOutsideHandler from '../../utils/ClickOutsideHandler';
import PopupMenu from '../../feedback/PopupMenu';
import TextInput from '../TextInput';
import getFlattenItemValues from './utils/getFlattenItemValues';
import styles from './select.scss';

class SelectInput extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      itemGroups,
      value,
    } = nextProps;
    const {
      isControlled,
      prevProps,
    } = prevState;
    const {
      itemGroups: prevItemGroups,
    } = prevProps;

    const nextState = {};

    if (isControlled) {
      nextState.value = value;
    }

    if (itemGroups !== prevItemGroups) {
      nextState.flattenValues = getFlattenItemValues(itemGroups);
      nextState.hoveredIndex = -1;
    }

    if (isObjectEmpty(nextState)) {
      return null;
    }

    return {
      ...nextState,
      prevProps: {
        itemGroups,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      value,
    } = props;

    this.state = {
      isControlled: value !== undefined,
      showMenu: false,
      value: '',
      hoveredIndex: -1,
      flattenValues: [],
      prevProps: { // eslint-disable-line react/no-unused-state
        itemGroups: [],
      },
    };
  }

  handleClick = () => {
    const {
      onClick,
    } = this.props;

    this.handleToggleMenu();

    onClick();
  }

  handleClickIcon = () => {
    const {
      onClickIcon,
    } = this.props;

    if (this.shouldDisplayClearIcon()) {
      this.clearSelected();
    } else {
      this.handleToggleMenu();
    }

    onClickIcon();
  }

  handleSelect = (value, item) => {
    const {
      isControlled,
    } = this.state;

    if (!isControlled && !item.disabled) {
      this.setState({
        value,
      });
    }

    const {
      onSelect,
      autoCloseOnSelect,
    } = this.props;

    if (autoCloseOnSelect && !item.disabled) {
      this.setState({
        showMenu: false,
      });
    }

    onSelect(value, item);
  }

  handleChange = (value) => {
    const {
      onChange,
    } = this.props;

    onChange(value);
  }

  handleKeyDown = (e) => {
    const {
      keyCode,
    } = e;
    const {
      showMenu,
    } = this.state;
    if (!showMenu && [9, 27].indexOf(keyCode) < 0) {
      this.handleOpenMenu();
    }

    switch (keyCode) {
      case 9:
        if (showMenu) {
          this.handleCloseMenu();
        }
        break;
      case 13: {
        const {
          hoveredIndex,
          flattenValues,
        } = this.state;
        if (hoveredIndex >= 0) {
          e.preventDefault();
          const {
            itemGroups,
          } = this.props;
          const value = flattenValues[hoveredIndex];
          const item = getItemByValue(itemGroups, value);
          this.handleSelect(value, item);
        }
        break;
      }
      case 27:
        e.stopPropagation();
        if (showMenu) {
          this.handleCloseMenu();
        }
        break;
      case 38:
      case 40: {
        const {
          itemGroups,
        } = this.props;
        const hasItem = itemGroups.some(({
          items,
        }) => items && items.length);
        if (hasItem) {
          e.preventDefault();
          const offset = keyCode === 38 ? -1 : 1;
          this.moveHoveredValue(offset);
        }
        break;
      }
      default:
    }
  }

  handleBlurItem = () => {
    this.setState({
      hoveredIndex: -1,
    });
  }

  handleHoverItem = (hoveredValue) => {
    const {
      flattenValues,
    } = this.state;
    const hoveredIndex = flattenValues.findIndex((v) => v === hoveredValue);

    this.setState({
      hoveredIndex,
    });
  }

  handleOpenMenu = () => {
    this.setState({
      showMenu: true,
    });
  };

  handleCloseMenu = () => {
    this.setState({
      showMenu: false,
      hoveredIndex: -1,
    });
  };

  handleToggleMenu() {
    const {
      editable,
    } = this.props;
    const {
      showMenu,
    } = this.state;

    if (!showMenu) {
      this.handleOpenMenu();
    } else if (!editable) {
      this.handleCloseMenu();
    }
  }

  shouldDisplayClearIcon() {
    const {
      enableClearSelected,
    } = this.props;
    const {
      showMenu,
      value,
    } = this.state;

    return showMenu && enableClearSelected && value !== '';
  }

  moveHoveredValue(offset) {
    const {
      flattenValues,
      hoveredIndex: prevHoveredIndex,
    } = this.state;
    const count = flattenValues.length;
    const startIndex = prevHoveredIndex !== -1 || offset > 0
      ? prevHoveredIndex
      : 0;
    const hoveredIndex = (startIndex + count + offset) % count;

    this.setState({
      hoveredIndex,
    });
  }

  clearSelected() {
    const {
      isControlled,
    } = this.state;

    if (!isControlled) {
      this.setState({
        value: '',
      });
    }

    const {
      onClearSelectedValues,
    } = this.props;
    onClearSelectedValues();
  }

  renderMenu() {
    const {
      itemGroups,
      MenuComponent,
      hasItemDivider,
      highlightSelected,
    } = this.props;
    const {
      showMenu,
      value,
      flattenValues,
      hoveredIndex,
    } = this.state;

    return (
      <PopupMenu
        hide={!showMenu}
        disabledClickOutside
      >
        <MenuComponent
          selectedValue={highlightSelected ? value : ''}
          hoveredValue={hoveredIndex >= 0 ? flattenValues[hoveredIndex] : ''}
          itemGroups={itemGroups}
          hasDivider={hasItemDivider}
          onSelect={this.handleSelect}
          onHover={this.handleHoverItem}
          onBlur={this.handleBlurItem}
        />
      </PopupMenu>
    );
  }

  renderInput() {
    const {
      theme,
      size,
      placeholder,
      tabIndex,
      itemGroups,
      editable,
      icon,
      InputComponent,
    } = this.props;
    const {
      showMenu,
      value,
    } = this.state;

    let inputIcon = null;
    if (this.shouldDisplayClearIcon()) {
      inputIcon = {
        name: 'cancel',
        size: 's',
        color: 'grey-light',
      };
    } else {
      inputIcon = icon
        || {
          name: showMenu ? 'expand_less' : 'expand_more',
          size: 'l',
        };
    }

    const item = getItemByValue(itemGroups, value);

    return (
      <InputComponent
        theme={theme}
        status={showMenu ? 'focus' : ''}
        size={size}
        placeholder={placeholder}
        tabIndex={tabIndex}
        value={(item && item.title) || value}
        icon={inputIcon}
        onClick={this.handleClick}
        onClickIcon={this.handleClickIcon}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        readOnly={!editable}
      />
    );
  }

  render() {
    const {
      testId,
      className,
    } = this.props;
    const {
      showMenu,
    } = this.state;

    return (
      <ClickOutsideHandler
        testId={testId}
        className={classnames(className, styles.wrapper)}
        onClickOutside={this.handleCloseMenu}
        disabled={!showMenu}
      >
        {this.renderInput()}
        {this.renderMenu()}
      </ClickOutsideHandler>
    );
  }
}

SelectInput.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(inputThemeNames),
  size: PropTypes.oneOf(inputSizeKeys),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemGroups: PropTypes.arrayOf(itemGroupShape).isRequired,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.number,
  hasItemDivider: PropTypes.bool,
  enableClearSelected: PropTypes.bool,
  highlightSelected: PropTypes.bool,
  autoCloseOnSelect: PropTypes.bool,
  editable: PropTypes.bool,
  onClick: PropTypes.func,
  onClickIcon: PropTypes.func,
  onSelect: PropTypes.func,
  onClearSelectedValues: PropTypes.func,
  onChange: PropTypes.func,
  icon: iconShape,
  InputComponent: PropTypes.func,
  MenuComponent: PropTypes.func,
};

SelectInput.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  size: defaultInputSizeKey,
  value: undefined,
  placeholder: '',
  tabIndex: 0,
  hasItemDivider: false,
  enableClearSelected: false,
  highlightSelected: false,
  autoCloseOnSelect: true,
  editable: false,
  onClick() {},
  onClickIcon() {},
  onSelect() {},
  onClearSelectedValues() {},
  onChange() {},
  icon: null,
  InputComponent: TextInput,
  MenuComponent: SelectMenu,
};

export default SelectInput;
