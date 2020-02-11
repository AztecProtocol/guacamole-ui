import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  colorNames,
} from 'src/config/styleConstants';
import calculateArcValuePosition from './utils/calculateArcValuePosition';
import styles from './pie.scss';

class Pie extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      value,
    } = nextProps;
    const {
      value: prevValue,
      radius,
    } = prevState;

    if (!radius || prevValue === null) {
      return null;
    }

    return {
      value,
    };
  }

  constructor(props) {
    super(props);

    const {
      value,
      radius,
      delay,
    } = props;
    this.hasOwnSize = radius !== null;

    this.state = {
      value: !delay && this.hasOwnSize ? value : null,
      radius: 0,
    };

    this.wrapper = null;

    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    this.setRadius();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      radius,
    } = this.state;
    if (!prevState.radius && radius) {
      const {
        delay,
      } = this.props;
      setTimeout(() => {
        this.applyValue();
      }, delay);
    }
  }

  setWrapperRef(ref) {
    this.wrapper = ref;
  }

  setRadius() {
    if (this.hasOwnSize) {
      const {
        radius,
      } = this.props;
      this.setState({
        radius,
      });
    } else if (this.wrapper) {
      const {
        width,
      } = this.wrapper.getBoundingClientRect();
      this.setState({
        radius: width / 2,
      });
    }
  }

  applyValue() {
    const {
      value,
    } = this.props;
    this.setState({
      value,
    });
  }

  render() {
    const {
      testId,
      className,
      startDeg,
      strokeWidth,
      strokeColor,
      trackColor,
      fill,
      children,
      showArcValue,
      showTrack,
    } = this.props;
    const {
      value,
      radius,
    } = this.state;
    const circleRadius = radius - (strokeWidth / 2);
    const perimeter = 2 * circleRadius * Math.PI;
    const restrictedValue = Math.min(100, Math.max(0, value || 0));
    const valueLen = perimeter * (restrictedValue / 100);
    const startOffset = perimeter * (startDeg / 360);

    return (
      <div
        ref={this.setWrapperRef}
        data-testid={testId}
        className={classnames(
          className,
          styles['pie-wrapper'],
          styles[`stroke-${strokeColor}`],
          {
            [styles['has-own-size']]: this.hasOwnSize,
            [styles[`fill-${fill}`]]: fill,
          },
          {},
        )}
        style={!this.hasOwnSize ? null : {
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      >
        {circleRadius > 0 && (
          <svg
            className={styles['pie-svg']}
            width={radius * 2}
            height={radius * 2}
          >
            {showTrack && (
              <circle
                className={classnames(
                  styles.pie,
                  styles.track,
                  {
                    [styles[`track-${trackColor}`]]: trackColor,
                  },
                )}
                cx={radius}
                cy={radius}
                r={circleRadius}
                style={{
                  strokeWidth: `${strokeWidth}px`,
                }}
              />
            )}
            <circle
              className={styles.pie}
              cx={radius}
              cy={radius}
              r={circleRadius}
              style={{
                strokeWidth: `${strokeWidth}px`,
                strokeDasharray: `${valueLen}px ${perimeter - valueLen}px`,
                strokeDashoffset: (valueLen - perimeter) + startOffset,
              }}
            />
          </svg>
        )}
        {children && (
          <div className={styles.content}>
            {children}
          </div>
        )}
        {showArcValue && circleRadius > 0 && value !== null && (() => {
          const MIN_FONT_SIZE = 10;
          const fontSize = Math.max(strokeWidth * 0.42, MIN_FONT_SIZE);
          const {
            x,
            y,
            inset,
          } = calculateArcValuePosition({
            radius,
            strokeWidth,
            startDeg,
            value,
            outsideOfArc: fontSize === MIN_FONT_SIZE,
          });

          return (
            <div
              className={styles['arc-value']}
              style={{
                top: `${y}px`,
                left: `${x}px`,
              }}
            >
              <div
                className={classnames(
                  styles.value,
                  {
                    [styles.inset]: inset,
                  },
                )}
                style={{
                  fontSize: `${fontSize}px`,
                }}
              >
                {`${value}%`}
              </div>
            </div>
          );
        })()}
      </div>
    );
  }
}

Pie.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  radius: PropTypes.number,
  value: PropTypes.number.isRequired,
  startDeg: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.oneOf(colorNames),
  trackColor: PropTypes.oneOf(['', ...colorNames]),
  fill: PropTypes.oneOf(['', ...colorNames]),
  children: PropTypes.node,
  showArcValue: PropTypes.bool,
  showTrack: PropTypes.bool,
  delay: PropTypes.number,
};

Pie.defaultProps = {
  testId: undefined,
  className: '',
  radius: null,
  strokeWidth: 24,
  startDeg: 0,
  strokeColor: 'secondary',
  trackColor: '',
  fill: '',
  children: null,
  showArcValue: false,
  showTrack: false,
  delay: 1000,
};

export default Pie;
