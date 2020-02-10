import React from 'react';
import PropTypes from 'prop-types';
import {
  imageRatioNames,
  roundedCornerKeys,
} from 'src/config/styleConstants';
import withEmptyOrDefault from 'src/shapes/withEmptyOrDefault';
import LazyLoad from '../../utils/LazyLoad';
import isFlexibleImage from './utils/isFlexibleImage';
import ImageWrapper from './ImageWrapper';
import ImagePlaceholder from './ImagePlaceholder';
import RealImage from './RealImage';

const Image = ({
  className,
  ratio,
  width,
  height,
  src,
  backgroundUrl,
  backgroundPosition,
  backgroundSize,
  borderRadius,
  alt,
  children,
  lazyLoadContainerId,
  lazyLoadBuffer,
  lazyLoad,
  showPlaceholder,
  onLoad,
  onError,
}) => {
  const content = (
    <RealImage
      className={className}
      ratio={ratio}
      width={width}
      height={height}
      src={src}
      backgroundUrl={backgroundUrl}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      borderRadius={borderRadius}
      alt={alt}
      showPlaceholder={showPlaceholder}
      onLoad={onLoad}
      onError={onError}
    >
      {children}
    </RealImage>
  );

  const isEmptyImage = !src && !backgroundUrl;
  if (!lazyLoad || isEmptyImage) {
    return content;
  }

  const wrapperRatio = ratio || (isFlexibleImage({
    ratio,
    width,
    height,
  }) && 'golden') || '';

  const placeholder = showPlaceholder
    ? (
      <ImageWrapper
        className={className}
        ratio={wrapperRatio}
        width={width}
        height={height}
        borderRadius={borderRadius}
      />
    )
    : (
      <ImagePlaceholder
        className={className}
        ratio={wrapperRatio}
        width={width}
        height={height}
        borderRadius={borderRadius}
      />
    );

  return (
    <LazyLoad
      containerId={lazyLoadContainerId}
      buffer={lazyLoadBuffer}
      initialContent={placeholder}
    >
      {content}
    </LazyLoad>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  ratio: PropTypes.oneOf(['', ...imageRatioNames]),
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  backgroundUrl: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  borderRadius: PropTypes.oneOf(withEmptyOrDefault(roundedCornerKeys)),
  alt: PropTypes.string,
  children: PropTypes.node,
  lazyLoadContainerId: PropTypes.string,
  lazyLoadBuffer: PropTypes.number,
  lazyLoad: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

Image.defaultProps = {
  className: '',
  ratio: '',
  width: '',
  height: '',
  src: '',
  backgroundUrl: '',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: 'none',
  alt: '',
  children: null,
  lazyLoadContainerId: '',
  lazyLoadBuffer: 0,
  lazyLoad: false,
  showPlaceholder: true,
  onLoad() {},
  onError() {},
};

export default Image;
