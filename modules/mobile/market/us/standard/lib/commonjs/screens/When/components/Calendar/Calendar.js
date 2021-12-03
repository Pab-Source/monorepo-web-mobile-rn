"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeCalendars = require("react-native-calendars");

var _Arrow = require("./components/Arrow");

var _styles = require("./styles");

var _useTheme = require("../../../../context/hooks/useTheme");

require("./config/locales.ts");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Calendar = _ref => {
  let {
    onChange
  } = _ref;
  const theme = (0, _useTheme.useTheme)();
  const styles = (0, _styles.makeStyles)(theme);
  const [selected, setSelected] = (0, _react.useState)('');

  const handlePress = value => {
    setSelected(value.dateString);
    onChange(value.dateString);
  };

  const stylesCalendar = {
    calendarBackground: theme.layoutColor,
    backgroundColor: theme.layoutColor,
    textSectionTitleColor: theme.titleColor,
    todayTextColor: theme.calendarToday,
    selectedDayBackgroundColor: theme.calendarSelected,
    textDisabledColor: theme.calendarDisabledDay,
    monthTextColor: theme.calendarMonth,
    textSectionTitleDisabledColor: theme.calendarTextDisabled,
    dayTextColor: theme.calendarActivesDays,
    textDayFontFamily: theme.fontFamily,
    textMonthFontFamily: theme.fontFamily,
    textDayHeaderFontFamily: theme.fontFamily,
    textDayFontWeight: 'normal',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: 'bold',
    textDayFontSize: 16,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 16
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeCalendars.Calendar, {
    onDayPress: handlePress,
    markingType: "custom",
    markedDates: {
      [selected]: {
        selected: true,
        selectedColor: theme.calendarSelected,
        customStyles: {
          container: styles.badgeCalendar
        }
      }
    },
    renderArrow: direction => /*#__PURE__*/_react.default.createElement(_Arrow.Arrow, {
      direction: direction
    }),
    minDate: new Date(),
    theme: stylesCalendar
  }));
};

exports.Calendar = Calendar;
//# sourceMappingURL=Calendar.js.map