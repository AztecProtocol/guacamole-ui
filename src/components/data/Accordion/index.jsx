import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Clickable from '../../utils/Clickable';
import styles from './accordion.scss';

export class Accordion extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isControlled,
    } = prevState;

    if (!isControlled) {
      return null;
    }

    const {
      isOpen,
    } = nextProps;

    return {
      isOpen,
    };
  }

  constructor(props) {
    super(props);

    const {
      isOpen,
      defaultIsOpen,
    } = props;

    this.state = {
      isControlled: isOpen !== null,
      isOpen: defaultIsOpen,
    };
  }

  handleToggleContent = () => {
    const {
      isControlled,
      isOpen: prevIsOpen,
    } = this.state;
    const {
      onClick,
      onChange,
      disabled,
    } = this.props;

    const isOpen = !prevIsOpen;

    onClick(prevIsOpen);

    if (!disabled) {
      if (!isControlled) {
        this.setState({
          isOpen,
        });
      }

      onChange(isOpen);
    }
  }

  render() {
    const {
      isOpen,
    } = this.state;
    const {
      className,
      title,
      content,
    } = this.props;

    return (
      <div className={className}>
        <Clickable
          onClick={this.handleToggleContent}
        >
          {title}
        </Clickable>
        <div
          className={classnames(
            styles.content,
            {
              [styles.hide]: !isOpen,
            },
          )}
        >
          {content}
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  defaultIsOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

Accordion.defaultProps = {
  className: '',
  isOpen: null,
  defaultIsOpen: true,
  disabled: false,
  onClick() {},
  onChange() {},
};

export default Accordion;
