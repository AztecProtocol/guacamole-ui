import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import styles from './calendar.scss';

function Day({
  day,
  isOutside,
  showOutsideDays,
  status,
  onSelect,
  onHover,
  onBlur,
}) {
  const date = day.format('D');

  const empty = isOutside && !showOutsideDays;
  if (empty) {
    return (
      <div className={`${styles.day} ${styles.empty}`}>
        {date}
      </div>
    );
  }

  const disabled = status.has('disabled');

  return (
    <div
      className={classnames(
        styles.day,
        {
          [styles.selected]: status.has('isSelected'),
          [styles.hovered]: !disabled && status.has('isHovered'),
          [styles.ranged]: status.has('isInRange'),
          [styles.trailing]: status.has('isTrailing'),
          [styles.highlighted]: status.has('isHighlighted'),
          [styles.outside]: isOutside,
          [styles.disabled]: disabled,
        },
      )}
      onClick={() => onSelect && onSelect(day, status)}
      onMouseEnter={() => onHover && onHover(day, status)}
      onMouseLeave={() => onBlur && onBlur(day, status)}
    >
      {date}
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.instanceOf(moment).isRequired,
  isOutside: PropTypes.bool,
  showOutsideDays: PropTypes.bool,
  status: PropTypes.instanceOf(Set),
  onSelect: PropTypes.func,
  onHover: PropTypes.func,
  onBlur: PropTypes.func,
};

Day.defaultProps = {
  status: new Set(),
  isOutside: false,
  showOutsideDays: false,
  onSelect: null,
  onHover: null,
  onBlur: null,
};

export default Day;
