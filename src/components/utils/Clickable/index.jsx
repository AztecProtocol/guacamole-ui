import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './clickable.scss';

class Clickable extends PureComponent {
  justClicked = false;

  handleClick = (e) => {
    const {
      onClick,
      href,
      doubleClickBufferTime,
      disabled,
      stopPropagation,
      disabledDoubleClick,
    } = this.props;

    if (stopPropagation) {
      e.stopPropagation();
    }

    if (!onClick || disabled) return;

    if (disabledDoubleClick) {
      if (this.justClicked) {
        return;
      }

      this.justClicked = true;
      setTimeout(() => {
        this.justClicked = false;
      }, doubleClickBufferTime);
    }

    if (!href || (!e.metaKey && !e.ctrlKey)) {
      e.preventDefault();
      onClick();
    }
  };

  render() {
    const {
      className,
      children,
      onClick,
      Link,
      href,
      disabled,
      inline,
    } = this.props;

    const Tag = href && !disabled
      ? Link
      : 'div';

    return (
      <Tag
        className={className}
        styleName={classnames({
          clickable: !disabled,
          inline,
        })}
        to={href}
        href={href}
        onClick={(onClick && this.handleClick) || null}
      >
        {children}
      </Tag>
    );
  }
}

Clickable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  Link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  doubleClickBufferTime: PropTypes.number,
  stopPropagation: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledDoubleClick: PropTypes.bool,
  inline: PropTypes.bool,
};

Clickable.defaultProps = {
  className: '',
  href: '',
  onClick: null,
  Link: 'a',
  doubleClickBufferTime: 400,
  stopPropagation: false,
  disabled: false,
  disabledDoubleClick: false,
  inline: false,
};

export default CSSModules(Clickable, styles, {
  allowMultiple: true,
});
