import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  inputSizeKeys,
} from 'src/config/styleConstants';
import styles from './switch.scss';

class SwitchInput extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isControlled,
    } = prevState;

    if (!isControlled) {
      return null;
    }

    const {
      checked,
    } = nextProps;

    return {
      checked,
    };
  }

  constructor(props) {
    super(props);

    const {
      checked,
    } = props;

    this.state = {
      isControlled: checked !== undefined,
      checked,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      isControlled,
      checked,
    } = this.state;
    const {
      onClick,
      onChange,
      disabled,
      isLoading,
    } = this.props;
    onClick();

    if (!disabled && !isLoading) {
      onChange(!checked);

      if (!isControlled) {
        this.setState({
          checked: !checked,
        });
      }
    }
  }

  render() {
    const {
      checked,
    } = this.state;
    const {
      testId,
      className,
      size,
      disabled,
      isLoading,
      outlined,
    } = this.props;

    return (
      <div
        data-testid={testId}
        className={classnames(
          className,
          styles.wrapper,
          styles[`size-${size}`],
          {
            [styles.checked]: checked,
            [styles.disabled]: disabled,
            [styles.outlined]: outlined,
            [styles.loading]: isLoading,
          },
        )}
        role="switch"
        tabIndex="0"
        aria-checked={checked}
        onClick={this.handleClick}
        onKeyDown={(e) => {
          const { keyCode } = e;
          if ([13, 32].indexOf(keyCode) >= 0) {
            e.preventDefault();
            this.handleClick();
          }
        }}
      >
        <div className={styles['switch-button']}>
          {isLoading && <div className={styles.spinner} />}
        </div>
      </div>
    );
  }
}

SwitchInput.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(inputSizeKeys),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  outlined: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

SwitchInput.defaultProps = {
  testId: undefined,
  className: '',
  size: 's',
  checked: undefined,
  disabled: false,
  isLoading: false,
  outlined: false,
  onClick() {},
  onChange() {},
};

export default SwitchInput;
