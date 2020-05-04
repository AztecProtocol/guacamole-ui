import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
  inputThemeNames,
  inputSizeKeys,
} from 'src/config/styleConstants';
import TextInput from '../TextInput';
import getNextCursorPosition from './utils/getNextCursorPosition';
import getNumeralValue from './utils/getNumeralValue';
import formatNumeralValue from './utils/formatNumeralValue';
import escapeRegExp from './utils/escapeRegExp';
import getPositionBoundaries from './utils/getPositionBoundaries';
import handleKeyDown from './utils/handleKeyDown';
import isGreaterThan from './utils/isGreaterThan';

class MaskedNumberInput extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isControlled,
      prevProps,
    } = prevState;
    if (!isControlled) {
      return null;
    }

    const {
      value: prevValue,
      allowDecimal: prevAllowDecimal,
      allowNegative: prevAllowNegative,
    } = prevProps;
    const {
      value,
      allowDecimal,
      allowNegative,
    } = nextProps;
    if (value === prevValue
      && allowDecimal === prevAllowDecimal
      && allowNegative === prevAllowNegative
    ) {
      return null;
    }

    return {
      formatedValue: formatNumeralValue(value, {
        allowDecimal,
        allowNegative,
      }),
      prevProps: {
        value,
        allowDecimal,
        allowNegative,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      value,
      defaultValue,
      allowDecimal,
      allowNegative,
    } = props;
    const isControlled = value !== undefined;

    this.state = {
      isControlled,
      error: '',
      formatedValue: formatNumeralValue(defaultValue, {
        allowDecimal,
        allowNegative,
      }),
      prevProps: { // eslint-disable-line react/no-unused-state
        value: '',
        allowDecimal,
        allowNegative,
      },
    };

    this.input = null;
    this.nextPosition = null;
    this.clearErrorReq = null;

    this.setInputRef = this.setInputRef.bind(this);
    this.updateCursorPosition = this.updateCursorPosition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.nextPosition !== null) {
      this.updateCursorPosition(this.nextPosition);
      this.nextPosition = null;
    }

    const {
      error,
    } = this.state;
    const {
      error: prevError,
    } = prevState;
    if (error && error !== prevError) {
      clearTimeout(this.clearErrorReq);
      const {
        readingSpeed,
      } = this.props;
      const timeToFinishReadingError = Math.max(
        0.2,
        readingSpeed ? error.length / readingSpeed : 0,
      );
      this.clearErrorReq = setTimeout(() => {
        this.setState({
          error: '',
        });
      }, timeToFinishReadingError);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.clearErrorReq);
  }

  setInputRef(ref) {
    const {
      setInputRef,
    } = this.props;
    this.input = ref;
    setInputRef(ref);
  }

  getSelection() {
    const {
      selectionStart,
      selectionEnd,
    } = this.input;

    return {
      start: selectionStart,
      end: selectionEnd,
    };
  }

  getNextStateFromDecoratedValue(decoratedValue) {
    const {
      formatedValue: prevValue,
    } = this.state;
    const {
      allowDecimal,
      allowNegative,
      prefix,
      suffix,
      maxValue,
      minValue,
    } = this.props;

    const pattern = new RegExp(`^(${allowNegative ? '-?[0-9]?' : ''})?${escapeRegExp(prefix)}(.{0,})${escapeRegExp(suffix)}$`);
    const [match, sign_ = '', unsignedValue = ''] = decoratedValue.match(pattern) || [];
    const [, sign = '', extraDigit = ''] = sign_.match(/^(-)?([0-9]?)$/);
    let value = match ? `${sign_}${unsignedValue}` : decoratedValue;
    if (prefix && sign && !unsignedValue && prevValue) {
      value = '';
    } else if (prevValue.match(/^-?0$/) && value.match(/^-?0[0-9]$/)) {
      value = `${sign}${value.substr(-1)}`;
    }
    const numeralValue = getNumeralValue(value, {
      allowDecimal,
      allowNegative,
    });
    const {
      end: prevStart,
    } = this.getSelection();

    if (isGreaterThan(numeralValue, maxValue) || isGreaterThan(minValue, numeralValue)) {
      return {
        formatedValue: prevValue,
        start: prevStart - 1,
      };
    }

    const formatedValue = formatNumeralValue(value, {
      allowDecimal,
      allowNegative,
    });

    const positionOffset = match && prevStart <= sign_.length ? 0 : prefix.length;
    const prevPosition = Math.max(0, prevStart - positionOffset);
    const nextPosition = !match
      ? formatedValue.length
      : getNextCursorPosition(
        value,
        prevValue,
        prevPosition,
        {
          allowDecimal,
          allowNegative,
        },
      );
    let start = nextPosition + positionOffset;
    if (extraDigit && prefix) {
      start += prefix.length;
    }

    return {
      formatedValue,
      start,
    };
  }

  updateCursorPosition(position) {
    if (!this.input) return;

    this.input.setSelectionRange(position, position);
  }

  handleChange(decoratedValue) {
    const {
      formatedValue,
      start,
    } = this.getNextStateFromDecoratedValue(decoratedValue);
    const {
      isControlled,
      formatedValue: prevValue,
      error: prevError,
    } = this.state;

    if (formatedValue === prevValue) {
      setTimeout(() => {
        this.updateCursorPosition(start);
      }, 0);

      return;
    }

    const {
      validate,
      allowDecimal,
      allowNegative,
      onChange,
    } = this.props;

    const numeralValue = getNumeralValue(formatedValue, {
      allowDecimal,
      allowNegative,
    });

    if (validate) {
      clearTimeout(this.clearErrorReq);

      const {
        success,
        error,
      } = validate(numeralValue);
      if (!success) {
        this.nextPosition = Math.max(0, start - 1);
        this.setState({
          error: error !== prevError
            ? error
            : `${error} `, // force state to update and to trigger showFlashErrorStatus in TextInput
        });
        return;
      }

      if (prevError) {
        this.setState({
          error: '',
        });
      }
    }

    this.nextPosition = start;

    if (!isControlled) {
      this.setState({
        formatedValue,
      });
    }

    onChange(numeralValue);
  }

  handleKeyDown(e) {
    handleKeyDown(
      e,
      this.getSelection(),
      this.updateCursorPosition,
      this.props,
    );
  }

  handleClick(e) {
    const {
      start: clickAt,
    } = this.getSelection();
    const boundaries = getPositionBoundaries(e, this.props);
    const [start, end] = boundaries.find(([max], i) => {
      if (clickAt <= max) {
        return true;
      }
      if (i < boundaries.length - 1
        && clickAt - max < boundaries[i + 1][0] - clickAt
      ) {
        return true;
      }

      return i === boundaries.length - 1;
    });
    if (clickAt < start || clickAt > end) {
      e.preventDefault();
      this.updateCursorPosition(clickAt < start ? start : end);
    }
  }

  render() {
    const {
      formatedValue,
      error,
    } = this.state;
    const {
      testId,
      className,
      theme,
      size,
      placeholder,
      status,
      prefix,
      suffix,
      disabled,
    } = this.props;
    const [, sign = '', unsignedValue = ''] = formatedValue.match(/^(-)?(.{0,})/);
    const decoratedValue = placeholder && !formatedValue.length
      ? ''
      : `${sign}${prefix}${unsignedValue}${suffix}`;

    return (
      <TextInput
        testId={testId}
        className={className}
        theme={theme}
        setInputRef={this.setInputRef}
        size={size}
        value={decoratedValue}
        error={error}
        placeholder={placeholder}
        status={status}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        disabled={disabled}
        withErrorShakeEffect
      />
    );
  }
}

MaskedNumberInput.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(inputThemeNames),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(inputSizeKeys),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['', 'focus', 'error', 'warning']),
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  allowDecimal: PropTypes.bool,
  allowNegative: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  validate: PropTypes.func,
  setInputRef: PropTypes.func,
  readingSpeed: PropTypes.number,
  maxValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MaskedNumberInput.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  value: undefined,
  size: 'm',
  defaultValue: '',
  placeholder: '',
  status: '',
  prefix: '',
  suffix: '',
  allowDecimal: false,
  allowNegative: false,
  disabled: false,
  onChange() {},
  setInputRef() {},
  validate: undefined,
  readingSpeed: (200 * 5) / (60 * 1000), // characters per millisecond
  maxValue: 10000000000,
  minValue: -10000000000,
};

export default MaskedNumberInput;
