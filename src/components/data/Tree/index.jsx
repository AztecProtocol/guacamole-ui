import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconShape from 'src/shapes/iconShape';
import {
  addStatus,
  removeStatus,
  toggleStatus,
  getModifier,
} from './utils/statusModifiers';
import TreeNode from './TreeNode';
import styles from './tree.scss';

class Tree extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isSelectedControlled,
      isActiveControlled,
      prevProps,
      modifiers: prevModifiers,
    } = prevState;
    const {
      selectedValues,
      activeValues,
    } = nextProps;
    const {
      selectedValues: prevSelectedValues,
      activeValues: prevActiveValues,
    } = prevProps;
    const shouldUpdateSelected = isSelectedControlled
      && (selectedValues !== prevSelectedValues);
    const shouldUpdateActive = isActiveControlled
      && (activeValues !== prevActiveValues);
    if (!shouldUpdateSelected && !shouldUpdateActive) {
      return null;
    }

    let modifiers = prevModifiers;
    if (isSelectedControlled) {
      prevSelectedValues.forEach((value) => {
        modifiers = removeStatus(modifiers, value, 'selected');
      });
      selectedValues.forEach(((value) => {
        modifiers = addStatus(modifiers, value, 'selected');
      }));
    }
    if (isActiveControlled) {
      prevActiveValues.forEach(((value) => {
        modifiers = removeStatus(modifiers, value, 'active');
      }));
      activeValues.forEach(((value) => {
        modifiers = addStatus(modifiers, value, 'active');
      }));
    }

    return {
      modifiers,
      prevProps: {
        selectedValues,
        activeValues,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      defaultExpandAll,
      selectedValues,
      activeValues,
    } = props;
    const isSelectedControlled = selectedValues !== null;
    const isActiveControlled = activeValues !== null;

    this.state = {
      isSelectedControlled,
      isActiveControlled,
      defaultExpandAll, // eslint-disable-line react/no-unused-state
      modifiers: null,
      prevProps: { // eslint-disable-line react/no-unused-state
        selectedValues: [],
        activeValues: [],
      },
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSelect(value, data) {
    const {
      isSelectedControlled,
    } = this.state;
    const {
      modifiers,
    } = this.state;
    if (!isSelectedControlled) {
      this.setState({
        modifiers: toggleStatus(modifiers, value, 'selected'),
      });
    }

    const {
      onSelect,
    } = this.props;
    onSelect(value, data);
  }

  handleToggle(value, data) {
    const {
      isActiveControlled,
    } = this.state;
    const {
      modifiers,
    } = this.state;
    if (!isActiveControlled) {
      this.setState({
        modifiers: toggleStatus(modifiers, value, 'active'),
      });
    }

    const {
      onToggleActive,
    } = this.props;
    onToggleActive(value, data);
  }

  renderBranches(data) {
    const {
      defaultExpandAll,
    } = this.props;
    const {
      modifiers,
    } = this.state;

    return data.map(({
      data: childData,
      ...treeNodeData
    }) => {
      const {
        value,
      } = treeNodeData;
      const childrenBranchNode = childData
        ? this.renderBranches(childData)
        : null;

      return (
        <TreeNode
          {...treeNodeData}
          key={value}
          modifier={getModifier(modifiers, value)}
          onSelect={this.handleSelect}
          onToggleActive={this.handleToggle}
          defaultExpandAll={defaultExpandAll}
        >
          {childrenBranchNode}
        </TreeNode>
      );
    });
  }

  render() {
    const {
      testId,
      className,
      data,
    } = this.props;
    const couldExpand = data.some(({
      data: childData,
    }) => childData);

    return (
      <div
        data-testid={testId}
        className={classnames(
          className,
          {
            [styles.subset]: couldExpand,
          },
        )}
      >
        {this.renderBranches(data)}
      </div>
    );
  }
}

Tree.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  selectedValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  activeValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  data: PropTypes.arrayOf(PropTypes.shape({
    testId: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string,
    icon: iconShape,
    content: PropTypes.node,
    selectable: PropTypes.bool,
    highlight: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      icon: iconShape,
      content: PropTypes.node,
      selectable: PropTypes.bool,
      highlight: PropTypes.bool,
      data: PropTypes.array,
    })),
  })),
  defaultExpandAll: PropTypes.bool,
  onSelect: PropTypes.func,
  onToggleActive: PropTypes.func,
};

Tree.defaultProps = {
  testId: undefined,
  className: '',
  selectedValues: null,
  activeValues: null,
  data: [],
  defaultExpandAll: false,
  onSelect() {},
  onToggleActive() {},
};

export default Tree;
