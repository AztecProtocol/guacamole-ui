import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
  inputThemeNames,
  inputSizeKeys,
  defaultInputSizeKey,
} from 'src/config/styleConstants';
import iconShape from 'src/shapes/iconShape';
import ClickOutsideHandler from '../../utils/ClickOutsideHandler';
import PopupMenu from '../../feedback/PopupMenu';
import Block from '../../layout/Block';
import Tree from '../../data/Tree';
import TextInput from '../TextInput';
import getTreeNodeByValue from './utils/getTreeNodeByValue';
import treeNodesFilter from './utils/treeNodesFilter';
import styles from './select.scss';

export class TreeSelect extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      isControlled,
      prevProps,
      filterKeyword,
    } = prevState;
    const {
      selectedValues,
      data,
    } = nextProps;
    const {
      selectedValues: prevSelectedValues,
      data: prevData,
    } = prevProps;

    if ((!isControlled || selectedValues === prevSelectedValues)
      && data === prevData
    ) {
      return null;
    }

    const nextState = {};
    if (isControlled) {
      nextState.selectedValues = selectedValues;
    }

    if (isControlled || data !== prevData) {
      const values = isControlled ? selectedValues : prevState.selectedValues;
      nextState.selectedNodes = values.map(value => getTreeNodeByValue(data, value))
        .filter(n => n);
      nextState.activeValues = [];
    }

    if (data !== prevData) {
      nextState.filteredData = treeNodesFilter(data, filterKeyword);
      nextState.activeValues = [];
    }

    return {
      ...nextState,
      prevProps: {
        selectedValues,
        data,
      },
    };
  }

  constructor(props) {
    super(props);

    const {
      selectedValues,
      data,
    } = props;

    this.state = {
      isControlled: selectedValues !== null,
      activeValues: [],
      selectedValues: [],
      selectedNodes: [],
      showMenu: false,
      filteredData: data,
      filterKeyword: '',
      prevProps: { // eslint-disable-line react/no-unused-state
        selectedValues: [],
        data: [],
      },
    };

    this.filterInput = null;

    this.setFilterInputRef = this.setFilterInputRef.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleToggleActive = this.handleToggleActive.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClearSelected = this.handleClearSelected.bind(this);
    this.handleChangeFilterKeyword = this.handleChangeFilterKeyword.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      showMenu,
    } = this.state;
    const {
      showMenu: prevShowMenu,
    } = prevState;
    if (this.filterInput && showMenu && !prevShowMenu) {
      this.filterInput.focus();
    }
  }

  setFilterInputRef(ref) {
    this.filterInput = ref;
  }

  handleOpenMenu() {
    this.setState({
      showMenu: true,
    });
  }

  handleCloseMenu() {
    this.setState({
      showMenu: false,
    });
  }

  handleToggleActive(value) {
    const {
      activeValues: prevActiveValues,
    } = this.state;
    const activeValues = prevActiveValues.filter(v => v !== value);
    if (activeValues.length !== prevActiveValues.length) {
      this.setState({
        activeValues,
      });
    } else {
      this.setState({
        activeValues: [...activeValues, value],
      });
    }
  }

  handleSelect(value, nodeData) {
    const {
      isControlled,
      selectedValues: prevSelectedValues,
      selectedNodes: prevSelectedNodes,
    } = this.state;
    const {
      allowMultiple,
      autoCloseOnSelect,
    } = this.props;

    if (!isControlled) {
      if (!allowMultiple) {
        if (value !== prevSelectedValues[0]) {
          this.setState({
            selectedValues: [value],
            selectedNodes: [nodeData],
          });
        }
      } else if (prevSelectedValues.indexOf(value) < 0) {
        this.setState({
          selectedValues: [...prevSelectedValues, value],
          selectedNodes: [...prevSelectedNodes, nodeData],
        });
      }
    }

    if (autoCloseOnSelect) {
      this.setState({
        showMenu: false,
      });
    }

    const {
      onSelect,
    } = this.props;
    onSelect(value, nodeData);
  }

  handleClearSelected() {
    const {
      isControlled,
    } = this.state;
    if (!isControlled) {
      this.setState({
        selectedValues: [],
        selectedNodes: [],
      });
    }

    const {
      onClearSelectedValues,
    } = this.props;
    onClearSelectedValues();
  }

  handleChangeFilterKeyword(value) {
    const {
      data,
    } = this.props;
    const filteredData = treeNodesFilter(data, value);

    this.setState({
      filteredData,
      filterKeyword: value,
      activeValues: [],
    });
  }

  renderTreeMenu() {
    const {
      disableFilter,
      filterPlaceholder,
    } = this.props;
    const {
      filteredData,
      activeValues,
      selectedValues,
      showMenu,
      filterKeyword,
    } = this.state;

    return (
      <PopupMenu
        hide={!showMenu}
        disabledClickOutside
      >
        <div className={styles.menu}>
          {!disableFilter && (
            <Block
              className="flex-fixed"
              padding="m s s"
            >
              <TextInput
                ref={this.setFilterInputRef}
                value={filterKeyword}
                placeholder={filterPlaceholder}
                onChange={this.handleChangeFilterKeyword}
              />
            </Block>
          )}
          <Block
            className={styles['tree-data']}
            right="s"
            left="xs"
            bottom="xs"
          >
            <Tree
              data={filteredData}
              activeValues={activeValues}
              selectedValues={selectedValues}
              defaultExpandAll={!!filterKeyword}
              onSelect={this.handleSelect}
              onToggleActive={this.handleToggleActive}
            />
          </Block>
        </div>
      </PopupMenu>
    );
  }

  renderInput() {
    const {
      theme,
      size,
      placeholder,
      disableClearAll,
      InputComponent,
    } = this.props;
    const {
      showMenu,
      selectedNodes,
    } = this.state;

    let inputIcon = null;
    let enableClearSelected = false;
    if (!showMenu) {
      inputIcon = {
        name: 'expand_more',
        size: 'l',
      };
    } else if (!disableClearAll && selectedNodes.length) {
      enableClearSelected = true;
      inputIcon = {
        name: 'cancel',
        size: 's',
        color: 'grey-light',
      };
    } else {
      inputIcon = {
        name: 'expand_less',
        size: 'l',
      };
    }

    return (
      <InputComponent
        theme={theme}
        status={showMenu ? 'focus' : ''}
        size={size}
        placeholder={placeholder}
        value={selectedNodes.map(({
          title,
        }) => title).join(', ')}
        icon={inputIcon}
        onClick={showMenu ? this.handleCloseMenu : this.handleOpenMenu}
        onClickIcon={enableClearSelected ? this.handleClearSelected : null}
        readOnly
      />
    );
  }

  render() {
    const {
      showMenu,
    } = this.state;

    return (
      <ClickOutsideHandler
        className={styles.wrapper}
        onClickOutside={this.handleCloseMenu}
        disabled={!showMenu}
      >
        {this.renderInput()}
        {this.renderTreeMenu()}
      </ClickOutsideHandler>
    );
  }
}

TreeSelect.propTypes = {
  theme: PropTypes.oneOf(inputThemeNames),
  selectedValues: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  size: PropTypes.oneOf(inputSizeKeys),
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    title: PropTypes.string,
    icon: iconShape,
    content: PropTypes.node,
    selectable: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      title: PropTypes.string,
      icon: iconShape,
      content: PropTypes.node,
      selectable: PropTypes.bool,
      data: PropTypes.array,
    })),
  })).isRequired,
  placeholder: PropTypes.string,
  filterPlaceholder: PropTypes.string,
  allowMultiple: PropTypes.bool,
  disableFilter: PropTypes.bool,
  disableClearAll: PropTypes.bool,
  autoCloseOnSelect: PropTypes.bool,
  onSelect: PropTypes.func,
  onClearSelectedValues: PropTypes.func,
  InputComponent: PropTypes.func,
};

TreeSelect.defaultProps = {
  theme: 'default',
  size: defaultInputSizeKey,
  selectedValues: null,
  placeholder: '',
  filterPlaceholder: '',
  allowMultiple: false,
  disableFilter: false,
  disableClearAll: false,
  autoCloseOnSelect: true,
  onSelect() {},
  onClearSelectedValues() {},
  InputComponent: TextInput,
};

export default TreeSelect;
