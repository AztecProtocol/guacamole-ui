import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import {
  isSameMonth,
} from 'utils/date';
import toMonthKey from 'utils/calendar/toMonthKey';
import getVisibleMonthsOfCalendar from 'utils/calendar/getVisibleMonthsOfCalendar';
import Month from './Month';
import styles from './calendar.scss';

class Calendar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      months: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      firstVisibleMonth,
      numberOfMonths,
    } = nextProps;
    const {
      months,
    } = prevState;
    if (months[0]
      && isSameMonth(firstVisibleMonth, months[0])
      && numberOfMonths === months.length
    ) {
      return null;
    }

    return {
      months: getVisibleMonthsOfCalendar({
        firstVisibleMonth,
        numberOfMonths,
      }),
    };
  }

  renderMonths() {
    const {
      monthNameFormat,
      startOfWeek,
      numberOfMonths,
      showOutsideDays,
      onSelectDay,
      onHoverDay,
      onBlurDay,
      daysStatus,
      renderMonth,
    } = this.props;
    const {
      months,
    } = this.state;
    const doShowOutsideDays = showOutsideDays && numberOfMonths === 1;

    return months.map((month) => {
      const monthProps = {
        month,
        monthNameFormat,
        startOfWeek,
        showOutsideDays: doShowOutsideDays,
        daysStatus: daysStatus[toMonthKey(month)],
        onSelectDay,
        onHoverDay,
        onBlurDay,
      };

      const monthNode = (
        <Month
          key={toMonthKey(month)}
          {...monthProps}
        />
      );

      return renderMonth({
        ...monthProps,
        children: monthNode,
      });
    });
  }

  render() {
    const {
      testId,
      className,
      orientation,
      flexWidth,
      onSelectDay,
    } = this.props;

    return (
      <div
        data-testid={testId}
        className={classnames(
          className,
          {
            [styles['calendar-v']]: !flexWidth && orientation === 'vertical',
            [styles['calendar-h']]: !flexWidth && orientation === 'horizontal',
            [styles['calendar-flex']]: flexWidth,
            [styles.interactive]: onSelectDay,
          },
        )}
      >
        {this.renderMonths()}
      </div>
    );
  }
}

Calendar.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  firstVisibleMonth: PropTypes.instanceOf(moment),
  monthNameFormat: PropTypes.string,
  numberOfMonths: PropTypes.number,
  startOfWeek: PropTypes.number,
  showOutsideDays: PropTypes.bool,
  flexWidth: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  daysStatus: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onSelectDay: PropTypes.func,
  onHoverDay: PropTypes.func,
  onBlurDay: PropTypes.func,
  renderMonth: PropTypes.func,
};

Calendar.defaultProps = {
  testId: undefined,
  className: '',
  firstVisibleMonth: moment(),
  monthNameFormat: 'YYYY MMMM',
  numberOfMonths: 1,
  startOfWeek: 0,
  showOutsideDays: false,
  flexWidth: false,
  orientation: 'horizontal',
  daysStatus: {},
  onSelectDay: null,
  onHoverDay: null,
  onBlurDay: null,
  renderMonth: ({
    children,
  }) => children,
};

export default Calendar;
