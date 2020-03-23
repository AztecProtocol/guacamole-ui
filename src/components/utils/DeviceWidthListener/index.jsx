import {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
  deviceBreakpointMap,
} from '../../../config/layout';
import {
  deviceBreakpointKeys,
} from '../../../config/styleConstants';
import deviceWidthDetector from './deviceWidthDetector';

class DeviceWidthListener extends PureComponent {
  constructor(props, context) {
    super(props, context);

    const {
      breakpointSizeMap,
      breakpoints,
      ssr,
    } = props;

    this.orderedKeys = deviceWidthDetector.orderedKeys;
    const {
      gt,
      gte,
      lt,
      lte,
    } = deviceWidthDetector.register({
      breakpointSizeMap,
      breakpoints,
      listener: this.handleChangeDeviceWidth,
      ssr,
    });

    this.state = {
      gt,
      gte,
      lt,
      lte,
    };
  }

  componentDidMount() {
    const {
      ssr,
    } = this.props;

    if (ssr) {
      this.registerToDetector();
    }
  }

  componentWillUnmount() {
    const {
      breakpoints,
    } = this.props;
    breakpoints.forEach((breakpoint) => {
      deviceWidthDetector.unsubscribe(breakpoint, this.handleChangeDeviceWidth);
    });
  }

  handleChangeDeviceWidth = (currentSize) => {
    const lt = {};
    const gt = {};
    const lte = {};
    const gte = {};
    const {
      breakpoints,
    } = this.props;
    let gteCurrent = false;
    this.orderedKeys.forEach((size) => {
      const isTrackinbg = breakpoints.indexOf(size) >= 0;
      if (isTrackinbg) {
        lt[size] = gteCurrent;
        lte[size] = gteCurrent || size === currentSize;
      }
      if (size === currentSize) {
        gteCurrent = true;
      }
      if (isTrackinbg) {
        gt[size] = !gteCurrent;
        gte[size] = !gteCurrent || size === currentSize;
      }
    });

    this.setState({
      lt,
      lte,
      gt,
      gte,
    });
  };

  registerToDetector() {
    const {
      breakpointSizeMap,
      breakpoints,
    } = this.props;
    const {
      gt,
      gte,
      lt,
      lte,
    } = deviceWidthDetector.register({
      breakpointSizeMap,
      breakpoints,
      listener: this.handleChangeDeviceWidth,
    });
    deviceWidthDetector.updateByWindowSize();
    this.setState({
      gt,
      gte,
      lt,
      lte,
    });
  }

  render() {
    const {
      children,
    } = this.props;

    return children(this.state);
  }
}

const breakpointSizeMapShape = {};
deviceBreakpointKeys.forEach((key) => {
  breakpointSizeMapShape[key] = PropTypes.string;
});

DeviceWidthListener.propTypes = {
  breakpointSizeMap: PropTypes.shape(breakpointSizeMapShape),
  breakpoints: PropTypes.arrayOf(PropTypes.oneOf(deviceBreakpointKeys)).isRequired,
  children: PropTypes.func.isRequired,
  ssr: PropTypes.bool,
};

DeviceWidthListener.defaultProps = {
  breakpointSizeMap: deviceBreakpointMap,
  ssr: false,
};

export default DeviceWidthListener;
