"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _createUser = require("../controllers/users/createUser");

var _deleteUser = require("../controllers/users/deleteUser");

var _findAllUsers = require("../controllers/users/findAllUsers");

var _logInUser = require("../controllers/users/logInUser");

var _updateUser = require("../controllers/users/updateUser");

var router = (0, _express.Router)();
router.get('/', _findAllUsers.findAllUsers);
router.post('/', _createUser.createUser);
router.put('/:id', _updateUser.updateUser);
router["delete"]('/:id', _deleteUser.deleteUser);
router.put('/login/user', _logInUser.logInUser);
var _default = router;
exports["default"] = _default;