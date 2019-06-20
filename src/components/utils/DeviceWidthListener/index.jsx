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

    const gt = {};
    const gte = {};
    const lt = {};
    const lte = {};
    const {
      breakpointSizeMap,
      breakpoints,
    } = props;

    this.orderedKeys = deviceWidthDetector.register(breakpointSizeMap);
    breakpoints.forEach((breakpoint) => {
      const applied = deviceWidthDetector.subscribe(breakpoint, this.handleChangeDeviceWidth);
      gt[breakpoint] = applied.gt;
      lt[breakpoint] = applied.lt;
    });

    this.state = {
      gt,
      gte,
      lt,
      lte,
    };
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
};

DeviceWidthListener.defaultProps = {
  breakpointSizeMap: deviceBreakpointMap,
};

export default DeviceWidthListener;
