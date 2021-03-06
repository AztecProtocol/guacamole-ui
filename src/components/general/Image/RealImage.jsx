import React, {
  PureComponent,
  createRef,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ImageWrapper from './ImageWrapper';
import ImagePlaceholder from './ImagePlaceholder';
import isFlexibleImage from './utils/isFlexibleImage';
import styles from './image.scss';

class RealImage extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      src,
      backgroundUrl,
    } = nextProps;

    const {
      src: prevSrc,
      backgroundUrl: prevBackgroundUrl,
    } = prevState.prevProps;

    if (src === prevSrc && backgroundUrl === prevBackgroundUrl) {
      return null;
    }

    const isEmptyImage = !src && !backgroundUrl;

    return {
      loaded: isEmptyImage,
      error: false,
      prevProps: {
        src,
        backgroundUrl,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      src,
      backgroundUrl,
    } = props;

    const isEmptyImage = !src && !backgroundUrl;
    this.img = isEmptyImage
      ? null
      : createRef();

    this.state = {
      loaded: isEmptyImage,
      error: false,
      prevProps: { // eslint-disable-line react/no-unused-state
        src,
        backgroundUrl,
      },
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  componentDidMount() {
    this.checkImgStatus();
  }

  componentDidUpdate() {
    this.checkImgStatus();
  }

  setImgRef = (ref) => {
    this.img = ref;
  };

  checkImgStatus() {
    if (!this.img) return;

    const img = this.img.current;
    this.img = null;
    if (img && img.complete) {
      this.handleImageLoaded();
    }
  }

  handleImageLoaded() {
    if (this.img) return; // should be call from checkImgStatus

    const {
      onLoad,
    } = this.props;
    this.setState({
      loaded: true,
    });
    onLoad();
  }

  handleImageError() {
    const {
      onError,
    } = this.props;
    this.setState({
      loaded: true,
      error: true,
    });
    onError();
  }

  renderImage() {
    const {
      src,
      backgroundUrl,
      alt,
      showPlaceholder,
    } = this.props;
    const {
      loaded,
      error,
    } = this.state;

    if ((!src && !backgroundUrl) || error) {
      return null;
    }

    if (!loaded && showPlaceholder) {
      return (
        <img
          className={styles['preload-img']}
          ref={this.img}
          src={src || backgroundUrl}
          alt=""
          onLoad={this.handleImageLoaded}
          onError={this.handleImageError}
        />
      );
    }

    if (src) {
      const {
        ratio,
        width,
        height,
      } = this.props;
      const isPercentage = !!width && width.match(/.+%$/);
      return (
        <img
          className={classnames(
            styles.img,
            {
              [styles.free]: !ratio && (width === 'auto'),
            },
          )}
          ref={this.img}
          src={src}
          alt={alt}
          onLoad={this.handleImageLoaded}
          width={isPercentage ? '100%' : width}
          height={height}
        />
      );
    }

    if (backgroundUrl) {
      const {
        backgroundPosition, backgroundSize,
      } = this.props;
      const imageStyle = {
        backgroundImage: `url(${backgroundUrl})`,
      };
      if (backgroundPosition) {
        imageStyle.backgroundPosition = backgroundPosition;
      }
      if (backgroundSize) {
        imageStyle.backgroundSize = backgroundSize;
      }
      return (
        <div
          className={styles.bg}
          style={imageStyle}
        >
          {!showPlaceholder && !loaded && !error && (
            <img
              className={styles['preload-img']}
              ref={this.img}
              src={src || backgroundUrl}
              alt=""
              onLoad={this.handleImageLoaded}
              onError={this.handleImageError}
            />
          )}
        </div>
      );
    }

    return null;
  }

  render() {
    const {
      testId,
      className,
      ratio,
      width,
      height,
      src,
      backgroundUrl,
      borderRadius,
      children,
      showPlaceholder,
    } = this.props;
    const {
      loaded,
      error,
    } = this.state;

    const wrapperRatio = isFlexibleImage({
      ratio,
      width,
      height,
    }) && (!loaded || error)
      ? 'golden' : ratio;
    const isEmptyImage = !src && !backgroundUrl;
    const hasPlaceholder = showPlaceholder && (!loaded || isEmptyImage || error);

    return (
      <ImageWrapper
        testId={testId}
        className={className}
        ratio={wrapperRatio}
        width={width}
        height={height}
        borderRadius={borderRadius}
      >
        {this.renderImage()}
        {hasPlaceholder && (
          <ImagePlaceholder
            className={styles['mocked-holder']}
            isLoading={!loaded}
            noWrapper
          />
        )}
        {children}
      </ImageWrapper>
    );
  }
}

RealImage.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string.isRequired,
  ratio: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string.isRequired,
  backgroundPosition: PropTypes.string.isRequired,
  backgroundSize: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node,
  showPlaceholder: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

RealImage.defaultProps = {
  testId: undefined,
  children: null,
};

export default RealImage;
