"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../../models/Product"));

var _Brand = _interopRequireDefault(require("../../models/Brand"));

var updateProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var foundProduct, foundBrand, updatedProduct, modifyBrand, productSaved;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Product["default"].findById(req.query.id);

          case 3:
            foundProduct = _context.sent;
            _context.next = 6;
            return _Brand["default"].exists({
              brand_name: req.query.brand_name
            });

          case 6:
            foundBrand = _context.sent;
            updatedProduct = {
              name: req.body.name,
              category: req.body.category,
              description: req.body.description,
              image_url: req.body.image_url,
              price: req.body.price
            };
            _context.next = 10;
            return _Brand["default"].findById(foundBrand);

          case 10:
            modifyBrand = _context.sent;
            foundProduct.brand = modifyBrand;
            _context.next = 14;
            return foundProduct.updateOne(updatedProduct);

          case 14:
            _context.next = 16;
            return foundProduct.save();

          case 16:
            productSaved = _context.sent;
            res.json({
              message: 'Product was updated successfully'
            });
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || 'Something went wrong'
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function updateProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;