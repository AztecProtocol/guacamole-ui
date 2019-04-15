import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import Block from '../../layout/Block';
import FlexBox from '../../layout/FlexBox';
import Text from '../../general/Text';
import styles from './time.scss';

export class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '-',
      hours: '-',
      minutes: '-',
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateInterval();
    }, 60000);
    this.updateInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateInterval() {
    const {
      time,
    } = this.props;
    const now = new Moment();
    const end = new Moment(time);
    const timeAsDuration = Moment.duration(end.diff(now));
    let days = Math.floor(timeAsDuration.as('days'));
    if (days < 10) {
      days = `0${days < 0 ? 0 : days}`;
    }
    let hours = Math.floor(timeAsDuration.hours());
    if (hours < 10) {
      hours = `0${hours < 0 ? 0 : hours}`;
    }
    let minutes = Math.floor(timeAsDuration.minutes());
    if (minutes < 10) {
      minutes = `0${minutes < 0 ? 0 : minutes}`;
    }
    this.setState({
      days,
      hours,
      minutes,
    });
  }

  render() {
    const {
      size,
    } = this.props;
    const {
      days,
      hours,
      minutes,
    } = this.state;
    const textSizeMap = {
      s: 'm',
      m: 'l',
      l: 'xl',
    };
    return (
      <Block
        styleName={classnames(`size-${size}`)}
      >
        <FlexBox>
          <div styleName="box">
            <Text weight="semibold" size={textSizeMap[size]} text={days} />
            <Text className={styles.smallText} text="days" size="xxs" />
          </div>
          <div styleName="box">
            <Text weight="semibold" size={textSizeMap[size]} text={hours} />
            <Text className={styles.smallText} text="hours" size="xxs" />
          </div>
          <div styleName="box">
            <Text weight="semibold" size={textSizeMap[size]} text={minutes} />
            <Text className={styles.smallText} text="minutes" size="xxs" />
          </div>
        </FlexBox>
      </Block>
    );
  }
}

Time.propTypes = {
  time: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Time.defaultProps = {
  size: 'm',
};

export default CSSModules(Time, styles, {
  allowMultiple: true,
});
