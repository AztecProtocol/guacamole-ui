import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  imageRatioNames,
  roundedCornerKeys,
} from 'src/config/styleConstants';
import withEmptyOrDefault from 'src/shapes/withEmptyOrDefault';
import cameraGlyph from 'src/assets/camera.svg';
import SVG from '../SVG';
import ImageWrapper from './ImageWrapper';
import styles from './image.scss';

const ImagePlaceholder = ({
  testId,
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
      data-testid={noWrapper ? testId : undefined}
      className={classnames(
        styles.placeholder,
        {
          [className]: noWrapper,
          [styles.isLoading]: isLoading,
        },
      )}
    >
      <div className={styles['placeholder-icon']}>
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
      testId={testId}
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
  testId: PropTypes.string,
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
  testId: undefined,
  className: '',
  ratio: '',
  width: '',
  height: '',
  borderRadius: '',
  children: null,
  noWrapper: false,
  isLoading: false,
};

export default ImagePlaceholder;
