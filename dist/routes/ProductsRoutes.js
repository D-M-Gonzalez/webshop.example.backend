"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _findAllProducts = require("../controllers/products/findAllProducts");

var _createProduct = require("../controllers/products/createProduct");

var _deleteProduct = require("../controllers/products/deleteProduct");

var _updateProduct = require("../controllers/products/updateProduct");

var _findProductById = require("../controllers/products/findProductById");

var router = (0, _express.Router)();
router.get('/', _findAllProducts.findAllProducts);
router.post('/', _createProduct.createProduct);
router.put('/', _updateProduct.updateProduct);
router.get('/:id', _findProductById.findProductById);
router["delete"]('/:id', _deleteProduct.deleteProduct);
var _default = router;
exports["default"] = _default;