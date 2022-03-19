"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var userSchema = new _mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});
userSchema.plugin(_mongoosePaginateV["default"]);

var _default = (0, _mongoose.model)("user", userSchema);

exports["default"] = _default;