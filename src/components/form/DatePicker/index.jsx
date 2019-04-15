import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  isSameDay,
} from 'utils/date';
import allowNavigation from './utils/allowNavigation';
import getFirstValidDayBeforeIndex from './utils/getFirstValidDayBeforeIndex';
import getFirstValidDayAfterIndex from './utils/getFirstValidDayAfterIndex';
import Calendar from '../../data/Calendar';
import CalendarWithNavigator from '../../data/Calendar/CalendarWithNavigator';
import DaysStatusTranslator from './DaysStatusTranslator';

class DatePicker extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      selectedDays,
      hoveredDay,
    } = prevState;
    const {
      currentDayIndex: prevDayIndex,
      minDay: prevMinDay,
      maxDay: prevMaxDay,
      numberOfMonths: prevNumberOfMonths,
    } = prevState.prevProps;
    const {
      currentDayIndex,
      minDay,
      maxDay,
      numberOfMonths,
    } = nextProps;
    let nextState = {};

    const isControlled = selectedDays === undefined;
    const dayIndexChanged = isControlled && currentDayIndex !== prevDayIndex;
    if (dayIndexChanged && hoveredDay) {
      nextState = {
        ...nextState,
        hoveredDay: null,
      };
    }

    if (minDay !== prevMinDay
      || maxDay !== prevMaxDay
      || numberOfMonths !== prevNumberOfMonths
    ) {
      const {
        firstVisibleMonth,
      } = prevState;
      const showNavigator = allowNavigation(
        firstVisibleMonth,
        numberOfMonths,
        minDay,
        maxDay
      );
      nextState = {
        ...nextState,
        showNavigator,
      };
    }

    return {
      ...nextState,
      prevProps: {
        currentDayIndex,
        minDay,
        maxDay,
        numberOfMonths,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      initialFirstVisibleMonth,
      selectedDays,
      initialSelectedDays,
      currentDayIndex,
      minDay,
    } = props;

    this.isControlled = !!selectedDays;

    const getPrevDay = days => getFirstValidDayBeforeIndex(days, currentDayIndex + 1);
    const firstVisibleMonth = initialFirstVisibleMonth
      || (selectedDays && getPrevDay(selectedDays))
      || (!this.isControlled && initialSelectedDays && getPrevDay(initialSelectedDays))
      || minDay
      || moment();

    this.state = {
      selectedDays: this.isControlled ? undefined : initialSelectedDays,
      hoveredDay: null,
      currentDayIndex,
      firstVisibleMonth,
      showNavigator: true,
      prevProps: {},
    };

    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.handleHoverDay = this.handleHoverDay.bind(this);
    this.handleBlurDay = this.handleBlurDay.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
  }

  getCurrentDayIndex() {
    const {
      currentDayIndex: controlledCurrentDayIndex,
    } = this.props;
    const {
      currentDayIndex,
    } = this.state;
    return this.isControlled ? controlledCurrentDayIndex : currentDayIndex;
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

  handleChangeMonth(firstVisibleMonth) {
    this.setState({
      hoveredDay: null,
      firstVisibleMonth,
    });

    const {
      onChangeMonth,
    } = this.props;
    onChangeMonth(firstVisibleMonth);
  }

  handleSelectDay(day, status) {
    if (status.has('disabled')) return;

    const {
      numberOfDays,
      minNights,
    } = this.props;
    const {
      hoveredDay,
    } = this.state;
    const currentDayIndex = this.getCurrentDayIndex();
    const prevSelectedDays = this.getSelectedDays();
    const isSameSelection = isSameDay(day, prevSelectedDays[currentDayIndex]);

    let nextDayIndex = (currentDayIndex + 1) % numberOfDays;
    let selectedDayIndex = currentDayIndex;
    let selectedDays;
    if (isSameSelection) {
      selectedDays = prevSelectedDays;
    } else if (numberOfDays === 1) {
      selectedDays = [day];
    } else {
      const isOrderInvalid = (day1, day2) => { // eslint-disable-line arrow-body-style
        return minNights === 0 ? day2.isBefore(day1, 'day') : !day2.isAfter(day1, 'day');
      };

      const dayBefore = getFirstValidDayBeforeIndex(prevSelectedDays, currentDayIndex);
      const startOver = currentDayIndex > 0 && (!dayBefore || isOrderInvalid(dayBefore, day));
      if (startOver) {
        nextDayIndex = 1;
        selectedDayIndex = 0;
        selectedDays = [day];
      } else {
        selectedDays = [...prevSelectedDays.slice(0, currentDayIndex)];
        selectedDays[currentDayIndex] = day;

        const nextDay = getFirstValidDayAfterIndex(prevSelectedDays, currentDayIndex);
        const cutOffTail = nextDay && isOrderInvalid(day, nextDay);
        if (!cutOffTail) {
          selectedDays = selectedDays.concat(prevSelectedDays.slice(currentDayIndex + 1));
        }
      }
    }

    if (hoveredDay) {
      this.setState({
        hoveredDay: null,
      });
    }

    if (nextDayIndex !== currentDayIndex || selectedDays !== prevSelectedDays) {
      if (!this.isControlled) {
        this.setState({
          currentDayIndex: nextDayIndex,
          selectedDays,
        });
      }

      const {
        onSelectDay,
      } = this.props;
      onSelectDay(day, selectedDayIndex);
    }

    if (nextDayIndex !== currentDayIndex) {
      const {
        onChangeDayIndex,
      } = this.props;
      onChangeDayIndex(nextDayIndex);
    }
    if (selectedDays !== prevSelectedDays) {
      const {
        onChangeDays,
      } = this.props;
      onChangeDays(selectedDays);
    }
  }

  handleHoverDay(day, status) {
    if (status.has('disabled')) return;

    this.setState({
      hoveredDay: day,
    });

    const {
      onHoverDay,
    } = this.props;
    onHoverDay(day);
  }

  handleBlurDay(day) {
    const {
      hoveredDay,
    } = this.state;
    if (!hoveredDay) return;

    this.setState({
      hoveredDay: null,
    });
    const {
      onBlurDay,
    } = this.props;
    onBlurDay(day);
  }

  render() {
    const {
      firstVisibleMonth,
      hoveredDay,
      showNavigator,
    } = this.state;
    const {
      className,
      daysStatus,
      disabledDays,
      highlightedDays,
      isDayDisabled,
      isDayHighlighted,
      minDay,
      maxDay,
      minNights,
      numberOfMonths,
      numberOfDays,
      monthNameFormat,
      startOfWeek,
      orientation,
      showOutsideDays,
      flexWidth,
      renderMonth,
    } = this.props;
    const currentDayIndex = this.getCurrentDayIndex();
    const selectedDays = this.getSelectedDays();

    const translatorProps = {
      firstVisibleMonth,
      currentDayIndex,
      hoveredDay,
      selectedDays,
      fixedDaysStatus: daysStatus,
      disabledDays,
      highlightedDays,
      isDayDisabled,
      isDayHighlighted,
      minDay,
      maxDay,
      minNights,
      numberOfMonths,
      numberOfDays,
    };
    const calendarProps = {
      className,
      numberOfMonths,
      firstVisibleMonth,
      onSelectDay: this.handleSelectDay,
      onHoverDay: this.handleHoverDay,
      onBlurDay: this.handleBlurDay,
      monthNameFormat,
      startOfWeek,
      orientation,
      showOutsideDays,
      flexWidth,
      renderMonth,
    };

    if (!showNavigator) {
      return (
        <DaysStatusTranslator
          {...translatorProps}
        >
          {({
            daysStatus: nextDaysStatus,
          }) => (
            <Calendar
              {...calendarProps}
              daysStatus={nextDaysStatus}
            />
          )}
        </DaysStatusTranslator>
      );
    }

    return (
      <DaysStatusTranslator
        {...translatorProps}
      >
        {({
          daysStatus: nextDaysStatus,
        }) => (
          <CalendarWithNavigator
            {...calendarProps}
            daysStatus={nextDaysStatus}
            minMonth={minDay}
            maxMonth={maxDay}
            onChangeMonth={this.handleChangeMonth}
          />
        )}
      </DaysStatusTranslator>
    );
  }
}

DatePicker.propTypes = {
  className: PropTypes.string,
  currentDayIndex: PropTypes.number,
  initialFirstVisibleMonth: PropTypes.instanceOf(moment),
  initialSelectedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  selectedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  daysStatus: PropTypes.object,
  disabledDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  highlightedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)),
  minDay: PropTypes.instanceOf(moment),
  maxDay: PropTypes.instanceOf(moment),
  minNights: PropTypes.number,
  numberOfDays: PropTypes.number,
  numberOfMonths: PropTypes.number,
  showOutsideDays: PropTypes.bool,
  isDayDisabled: PropTypes.func,
  isDayHighlighted: PropTypes.func,
  onSelectDay: PropTypes.func,
  onHoverDay: PropTypes.func,
  onBlurDay: PropTypes.func,
  onChangeDayIndex: PropTypes.func,
  onChangeDays: PropTypes.func,
  onChangeMonth: PropTypes.func,

  // props for Calendar
  /* eslint-disable react/require-default-props */
  monthNameFormat: PropTypes.string,
  startOfWeek: PropTypes.number,
  renderMonth: PropTypes.func,
  /* eslint-enable */
  flexWidth: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

DatePicker.defaultProps = {
  className: '',
  currentDayIndex: 0,
  initialFirstVisibleMonth: undefined,
  initialSelectedDays: [],
  selectedDays: null,
  daysStatus: {},
  disabledDays: [],
  highlightedDays: [],
  minDay: null,
  maxDay: null,
  minNights: 1,
  numberOfDays: 1,
  numberOfMonths: 1,
  orientation: 'horizontal',
  showOutsideDays: false,
  flexWidth: false,
  isDayDisabled: null,
  isDayHighlighted: null,
  onSelectDay() {},
  onHoverDay() {},
  onBlurDay() {},
  onChangeDayIndex() {},
  onChangeDays() {},
  onChangeMonth() {},
};

export default DatePicker;
