import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

class ClickOutsideHandler extends PureComponent {
  constructor(props) {
    super(props);

    this.wrapper = null;

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  componentDidMount() {
    const {
      disabled,
    } = this.props;
    if (!disabled) {
      this.bindClickEvent();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      disabled,
    } = this.props;
    const {
      disabled: prevDisabled,
    } = prevProps;
    if (disabled !== prevDisabled) {
      if (disabled) {
        this.unbindClickEvent();
      } else {
        this.bindClickEvent();
      }
    }
  }

  componentWillUnmount() {
    this.unbindClickEvent();
  }

  onClickOutside(e) {
    if (this.wrapper.contains(e.target)) return;

    const {
      stopPropagation,
      onClickOutside,
    } = this.props;
    if (stopPropagation) {
      e.stopPropagation();
    }
    onClickOutside(e);
  }

  setWrapperRef(ref) {
    this.wrapper = ref;
  }

  bindClickEvent() {
    document.addEventListener('click', this.onClickOutside, true);
  }

  unbindClickEvent() {
    document.removeEventListener('click', this.onClickOutside, true);
  }

  render() {
    const {
      testId,
      className,
      children,
    } = this.props;

    return (
      <div
        ref={this.setWrapperRef}
        data-testid={testId}
        className={className}
      >
        {children}
      </div>
    );
  }
}

ClickOutsideHandler.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClickOutside: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  stopPropagation: PropTypes.bool,
};

ClickOutsideHandler.defaultProps = {
  testId: undefined,
  className: '',
  disabled: false,
  stopPropagation: false,
};

export default ClickOutsideHandler;
