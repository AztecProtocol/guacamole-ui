import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import generateResponsiveStyleNames from 'src/helpers/generateResponsiveStyleNames';
import generateResponsiveShape from 'src/helpers/generateResponsiveShape';
import parseCssSizeValues from 'src/helpers/parseCssSizeValues';
import responsiveCssSizes from 'src/shapes/responsiveCssSizes';
import {
  roundedCornerKeys,
  defaultRoundedCornerKey,
  shadowLayerKeys,
} from 'src/config/shapes';
import withEmptyOrDefault from 'src/shapes/withEmptyOrDefault';
import styles from './block.scss';

export const Block = ({
  className,
  style,
  padding,
  top,
  right,
  bottom,
  left,
  background,
  borderColor,
  hasBorder,
  hasBorderTop,
  hasBorderRight,
  hasBorderBottom,
  hasBorderLeft,
  layer,
  align,
  stretch,
  inline,
  borderRadius,
  overflowHidden,
  children,
  onClick,
}) => {
  const sizeMap = {
    top,
    right,
    bottom,
    left,
    ...parseCssSizeValues(padding),
  };

  const sizeStyleNames = ['all', 'top', 'right', 'bottom', 'left']
    .filter(size => sizeMap[size])
    .map(size => generateResponsiveStyleNames(size, sizeMap[size]));

  const hasAnyBorder = hasBorder
    || hasBorderTop
    || hasBorderRight
    || hasBorderBottom
    || hasBorderLeft;

  const roundedSize = borderRadius === 'default'
    ? defaultRoundedCornerKey
    : (borderRadius && borderRadius !== 'none'
      ? borderRadius
      : '');

  return (
    <div
      className={className}
      styleName={classnames(
        ...sizeStyleNames,
        (align && generateResponsiveStyleNames('align', align)) || '',
        {
          [`bg-${background}`]: background,
          [`border-${borderColor}`]: hasAnyBorder && borderColor,
          'with-border': hasAnyBorder,
          'full-border': hasBorder,
          'border-top': hasBorderTop,
          'border-right': hasBorderRight,
          'border-bottom': hasBorderBottom,
          'border-left': hasBorderLeft,
          [`rounded-${roundedSize}`]: roundedSize,
          'overflow-hidden': overflowHidden,
          [`layer-${layer}`]: layer,
          clickable: onClick,
          stretch,
          inline,
        },
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Block.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  padding: responsiveCssSizes,
  top: responsiveCssSizes,
  right: responsiveCssSizes,
  bottom: responsiveCssSizes,
  left: responsiveCssSizes,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  hasBorder: PropTypes.bool,
  hasBorderTop: PropTypes.bool,
  hasBorderRight: PropTypes.bool,
  hasBorderBottom: PropTypes.bool,
  hasBorderLeft: PropTypes.bool,
  layer: PropTypes.oneOf(shadowLayerKeys),
  align: generateResponsiveShape(['', 'left', 'center', 'right']),
  stretch: PropTypes.bool,
  inline: PropTypes.bool,
  borderRadius: PropTypes.oneOf(withEmptyOrDefault(roundedCornerKeys)),
  overflowHidden: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Block.defaultProps = {
  className: '',
  style: {},
  padding: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
  background: '',
  borderColor: '',
  hasBorder: false,
  hasBorderTop: false,
  hasBorderRight: false,
  hasBorderBottom: false,
  hasBorderLeft: false,
  layer: 0,
  align: '',
  stretch: false,
  inline: false,
  borderRadius: '',
  overflowHidden: false,
  children: null,
  onClick: null,
};

export default CSSModules(Block, styles, {
  allowMultiple: true,
});
