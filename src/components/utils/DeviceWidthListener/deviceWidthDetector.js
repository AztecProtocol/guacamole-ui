import {
  deviceBreakpointMap,
} from 'src/config/layout';

const deviceBreakpoints = Object.keys(deviceBreakpointMap).reverse();

class DeviceWidthDetector {
  constructor() {
    this.currentSize = 'xxs';
    this.currentLevel = deviceBreakpoints.indexOf(this.currentSize);

    this.subscribers = {};
    this.sizeKeyToWidth = {};
    deviceBreakpoints.forEach((size) => {
      this.subscribers[size] = [];
      const width = parseInt(deviceBreakpointMap[size], 10);
      this.sizeKeyToWidth[size] = width;
    });

    const {
      readyState,
    } = document || {};
    if (readyState === 'interactive' || readyState === 'complete') {
      this.updateByWindowSize();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        this.updateByWindowSize();
      });
    }

    this.listenForResize();
  }

  setCurrentSize(size) {
    this.currentSize = size;
    this.currentLevel = deviceBreakpoints.indexOf(size);
  }

  forceChangeSize(size) {
    if (size !== this.currentSize) {
      this.broadcastSizeChanged(this.currentSize, size);
      this.setCurrentSize(size);
    }
  }

  listenForResize() {
    window.addEventListener('resize', this.updateByWindowSize, true);
  }

  updateByWindowSize = () => {
    const currentWidth = window.innerWidth;
    const size = Object.keys(this.sizeKeyToWidth)
      .reverse()
      .find(key => currentWidth >= this.sizeKeyToWidth[key]);

    if (size !== this.currentSize) {
      const prevSize = this.currentSize;
      this.setCurrentSize(size);
      this.broadcastSizeChanged(prevSize, size);
    }
  };

  broadcastSizeChanged(prev, current) {
    const notified = [];
    const prevIdx = deviceBreakpoints.indexOf(prev);
    const currIdx = deviceBreakpoints.indexOf(current);
    const from = Math.min(prevIdx, currIdx);
    const to = Math.max(prevIdx, currIdx);
    for (let i = from; i <= to; i += 1) {
      const width = deviceBreakpoints[i];
      this.subscribers[width].forEach((callback) => {
        if (notified.indexOf(callback) >= 0) return;

        callback(current);
        notified.push(callback);
      });
    }
  }

  applyToCurrentSize(size) {
    const level = deviceBreakpoints.indexOf(size);
    return {
      gt: level < this.currentLevel,
      lt: level > this.currentLevel,
    };
  }

  subscribe(size, func) {
    this.subscribers[size].push(func);
    return this.applyToCurrentSize(size);
  }

  unsubscribe(size, func) {
    const index = this.subscribers[size].findIndex(callback => callback === func);
    if (index >= 0) {
      this.subscribers[size].splice(index, 1);
    }
  }
}

export default new DeviceWidthDetector();
export {
  deviceBreakpoints,
};
