"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../../models/User"));

var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var checkRepeated, newUser, userSaved;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.user_name || !req.body.password)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'Content cannot be empty'
            }));

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return _User["default"].exists({
              user_name: req.body.user_name
            });

          case 5:
            checkRepeated = _context.sent;

            if (checkRepeated) {
              _context.next = 14;
              break;
            }

            newUser = new _User["default"]({
              user_name: req.body.user_name,
              password: req.body.password
            });
            _context.next = 10;
            return newUser.save();

          case 10:
            userSaved = _context.sent;
            res.json({
              message: req.body.user_name
            });
            _context.next = 15;
            break;

          case 14:
            res.status(400).send("User already exists");

          case 15:
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

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;