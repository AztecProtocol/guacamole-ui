import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/styleConstants';
import shiftSize from 'src/utils/shiftSize';
import getScaleByPosition from '../../utils/Draggable/utils/getScaleByPosition';
import Draggable from '../../utils/Draggable';
import Icon from '../../general/Icon';
import Text from '../../general/Text';
import styles from './slide.scss';

export class SlideInput extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isControlled,
      isDragging,
    } = prevState;

    if (!isControlled || isDragging) {
      return null;
    }

    const {
      value,
    } = nextProps;
    const scale = value ? 100 : 0;

    return {
      value,
      scale,
    };
  }

  constructor(props) {
    super(props);

    this.track = null;
    this.trackRect = {
      left: 0,
      right: 0,
    };
    this.prevX = 0;

    const {
      value,
      initialValue,
    } = props;

    this.state = {
      isControlled: value !== undefined,
      isDragging: false,
      scale: initialValue ? 100 : 0,
      value: initialValue,
    };
  }

  componentWillUnmount() {
    this.unbindActions();
  }

  setTrackRef = (ref) => {
    this.track = ref;
    this.unbindActions();
    this.bindActions();
  };

  updateTrackRect = () => {
    if (!this.track) return;

    this.trackRect = this.track.getBoundingClientRect();
  };

  handleChangeHandlePosition = ({
    x,
  }) => {
    const {
      left,
      right,
    } = this.trackRect;
    this.prevX = Math.min(
      right,
      Math.max(left, x),
    );

    const scale = getScaleByPosition(x, left, right);

    this.setState({
      scale,
      isDragging: true,
    });
  };

  handleDragStop = () => {
    const {
      dropzoneLimit,
    } = this.props;
    const {
      left,
      right,
    } = this.trackRect;
    const {
      isControlled,
      value: prevValue,
    } = this.state;

    const exactScale = getScaleByPosition(
      this.prevX,
      left,
      right,
    );
    const value = exactScale >= dropzoneLimit;
    const scale = value ? 100 : 0;

    this.setState({
      scale,
      isDragging: false,
    });

    if (!isControlled) {
      this.setState({
        value,
      });
    }

    if (value !== prevValue) {
      const {
        onChange,
      } = this.props;
      onChange(value);
    }
  };

  bindActions() {
    if (!this.track) return;

    this.track.addEventListener('resize', this.updateTrackRect, true);
    this.updateTrackRect();
  }

  unbindActions() {
    if (!this.track) return;

    this.track.removeEventListener('resize', this.updateTrackRect, true);
  }

  render() {
    const {
      className,
      size,
      dropzoneLimit,
      hint,
      message,
      iconName,
      loadingIconName,
      placeholderIconName,
      isLoading,
      disabled,
    } = this.props;
    const {
      isDragging,
      value,
      scale,
    } = this.state;

    const placeholder = value && !isLoading && !isDragging
      ? message
      : hint;

    return (
      <div
        className={classnames(
          className,
          styles.wrapper,
          styles[`size-${size}`],
          {
            [styles.dragging]: isDragging,
            [styles.loading]: isLoading,
            [styles.active]: value,
            [styles['should-drop']]: isDragging && scale >= dropzoneLimit,
          },
        )}
      >
        <div
          ref={this.setTrackRef}
          className={styles.track}
        >
          {!!placeholder && (
            <Text
              className={styles.placeholder}
              size={shiftSize(size, -2)}
              text={placeholder}
            />
          )}
          {isDragging && (
            <div className={styles['target-position']}>
              <Icon
                className={styles['handle-icon']}
                name={placeholderIconName}
              />
            </div>
          )}
          <Draggable
            className={styles.handle}
            style={{
              left: `${scale}%`,
            }}
            onDrag={this.handleChangeHandlePosition}
            onDragStop={this.handleDragStop}
            disabled={disabled || isLoading}
          >
            {isLoading && <div className={styles.spinner} />}
            <Icon
              className={styles['handle-icon']}
              name={isLoading
                ? loadingIconName
                : (value ? iconName : 'navigate_next')}
            />
          </Draggable>
        </div>
      </div>
    );
  }
}

SlideInput.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(inputSizeKeys),
  value: PropTypes.bool,
  initialValue: PropTypes.bool,
  dropzoneLimit: PropTypes.number,
  hint: PropTypes.string,
  message: PropTypes.string,
  iconName: PropTypes.string,
  loadingIconName: PropTypes.string,
  placeholderIconName: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

SlideInput.defaultProps = {
  className: '',
  size: defaultInputSizeKey,
  value: undefined,
  initialValue: false,
  dropzoneLimit: 80,
  hint: '',
  message: '',
  iconName: 'check',
  loadingIconName: 'lock_open',
  placeholderIconName: 'lock_open',
  isLoading: false,
  disabled: false,
  onChange() {},
};

export default SlideInput;
