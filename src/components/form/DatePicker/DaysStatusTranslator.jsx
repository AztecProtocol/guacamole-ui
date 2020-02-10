import {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  dayMin,
  dayMax,
} from 'utils/date';
import {
  addStatus,
  deleteStatus,
  addStatusInRange,
  deleteStatusInRange,
  hasStatus,
} from 'utils/calendar/statusModifier';
import addSelectedStatus from './utils/addSelectedStatus';
import removeSelectedStatus from './utils/removeSelectedStatus';
import getVisibleDays from './utils/getVisibleDays';
import getSoftDisabledDays from './utils/getSoftDisabledDays';
import applyModifiersToVisibleDays from './utils/applyModifiersToVisibleDays';
import getFirstValidDayBeforeIndex from './utils/getFirstValidDayBeforeIndex';

class DaysStatusTranslator extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    let {
      daysStatus,
    } = prevState;
    const {
      modifiers: prevModifier,
      visibleDays: prevVisibleDays,
    } = prevState;
    const {
      firstVisibleMonth: prevFirstVisibleMonth,
      currentDayIndex: prevDayIndex,
      fixedDaysStatus: prevFixedDaysStatus,
      hoveredDay: prevHoveredDay,
      selectedDays: prevSelectedDays,
      disabledDays: prevDisabledDays,
      highlightedDays: prevHighlightedDays,
      isDayDisabled: prevIsDayDisabled,
      isDayHighlighted: prevIsDayHighlighted,
      showOutsideDays: prevShowOutsideDays,
      numberOfMonths: prevNumberOfMonths,
      numberOfDays: prevNumberOfDays,
      minDay: prevMinDay,
      maxDay: prevMaxDay,
      minNights: prevMinNights,
    } = prevState.prevProps;
    const {
      firstVisibleMonth,
      currentDayIndex,
      fixedDaysStatus,
      hoveredDay,
      selectedDays,
      disabledDays,
      highlightedDays,
      isDayDisabled,
      isDayHighlighted,
      numberOfMonths,
      numberOfDays,
      minDay,
      maxDay,
      minNights,
      showOutsideDays,
    } = nextProps;
    const prevEnableOutsideDays = prevShowOutsideDays && prevNumberOfMonths === 1;
    const enableOutsideDays = showOutsideDays && numberOfMonths === 1;

    // TODO
    // apply status to outside days

    let hasDaysStatusReset = false;
    if (fixedDaysStatus !== prevFixedDaysStatus
      || disabledDays !== prevDisabledDays
      || highlightedDays !== prevHighlightedDays
      || minDay !== prevMinDay
      || maxDay !== prevMaxDay
    ) {
      hasDaysStatusReset = true;
      daysStatus = fixedDaysStatus;
      disabledDays.forEach((prev) => {
        daysStatus = addStatus(daysStatus, prev, 'disabled');
      });
      highlightedDays.forEach((prev) => {
        daysStatus = addStatus(daysStatus, prev, 'isHighlighted');
      });
      if (minDay) {
        const disableStart = dayMin([
          minDay.clone().startOf('month'),
          firstVisibleMonth.clone().startOf('month'),
        ]);
        if (enableOutsideDays) {
          disableStart.startOf('week');
        }
        daysStatus = addStatusInRange(
          daysStatus,
          disableStart,
          minDay.clone().subtract(1, 'day'),
          'disabled',
        );
      }
      if (maxDay) {
        const disableEnd = dayMax([
          maxDay.clone().endOf('month'),
          firstVisibleMonth.clone().add(numberOfMonths - 1, 'months').endOf('month'), // eslint-disable-line  newline-per-chained-call
        ]);
        if (enableOutsideDays) {
          disableEnd.endOf('week');
        }
        daysStatus = addStatusInRange(
          daysStatus,
          maxDay.clone().add(1, 'day'),
          disableEnd,
          'disabled',
        );
      }
    }

    let modifiers = prevModifier;
    if (isDayDisabled !== prevIsDayDisabled
      || isDayHighlighted !== prevIsDayHighlighted
    ) {
      modifiers = {};
      if (isDayDisabled) {
        modifiers.disabled = (day) => isDayDisabled(day);
      }
      if (isDayHighlighted) {
        modifiers.isHighlighted = (day) => isDayHighlighted(day);
      }
    }

    let visibleDays = prevVisibleDays;
    if (firstVisibleMonth !== prevFirstVisibleMonth
      || numberOfMonths !== prevNumberOfMonths
      || enableOutsideDays !== prevEnableOutsideDays
    ) {
      visibleDays = getVisibleDays(firstVisibleMonth, numberOfMonths, enableOutsideDays);
    }

    let hasDisabledModifierReApplied = false;
    if (modifiers !== prevModifier
      || visibleDays !== prevVisibleDays
      || hasDaysStatusReset
    ) {
      if (isDayDisabled !== prevIsDayDisabled) {
        hasDisabledModifierReApplied = true;
      }
      daysStatus = applyModifiersToVisibleDays(
        daysStatus,
        visibleDays,
        modifiers,
        !hasDaysStatusReset,
      );
    }

    if (selectedDays !== prevSelectedDays
      || hasDaysStatusReset
    ) {
      if (!hasDaysStatusReset) {
        daysStatus = removeSelectedStatus(daysStatus, prevSelectedDays);
      }
      daysStatus = addSelectedStatus(daysStatus, selectedDays);
    }

    if (selectedDays !== prevSelectedDays
      || currentDayIndex !== prevDayIndex
      || minNights !== prevMinNights
      || hasDaysStatusReset
      || hasDisabledModifierReApplied
    ) {
      if (prevNumberOfDays > 1 && !hasDaysStatusReset) {
        if (hasDisabledModifierReApplied) {
          visibleDays.forEach(({
            days,
          }) => days.forEach((day) => {
            if (hasStatus(daysStatus, day, 'softDisabled')) {
              daysStatus = deleteStatus(daysStatus, day, 'softDisabled');
            }
          }));
        }

        const days = getSoftDisabledDays(prevSelectedDays, prevDayIndex, prevMinNights);
        days.forEach((day) => {
          if (hasStatus(daysStatus, day, 'softDisabled')) {
            daysStatus = deleteStatus(
              daysStatus,
              day,
              new Set(['softDisabled', 'disabled']),
            );
          }
        });
      }

      if (numberOfDays > 1) {
        const days = getSoftDisabledDays(selectedDays, currentDayIndex, minNights);
        days.forEach((day) => {
          if (!hasStatus(daysStatus, day, 'disabled')) {
            daysStatus = addStatus(
              daysStatus,
              day,
              new Set(['softDisabled', 'disabled']),
            );
          }
        });
      }
    }

    if (hoveredDay !== prevHoveredDay
      || (hoveredDay && hasDaysStatusReset)
    ) {
      if (prevHoveredDay && !hasDaysStatusReset) {
        daysStatus = deleteStatus(daysStatus, prevHoveredDay, 'isHovered');

        if (prevDayIndex > 0) {
          const startDay = prevFirstVisibleMonth.clone().startOf('month');
          if (prevEnableOutsideDays) {
            startDay.startOf('week');
          }
          daysStatus = deleteStatusInRange(
            daysStatus,
            startDay,
            prevHoveredDay,
            'isTrailing',
          );
        }
      }

      if (hoveredDay) {
        daysStatus = addStatus(daysStatus, hoveredDay, 'isHovered');

        const prevDay = getFirstValidDayBeforeIndex(selectedDays, currentDayIndex);
        if (prevDay) {
          const startDay = firstVisibleMonth.clone().startOf('month');
          if (enableOutsideDays) {
            startDay.startOf('week');
          }
          daysStatus = addStatusInRange(
            daysStatus,
            dayMax(startDay, prevDay.clone().add(1, 'day')),
            hoveredDay.clone().subtract(1, 'day'),
            'isTrailing',
          );
        }
      }
    }

    return {
      daysStatus,
      modifiers,
      visibleDays,
      prevProps: {
        firstVisibleMonth,
        currentDayIndex,
        fixedDaysStatus,
        hoveredDay,
        selectedDays,
        disabledDays,
        highlightedDays,
        isDayDisabled,
        isDayHighlighted,
        numberOfMonths,
        numberOfDays,
        minDay,
        maxDay,
        minNights,
        showOutsideDays,
      },
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      daysStatus: {},
      modifiers: {},
      visibleDays: [],
      prevProps: {
        hoveredDay: null,
        selectedDays: [],
      },
    };
  }

  render() {
    const {
      daysStatus,
    } = this.state;
    const {
      children,
    } = this.props;

    return children({
      daysStatus,
    });
  }
}


DaysStatusTranslator.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  firstVisibleMonth: PropTypes.instanceOf(moment).isRequired,
  currentDayIndex: PropTypes.number.isRequired,
  selectedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
  hoveredDay: PropTypes.instanceOf(moment),
  fixedDaysStatus: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  disabledDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
  highlightedDays: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
  isDayDisabled: PropTypes.func,
  isDayHighlighted: PropTypes.func,
  numberOfMonths: PropTypes.number.isRequired,
  numberOfDays: PropTypes.number.isRequired,
  minDay: PropTypes.instanceOf(moment),
  maxDay: PropTypes.instanceOf(moment),
  minNights: PropTypes.number.isRequired,
  showOutsideDays: PropTypes.bool,
  /* eslint-enable */
  children: PropTypes.func.isRequired,
};

DaysStatusTranslator.defaultProps = {
  isDayDisabled: null,
  isDayHighlighted: null,
  hoveredDay: null,
  minDay: null,
  maxDay: null,
  showOutsideDays: false,
};

export default DaysStatusTranslator;
