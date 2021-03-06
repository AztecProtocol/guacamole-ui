import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  colorNames,
  shapeSizeKeys,
  roundedCornerKeys,
} from 'src/config/styleConstants';
import responsiveCssSizes from 'src/shapes/responsiveCssSizes';
import itemGroupShape from 'src/shapes/itemGroupShape';
import Block from '../../layout/Block';
import Group from './Group';
import styles from './menu.scss';

class SelectMenu extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isControlled,
      isHoverControlled,
    } = prevState;

    if (!isControlled && !isHoverControlled) {
      return null;
    }

    const {
      selectedValue,
      hoveredValue,
    } = nextProps;

    const nextState = {};
    if (isControlled) {
      nextState.selectedValue = selectedValue;
    }
    if (isHoverControlled) {
      nextState.hoveredValue = hoveredValue;
    }

    return nextState;
  }

  constructor(props) {
    super(props);

    const {
      selectedValue,
      hoveredValue,
    } = props;

    this.state = {
      isControlled: selectedValue !== null,
      isHoverControlled: hoveredValue !== null,
      selectedValue: '',
      hoveredValue: '',
    };

    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleHoverItem = this.handleHoverItem.bind(this);
    this.handleBlurItem = this.handleBlurItem.bind(this);
  }

  getSelectedValue() {
    const {
      isControlled,
      selectedValue,
    } = this.state;
    const {
      selectedValue: controlledValue,
    } = this.props;
    return isControlled ? controlledValue : selectedValue;
  }

  getHoveredValue() {
    const {
      isHoverControlled,
      hoveredValue,
    } = this.state;
    const {
      hoveredValue: controlledValue,
    } = this.props;
    return isHoverControlled ? controlledValue : hoveredValue;
  }

  handleSelectItem(selectedValue, item) {
    const {
      isControlled,
    } = this.state;

    if (!isControlled && !item.disabled) {
      this.setState({
        selectedValue,
      });
    }

    const {
      onSelect,
    } = this.props;
    onSelect(selectedValue, item);
  }

  handleHoverItem(hoveredValue, item) {
    const {
      isHoverControlled,
    } = this.state;
    if (!isHoverControlled) {
      this.setState({
        hoveredValue: !item.disabled ? hoveredValue : '',
      });
    }

    const {
      onHover,
    } = this.props;
    onHover(hoveredValue, item);
  }

  handleBlurItem(value, item) {
    const {
      hoveredValue,
    } = this.state;
    if (hoveredValue !== '') {
      this.setState({
        hoveredValue: '',
      });
    }

    const {
      onBlur,
    } = this.props;
    onBlur(value, item);
  }

  render() {
    const {
      testId,
      className,
      theme,
      size,
      itemGroups,
      background,
      padding,
      borderRadius,
      layer,
      borderColor,
      hasBorder,
      hasDivider,
    } = this.props;
    const selectedValue = this.getSelectedValue();
    const hoveredValue = this.getHoveredValue();
    const [paddingV, paddingH] = padding.split(' ');

    return (
      <Block
        testId={testId}
        className={classnames(className, styles.menu)}
        background={background || (theme === 'dark' ? 'grey-darker' : 'white')}
        padding={`${paddingV} 0`}
        borderRadius={borderRadius}
        layer={layer}
        borderColor={borderColor}
        hasBorder={hasBorder}
      >
        {itemGroups.map((group, i) => (
          <Group
            key={+i}
            {...group}
            theme={theme}
            size={size}
            padding={paddingH || paddingV}
            selectedValue={selectedValue}
            hoveredValue={hoveredValue}
            onSelect={this.handleSelectItem}
            onHover={this.handleHoverItem}
            onBlur={this.handleBlurItem}
            hasDivider={hasDivider}
          />
        ))}
      </Block>
    );
  }
}

SelectMenu.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  size: PropTypes.oneOf(shapeSizeKeys),
  itemGroups: PropTypes.arrayOf(itemGroupShape),
  background: PropTypes.string,
  padding: responsiveCssSizes,
  borderRadius: PropTypes.oneOf(['', ...roundedCornerKeys]),
  layer: PropTypes.number,
  borderColor: PropTypes.oneOf(['', ...colorNames]),
  hasBorder: PropTypes.bool,
  hasDivider: PropTypes.bool,
  selectedValue: PropTypes.string,
  hoveredValue: PropTypes.string,
  onSelect: PropTypes.func,
  onHover: PropTypes.func,
  onBlur: PropTypes.func,
};

SelectMenu.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'light',
  size: 'xs',
  itemGroups: [],
  background: '',
  padding: '0 l',
  borderRadius: '',
  borderColor: '',
  layer: 0,
  hasBorder: false,
  hasDivider: false,
  selectedValue: null,
  hoveredValue: null,
  onSelect() {},
  onHover() {},
  onBlur() {},
};

export default SelectMenu;
