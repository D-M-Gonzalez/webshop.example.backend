"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBrand = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Brand = _interopRequireDefault(require("../../models/Brand"));

var createBrand = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newBrand, brandSaved;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.body.brand_name) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'Content cannot be empty'
            }));

          case 2:
            _context.prev = 2;
            newBrand = new _Brand["default"]({
              brand_name: req.body.brand_name,
              logo_url: req.body.logo_url
            });
            _context.next = 6;
            return newBrand.save();

          case 6:
            brandSaved = _context.sent;
            res.json(brandSaved);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            res.status(500).json({
              message: _context.t0.message || 'Something went wrong'
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function createBrand(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createBrand = createBrand;