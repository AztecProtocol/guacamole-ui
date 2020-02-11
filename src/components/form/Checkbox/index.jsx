import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  defaultInputSizeKey,
  inputSizeKeys,
} from 'src/config/styleConstants';
import Icon from '../../general/Icon';
import styles from './checkbox.scss';

class Checkbox extends PureComponent {
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
      <div className={styles['tick-box']}>
        <Icon
          className={styles['check-icon']}
          type="mi"
          name={iconName}
        />
      </div>
    );
  }

  render() {
    const {
      testId,
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
      <div className={styles.label}>
        {label}
      </div>
    );

    return (
      <div
        data-testid={testId}
        className={classnames(
          className,
          styles.wrapper,
          styles[`size-${size}`],
          {
            [styles[`type-${type}`]]: type !== 'check',
            [styles[`theme-${theme}`]]: theme !== 'light',
            [styles[`align-${align}`]]: align === 'right',
            [styles.checked]: value,
            [styles.inline]: inline,
          },
        )}
      >
        <div
          className={classnames(
            styles.checkbox,
            {
              [styles.disabled]: disabled,
            },
          )}
          role="checkbox"
          tabIndex="0"
          aria-checked={value}
          onClick={this.handleClick}
          onKeyDown={(e) => {
            const { keyCode } = e;
            if ([13, 32].indexOf(keyCode) >= 0) {
              e.preventDefault();
              this.handleClick();
            }
          }}
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
  testId: PropTypes.string,
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
  testId: undefined,
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

export default Checkbox;
