"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDateString = convertDateString;
exports.convertType = convertType;
exports.filterRows = filterRows;
exports.isBoolean = isBoolean;
exports.isDateString = isDateString;
exports.isEmpty = isEmpty;
exports.isNil = isNil;
exports.isNumber = isNumber;
exports.isString = isString;
exports.paginateRows = paginateRows;
exports.sortRows = sortRows;
exports.toLower = toLower;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable eqeqeq */

function isEmpty() {
  let obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(obj).length === 0;
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function isNumber(value) {
  return typeof value == 'number' && !isNaN(value);
}
function isBoolean(value) {
  return value === true || value === false;
}
function isNil(value) {
  return typeof value === 'undefined' || value === null;
}
function isDateString(value) {
  if (!isString(value)) return false;
  return value.match(/^\d{2}-\d{2}-\d{4}$/);
}
function convertDateString(value) {
  return value.substr(6, 4) + value.substr(3, 2) + value.substr(0, 2);
}
function toLower(value) {
  if (isString(value)) {
    return value.toLowerCase();
  }
  return value;
}
function convertType(value) {
  if (isNumber(value)) {
    return value.toString();
  }
  if (isDateString(value)) {
    return convertDateString(value);
  }
  if (isBoolean(value)) {
    return value ? '1' : '-1';
  }
  return value;
}
function filterRows(rows, filters) {
  if (isEmpty(filters)) return rows;
  return rows.filter(row => {
    return Object.keys(filters).every(indexKey => {
      const value = row[indexKey];
      const searchValue = filters[indexKey];
      if (isString(value)) {
        return toLower(value).includes(toLower(searchValue));
      }
      if (isBoolean(value)) {
        return searchValue === 'true' && value || searchValue === 'false' && !value;
      }
      if (isNumber(value)) {
        return value == searchValue;
      }
      return false;
    });
  });
}
function sortRows(rows, sort) {
  return rows === null || rows === void 0 ? void 0 : rows.sort((a, b) => {
    const {
      order,
      orderBy
    } = sort;
    if (isNil(a[orderBy])) return 1;
    if (isNil(b[orderBy])) return -1;
    const aLocale = convertType(a[orderBy]);
    const bLocale = convertType(b[orderBy]);

    // if (order === 'asc') {
    //   return aLocale?.localeCompare(bLocale, 'en', { numeric: isNumber(b[orderBy]) })
    // } else {
    //   return bLocale?.localeCompare(aLocale, 'en', { numeric: isNumber(a[orderBy]) })
    // }
    if (order === 'asc') {
      return aLocale;
    } else {
      return bLocale;
    }
  });
}
function paginateRows(sortedRows, activePage, rowsPerPage) {
  return sortedRows ? [...sortedRows].slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage) : null;
}