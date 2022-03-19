"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../../models/Product"));

var _Brand = _interopRequireDefault(require("../../models/Brand"));

var deleteProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Product["default"].findByIdAndDelete(req.params.id);

          case 3:
            res.json({
              message: "Product were deleted successfully"
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || 'Something went wrong'
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function deleteProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;