import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  imageRatioNames,
  roundedCornerKeys,
} from 'src/config/styleConstants';
import withEmptyOrDefault from 'src/shapes/withEmptyOrDefault';
import cameraGlyph from 'src/assets/camera.svg';
import SVG from '../SVG';
import ImageWrapper from './ImageWrapper';
import styles from './image.scss';

export const ImagePlaceholder = ({
  className,
  ratio,
  width,
  height,
  borderRadius,
  children,
  noWrapper,
  isLoading,
}) => {
  const contentNode = (
    <div
      className={noWrapper ? className : ''}
      styleName={classnames('placeholder', {
        isLoading,
      })}
    >
      <div styleName="placeholder-icon">
        <SVG
          width="100%"
          height="100%"
          glyph={cameraGlyph}
          color="grey-lighter"
        />
      </div>
    </div>
  );

  if (noWrapper) {
    return contentNode;
  }

  return (
    <ImageWrapper
      className={className}
      ratio={ratio}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {contentNode}
      {children}
    </ImageWrapper>
  );
};

ImagePlaceholder.propTypes = {
  className: PropTypes.string,
  ratio: PropTypes.oneOf(['', ...imageRatioNames]),
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.oneOf(withEmptyOrDefault(roundedCornerKeys)),
  children: PropTypes.node,
  noWrapper: PropTypes.bool,
  isLoading: PropTypes.bool,
};

ImagePlaceholder.defaultProps = {
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null,
  noWrapper: false,
  isLoading: false,
};

export default CSSModules(ImagePlaceholder, styles, {
  allowMultiple: true,
});
