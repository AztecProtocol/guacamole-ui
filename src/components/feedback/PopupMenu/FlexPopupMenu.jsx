import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
        <div
          className={styles['tether-content']}
          style={{
            marginLeft: `${offsetLeft}px`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

FlexPopupMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool,
};

FlexPopupMenu.defaultProps = {
  className: '',
  hide: false,
};

export default FlexPopupMenu;
