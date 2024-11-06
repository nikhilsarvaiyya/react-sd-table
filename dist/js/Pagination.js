"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
require("core-js/modules/es.array.sort.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable jsx-a11y/accessible-emoji */

const Pagination = _ref => {
  let {
    activePage,
    count,
    rowsPerPage,
    totalPages,
    setActivePage,
    clearAll,
    passParamstoParents,
    filters,
    sort,
    setRowsInPage,
    rowsPerPageDropdown
  } = _ref;
  const [selectRow, setSelectedRow] = (0, _react.useState)(rowsPerPage);
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;
  let actPageCount = count => {
    setActivePage(count);
    passParamstoParents({
      sort: sort,
      filters: filters,
      rowsPerPage: rowsPerPage,
      activePage: count
    });
  };
  let updateRowPerPage = e => {
    setActivePage(1);
    setSelectedRow(Number(e.target.value));
    setRowsInPage(Number(e.target.value));
    passParamstoParents({
      sort: sort,
      filters: filters,
      rowsPerPage: Number(e.target.value),
      activePage: count
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "paginate-page"
  }, "Page ", activePage, " of ", totalPages), /*#__PURE__*/_react.default.createElement("p", {
    className: "paginate-row"
  }, "Rows: ", beginning === end ? end : "".concat(beginning, " - ").concat(end), " of  ", /*#__PURE__*/_react.default.createElement("select", {
    value: selectRow,
    onChange: updateRowPerPage,
    style: {
      padding: "4px 2px 4px 4px"
    }
  }, rowsPerPageDropdown.map(i => /*#__PURE__*/_react.default.createElement("option", {
    value: i
  }, i)))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "paginate-arrow"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === 1,
    onClick: () => {
      actPageCount(1);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"
  })))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === 1,
    onClick: () => {
      actPageCount(activePage - 1);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
  })))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === totalPages,
    onClick: () => {
      actPageCount(activePage + 1);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
  })))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === totalPages,
    onClick: () => {
      actPageCount(totalPages);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"
  })))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: clearAll
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "#5f6368"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
  }))))));
};
exports.Pagination = Pagination;