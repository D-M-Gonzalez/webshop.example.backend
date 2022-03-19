"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _ProductsRoutes = _interopRequireDefault(require("./routes/ProductsRoutes"));

var _BrandsRoutes = _interopRequireDefault(require("./routes/BrandsRoutes"));

var _UserRoutes = _interopRequireDefault(require("./routes/UserRoutes"));

var app = (0, _express["default"])(); //settings

app.set('port', process.env.PORT || 8000); //middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //routes

app.get('/', function (req, res) {
  res.json({
    message: 'welcome to my app'
  });
});
app.use('/api/brands', _BrandsRoutes["default"]);
app.use('/api/products', _ProductsRoutes["default"]);
app.use('/api/users', _UserRoutes["default"]);
var _default = app;
exports["default"] = _default;