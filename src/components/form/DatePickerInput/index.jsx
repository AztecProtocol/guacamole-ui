/* eslint no-param-reassign: ['error', { props: true, ignorePropertyModificationsFor: ['inputProps'] }] */
import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import moment from 'moment';
import {
  inputThemeNames,
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/styleConstants';
import {
  toDateString,
} from 'utils/date';
import toMonthKey from 'utils/calendar/toMonthKey';
import getFirstValidDayBeforeIndex from '../DatePicker/utils/getFirstValidDayBeforeIndex';
import ClickOutsideHandler from '../../utils/ClickOutsideHandler';
import PopupMenu from '../../feedback/PopupMenu';
import Row from '../../layout/Row';
import Col from '../../layout/Col';
import Block from '../../layout/Block';
import TextInput from '../TextInput';
import DatePicker from '../DatePicker';
import InputButtonWrapper from './InputButtonWrapper';
import castToArray from './utils/castToArray';
import styles from './datepicker.scss';

export class DatePickerInput extends PureComponent {
  constructor(props) {
    super(props);

    const {
      selectedDays,
      initialSelectedDays,
      currentDayIndex,
    } = props;

    this.isControlled = !!selectedDays;
    this.isIndexControlled = currentDayIndex !== undefined;
    this.calendarRef = null;
    this.monthRefs = {};

    this.state = {
      showMenu: false,
      selectedDays: this.isControlled ? undefined : initialSelectedDays,
      currentDayIndex: this.isIndexControlled ? undefined : 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.calendarRef) return;

    const {
      mobileMode,
    } = this.props;
    const {
      showMenu: prevShowMenu,
    } = prevState;
    const {
      showMenu,
    } = this.state;
    if (!mobileMode || prevShowMenu || !showMenu) return;

    const {
      initialFirstVisibleMonth,
    } = this.props;
    const selectedDays = this.getSelectedDays();
    const currentDayIndex = this.getCurrentDayIndex();
    const pivotDay = selectedDays[currentDayIndex]
      || getFirstValidDayBeforeIndex(selectedDays, currentDayIndex)
      || initialFirstVisibleMonth;
    if (!pivotDay) return;

    const monthKey = toMonthKey(pivotDay);
    const monthRef = this.monthRefs[monthKey];
    if (!monthRef) return;

    const {
      top: containerTop,
    } = this.calendarRef.getBoundingClientRect();
    const {
      top: monthTop,
    } = monthRef.getBoundingClientRect();
    this.calendarRef.scrollTop = monthTop - containerTop;
  }

  getCurrentDayIndex() {
    const {
      currentDayIndex: controlledCurrentDayIndex,
    } = this.props;
    const {
      currentDayIndex,
    } = this.state;
    return this.isIndexControlled ? controlledCurrentDayIndex : currentDayIndex;
  }

  getSelectedDays() {
    const {
      selectedDays: controlledSelectedDays,
    } = this.props;
    const {
      selectedDays,
    } = this.state;
    return this.isControlled ? controlledSelectedDays : selectedDays;
  }

  getUnifiedInputValue() {
    const {
      numberOfDays,
      refineInputValue,
      inputDateFormat,
    } = this.props;
    const selectedDays = this.getSelectedDays();

    if (refineInputValue) {
      return refineInputValue(selectedDays);
    }

    const dateStrings = selectedDays.map(day => toDateString(day, inputDateFormat));
    if (selectedDays.length < numberOfDays) {
      dateStrings.push('');
    }

    return dateStrings.join(' ~ ');
  }

  getInputValue(day) {
    const {
      refineInputValue,
      inputDateFormat,
    } = this.props;

    if (refineInputValue) {
      return refineInputValue(day);
    }

    return !day ? '' : toDateString(day, inputDateFormat);
  }

  setCalendarRef = (ref) => {
    this.calendarRef = ref;
  };

  setMonthRef(key, ref) {
    this.monthRefs[key] = ref;
  }

  handleOpenMenu = () => {
    const {
      showMenu,
    } = this.state;
    if (!showMenu) {
      this.setState({
        showMenu: true,
      });
    }
  };

  handleOpenMenuAtIndex = (currentDayIndex) => {
    if (currentDayIndex !== this.getCurrentDayIndex()) {
      this.handleChangeDayIndex(currentDayIndex);
    }
    this.handleOpenMenu();
  };

  handleCloseMenu = () => {
    const {
      showMenu,
    } = this.state;
    if (showMenu) {
      this.setState({
        showMenu: false,
      });
    }
  };

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 9: { // tab
        const {
          numberOfDays,
        } = this.props;
        const currentDayIndex = this.getCurrentDayIndex();
        const goToPrevious = e.shiftKey;
        if ((!goToPrevious && currentDayIndex === numberOfDays - 1)
          || (goToPrevious && currentDayIndex === 0)
        ) {
          this.handleCloseMenu();
        }
        break;
      }
      case 27: // esc
        this.handleCloseMenu();
        break;
      default:
    }
  };

  handleSelectDay = (day, selectedDayIndex) => {
    const {
      autoCloseAfterSelect,
      onSelectDay,
    } = this.props;
    if (autoCloseAfterSelect) {
      const {
        numberOfDays,
      } = this.props;
      if (selectedDayIndex === numberOfDays - 1) {
        this.handleCloseMenu();
      }
    }

    onSelectDay(day, selectedDayIndex);
  };

  handleChangeDayIndex = (currentDayIndex) => {
    if (!this.isIndexControlled) {
      this.setState({
        currentDayIndex,
      });
    }

    const {
      onChangeDayIndex,
    } = this.props;
    onChangeDayIndex(currentDayIndex);
  };

  handleChangeDays = (selectedDays) => {
    if (!this.isControlled) {
      this.setState({
        selectedDays,
      });
    }

    const {
      onChangeDays,
    } = this.props;
    onChangeDays(selectedDays);
  };

  renderMonth = ({
    children,
    month,
  }) => {
    const {
      mobileMode,
    } = this.props;

    if (!mobileMode) {
      return children;
    }

    const key = toMonthKey(month);

    return (
      <div
        key={key}
        ref={ref => this.setMonthRef(key, ref)}
      >
        <Block padding="0 l">
          {children}
        </Block>
      </div>
    );
  };

  renderMenu() {
    const {
      showMenu,
    } = this.state;
    const {
      daysStatus,
      disabledDays,
      highlightedDays,
      initialFirstVisibleMonth,
      minDay,
      maxDay,
      minNights,
      numberOfDays,
      numberOfMonths,
      monthNameFormat,
      startOfWeek,
      showOutsideDays,
      mobileMode,
      isDayDisabled,
      isDayHighlighted,
      onHoverDay,
      onBlurDay,
      onChangeMonth,
    } = this.props;
    const currentDayIndex = this.getCurrentDayIndex();
    const selectedDays = this.getSelectedDays();

    const datepickerNode = (
      <PopupMenu
        hide={!showMenu}
        disabledClickOutside
        flexWidth
      >
        <DatePicker
          currentDayIndex={currentDayIndex}
          selectedDays={selectedDays}
          daysStatus={daysStatus}
          disabledDays={disabledDays}
          highlightedDays={highlightedDays}
          initialFirstVisibleMonth={initialFirstVisibleMonth}
          minDay={minDay}
          maxDay={maxDay}
          minNights={minNights}
          numberOfDays={numberOfDays}
          numberOfMonths={numberOfMonths}
          monthNameFormat={monthNameFormat}
          startOfWeek={startOfWeek}
          showOutsideDays={showOutsideDays}
          orientation={mobileMode ? 'vertical' : 'horizontal'}
          flexWidth={mobileMode}
          mobileMode={mobileMode}
          isDayDisabled={isDayDisabled}
          isDayHighlighted={isDayHighlighted}
          onHoverDay={onHoverDay}
          onBlurDay={onBlurDay}
          onSelectDay={this.handleSelectDay}
          onChangeMonth={onChangeMonth}
          onChangeDayIndex={this.handleChangeDayIndex}
          onChangeDays={this.handleChangeDays}
          renderMonth={this.renderMonth}
        />
      </PopupMenu>
    );

    if (!mobileMode) {
      return datepickerNode;
    }

    return (
      <div
        ref={this.setCalendarRef}
        className="calendar-container"
      >
        {datepickerNode}
      </div>
    );
  }

  renderUnifiedButton() {
    const {
      theme,
      size,
      label,
      unifiedLabel,
      placeholder,
      errorMessage,
      mobileMode,
    } = this.props;
    const {
      showMenu,
    } = this.state;
    const labelArr = castToArray(label);
    const labelStr = unifiedLabel || labelArr[0] || (mobileMode && showMenu && placeholder) || '';

    return (
      <InputButtonWrapper
        showMenu={showMenu}
        mobileMode={mobileMode}
        onOpenMenu={this.handleOpenMenu}
      >
        <TextInput
          theme={theme}
          size={size}
          label={(labelStr && errorMessage) || labelStr}
          placeholder={(placeholder !== labelStr && placeholder) || ''}
          value={this.getUnifiedInputValue()}
          status={errorMessage ? 'error' : showMenu ? 'focus' : ''}
          tabIndex={mobileMode ? -1 : 0}
          onClick={this.handleOpenMenu}
          onFocus={this.handleOpenMenu}
          onKeyDown={this.handleKeyDown}
          readOnly
        />
      </InputButtonWrapper>
    );
  }

  renderButtons() {
    const {
      theme,
      size,
      label,
      placeholder,
      errorMessage,
      numberOfDays,
      mobileMode,
    } = this.props;
    const {
      showMenu,
    } = this.state;
    const selectedDays = this.getSelectedDays();
    const currentDayIndex = this.getCurrentDayIndex();
    const labelArr = castToArray(label);
    const placeholderArr = castToArray(placeholder);
    const errorArr = castToArray(errorMessage);

    const buttonNodes = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const openMenuAtIndex = () => this.handleOpenMenuAtIndex(i);
      let status;
      if (errorArr[i]) {
        status = 'error';
      } else if (showMenu && i === currentDayIndex) {
        status = 'focus';
      }
      const labelStr = labelArr[i] || (mobileMode && showMenu && placeholderArr[i]) || '';
      const showPlaceholder = !mobileMode || !showMenu || labelArr[i] || errorArr[i];

      buttonNodes.push(
        <Col
          key={i}
          size={{
            m: 'm',
            s: 's',
          }}
          column={12 / numberOfDays}
        >
          <InputButtonWrapper
            showMenu={showMenu}
            mobileMode={mobileMode}
            onOpenMenu={openMenuAtIndex}
          >
            <TextInput
              theme={theme}
              size={size}
              label={(labelStr && errorArr[i]) || labelStr}
              placeholder={(showPlaceholder && placeholderArr[i]) || ''}
              value={this.getInputValue(selectedDays[i])}
              status={status}
              tabIndex={mobileMode ? -1 : 0}
              onClick={openMenuAtIndex}
              onFocus={openMenuAtIndex}
              onKeyDown={this.handleKeyDown}
              readOnly
            />
          </InputButtonWrapper>
        </Col>
      );
    }

    return (
      <Row
        offset={{
          m: 'm',
          s: 's',
        }}
        nowrap
      >
        {buttonNodes}
      </Row>
    );
  }

  render() {
    const {
      className,
      singleInput,
      mobileMode,
    } = this.props;
    const {
      showMenu,
    } = this.state;
    const shouldUseUnifiedButton = singleInput && (!mobileMode || !showMenu);

    return (
      <ClickOutsideHandler
        className={className}
        styleName="wrapper"
        onClickOutside={this.handleCloseMenu}
        disabled={!showMenu}
      >
        {shouldUseUnifiedButton ? this.renderUnifiedButton() : this.renderButtons()}
        {this.renderMenu()}
      </ClickOutsideHandler>
    );
  }
}

DatePickerInput.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(inputThemeNames),
  size: PropTypes.oneOf(inputSizeKeys),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  unifiedLabel: PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  currentDayIndex: PropTypes.number,
  initialSelectedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  selectedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  numberOfDays: PropTypes.number,
  onSelectDay: PropTypes.func,
  onChangeDayIndex: PropTypes.func,
  onChangeDays: PropTypes.func,
  onChangeMonth: PropTypes.func,
  refineInputValue: PropTypes.func,
  inputDateFormat: PropTypes.string,
  singleInput: PropTypes.bool,
  autoCloseAfterSelect: PropTypes.bool,
  mobileMode: PropTypes.bool,

  // props for DatePicker
  /* eslint-disable react/require-default-props */
  daysStatus: PropTypes.object,
  disabledDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  highlightedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  initialFirstVisibleMonth: PropTypes.instanceOf(moment),
  minDay: PropTypes.instanceOf(moment),
  maxDay: PropTypes.instanceOf(moment),
  minNights: PropTypes.number,
  numberOfMonths: PropTypes.number,
  monthNameFormat: PropTypes.string,
  startOfWeek: PropTypes.number,
  showOutsideDays: PropTypes.bool,
  isDayDisabled: PropTypes.func,
  isDayHighlighted: PropTypes.func,
  onHoverDay: PropTypes.func,
  onBlurDay: PropTypes.func,
  /* eslint-enable */
};

DatePickerInput.defaultProps = {
  className: '',
  theme: 'default',
  size: defaultInputSizeKey,
  label: '',
  unifiedLabel: '',
  placeholder: '',
  errorMessage: '',
  currentDayIndex: undefined,
  initialSelectedDays: [],
  selectedDays: undefined,
  numberOfDays: 1,
  numberOfMonths: 2,
  inputDateFormat: 'M/D ddd',
  singleInput: false,
  autoCloseAfterSelect: true,
  mobileMode: false,
  refineInputValue: null,
  onSelectDay() {},
  onChangeDayIndex() {},
  onChangeDays() {},
  onChangeMonth() {},
};

export default CSSModules(DatePickerInput, styles);
