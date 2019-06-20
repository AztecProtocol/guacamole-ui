import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  defaultInputSizeKey,
  inputSizeKeys,
} from 'src/config/styleConstants';
import Icon from '../../general/Icon';
import styles from './checkbox.scss';

export class Checkbox extends PureComponent {
  constructor(props) {
    super(props);

    const {
      defaultValue, value,
    } = props;
    this.isControlled = value !== undefined;

    this.state = {
      value: this.isControlled ? undefined : defaultValue,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  isChecked() {
    const {
      value,
    } = this.state;
    const {
      value: controlledValue,
    } = this.props;
    return this.isControlled ? controlledValue : value;
  }

  handleClick() {
    const {
      disabled,
      onClick,
      onChange,
    } = this.props;
    const prevValue = this.isChecked();
    onClick(prevValue, this.props);

    if (disabled) return;

    const value = !prevValue;
    if (!this.isControlled) {
      this.setState({
        value,
      });
    }
    onChange(value, this.props);
  }

  renderBox() {
    const value = this.isChecked();
    const {
      type,
      indeterminate,
    } = this.props;

    let iconName;
    switch (type) {
      case 'radio':
        iconName = value
          ? (indeterminate ? 'remove' : 'fiber_manual_record')
          : '';
        break;
      case 'check':
      default:
        iconName = value
          ? (indeterminate ? 'remove' : 'check')
          : '';
    }

    return (
      <div styleName="tick-box">
        <Icon
          styleName="check-icon"
          type="mi"
          name={iconName}
        />
      </div>
    );
  }

  render() {
    const {
      className,
      theme,
      type,
      size,
      label,
      align,
      inline,
      disabled,
    } = this.props;
    const value = this.isChecked();
    const labelNode = !!label && (
      <div styleName="label">
        {label}
      </div>
    );

    return (
      <div
        className={className}
        styleName={classnames(
          'wrapper',
          `size-${size}`,
          {
            [`type-${type}`]: type !== 'check',
            [`theme-${theme}`]: theme !== 'light',
            [`align-${align}`]: align === 'right',
            checked: value,
            inline,
          },
        )}
      >
        <div
          styleName={classnames('checkbox', {
            disabled,
          })}
          onClick={this.handleClick}
        >
          {align === 'right' && labelNode}
          {this.renderBox()}
          {align === 'left' && labelNode}
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['check', 'radio']),
  size: PropTypes.oneOf(inputSizeKeys),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  defaultValue: PropTypes.bool,
  value: PropTypes.bool,
  indeterminate: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right']),
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  className: '',
  theme: 'light',
  type: 'check',
  size: defaultInputSizeKey,
  label: '',
  defaultValue: false,
  value: undefined,
  indeterminate: false,
  align: 'left',
  inline: false,
  disabled: false,
  onChange() {},
  onClick() {},
};

export default CSSModules(Checkbox, styles, {
  allowMultiple: true,
});
