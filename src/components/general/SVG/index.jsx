import React from 'react';
import PropTypes from 'prop-types';
import cssLength from 'src/propTypes/cssLength';
import {
  colorMap,
} from 'src/config/colors';
import {
  colorNames,
} from 'src/config/styleConstants';
import extractColorDetail from './utils/extractColorDetail';

const SVG = ({
  className,
  glyph,
  width,
  height,
  color,
  strokeColor,
  fill,
  stroke,
  strokeWidth,
}) => {
  const svgProps = {};
  if (width) {
    svgProps.width = width;
  }
  if (height) {
    svgProps.height = height;
  }

  const colorCode = color ? colorMap[color] : fill;
  if (colorCode) {
    const {
      rgb,
      opacity,
    } = extractColorDetail(colorCode);
    svgProps.fill = rgb;
    if (opacity !== undefined) {
      svgProps.fillOpacity = opacity;
    }
  }

  const strokeColorCode = strokeColor ? colorMap[strokeColor] : stroke;
  if (strokeColorCode) {
    const {
      rgb,
      opacity,
    } = extractColorDetail(strokeColorCode);
    svgProps.stroke = rgb;
    if (opacity !== undefined) {
      svgProps.strokeOpacity = opacity;
    }
  }

  if (strokeWidth !== undefined) {
    svgProps.strokeWidth = strokeWidth;
  }

  return (
    <svg
      className={className}
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: `<use xlink:href="#${glyph.id}" />`,
      }}
      {...svgProps}
    />
  );
};

SVG.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  width: cssLength,
  height: cssLength,
  color: PropTypes.oneOf(['', ...colorNames]),
  strokeColor: PropTypes.oneOf(['', ...colorNames]),
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SVG.defaultProps = {
  className: '',
  width: '',
  height: '',
  color: '',
  strokeColor: '',
  fill: '',
  stroke: '',
  strokeWidth: 0,
};

export default SVG;
