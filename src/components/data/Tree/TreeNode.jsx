import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';
import iconShape from 'src/shapes/iconShape';
import ListItem from '../ListItem';
import Icon from '../../general/Icon';
import {
  hasStatus,
} from './utils/statusModifiers';
import styles from './tree.scss';

class TreeNode extends PureComponent {
  render() {
    const {
      value,
      title,
      icon,
      content,
      modifier,
      selectable,
      highlight,
      children,
      defaultExpandAll,
      onSelect,
      onToggleActive,
    } = this.props;
    const isOpen = !!(defaultExpandAll ^ hasStatus(modifier, 'active')); // eslint-disable-line no-bitwise
    const data = {
      value,
      title,
      icon,
      content,
    };
    const onClickCallback = (selectable && onSelect) || onToggleActive;

    return (
      <div
        styleName={classnames(
          'node',
          {
            selectable,
            highlight,
            selected: hasStatus(modifier, 'selected'),
          },
        )}
        onClick={(e) => {
          e.stopPropagation();
          onClickCallback(value, data);
        }}
      >
        {children && (
          <div
            styleName="expand-arrow"
            onClick={() => onToggleActive(value, data)}
          >
            <Icon
              name={isOpen ? 'expand_more' : 'chevron_right'}
              size="xs"
              color="label"
            />
          </div>
        )}
        <div styleName="node-item">
          {(icon || title) && (
            <ListItem
              icon={icon}
              title={title}
              size="s"
            />
          )}
          {content}
        </div>
        {isOpen && children && (
          <div styleName="subset">
            {children}
          </div>
        )}
      </div>
    );
  }
}

TreeNode.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string,
  icon: iconShape,
  content: PropTypes.node,
  selectable: PropTypes.bool,
  highlight: PropTypes.bool,
  modifier: PropTypes.object,
  children: PropTypes.node,
  defaultExpandAll: PropTypes.bool.isRequired,
  onSelect: PropTypes.func,
  onToggleActive: PropTypes.func,
};

TreeNode.defaultProps = {
  title: '',
  icon: null,
  content: null,
  selectable: false,
  highlight: false,
  modifier: null,
  children: null,
  onSelect() {},
  onToggleActive() {},
};

export default CSSModules(TreeNode, styles, {
  allowMultiple: true,
});
