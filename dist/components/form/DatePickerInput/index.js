"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _styleConstants = require("../../../config/styleConstants");

var _date = require("../../../utils/date");

var _toMonthKey = _interopRequireDefault(require("../../../utils/calendar/toMonthKey"));

var _getFirstValidDayBeforeIndex = _interopRequireDefault(require("../DatePicker/utils/getFirstValidDayBeforeIndex"));

var _ClickOutsideHandler = _interopRequireDefault(require("../../utils/ClickOutsideHandler"));

var _PopupMenu = _interopRequireDefault(require("../../feedback/PopupMenu"));

var _Row = _interopRequireDefault(require("../../layout/Row"));

var _Col = _interopRequireDefault(require("../../layout/Col"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _DatePicker = _interopRequireDefault(require("../DatePicker"));

var _InputButtonWrapper = _interopRequireDefault(require("./InputButtonWrapper"));

var _castToArray = _interopRequireDefault(require("./utils/castToArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "wrapper": "datepicker-34f16093",
  "input-button": "datepicker-686f2b1c",
  "focused": "datepicker-b9a9f6f2",
  "editable": "datepicker-e3462b3e",
  "input-button-mask": "datepicker-c22391c4"
};

var DatePickerInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DatePickerInput, _PureComponent);

  function DatePickerInput(props) {
    var _this;

    _classCallCheck(this, DatePickerInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePickerInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setCalendarRef", function (ref) {
      _this.calendarRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenMenu", function () {
      var showMenu = _this.state.showMenu;

      if (!showMenu) {
        _this.setState({
          showMenu: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenMenuAtIndex", function (currentDayIndex) {
      if (currentDayIndex !== _this.getCurrentDayIndex()) {
        _this.handleChangeDayIndex(currentDayIndex);
      }

      _this.handleOpenMenu();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseMenu", function () {
      var showMenu = _this.state.showMenu;

      if (showMenu) {
        _this.setState({
          showMenu: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      switch (e.keyCode) {
        case 9:
          {
            // tab
            var numberOfDays = _this.props.numberOfDays;

            var currentDayIndex = _this.getCurrentDayIndex();

            var goToPrevious = e.shiftKey;

            if (!goToPrevious && currentDayIndex === numberOfDays - 1 || goToPrevious && currentDayIndex === 0) {
              _this.handleCloseMenu();
            }

            break;
          }

        case 27:
          // esc
          _this.handleCloseMenu();

          break;

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectDay", function (day, selectedDayIndex) {
      var _this$props = _this.props,
          autoCloseAfterSelect = _this$props.autoCloseAfterSelect,
          onSelectDay = _this$props.onSelectDay;

      if (autoCloseAfterSelect) {
        var numberOfDays = _this.props.numberOfDays;

        if (selectedDayIndex === numberOfDays - 1) {
          _this.handleCloseMenu();
        }
      }

      onSelectDay(day, selectedDayIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeDayIndex", function (currentDayIndex) {
      if (!_this.isIndexControlled) {
        _this.setState({
          currentDayIndex: currentDayIndex
        });
      }

      var onChangeDayIndex = _this.props.onChangeDayIndex;
      onChangeDayIndex(currentDayIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeDays", function (selectedDays) {
      if (!_this.isControlled) {
        _this.setState({
          selectedDays: selectedDays
        });
      }

      var onChangeDays = _this.props.onChangeDays;
      onChangeDays(selectedDays);
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonth", function (_ref) {
      var children = _ref.children,
          month = _ref.month;
      var mobileMode = _this.props.mobileMode;

      if (!mobileMode) {
        return children;
      }

      var key = (0, _toMonthKey["default"])(month);
      return _react["default"].createElement("div", {
        key: key,
        ref: function ref(_ref2) {
          return _this.setMonthRef(key, _ref2);
        }
      }, _react["default"].createElement(_Block["default"], {
        padding: "0 l"
      }, children));
    });

    var _selectedDays = props.selectedDays,
        initialSelectedDays = props.initialSelectedDays,
        _currentDayIndex = props.currentDayIndex;
    _this.isControlled = !!_selectedDays;
    _this.isIndexControlled = _currentDayIndex !== undefined;
    _this.calendarRef = null;
    _this.monthRefs = {};
    _this.state = {
      showMenu: false,
      selectedDays: _this.isControlled ? undefined : initialSelectedDays,
      currentDayIndex: _this.isIndexControlled ? undefined : 0
    };
    return _this;
  }

  _createClass(DatePickerInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.calendarRef) return;
      var mobileMode = this.props.mobileMode;
      var prevShowMenu = prevState.showMenu;
      var showMenu = this.state.showMenu;
      if (!mobileMode || prevShowMenu || !showMenu) return;
      var initialFirstVisibleMonth = this.props.initialFirstVisibleMonth;
      var selectedDays = this.getSelectedDays();
      var currentDayIndex = this.getCurrentDayIndex();
      var pivotDay = selectedDays[currentDayIndex] || (0, _getFirstValidDayBeforeIndex["default"])(selectedDays, currentDayIndex) || initialFirstVisibleMonth;
      if (!pivotDay) return;
      var monthKey = (0, _toMonthKey["default"])(pivotDay);
      var monthRef = this.monthRefs[monthKey];
      if (!monthRef) return;

      var _this$calendarRef$get = this.calendarRef.getBoundingClientRect(),
          containerTop = _this$calendarRef$get.top;

      var _monthRef$getBounding = monthRef.getBoundingClientRect(),
          monthTop = _monthRef$getBounding.top;

      this.calendarRef.scrollTop = monthTop - containerTop;
    }
  }, {
    key: "getCurrentDayIndex",
    value: function getCurrentDayIndex() {
      var controlledCurrentDayIndex = this.props.currentDayIndex;
      var currentDayIndex = this.state.currentDayIndex;
      return this.isIndexControlled ? controlledCurrentDayIndex : currentDayIndex;
    }
  }, {
    key: "getSelectedDays",
    value: function getSelectedDays() {
      var controlledSelectedDays = this.props.selectedDays;
      var selectedDays = this.state.selectedDays;
      return this.isControlled ? controlledSelectedDays : selectedDays;
    }
  }, {
    key: "getUnifiedInputValue",
    value: function getUnifiedInputValue() {
      var _this$props2 = this.props,
          numberOfDays = _this$props2.numberOfDays,
          refineInputValue = _this$props2.refineInputValue,
          inputDateFormat = _this$props2.inputDateFormat;
      var selectedDays = this.getSelectedDays();

      if (refineInputValue) {
        return refineInputValue(selectedDays);
      }

      var dateStrings = selectedDays.map(function (day) {
        return (0, _date.toDateString)(day, inputDateFormat);
      });

      if (selectedDays.length < numberOfDays) {
        dateStrings.push('');
      }

      return dateStrings.join(' ~ ');
    }
  }, {
    key: "getInputValue",
    value: function getInputValue(day) {
      var _this$props3 = this.props,
          refineInputValue = _this$props3.refineInputValue,
          inputDateFormat = _this$props3.inputDateFormat;

      if (refineInputValue) {
        return refineInputValue(day);
      }

      return !day ? '' : (0, _date.toDateString)(day, inputDateFormat);
    }
  }, {
    key: "setMonthRef",
    value: function setMonthRef(key, ref) {
      this.monthRefs[key] = ref;
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var showMenu = this.state.showMenu;
      var _this$props4 = this.props,
          daysStatus = _this$props4.daysStatus,
          disabledDays = _this$props4.disabledDays,
          highlightedDays = _this$props4.highlightedDays,
          initialFirstVisibleMonth = _this$props4.initialFirstVisibleMonth,
          minDay = _this$props4.minDay,
          maxDay = _this$props4.maxDay,
          minNights = _this$props4.minNights,
          numberOfDays = _this$props4.numberOfDays,
          numberOfMonths = _this$props4.numberOfMonths,
          monthNameFormat = _this$props4.monthNameFormat,
          startOfWeek = _this$props4.startOfWeek,
          showOutsideDays = _this$props4.showOutsideDays,
          mobileMode = _this$props4.mobileMode,
          isDayDisabled = _this$props4.isDayDisabled,
          isDayHighlighted = _this$props4.isDayHighlighted,
          onHoverDay = _this$props4.onHoverDay,
          onBlurDay = _this$props4.onBlurDay,
          onChangeMonth = _this$props4.onChangeMonth;
      var currentDayIndex = this.getCurrentDayIndex();
      var selectedDays = this.getSelectedDays();

      var datepickerNode = _react["default"].createElement(_PopupMenu["default"], {
        hide: !showMenu,
        disabledClickOutside: true,
        flexWidth: true
      }, _react["default"].createElement(_DatePicker["default"], {
        currentDayIndex: currentDayIndex,
        selectedDays: selectedDays,
        daysStatus: daysStatus,
        disabledDays: disabledDays,
        highlightedDays: highlightedDays,
        initialFirstVisibleMonth: initialFirstVisibleMonth,
        minDay: minDay,
        maxDay: maxDay,
        minNights: minNights,
        numberOfDays: numberOfDays,
        numberOfMonths: numberOfMonths,
        monthNameFormat: monthNameFormat,
        startOfWeek: startOfWeek,
        showOutsideDays: showOutsideDays,
        orientation: mobileMode ? 'vertical' : 'horizontal',
        flexWidth: mobileMode,
        mobileMode: mobileMode,
        isDayDisabled: isDayDisabled,
        isDayHighlighted: isDayHighlighted,
        onHoverDay: onHoverDay,
        onBlurDay: onBlurDay,
        onSelectDay: this.handleSelectDay,
        onChangeMonth: onChangeMonth,
        onChangeDayIndex: this.handleChangeDayIndex,
        onChangeDays: this.handleChangeDays,
        renderMonth: this.renderMonth
      }));

      if (!mobileMode) {
        return datepickerNode;
      }

      return _react["default"].createElement("div", {
        ref: this.setCalendarRef,
        className: "calendar-container"
      }, datepickerNode);
    }
  }, {
    key: "renderUnifiedButton",
    value: function renderUnifiedButton() {
      var _this$props5 = this.props,
          theme = _this$props5.theme,
          size = _this$props5.size,
          label = _this$props5.label,
          unifiedLabel = _this$props5.unifiedLabel,
          placeholder = _this$props5.placeholder,
          errorMessage = _this$props5.errorMessage,
          mobileMode = _this$props5.mobileMode;
      var showMenu = this.state.showMenu;
      var labelArr = (0, _castToArray["default"])(label);
      var labelStr = unifiedLabel || labelArr[0] || mobileMode && showMenu && placeholder || '';
      return _react["default"].createElement(_InputButtonWrapper["default"], {
        showMenu: showMenu,
        mobileMode: mobileMode,
        onOpenMenu: this.handleOpenMenu
      }, _react["default"].createElement(_TextInput["default"], {
        theme: theme,
        size: size,
        label: labelStr && errorMessage || labelStr,
        placeholder: placeholder !== labelStr && placeholder || '',
        value: this.getUnifiedInputValue(),
        status: errorMessage ? 'error' : showMenu ? 'focus' : '',
        tabIndex: mobileMode ? -1 : 0,
        onClick: this.handleOpenMenu,
        onFocus: this.handleOpenMenu,
        onKeyDown: this.handleKeyDown,
        readOnly: true
      }));
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this2 = this;

      var _this$props6 = this.props,
          theme = _this$props6.theme,
          size = _this$props6.size,
          label = _this$props6.label,
          placeholder = _this$props6.placeholder,
          errorMessage = _this$props6.errorMessage,
          numberOfDays = _this$props6.numberOfDays,
          mobileMode = _this$props6.mobileMode;
      var showMenu = this.state.showMenu;
      var selectedDays = this.getSelectedDays();
      var currentDayIndex = this.getCurrentDayIndex();
      var labelArr = (0, _castToArray["default"])(label);
      var placeholderArr = (0, _castToArray["default"])(placeholder);
      var errorArr = (0, _castToArray["default"])(errorMessage);
      var buttonNodes = [];

      var _loop = function _loop(i) {
        var openMenuAtIndex = function openMenuAtIndex() {
          return _this2.handleOpenMenuAtIndex(i);
        };

        var status = void 0;

        if (errorArr[i]) {
          status = 'error';
        } else if (showMenu && i === currentDayIndex) {
          status = 'focus';
        }

        var labelStr = labelArr[i] || mobileMode && showMenu && placeholderArr[i] || '';
        var showPlaceholder = !mobileMode || !showMenu || labelArr[i] || errorArr[i];
        buttonNodes.push(_react["default"].createElement(_Col["default"], {
          key: i,
          size: {
            m: 'm',
            s: 's'
          },
          column: 12 / numberOfDays
        }, _react["default"].createElement(_InputButtonWrapper["default"], {
          showMenu: showMenu,
          mobileMode: mobileMode,
          onOpenMenu: openMenuAtIndex
        }, _react["default"].createElement(_TextInput["default"], {
          theme: theme,
          size: size,
          label: labelStr && errorArr[i] || labelStr,
          placeholder: showPlaceholder && placeholderArr[i] || '',
          value: _this2.getInputValue(selectedDays[i]),
          status: status,
          tabIndex: mobileMode ? -1 : 0,
          onClick: openMenuAtIndex,
          onFocus: openMenuAtIndex,
          onKeyDown: _this2.handleKeyDown,
          readOnly: true
        }))));
      };

      for (var i = 0; i < numberOfDays; i += 1) {
        _loop(i);
      }

      return _react["default"].createElement(_Row["default"], {
        offset: {
          m: 'm',
          s: 's'
        },
        nowrap: true
      }, buttonNodes);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          testId = _this$props7.testId,
          className = _this$props7.className,
          singleInput = _this$props7.singleInput,
          mobileMode = _this$props7.mobileMode;
      var showMenu = this.state.showMenu;
      var shouldUseUnifiedButton = singleInput && (!mobileMode || !showMenu);
      return _react["default"].createElement(_ClickOutsideHandler["default"], {
        testId: testId,
        className: (0, _classnames["default"])(className, styles.wrapper),
        onClickOutside: this.handleCloseMenu,
        disabled: !showMenu
      }, shouldUseUnifiedButton ? this.renderUnifiedButton() : this.renderButtons(), this.renderMenu());
    }
  }]);

  return DatePickerInput;
}(_react.PureComponent);

DatePickerInput.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(_styleConstants.inputThemeNames),
  size: _propTypes["default"].oneOf(_styleConstants.inputSizeKeys),
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  unifiedLabel: _propTypes["default"].string,
  placeholder: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  errorMessage: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  currentDayIndex: _propTypes["default"].number,
  initialSelectedDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  selectedDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  numberOfDays: _propTypes["default"].number,
  onSelectDay: _propTypes["default"].func,
  onChangeDayIndex: _propTypes["default"].func,
  onChangeDays: _propTypes["default"].func,
  onChangeMonth: _propTypes["default"].func,
  refineInputValue: _propTypes["default"].func,
  inputDateFormat: _propTypes["default"].string,
  singleInput: _propTypes["default"].bool,
  autoCloseAfterSelect: _propTypes["default"].bool,
  mobileMode: _propTypes["default"].bool,
  // props for DatePicker

  /* eslint-disable react/require-default-props */
  daysStatus: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types
  disabledDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  highlightedDays: _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(_moment["default"])),
  initialFirstVisibleMonth: _propTypes["default"].instanceOf(_moment["default"]),
  minDay: _propTypes["default"].instanceOf(_moment["default"]),
  maxDay: _propTypes["default"].instanceOf(_moment["default"]),
  minNights: _propTypes["default"].number,
  numberOfMonths: _propTypes["default"].number,
  monthNameFormat: _propTypes["default"].string,
  startOfWeek: _propTypes["default"].number,
  showOutsideDays: _propTypes["default"].bool,
  isDayDisabled: _propTypes["default"].func,
  isDayHighlighted: _propTypes["default"].func,
  onHoverDay: _propTypes["default"].func,
  onBlurDay: _propTypes["default"].func
  /* eslint-enable */

};
DatePickerInput.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'default',
  size: _styleConstants.defaultInputSizeKey,
  label: '',
  unifiedLabel: '',
  placeholder: '',
  errorMessage: '',
  currentDayIndex: undefined,
  initialSelectedDays: [],
  selectedDays: undefined,
  numberOfDays: 1,
  numberOfMonths: 2,
  inputDateFormat: 'M/D ddd',
  singleInput: false,
  autoCloseAfterSelect: true,
  mobileMode: false,
  refineInputValue: null,
  onSelectDay: function onSelectDay() {},
  onChangeDayIndex: function onChangeDayIndex() {},
  onChangeDays: function onChangeDays() {},
  onChangeMonth: function onChangeMonth() {}
};
var _default = DatePickerInput;
exports["default"] = _default;