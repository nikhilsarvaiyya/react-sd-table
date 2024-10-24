"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boolen = Boolen;
exports.DateFormat = DateFormat;
exports.Email = Email;
exports.Image = Image;
exports.Number = Number;
exports.ProgressBar = ProgressBar;
require("core-js/modules/es.regexp.to-string.js");
var _react = _interopRequireDefault(require("react"));
var _helpers = require("./helpers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function DateFormat(date, validation) {
  let formatted = "NA";
  const today = new Date(date);
  if (today === "Invalid Date") {
    return formatted;
  }
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // month is zero-based
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  let club = "";
  switch (validation === null || validation === void 0 ? void 0 : validation.input) {
    case 'dd-mm-yy':
      club = dd + '-' + mm + '-' + yyyy;
      break;
    case 'dd/mm/yy':
      club = dd + '/' + mm + '/' + yyyy;
      break;
    case 'dd:mm:yy':
      club = dd + ':' + mm + ':' + yyyy;
      break;
    case 'mm-dd-yy':
      club = mm + '-' + dd + '-' + yyyy;
      break;
    case 'mm/dd/yy':
      club = mm + '/' + dd + '/' + yyyy;
      break;
    case 'mm:dd:yy':
      club = mm + ':' + dd + ':' + yyyy;
      break;
    case 'yy-mm-dd':
      club = yyyy + '-' + mm + '-' + dd;
      break;
    case 'yy/mm/dd':
      club = yyyy + '/' + mm + '/' + dd;
      break;
    case 'yy:mm:dd':
      club = yyyy + ':' + mm + ':' + dd;
      break;
    default:
      club = dd + '/' + mm + '/' + yyyy;
      break;
  }
  formatted = club;
  return formatted;
}
function Image(image) {
  return image === "NA" ? "NA" : /*#__PURE__*/_react.default.createElement("img", {
    alt: image,
    title: image,
    src: image,
    className: "sd-image-avatar"
  });
}
function Boolen(value, validation) {
  return value;
}
function Email(value, validation) {
  return /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:".concat(value, "?subject=").concat(validation === null || validation === void 0 ? void 0 : validation.subject, "&body=").concat(validation === null || validation === void 0 ? void 0 : validation.body)
  }, value);
}
function Number(value, validation) {
  let prepand = (validation === null || validation === void 0 ? void 0 : validation.prepand) || "";
  let append = (validation === null || validation === void 0 ? void 0 : validation.append) || "";
  if ((0, _helpers.isNumber)(value)) {
    let val = /*#__PURE__*/_react.default.createElement("p", null, prepand, " ", value.toString(), " ", append);
    return val;
  }
}

// 0 : #EF5350
// 1 : #E57373
// 2 : #EF9A9A
// 3 : #FFCDD2
// 4 : #FFEBEE
// 5 : #E8F5E9
// 6 : #C8E6C9
// 7 : #A5D6A7
// 8 : #81C784
// 9 : #66BB6A
// 10 : #4CAF50

function ProgressBar(value) {
  if ((0, _helpers.isNumber)(value)) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "vi-progress"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "vi-progress-bar"
    }, /*#__PURE__*/_react.default.createElement("p", {
      style: {
        width: value + "%"
      }
    }, "\xA0")), /*#__PURE__*/_react.default.createElement("span", null, value.toString(), "%"));
  }
}