import {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import deviceWidthDetector, {
  deviceBreakpoints,
} from './deviceWidthDetector';

class DeviceWidthListener extends PureComponent {
  constructor(props, context) {
    super(props, context);

    const gt = {};
    const gte = {};
    const lt = {};
    const lte = {};
    const {
      breakpoints,
    } = props;
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
    deviceBreakpoints.forEach((size) => {
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

DeviceWidthListener.propTypes = {
  breakpoints: PropTypes.arrayOf(PropTypes.oneOf(deviceBreakpoints)).isRequired,
  children: PropTypes.func.isRequired,
};

export default DeviceWidthListener;
