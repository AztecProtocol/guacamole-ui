import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import CSSModules from 'react-css-modules';
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
      <div styleName="day empty">
        {date}
      </div>
    );
  }

  const disabled = status.has('disabled');
  const styleName = classnames('day', {
    selected: status.has('isSelected'),
    hovered: !disabled && status.has('isHovered'),
    ranged: status.has('isInRange'),
    trailing: status.has('isTrailing'),
    highlighted: status.has('isHighlighted'),
    outside: isOutside,
    disabled,
  });

  return (
    <div
      styleName={styleName}
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

export default CSSModules(Day, styles, {
  allowMultiple: true,
});
