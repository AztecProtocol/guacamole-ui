import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
          className={classnames(
            styles.item,
            styles[`size-${itemSize}`],
            {
              [styles.selected]: value === selectedValue,
              [styles.hovered]: value === hoveredValue,
              [styles.disabled]: disabled,
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

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div
        role={toggleable ? 'menuitem' : ''}
        className={classnames(
          styles.caption,
          styles[`size-${captionSize}`],
          {
            [styles.toggleable]: toggleable,
          },
        )}
        onKeyDown={toggleable ? this.handleToggleItems : undefined}
        onClick={toggleable ? this.handleToggleItems : undefined}
      >
        <ListItem
          {...caption}
          size={captionSize}
        />
        {toggleable && (
          <Icon
            className={styles['expand-button']}
            name={hide ? 'expand_more' : 'expand_less'}
            size={captionSize}
          />
        )}
      </div>
    );
    /* eslint-enable */
  }

  render() {
    const {
      theme,
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
      <div className={classnames(
        styles[`theme-${theme}`],
        styles[`group-${groupSize}`],
        {
          [styles[`pad-${padding}`]]: padding && padding !== '0',
        },
      )}
      >
        {(caption && this.renderCaption()) || null}
        <div className={classnames(
          styles.items,
          {
            [styles.hide]: hide,
            [styles['has-divider']]: hasDivider,
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
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
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

export default Group;
