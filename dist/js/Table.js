"use strict";

require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("./helpers");
var _Formatters = require("./Formatters");
var _Pagination = require("./Pagination");
const _excluded = ["columns", "rows"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
const VITable = _ref => {
  let {
      columns,
      rows
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [activePage, setActivePage] = (0, _react.useState)(props.activePage || 1);
  const [filters, setFilters] = (0, _react.useState)(props.filters);
  const [sort, setSort] = (0, _react.useState)({
    order: props.order || 'asc',
    orderBy: props.orderBy || 'id'
  });
  const rowsPerPage = props.rowsPerPage || 10;
  const filteredRows = (0, _react.useMemo)(() => (0, _helpers.filterRows)(rows, filters), [rows, filters]);
  const sortedRows = (0, _react.useMemo)(() => (0, _helpers.sortRows)(filteredRows, sort), [filteredRows, sort]);
  const calculatedRows = (0, _helpers.paginateRows)(sortedRows, activePage, rowsPerPage);
  const count = filteredRows === null || filteredRows === void 0 ? void 0 : filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);
  const handleSearch = (value, accessor) => {
    setActivePage(1);
    if (value) {
      setFilters(prevFilters => _objectSpread(_objectSpread({}, prevFilters), {}, {
        [accessor]: value
      }));
    } else {
      setFilters(prevFilters => {
        const updatedFilters = _objectSpread({}, prevFilters);
        delete updatedFilters[accessor];
        return updatedFilters;
      });
    }
  };
  const handleSort = accessor => {
    setActivePage(1);
    setSort(prevSort => ({
      order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
      orderBy: accessor
    }));
  };
  const clearAll = () => {
    setSort({
      order: 'asc',
      orderBy: 'id'
    });
    setActivePage(1);
    setFilters({});
  };
  const formatData = (data, row, column) => {
    var _column$validation, _row$cellStyle;
    let localStyle = {};
    let setValue = "NA";
    let dataValue = data || "NA";
    let validation = column === null || column === void 0 ? void 0 : column.validation;
    switch (column === null || column === void 0 || (_column$validation = column.validation) === null || _column$validation === void 0 ? void 0 : _column$validation.type) {
      case 'number':
        localStyle = {
          textAlign: "right"
        };
        setValue = (0, _Formatters.Number)(dataValue, validation);
        break;
      case 'image':
        localStyle = {
          position: "relative"
        };
        setValue = (0, _Formatters.Image)(dataValue, validation);
        break;
      case 'boolean':
        setValue = (0, _Formatters.Boolen)(dataValue, validation);
        break;
      case 'date':
        setValue = (0, _Formatters.DateFormat)(dataValue, validation);
        break;
      case 'email':
        setValue = (0, _Formatters.Email)(dataValue, validation);
        break;
      case 'progress':
        setValue = (0, _Formatters.ProgressBar)(dataValue);
        break;
      default:
        setValue = dataValue;
        break;
    }

    // TD Cell Style
    let tdStyle = {};
    let isStyleAvailable = row === null || row === void 0 || (_row$cellStyle = row.cellStyle) === null || _row$cellStyle === void 0 ? void 0 : _row$cellStyle.filter((row, i) => row.name === column.accessor)[0];
    if (isStyleAvailable !== null && isStyleAvailable !== void 0 && isStyleAvailable.style) {
      tdStyle = isStyleAvailable === null || isStyleAvailable === void 0 ? void 0 : isStyleAvailable.style;
    }
    return /*#__PURE__*/_react.default.createElement("td", {
      className: "".concat(row.sortColorClass),
      style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, localStyle), row.rowStyle), column === null || column === void 0 ? void 0 : column.style), tdStyle),
      key: column.accessor
    }, setValue);
  };
  let setSortColor = (row, column) => {
    if (sort.orderBy === column.accessor) {
      row.sortColorClass = "sorting-color";
    } else {
      row.sortColorClass = "remove-sorting-color";
    }
  };
  console.log(filters);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sd-table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sd-header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "SD Table"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => alert("Download")
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => alert("Upload")
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => alert("Print")
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"
  })), " "), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => alert("Refresh")
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"
  })), " "), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
  }))))), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns === null || columns === void 0 ? void 0 : columns.map((column, i) => {
    if ((column === null || column === void 0 ? void 0 : column.visible) === false) {
      return null;
    }
    const sortIcon = () => {
      if (column.accessor === sort.orderBy) {
        if (sort.order === 'asc') {
          return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "14px",
            viewBox: "0 -960 960 960",
            width: "14px",
            fill: "#5f6368"
          }, /*#__PURE__*/_react.default.createElement("path", {
            d: "M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"
          })));
        }
        return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "14px",
          viewBox: "0 -960 960 960",
          width: "14px",
          fill: "#5f6368"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"
        })), " ");
      } else {
        return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "14px",
          viewBox: "0 -960 960 960",
          width: "14px",
          fill: "#5f6368"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: "M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"
        })));
      }
    };
    return /*#__PURE__*/_react.default.createElement("th", {
      key: column.accessor
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "th-heading"
    }, /*#__PURE__*/_react.default.createElement("label", null, column.label, " "), /*#__PURE__*/_react.default.createElement("button", {
      onClick: () => handleSort(column.accessor)
    }, sortIcon())));
  })), /*#__PURE__*/_react.default.createElement("tr", null, columns === null || columns === void 0 ? void 0 : columns.map((column, i) => {
    if ((column === null || column === void 0 ? void 0 : column.visible) === false) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement("th", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("input", {
      key: "".concat(column.accessor, "-search"),
      type: "search",
      placeholder: "Type here..." //${column.label}
      ,
      value: filters[column.accessor],
      onChange: event => handleSearch(event.target.value, column.accessor)
    }));
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, calculatedRows === null || calculatedRows === void 0 ? void 0 : calculatedRows.map(row => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: row.id
    }, columns === null || columns === void 0 ? void 0 : columns.map(column => {
      if ((column === null || column === void 0 ? void 0 : column.visible) === false) {
        return null;
      }
      setSortColor(row, column);
      return formatData(row[column.accessor], row, column);
    }));
  }))), count === 0 ? /*#__PURE__*/_react.default.createElement("p", null, "No data found") : "", /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, count > 0 ? /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    activePage: activePage,
    count: count,
    rowsPerPage: rowsPerPage,
    totalPages: totalPages,
    setActivePage: setActivePage,
    setSort: setSort,
    setFilters: setFilters
  }) : /*#__PURE__*/_react.default.createElement("button", {
    onClick: clearAll
  }, "Reset all"))));
};
var _default = exports.default = VITable;