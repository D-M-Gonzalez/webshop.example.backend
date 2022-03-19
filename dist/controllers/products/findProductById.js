"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findProductById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../../models/Product"));

var _Brand = _interopRequireDefault(require("../../models/Brand"));

var findProductById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var product, brand;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Product["default"].findById(req.params.id);

          case 3:
            product = _context.sent;
            _context.next = 6;
            return _Brand["default"].findById(product.brand);

          case 6:
            brand = _context.sent;
            res.json(product + brand);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || 'Something went wrong'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function findProductById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.findProductById = findProductById;