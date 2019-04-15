import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  inputThemeNames,
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/inputs';
import iconShape from 'src/shapes/iconShape';
import Block from '../../layout/Block';
import Text from '../../general/Text';
import Icon from '../../general/Icon';
import styles from './input.scss';

export class TextInput extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isErrorControlled,
    } = prevState;

    if (!isErrorControlled) {
      return null;
    }

    const {
      error,
      value,
      withErrorShakeEffect,
    } = nextProps;
    const {
      error: prevError,
      prevProps,
    } = prevState;
    const {
      value: prevValue,
    } = prevProps;
    if (error === prevError && !(error && value !== prevValue)) {
      // don't restart shake animation
      return null;
    }

    return {
      shakeInput: withErrorShakeEffect && !!error,
      showErrorStatus: !!error,
      error,
      prevProps: {
        value,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      value,
      error,
    } = props;
    this.isControlled = value !== undefined;

    this.state = {
      isErrorControlled: error !== undefined,
      shakeInput: false,
      showErrorStatus: false,
      error: '',
      prevProps: { // eslint-disable-line react/no-unused-state
        value: '',
      },
    };

    this.input = null;
    this.clearTemporaryErrorReq = null;

    this.setInputRef = this.setInputRef.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.clearTemporaryError();
  }

  componentDidUpdate() {
    this.clearTemporaryError();
  }

  componentWillUnmount() {
    clearTimeout(this.clearTemporaryErrorReq);
  }

  setInputRef(ref) {
    const {
      setInputRef,
    } = this.props;
    this.input = ref;
    setInputRef(ref);
  }

  getValue() {
    const {
      value: controlledValue,
    } = this.props;
    return this.isControlled ? controlledValue : this.input.value;
  }

  /*
   * allow parent to manually focus on this input
   */
  focus() {
    const {
      disabled,
    } = this.props;
    if (disabled) return;
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clearTemporaryError() {
    const {
      shakeInput,
    } = this.state;
    if (shakeInput) {
      clearTimeout(this.clearTemporaryErrorReq);
      this.clearTemporaryErrorReq = setTimeout(() => {
        const {
          shakeInput: currentShakeInput,
        } = this.state;
        if (currentShakeInput) {
          this.setState({
            shakeInput: false,
          });
        }
      }, 300);
    }
  }

  handleClick(e) {
    const {
      disabled,
      onClick,
    } = this.props;

    if (disabled) {
      e.preventDefault();
      this.blur();
      return;
    }

    onClick(e);
  }

  handleFocus(e) {
    const {
      disabled,
    } = this.props;
    if (disabled) {
      e.preventDefault();
      this.blur();
      return;
    }

    const {
      readOnly,
      selectAllOnFocus,
      onFocus,
    } = this.props;
    if (!readOnly && selectAllOnFocus) {
      this.input.select();
    }

    onFocus(e);
  }

  handleChange(e) {
    const {
      disabled,
      readOnly,
    } = this.props;
    if (disabled || readOnly) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      return;
    }

    const {
      validate,
      withErrorShakeEffect,
      onChange,
    } = this.props;
    const {
      isErrorControlled,
    } = this.state;
    const {
      value,
    } = e.target;

    if (!isErrorControlled) {
      const {
        success,
        error,
      } = validate(value);
      if (!success) {
        e.preventDefault();
        this.setState({
          shakeInput: withErrorShakeEffect,
          showErrorStatus: true,
          error,
        });
        return;
      }

      const {
        shakeInput,
        showErrorStatus,
      } = this.state;
      if (shakeInput || showErrorStatus) {
        this.setState({
          shakeInput: false,
          showErrorStatus: false,
        });
      }
    }

    onChange(value);
  }

  handleKeyDown(e) {
    const {
      disabled,
    } = this.props;
    if (disabled) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      return;
    }

    const {
      onSubmit,
      onKeyDown,
    } = this.props;

    switch (e.keyCode) {
      case 13:
        onSubmit();
        break;
      default:
    }

    onKeyDown(e);
  }

  renderInput() {
    const {
      type,
      name,
      value,
      defaultValue,
      placeholder,
      rows,
      autoCapitalize,
      autoComplete,
      autoCorrect,
      spellCheck,
      tabIndex,
      disabled,
      readOnly,
    } = this.props;

    const TagName = type === 'textarea' ? 'textarea' : 'input';
    const props = {};
    if (this.isControlled) {
      props.value = value;
    } else if (defaultValue) {
      props.defaultValue = defaultValue;
    }

    return (
      <TagName
        {...props}
        styleName="input"
        ref={this.setInputRef}
        type={type}
        name={name}
        rows={rows}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        tabIndex={tabIndex}
        disabled={disabled}
        readOnly={readOnly}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  }

  renderIcon() {
    const {
      icon,
      onClick,
      onClickIcon,
    } = this.props;

    if (!icon) {
      return null;
    }

    const onClickCallback = onClickIcon || onClick;

    return (
      <div
        styleName={classnames(
          'status-icon',
          {
            clickable: onClickCallback,
          },
        )}
        onClick={(e) => {
          if (onClickCallback) {
            e.stopPropagation(); // prevent triggering onClick twice
            onClickCallback();
          }
        }}
      >
        <Icon {...icon} />
      </div>
    );
  }

  render() {
    const {
      className,
      theme,
      size,
      readOnly,
      disabled,
      status,
      icon,
      onClick,
    } = this.props;
    const {
      shakeInput,
      showErrorStatus,
      error,
    } = this.state;

    const holderStyleName = classnames(
      'holder',
      `size-${size}`,
      {
        disabled,
        clickable: readOnly && onClick,
        'flash-error': shakeInput,
        'status-error': showErrorStatus,
        'with-icon': icon,
        [`status-${status}`]: status,
        [`theme-${theme}`]: theme,
      },
    );

    return (
      <div
        className={className}
        styleName={holderStyleName}
      >
        {this.renderInput()}
        {!!error && (
          <div styleName={classnames('error', {
            hide: !showErrorStatus,
          })}
          >
            <Block
              styleName="error-content"
              padding="m"
              background="white"
              borderRadius="default"
              layer={2}
            >
              <Text
                size="xxs"
                color="red"
                weight="bold"
                text={error}
              />
            </Block>
          </div>
        )}
        {this.renderIcon()}
      </div>
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(inputThemeNames),
  size: PropTypes.oneOf(inputSizeKeys),
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  icon: iconShape,
  error: PropTypes.string,
  rows: PropTypes.number,
  tabIndex: PropTypes.number,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  selectAllOnFocus: PropTypes.bool,
  status: PropTypes.oneOf(['', 'focus', 'error', 'warning']),
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoComplete: PropTypes.string,
  autoCorrect: PropTypes.oneOf(['on', 'off']),
  spellCheck: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onClickIcon: PropTypes.func,
  setInputRef: PropTypes.func,
  validate: PropTypes.func,
  withErrorShakeEffect: PropTypes.bool,
};

TextInput.defaultProps = {
  className: '',
  theme: 'default',
  size: defaultInputSizeKey,
  type: 'text',
  name: '',
  value: undefined,
  defaultValue: '',
  placeholder: '',
  icon: null,
  error: undefined,
  rows: 1,
  tabIndex: 0,
  disabled: false,
  readOnly: false,
  selectAllOnFocus: false,
  status: '',
  autoCapitalize: 'none',
  autoComplete: 'off',
  autoCorrect: 'off',
  spellCheck: false,
  onClick() {},
  onFocus() {},
  onKeyDown() {},
  onChange() {},
  onSubmit() {},
  onClickIcon: undefined,
  setInputRef() {},
  validate: () => ({
    success: true,
    error: '',
  }),
  withErrorShakeEffect: false,
};

export default CSSModules(TextInput, styles, {
  allowMultiple: true,
});
