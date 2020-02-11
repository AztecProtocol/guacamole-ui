import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './draggable.scss';

const isTouchEvent = (e) => e.touches.length === 1
  && (e.type.toLowerCase() !== 'touchend');

const stopEventBubble = (e) => {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
};

class Draggable extends PureComponent {
  constructor(props) {
    super(props);

    this.isDragging = false;
    this.positionX = 0;
    this.positionY = 0;
  }

  componentDidUpdate(prevProps) {
    const {
      disabled,
    } = this.props;
    const {
      disabled: prevDisabled,
    } = prevProps;
    if (disabled && !prevDisabled) {
      this.disableMouseDrag();
      this.disableTouchDrag();
    }
  }

  handleMouseDown = (e) => {
    const {
      disabled,
    } = this.props;
    if (disabled) return;

    stopEventBubble(e);
    this.enableMouseDrag();
  };

  handleDrag = ({
    clientX, clientY,
  }) => {
    this.isDragging = true;

    const {
      onDrag,
    } = this.props;
    onDrag({
      x: clientX,
      y: clientY,
    });
  };

  handleDragEnd = () => {
    this.disableMouseDrag();
    this.handleStop();
  };

  handleTouchStart = (e) => {
    const {
      disabled,
    } = this.props;
    if (disabled || !isTouchEvent(e)) return;

    stopEventBubble(e);
    this.enableTouchDrag();
  };

  handleTouchMove = (e) => {
    this.isDragging = true;

    const {
      onDrag,
    } = this.props;
    const {
      pageX, pageY,
    } = e.touches[0];
    onDrag({
      x: pageX,
      y: pageY,
    });
  };

  handleTouchEnd = () => {
    this.disableTouchDrag();
    this.handleStop();
  };

  handleStop() {
    if (this.isDragging) {
      this.isDragging = false;
      const {
        onDragStop,
      } = this.props;
      onDragStop();
    }
  }

  enableMouseDrag() {
    document.addEventListener('mousemove', this.handleDrag, true);
    document.addEventListener('mouseup', this.handleDragEnd, true);
  }

  disableMouseDrag() {
    document.removeEventListener('mousemove', this.handleDrag, true);
    document.removeEventListener('mouseup', this.handleDragEnd, true);
  }

  enableTouchDrag() {
    document.addEventListener('touchmove', this.handleTouchMove, true);
    document.addEventListener('touchend', this.handleTouchEnd, true);
  }

  disableTouchDrag() {
    document.removeEventListener('touchmove', this.handleTouchMove, true);
    document.removeEventListener('touchend', this.handleTouchEnd, true);
  }

  render() {
    const {
      testId,
      className,
      children,
      style,
      disabled,
    } = this.props;

    return (
      <div
        data-testid={testId}
        className={classnames(
          className,
          {
            [styles.draggable]: !disabled,
          },
        )}
        role="button"
        tabIndex="-1"
        style={style}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    );
  }
}

Draggable.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onDrag: PropTypes.func.isRequired,
  onDragStop: PropTypes.func,
  disabled: PropTypes.bool,
};

Draggable.defaultProps = {
  testId: undefined,
  className: '',
  children: null,
  style: null,
  onDragStop() {},
  disabled: false,
};

export default Draggable;
