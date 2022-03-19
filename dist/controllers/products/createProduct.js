"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../../models/Product"));

var _Brand = _interopRequireDefault(require("../../models/Brand"));

var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newProduct, foundBrand, addBrand, productSaved;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.name || !req.body.price || !req.body.brand.brand_name)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'Content cannot be empty'
            }));

          case 2:
            _context.prev = 2;
            newProduct = new _Product["default"]({
              name: req.body.name,
              category: req.body.category,
              description: req.body.description,
              image_url: req.body.image_url ? req.body.image_url : "",
              price: req.body.price
            });
            _context.next = 6;
            return _Brand["default"].exists({
              brand_name: req.body.brand.brand_name
            });

          case 6:
            foundBrand = _context.sent;
            _context.next = 9;
            return _Brand["default"].findById(foundBrand);

          case 9:
            addBrand = _context.sent;
            newProduct.brand = addBrand;
            _context.next = 13;
            return newProduct.save();

          case 13:
            productSaved = _context.sent;
            res.json(productSaved);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](2);
            res.status(500).json({
              message: _context.t0.message || 'Something went wrong'
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 17]]);
  }));

  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;