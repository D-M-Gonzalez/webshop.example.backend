"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logInUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../../models/User"));

var logInUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var checkUser, checkPassword;
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
            checkUser = _context.sent;
            _context.next = 8;
            return _User["default"].exists({
              password: req.body.password
            });

          case 8:
            checkPassword = _context.sent;

            if (checkUser && checkPassword) {
              res.status(200).send({
                message: req.body.user_name
              });
            } else {
              res.status(400).send({
                message: "failed"
              });
            }

            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            res.status(500).json({
              message: _context.t0.message || 'Something went wrong'
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));

  return function logInUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.logInUser = logInUser;