import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  shapeSizeKeys,
  textColorNames,
  backgroundNames,
  shadowLayerKeys,
} from 'src/config/styleConstants';
import Icon from '../../general/Icon';
import Image from '../../general/Image';
import Text from '../../general/Text';
import Clickable from '../../utils/Clickable';
import styles from './avatar.scss';

export class Avatar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSrcLoaded: false,
      isSrcBroken: false,
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded = () => {
    this.setState({
      isSrcLoaded: true,
    });
  };

  handleImageError = () => {
    this.setState({
      isSrcBroken: true,
    });
  };

  renderContent() {
    const {
      shape,
      src,
      alt,
      iconName,
      color,
      size,
      lazyLoad,
    } = this.props;
    const {
      isSrcBroken,
    } = this.state;

    if (src && !isSrcBroken) {
      return (
        <Image
          className={styles.img}
          backgroundUrl={src}
          width="100%"
          height="100%"
          borderRadius={shape === 'circular' ? 'circular' : 'default'}
          showPlaceholder={false}
          lazyLoad={lazyLoad}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageError}
        />
      );
    }

    if (alt) {
      return (
        <Text
          className={styles.img}
          text={alt}
          color={color}
        />
      );
    }

    return (
      <Icon
        className={styles.img}
        name={iconName}
        size={size}
        color={color}
      />
    );
  }

  render() {
    const {
      className,
      shape,
      src,
      iconBackground,
      background,
      layer,
      size,
      status,
      inactive,
      onClick,
    } = this.props;
    const {
      isSrcLoaded,
      isSrcBroken,
    } = this.state;
    const isSrcAvailable = !!src && isSrcLoaded && !isSrcBroken;
    const useIconBackground = !!iconBackground && (!isSrcAvailable || !background);
    const backgroundColor = useIconBackground
      ? iconBackground
      : background;

    const TagName = onClick ? Clickable : 'div';
    return (
      <TagName
        className={classnames(
          className,
          styles.avatar,
          styles[`shape-${shape}`],
          styles[`size-${size}`],
          {
            [styles.inactive]: inactive,
            [styles[`bg-${backgroundColor}`]]: backgroundColor,
            [styles['bg-white']]: backgroundColor === 'white'
              || (!backgroundColor
                && isSrcAvailable
                && inactive),
            [styles[`layer-${layer}`]]: layer,
          },
        )}
        onClick={onClick}
      >
        {this.renderContent()}
        {status && (
          <div className={styles[`status-${status}`]} />
        )}
      </TagName>
    );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.oneOf(['circular', 'square']),
  src: PropTypes.string,
  alt: PropTypes.string,
  iconName: PropTypes.string,
  iconBackground: PropTypes.oneOf(['', ...backgroundNames]),
  color: PropTypes.oneOf(textColorNames),
  background: PropTypes.oneOf(['', ...backgroundNames]),
  layer: PropTypes.oneOf(shadowLayerKeys),
  size: PropTypes.oneOf(shapeSizeKeys),
  status: PropTypes.oneOf(['', 'online', 'offline']),
  inactive: PropTypes.bool,
  lazyLoad: PropTypes.bool,
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  className: '',
  shape: 'circular',
  src: '',
  alt: '',
  iconName: 'person',
  iconBackground: '',
  background: 'primary-lightest',
  color: 'primary-lighter',
  layer: 0,
  size: 's',
  status: '',
  inactive: false,
  lazyLoad: false,
  onClick: null,
};

export default Avatar;
