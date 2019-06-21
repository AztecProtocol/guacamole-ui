import {
  deviceBreakpointKeys,
} from '../../../config/styleConstants';

class DeviceWidthDetector {
  constructor() {
    this.breakpointSizeMap = {};
    this.orderedKeys = deviceBreakpointKeys[0] === 'xxs'
      ? deviceBreakpointKeys
      : [...deviceBreakpointKeys].reverse();
    this.currentSize = 'xxs';
    this.currentLevel = this.orderedKeys.indexOf(this.currentSize);
    this.subscribers = {};
    this.sizeKeyToWidth = {};
  }

  register = (breakpointSizeMap) => {
    const isSameMap = breakpointSizeMap === this.breakpointSizeMap
      || deviceBreakpointKeys.every(key => breakpointSizeMap[key] === this.breakpointSizeMap[key]);

    if (!isSameMap) {
      this.unbindActions();

      const prevSubscribers = {
        ...this.subscribers,
      };
      deviceBreakpointKeys.forEach((key) => {
        if (breakpointSizeMap[key] === this.breakpointSizeMap[key]) return;

        this.subscribers[key] = [];
        this.sizeKeyToWidth[key] = parseInt(breakpointSizeMap[key], 10);
      });

      this.breakpointSizeMap = breakpointSizeMap;
      Object.keys(prevSubscribers).forEach((key) => {
        prevSubscribers[key].forEach(cb => this.subscribe(key, cb));
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

      this.bindActions();
    }

    return this.orderedKeys;
  };

  setCurrentSize(size) {
    this.currentSize = size;
    this.currentLevel = this.orderedKeys.indexOf(size);
  }

  forceChangeSize(size) {
    if (size !== this.currentSize) {
      this.broadcastSizeChanged(this.currentSize, size);
      this.setCurrentSize(size);
    }
  }

  bindActions() {
    window.addEventListener('resize', this.updateByWindowSize, true);
  }

  unbindActions() {
    window.removeEventListener('resize', this.updateByWindowSize, true);
  }

  updateByWindowSize = () => {
    const currentWidth = window.innerWidth;
    const size = [...this.orderedKeys]
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
    const prevIdx = this.orderedKeys.indexOf(prev);
    const currIdx = this.orderedKeys.indexOf(current);
    const from = Math.min(prevIdx, currIdx);
    const to = Math.max(prevIdx, currIdx);
    for (let i = from; i <= to; i += 1) {
      const sizeKey = this.orderedKeys[i];
      this.subscribers[sizeKey].forEach((callback) => {
        if (notified.indexOf(callback) >= 0) return;

        callback(current);
        notified.push(callback);
      });
    }
  }

  applyToCurrentSize(size) {
    const level = this.orderedKeys.indexOf(size);
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
