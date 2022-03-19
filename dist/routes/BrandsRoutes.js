"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _createBrand = require("../controllers/brands/createBrand");

var _deleteBrand = require("../controllers/brands/deleteBrand");

var _findAllBrands = require("../controllers/brands/findAllBrands");

var _updateBrand = require("../controllers/brands/updateBrand");

var router = (0, _express.Router)();
router.get('/', _findAllBrands.findAllBrands);
router.post('/', _createBrand.createBrand);
router["delete"]('/:id', _deleteBrand.deleteBrand);
router.put('/:id', _updateBrand.updateBrand);
var _default = router;
exports["default"] = _default;