import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import Icon from '../../general/Icon';
import Clickable from '../../utils/Clickable';
import styles from './calendar.scss';

class CalendarNavigator extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      orientation,
    } = nextProps;
    const isVertical = orientation === 'vertical';
    if (isVertical === prevState.isVertical) {
      return null;
    }

    return {
      isVertical,
    };
  }

  constructor(props) {
    super(props);

    const {
      firstVisibleMonth,
      initialFirstVisibleMonth,
      orientation,
    } = props;

    this.isControlled = !!firstVisibleMonth;

    this.state = {
      isVertical: orientation === 'vertical',
      firstVisibleMonth: this.isControlled ? undefined : initialFirstVisibleMonth,
    };

    this.handleGoPrev = this.handleGoPrev.bind(this);
    this.handleGoNext = this.handleGoNext.bind(this);
  }

  getFirstVisibleMonth() {
    const {
      firstVisibleMonth: controlledFirstVisibleMonth,
    } = this.props;
    const {
      firstVisibleMonth,
    } = this.state;
    return this.isControlled ? controlledFirstVisibleMonth : firstVisibleMonth;
  }

  canGoPrev() {
    const {
      minMonth,
    } = this.props;
    const firstVisibleMonth = this.getFirstVisibleMonth();
    return !minMonth || minMonth.isBefore(firstVisibleMonth, 'month');
  }

  canGoNext() {
    const {
      maxMonth,
    } = this.props;
    if (!maxMonth) {
      return true;
    }

    const firstVisibleMonth = this.getFirstVisibleMonth();
    const {
      numberOfMonths,
    } = this.props;
    return firstVisibleMonth
      .clone()
      .add(numberOfMonths - 1, 'month')
      .isBefore(maxMonth, 'month');
  }

  handleChangeMonth(firstVisibleMonth) {
    if (!this.isControlled) {
      this.setState({
        firstVisibleMonth,
      });
    }

    const {
      onChangeMonth,
    } = this.props;
    onChangeMonth(firstVisibleMonth);
  }

  handleGoPrev() {
    const firstVisibleMonth = this.getFirstVisibleMonth();
    const prevMonth = firstVisibleMonth.clone().subtract(1, 'month');
    this.handleChangeMonth(prevMonth);
  }

  handleGoNext() {
    const firstVisibleMonth = this.getFirstVisibleMonth();
    const nextMonth = firstVisibleMonth.clone().add(1, 'month');
    this.handleChangeMonth(nextMonth);
  }

  renderPrevButton() {
    const disabled = !this.canGoPrev();
    const {
      isVertical,
    } = this.state;

    return (
      <Clickable
        className={styles['nav-prev']}
        onClick={disabled ? () => {} : this.handleGoPrev}
        disabled={disabled}
      >
        <Icon
          name={isVertical ? 'expand_less' : 'navigate_before'}
          size={isVertical ? 'xl' : 'l'}
          color={disabled ? 'primary-lightest' : 'primary'}
        />
      </Clickable>
    );
  }

  renderNextButton() {
    const disabled = !this.canGoNext();
    const {
      isVertical,
    } = this.state;

    return (
      <Clickable
        className={styles['nav-next']}
        onClick={disabled ? () => {} : this.handleGoNext}
        disabled={disabled}
      >
        <Icon
          name={isVertical ? 'expand_more' : 'navigate_next'}
          size={isVertical ? 'xl' : 'l'}
          color={disabled ? 'primary-lightest' : 'primary'}
        />
      </Clickable>
    );
  }

  renderNavigators() {
    const {
      isVertical,
    } = this.state;

    return (
      <div className={styles[`nav-${isVertical ? 'v' : 'h'}`]}>
        {this.renderPrevButton()}
        {this.renderNextButton()}
      </div>
    );
  }

  render() {
    const {
      className,
      flexWidth,
      children,
    } = this.props;
    const {
      isVertical,
    } = this.state;
    const firstVisibleMonth = this.getFirstVisibleMonth();

    return (
      <div
        className={classnames(
          className,
          styles['nav-holder'],
          {
            [styles.flex]: flexWidth,
            [styles.vertical]: isVertical,
          },
        )}
      >
        {this.renderNavigators()}
        {isVertical && (
          <div className={styles['calendar-in-nav-v']}>
            {children({
              firstVisibleMonth,
            })}
          </div>
        )}
        {!isVertical && children({
          firstVisibleMonth,
        })}
      </div>
    );
  }
}

CalendarNavigator.propTypes = {
  className: PropTypes.string,
  initialFirstVisibleMonth: PropTypes.instanceOf(moment),
  firstVisibleMonth: PropTypes.instanceOf(moment),
  minMonth: PropTypes.instanceOf(moment),
  maxMonth: PropTypes.instanceOf(moment),
  numberOfMonths: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  flexWidth: PropTypes.bool,
  children: PropTypes.func.isRequired,
  onChangeMonth: PropTypes.func,
};

CalendarNavigator.defaultProps = {
  className: '',
  initialFirstVisibleMonth: moment(),
  firstVisibleMonth: null,
  minMonth: null,
  maxMonth: null,
  numberOfMonths: 1,
  orientation: 'horizontal',
  flexWidth: false,
  onChangeMonth() {},
};

export default CalendarNavigator;
