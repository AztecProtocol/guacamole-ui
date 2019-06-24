import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import {
  shapeSizeKeys,
} from 'src/config/styleConstants';
import listItemShape from 'src/shapes/listItemShape';
import Icon from '../../general/Icon';
import ListItem from '../ListItem';
import styles from './menu.scss';

class Group extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hide: false,
    };

    this.handleToggleItems = this.handleToggleItems.bind(this);
  }

  handleToggleItems() {
    const {
      hide,
    } = this.state;
    this.setState({
      hide: !hide,
    });
  }

  renderItems() {
    const {
      size,
      items,
      selectedValue,
      hoveredValue,
      onSelect,
      onHover,
      onBlur,
    } = this.props;

    return items.map((item) => {
      const {
        value,
        href,
        Link,
        disabled,
        ...listItem
      } = item;
      const Tag = !href ? 'div' : (Link || 'a');
      const itemSize = listItem.size || size;
      return (
        <Tag
          key={value}
          styleName={classnames(
            'item',
            `size-${itemSize}`,
            {
              selected: value === selectedValue,
              hovered: value === hoveredValue,
              disabled,
            },
          )}
          to={href}
          href={href}
          onClick={() => onSelect(value, item)}
          onMouseEnter={() => onHover(value, item)}
          onMouseLeave={() => onBlur(value, item)}
        >
          <ListItem
            {...listItem}
            size={itemSize}
          />
        </Tag>
      );
    });
  }

  renderCaption() {
    const {
      size,
      caption,
      toggleable,
    } = this.props;
    const {
      hide,
    } = this.state;

    const captionSize = caption.size || size;

    return (
      <div
        styleName={classnames(
          'caption',
          `size-${captionSize}`,
          {
            toggleable,
          },
        )}
        onClick={toggleable ? this.handleToggleItems : undefined}
      >
        <ListItem
          {...caption}
          size={captionSize}
        />
        {toggleable && (
          <Icon
            styleName="expand-button"
            name={hide ? 'expand_more' : 'expand_less'}
            size={captionSize}
          />
        )}
      </div>
    );
  }

  render() {
    const {
      size,
      padding,
      caption,
      hasDivider,
    } = this.props;

    const {
      hide,
    } = this.state;
    const groupSize = (caption && caption.size) || size;

    return (
      <div styleName={classnames(
        `group-${groupSize}`,
        {
          [`pad-${padding}`]: padding && padding !== '0',
        },
      )}
      >
        {(caption && this.renderCaption()) || null}
        <div styleName={classnames(
          'items',
          {
            hide,
            'has-divider': hasDivider,
          },
        )}
        >
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

Group.propTypes = {
  size: PropTypes.oneOf(shapeSizeKeys).isRequired,
  padding: PropTypes.string,
  caption: PropTypes.shape(listItemShape),
  toggleable: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    ...listItemShape,
    value: PropTypes.string.isRequired,
    href: PropTypes.string,
    Link: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
    disabled: PropTypes.bool,
  })),
  selectedValue: PropTypes.string.isRequired,
  hoveredValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  hasDivider: PropTypes.bool,
};

Group.defaultProps = {
  caption: null,
  items: [],
  padding: 'm',
  toggleable: false,
  hasDivider: false,
};

export default CSSModules(Group, styles, {
  allowMultiple: true,
});
