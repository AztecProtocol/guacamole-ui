import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarNavigator from './CalendarNavigator';
import Calendar from './index';

function CalendarWithNavigator(props) {
  const {
    className,
    testId,
    firstVisibleMonth,
    initialFirstVisibleMonth,
    minMonth,
    maxMonth,
    numberOfMonths,
    onChangeMonth,
    orientation,
    flexWidth,
    ...calendarProps
  } = props;

  return (
    <CalendarNavigator
      className={className}
      firstVisibleMonth={firstVisibleMonth}
      initialFirstVisibleMonth={initialFirstVisibleMonth}
      minMonth={minMonth}
      maxMonth={maxMonth}
      numberOfMonths={numberOfMonths}
      orientation={orientation}
      flexWidth={flexWidth}
      onChangeMonth={onChangeMonth}
    >
      {({
        firstVisibleMonth: month,
      }) => (
        <Calendar
          testId={testId}
          firstVisibleMonth={month}
          numberOfMonths={numberOfMonths}
          orientation={orientation}
          flexWidth={flexWidth}
          {...calendarProps}
        />
      )}
    </CalendarNavigator>
  );
}

CalendarWithNavigator.propTypes = {
  // Props for CalendarNavigator
  className: PropTypes.string,
  firstVisibleMonth: PropTypes.instanceOf(moment),
  initialFirstVisibleMonth: PropTypes.instanceOf(moment),
  minMonth: PropTypes.instanceOf(moment),
  maxMonth: PropTypes.instanceOf(moment),
  onChangeMonth: PropTypes.func,

  // Props for Calendar
  testId: PropTypes.string,
  monthNameFormat: PropTypes.string,
  startOfWeek: PropTypes.number,
  showOutsideDays: PropTypes.bool,
  flexWidth: PropTypes.bool,
  daysStatus: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onSelectDay: PropTypes.func,
  onHoverDay: PropTypes.func,
  onBlurDay: PropTypes.func,

  // Shared Props
  numberOfMonths: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

CalendarWithNavigator.defaultProps = {
  testId: undefined,
  className: '',
  firstVisibleMonth: null,
  initialFirstVisibleMonth: moment(),
  minMonth: null,
  maxMonth: null,
  onChangeMonth() {},
  numberOfMonths: 1,
  startOfWeek: 0,
  monthNameFormat: 'YYYY MMMM',
  orientation: 'horizontal',
  showOutsideDays: false,
  flexWidth: false,
  daysStatus: {},
  onSelectDay: null,
  onHoverDay: null,
  onBlurDay: null,
};

export default CalendarWithNavigator;
