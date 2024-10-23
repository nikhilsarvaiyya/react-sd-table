"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable jsx-a11y/accessible-emoji */

const Pagination = _ref => {
  let {
    activePage,
    count,
    rowsPerPage,
    totalPages,
    setActivePage,
    setSort,
    setFilters
  } = _ref;
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;
  const clearAll = () => {
    setSort({
      order: 'asc',
      orderBy: 'id'
    });
    setActivePage(1);
    setFilters({});
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "paginate-page"
  }, "Page ", activePage, " of ", totalPages), /*#__PURE__*/_react.default.createElement("p", {
    className: "paginate-row"
  }, "Rows: ", beginning === end ? end : "".concat(beginning, " - ").concat(end), " of ", count), /*#__PURE__*/_react.default.createElement("ul", {
    className: "paginate-arrow"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === 1,
    onClick: () => setActivePage(1)
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
    onClick: () => setActivePage(activePage - 1)
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
    onClick: () => setActivePage(activePage + 1)
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
    onClick: () => setActivePage(totalPages)
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