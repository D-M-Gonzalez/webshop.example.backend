"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); //Variable to get into the DB

var _default = {
  mongodbURL: process.env.MONGODB_URI || 'mongodb+srv://D-M-Gonzalez:KA82lk-27202@webshopexampledb.dibqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
};
exports["default"] = _default;