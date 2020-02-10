import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  isSameMonth,
} from 'utils/date';
import getVisibleDaysOfMonth from 'utils/calendar/getVisibleDaysOfMonth';
import toDayKey from 'utils/calendar/toDayKey';
import Block from '../../layout/Block';
import Day from './Day';
import styles from './calendar.scss';

class Month extends PureComponent {
  constructor(props) {
    super(props);

    const {
      month,
      startOfWeek,
    } = props;
    this.state = {
      days: getVisibleDaysOfMonth({
        month,
        startOfWeek,
      }),
      prevProps: {
        month,
        startOfWeek,
      },
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      month,
      startOfWeek,
    } = nextProps;
    const {
      month: prevMonth,
      startOfWeek: prevStartOfWeek,
    } = prevState.prevProps;

    if (startOfWeek === prevStartOfWeek
      && (month === prevMonth || isSameMonth(month, prevMonth))
    ) {
      return null;
    }

    return {
      days: getVisibleDaysOfMonth({
        month,
        startOfWeek,
      }),
      prevProps: {
        month,
        startOfWeek,
      },
    };
  }

  renderDays() {
    const {
      month,
      showOutsideDays,
      daysStatus,
      onSelectDay,
      onHoverDay,
      onBlurDay,
    } = this.props;
    const {
      days,
    } = this.state;
    const thisMonth = month.month();

    return days.map((day, i) => (
      <Day
        key={+i}
        day={day}
        isOutside={day.month() !== thisMonth}
        showOutsideDays={showOutsideDays}
        onSelect={onSelectDay}
        onHover={onHoverDay}
        onBlur={onBlurDay}
        status={daysStatus[toDayKey(day)]}
      />
    ));
  }

  renderMonthName() {
    const {
      month,
      monthNameFormat,
    } = this.props;

    return (
      <div className={styles['month-name']}>
        {month.format(monthNameFormat)}
      </div>
    );
  }

  renderWeekdayNames() {
    const weekdayNodes = [];
    const weekdayNames = moment.localeData().weekdaysMin();
    const {
      startOfWeek,
    } = this.props;
    for (let i = 0; i < 7; i += 1) {
      weekdayNodes.push((
        <div
          key={i}
          className={styles.weekday}
        >
          {weekdayNames[(startOfWeek + i) % 7]}
        </div>
      ));
    }

    return weekdayNodes;
  }

  render() {
    return (
      <div className={styles.month}>
        <Block
          bottom="m"
          align="center"
        >
          {this.renderMonthName()}
        </Block>
        <Block padding="xs 0">
          {this.renderWeekdayNames()}
        </Block>
        {this.renderDays()}
      </div>
    );
  }
}

Month.propTypes = {
  month: PropTypes.instanceOf(moment).isRequired,
  monthNameFormat: PropTypes.string.isRequired,
  startOfWeek: PropTypes.number.isRequired,
  showOutsideDays: PropTypes.bool,
  daysStatus: PropTypes.object,
  onSelectDay: PropTypes.func,
  onHoverDay: PropTypes.func,
  onBlurDay: PropTypes.func,
};

Month.defaultProps = {
  showOutsideDays: false,
  daysStatus: {},
  onSelectDay: null,
  onHoverDay: null,
  onBlurDay: null,
};

export default Month;
