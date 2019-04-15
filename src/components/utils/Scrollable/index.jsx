import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
  Scrollbars,
} from 'react-custom-scrollbars';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';
import styles from './scroll.scss';

class Scrollable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };

    this.wrapper = null;
    this.scrollbar = null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateContentHeight, true);

    const {
      delayInitialResize,
    } = this.props;

    setTimeout(() => {
      this.updateContentHeight();
    }, delayInitialResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentHeight, true);
  }

  setWrapperRef = (ref) => {
    this.wrapper = ref;
  };

  setScrollbarRef = (ref) => {
    this.scrollbar = ref;
  };

  updateContentHeight = () => {
    if (!this.wrapper) return;

    const {
      height: prevHeight,
    } = this.state;
    const {
      height,
    } = this.wrapper.getBoundingClientRect();

    if (height === prevHeight) return;

    this.setState({
      height,
    });

    const {
      onResize,
    } = this.props;
    onResize({
      height,
    });
  };

  render() {
    const {
      className,
      background,
      children,
      onScroll,
    } = this.props;
    const {
      height,
    } = this.state;

    return (
      <div
        ref={this.setWrapperRef}
        className={className}
        styleName={classnames('wrapper', {
          [`bg-${background}`]: background,
        })}
      >
        <Scrollbars
          ref={this.setScrollbarRef}
          renderTrackHorizontal={() => <div />}
          renderThumbHorizontal={() => <div />}
          autoHeightMin={height}
          autoHeightMax={height || '100%'}
          autoHeight
          onScroll={onScroll}
          autoHide
        >
          {children}
        </Scrollbars>
      </div>
    );
  }
}

Scrollable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  background: PropTypes.string,
  onScroll: PropTypes.func,
  onResize: PropTypes.func,
  delayInitialResize: PropTypes.number, // in case the parent component has animation that would affect wrapper's height
};

Scrollable.defaultProps = {
  className: '',
  children: null,
  background: '',
  onScroll() {},
  onResize() {},
  delayInitialResize: 0,
};

export default CSSModules(Scrollable, styles, {
  allowMultiple: true,
});
