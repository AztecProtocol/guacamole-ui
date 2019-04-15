import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

class LazyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };

    this.cancelLoad = false;
    this.loadReq = null;
    this.container = null;
    this.holder = null;

    this.setHolderRef = this.setHolderRef.bind(this);
    this.validatePosition = this.validatePosition.bind(this);
  }

  componentDidMount() {
    if (!this.holder) return;

    const {
      containerId,
    } = this.props;
    this.container = containerId ? document.getElementById(containerId) : window;
    if (!this.container) return;

    this.bindLazyLoadActions();
  }

  componentWillUnmount() {
    this.cancelLoad = true;
    this.unbindLazyLoadActions();
  }

  setHolderRef(ref) {
    this.holder = ref;
  }

  bindLazyLoadActions() {
    if (!this.container) return;

    this.container.addEventListener('scroll', this.validatePosition, false);
    this.container.addEventListener('resize', this.validatePosition, false);

    setTimeout(() => {
      this.validatePosition();
    }, 0);
  }

  unbindLazyLoadActions() {
    if (!this.container) return;

    this.container.removeEventListener('scroll', this.validatePosition, false);
    this.container.removeEventListener('resize', this.validatePosition, false);
  }

  validatePosition() {
    if (this.cancelLoad) return;

    let top;
    let containerHeight;
    let containerTop;
    if (this.container === window) {
      top = this.holder.offsetTop;
      containerHeight = window.innerHeight;
      containerTop = window.pageYOffset;
    } else {
      top = this.holder.scrollTop;
      containerHeight = this.container.offsetHeight;
      containerTop = this.container.scrollTop;
    }

    const {
      buffer,
    } = this.props;
    if (top - buffer <= containerTop + containerHeight) {
      this.triggerLoad();
    }
  }

  triggerLoad() {
    this.unbindLazyLoadActions();
    if (this.cancelLoad || this.loadReq) return;

    const {
      delay,
      onLoad,
    } = this.props;

    this.loadReq = setTimeout(() => {
      if (this.cancelLoad) return;

      this.setState({
        isLoaded: true,
      });
    }, delay || 0);

    onLoad();
  }

  render() {
    const {
      isLoaded,
    } = this.state;

    if (!isLoaded) {
      const {
        initialContent,
      } = this.props;

      return (
        <div ref={this.setHolderRef}>
          {initialContent}
        </div>
      );
    }

    const {
      children,
    } = this.props;

    return children;
  }
}

LazyLoad.propTypes = {
  children: PropTypes.node.isRequired,
  initialContent: PropTypes.node,
  buffer: PropTypes.number,
  delay: PropTypes.number,
  containerId: PropTypes.string,
  onLoad: PropTypes.func,
};

LazyLoad.defaultProps = {
  initialContent: null,
  buffer: 0,
  delay: 0,
  containerId: '',
  onLoad() {},
};

export default LazyLoad;
