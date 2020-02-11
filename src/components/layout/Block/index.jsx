import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import generateResponsiveStyleNames from 'src/utils/generateResponsiveStyleNames';
import generateResponsiveShape from 'src/utils/generateResponsiveShape';
import parseCssSizeValues from 'src/utils/parseCssSizeValues';
import responsiveCssSizes from 'src/shapes/responsiveCssSizes';
import {
  roundedCornerKeys,
  defaultRoundedCornerKey,
  shadowLayerKeys,
} from 'src/config/styleConstants';
import withEmptyOrDefault from 'src/shapes/withEmptyOrDefault';
import styles from './block.scss';

const Block = ({
  testId,
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

  const sizeStyleNames = ['all', 'top', 'right', 'bottom', 'left', 'v', 'h']
    .filter((size) => sizeMap[size])
    .map((size) => generateResponsiveStyleNames(size, sizeMap[size]).map((n) => styles[n]));

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

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div
      data-testid={testId}
      className={classnames(
        className,
        ...sizeStyleNames,
        (align && generateResponsiveStyleNames('align', align).map((n) => styles[n])) || '',
        {
          [styles[`bg-${background}`]]: background,
          [styles[`border-${borderColor}`]]: hasAnyBorder && borderColor,
          [styles['with-border']]: hasAnyBorder,
          [styles['full-border']]: hasBorder,
          [styles['border-top']]: hasBorderTop,
          [styles['border-right']]: hasBorderRight,
          [styles['border-bottom']]: hasBorderBottom,
          [styles['border-left']]: hasBorderLeft,
          [styles[`rounded-${roundedSize}`]]: roundedSize,
          [styles['overflow-hidden']]: overflowHidden,
          [styles[`layer-${layer}`]]: layer,
          [styles.clickable]: onClick,
          [styles.stretch]: stretch,
          [styles.inline]: inline,
        },
      )}
      style={style}
      onKeyDown={onClick}
      onClick={onClick}
    >
      {children}
    </div>
  );
  /* eslint-enable jsx-a11y/no-static-element-interactions */
};

Block.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
  layer: generateResponsiveShape(shadowLayerKeys),
  align: generateResponsiveShape(['', 'left', 'center', 'right']),
  stretch: PropTypes.bool,
  inline: PropTypes.bool,
  borderRadius: generateResponsiveShape(withEmptyOrDefault(roundedCornerKeys)),
  overflowHidden: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Block.defaultProps = {
  testId: undefined,
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

export default Block;
