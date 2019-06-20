import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import {
  colorNames,
} from 'src/config/styleConstants';
import Pie from '../Pie';
import styles from './pies.scss';

export class ConcentricPies extends PureComponent {
  render() {
    const {
      className,
      pies,
      startDeg,
      strokeWidth: defaultStrokeWidth,
      strokeColor: defaultStrokeColor,
      children,
    } = this.props;

    const numberOfPies = pies.length;
    let accumRadius = 0;

    return (
      <div
        className={className}
        styleName="wrapper"
      >
        {pies.map(({
          value,
          spacing = defaultStrokeWidth,
          strokeWidth = defaultStrokeWidth,
          strokeColor = defaultStrokeColor,
          trackColor,
          fill,
          showArcValue,
          showTrack,
          delay,
        }, i) => {
          accumRadius += spacing + strokeWidth;

          return (
            <Pie
              key={+i}
              styleName={i === numberOfPies - 1 ? '' : 'centered'}
              value={value}
              radius={accumRadius}
              startDeg={startDeg}
              strokeWidth={strokeWidth}
              strokeColor={strokeColor}
              trackColor={trackColor}
              fill={fill}
              showArcValue={showArcValue}
              showTrack={showTrack}
              delay={delay}
            />
          );
        }).reverse()}
        {children && (
          <div styleName="centered">
            {children}
          </div>
        )}
      </div>
    );
  }
}

ConcentricPies.propTypes = {
  className: PropTypes.string,
  pies: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    spacing: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.oneOf(colorNames),
    trackColor: PropTypes.oneOf(['', ...colorNames]),
    fill: PropTypes.oneOf(['', ...colorNames]),
    showArcValue: PropTypes.bool,
    showTrack: PropTypes.bool,
    delay: PropTypes.number,
  })).isRequired,
  startDeg: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.oneOf(colorNames),
  children: PropTypes.node,
};

ConcentricPies.defaultProps = {
  className: '',
  startDeg: 0,
  strokeWidth: 24,
  strokeColor: 'secondary',
  children: null,
};

export default CSSModules(ConcentricPies, styles);
