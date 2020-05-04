import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  backgroundNames,
  shadowLayerKeys,
  roundedCornerKeys,
  sizeKeys,
  colorNames,
} from 'src/config/styleConstants';
import {
  inputMenuDefaultBackground,
  inputMenuBorderColor,
  inputMenuBorderRadius,
  inputMenuOffsetTop,
  inputMenuLayer,
} from 'src/config/inputs';
import Block from '../../layout/Block';
import styles from './popup.scss';

class FlexPopupMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offsetLeft: 0,
    };

    this.tether = null;
  }

  componentDidMount() {
    this.adjustTetherPosition();
    window.addEventListener('resize', this.adjustTetherPosition, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustTetherPosition, false);
  }

  setTetherRef = (ref) => {
    this.tether = ref;
  };

  adjustTetherPosition = () => {
    if (!this.tether) return;

    const {
      left,
      width,
    } = this.tether.getBoundingClientRect();
    const windowWidth = (typeof window !== 'undefined' && window.innerWidth) || 0;
    const shiftLeft = width + left - windowWidth;
    const offsetLeft = Math.min(-shiftLeft, 0);

    const {
      offsetLeft: prevOffsetLeft,
    } = this.state;
    if (offsetLeft !== prevOffsetLeft) {
      this.setState({
        offsetLeft,
      });
    }
  };

  render() {
    const {
      className,
      background,
      borderColor,
      borderRadius,
      layer,
      offsetTop,
      children,
      hide,
    } = this.props;
    const {
      offsetLeft,
    } = this.state;

    return (
      <div
        ref={this.setTetherRef}
        className={classnames(
          className,
          styles.tether,
          {
            [styles.hide]: hide,
          },
        )}
      >
        <Block
          className={classnames(
            styles['tether-content'],
            {
              [styles[`top-${offsetTop}`]]: offsetTop,
            },
          )}
          style={{
            marginLeft: `${offsetLeft}px`,
          }}
          background={background}
          borderColor={borderColor}
          borderRadius={borderRadius}
          layer={layer}
        >
          {children}
        </Block>
      </div>
    );
  }
}

FlexPopupMenu.propTypes = {
  className: PropTypes.string,
  background: PropTypes.oneOf(backgroundNames),
  borderColor: PropTypes.oneOf(['', ...colorNames]),
  borderRadius: PropTypes.oneOf(roundedCornerKeys),
  layer: PropTypes.oneOf(shadowLayerKeys),
  offsetTop: PropTypes.oneOf(['', ...sizeKeys]),
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool,
};

FlexPopupMenu.defaultProps = {
  className: '',
  background: inputMenuDefaultBackground,
  borderColor: inputMenuBorderColor,
  borderRadius: inputMenuBorderRadius,
  layer: inputMenuLayer,
  offsetTop: inputMenuOffsetTop,
  hide: false,
};

export default FlexPopupMenu;
