webpackHotUpdate_N_E("pages/oracao",{

/***/ "./pages/oracao.js":
/*!*************************!*\
  !*** ./pages/oracao.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componete/Menu.js */ "./componete/Menu.js");
/* harmony import */ var _componete_RodaPe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componete/RodaPe */ "./componete/RodaPe.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _jsxFileName = "C:\\Users\\ernil.LAPTOP-FID40H3U\\OneDrive\\\xC1rea de Trabalho\\site-sibre\\pages\\oracao.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Oracao() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    nome: '',
    email: '',
    msg: ''
  }),
      oracao = _useState[0],
      setOracao = _useState[1];

  var onchangeInput = function onchangeInput(e) {
    return setOracao(_objectSpread(_objectSpread({}, oracao), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var envMsg = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (validate()) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              setResponse({
                formSave: true
              });
              _context.prev = 4;
              _context.next = 7;
              return fetch("https://sibre2020-com-br.umbler.net/oracao", {
                method: "POST",
                body: JSON.stringify(oracao),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 7:
              res = _context.sent;
              _context.next = 10;
              return res.json();

            case 10:
              responseEnv = _context.sent;
              console.log(responseEnv);

              if (responseEnv.error) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  formSave: true,
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](4);
              setResponse({
                formSave: false,
                type: 'success',
                message: ' Mensagem enviada com sucesso!',
                formSuccess: true
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 15]]);
    }));

    return function envMsg(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var validate = function validate() {
    if (!oracao.nome) return setResponse({
      type: 'error',
      message: 'Preenchemento do campo Nome é obrigatório!'
    });
    if (!oracao.msg) return setResponse({
      type: 'error',
      message: 'Preenchemento da mensagem é obrigatório!'
    });
    return true;
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Ora\xE7\xE3o"), __jsx("meta", {
    name: "robots",
    content: "index, follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Orai uns pelos outros. Segunda Igreja Batista no Recanto das Emas-DF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "author",
    content: "Ernilson Daniel Lima de Souza",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  })), __jsx(_componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
    fluid: true,
    className: "head-oracao",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, ".head-oracao{\n                padding-top: 60px;\n                padding-buttom:5px;\n                background-color: #fff;\n                margin-bottom: 0ren ! important;\n         }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "display-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "Ora\xE7\xE3o"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
    fluid: true,
    className: "form-oracao",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, ".head-oracao{\n                padding-top: 60px;\n                padding-buttom:5px;\n                background-color: #fff;\n                margin-bottom: 0ren ! important;\n         }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row featurette",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, response.type === 'success' ? __jsx("div", {
    className: "alert alert-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 60
    }
  }, response.message) : "", response.type === 'error' ? __jsx("div", {
    className: "alert alert-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 58
    }
  }, response.message) : "", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: envMsg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "nome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 37
    }
  }, "Nome:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "text",
    name: "nome",
    id: "nome",
    placeholder: "Digite Seu Nome...",
    onChange: onchangeInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Digite Seu Email...",
    onChange: onchangeInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 37
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "msg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, "Mensagem:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "textarea",
    name: "msg",
    id: "mgs",
    placeholder: "Digite aqui seu pedido de ora\xE7\xE3o",
    onChange: onchangeInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  })), response.formSave ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 54
    }
  }, "Enviar...") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 47
    }
  }, "Enviar"))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "featurette-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, "Orai sem cessar "), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, "A ora\xE7\xE3o dos justos podem muito em seus efeitos - Tiago 5:16."), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }), __jsx("address", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, "Nossos encontro de ora\xE7\xE3o"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 75
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 32
    }
  }, " Nossos encontros de ora\xE7\xF5es s\xE3o nas segunda as 08:00hrs quarta as 20:00 e sexta as 16:hrs nestes encontros nossas equipes de ora\xE7\xE3o estaram orando por seus pedidos no altar intercedendo e clamando ao Deus Altissimo que n\xE3o tardar\xE1 em atende-lo, por tanto fa\xE7a seu pedido e conte com o apoio da Sibre"), "Pedi, e dar-se-vos-\xE1; buscai, e encontrareis; batei, e abrir-se-vos-\xE1...", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 105
    }
  }), "Mateus 7:7 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 44
    }
  })))))), __jsx(_componete_RodaPe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }));
}

_s(Oracao, "iCqIF/WE0odSwECSRGevRnj75Ds=");

_c = Oracao;
/* harmony default export */ __webpack_exports__["default"] = (Oracao);

var _c;

$RefreshReg$(_c, "Oracao");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JhY2FvLmpzIl0sIm5hbWVzIjpbIk9yYWNhbyIsInVzZVN0YXRlIiwibm9tZSIsImVtYWlsIiwibXNnIiwib3JhY2FvIiwic2V0T3JhY2FvIiwib25jaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImVudk1zZyIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNwb25zZUVudiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZvcm1TdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVjQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsT0FBRyxFQUFFO0FBSDRCLEdBQUQsQ0FGdEI7QUFBQSxNQUVQQyxNQUZPO0FBQUEsTUFFQ0MsU0FGRDs7QUFRZCxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxXQUFJRixTQUFTLGlDQUFNRCxNQUFOLHFHQUFlRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBeEIsRUFBK0JGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUF4QyxHQUFiO0FBQUEsR0FBdkI7O0FBUmMsbUJBVWtCVixzREFBUSxDQUFDO0FBQ3JDVyxZQUFRLEVBQUUsS0FEMkI7QUFFckNDLFFBQUksRUFBRSxFQUYrQjtBQUdyQ0MsV0FBTyxFQUFFO0FBSDRCLEdBQUQsQ0FWMUI7QUFBQSxNQVVQQyxRQVZP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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25ldGUvTWVudS5qcyc7XHJcbmltcG9ydCBSb2RhUGUgZnJvbSAnLi4vY29tcG9uZXRlL1JvZGFQZSc7XHJcblxyXG5pbXBvcnQgeyBKdW1ib3Ryb24sIENvbnRhaW5lciwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gT3JhY2FvKCkge1xyXG5cclxuICAgIGNvbnN0IFtvcmFjYW8sIHNldE9yYWNhb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbm9tZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIG1zZzogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uY2hhbmdlSW5wdXQgPSBlID0+IHNldE9yYWNhbyh7IC4uLm9yYWNhbywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGVudk1zZyA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgpKSByZXR1cm47XHJcbiAgICAgICAgc2V0UmVzcG9uc2UoeyBmb3JtU2F2ZTogdHJ1ZSB9KVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zaWJyZTIwMjAtY29tLWJyLnVtYmxlci5uZXQvb3JhY2FvYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBgUE9TVGAsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcmFjYW8pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRW52KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRW52LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJyBNZW5zYWdlbSBlbnZpYWRhIGNvbSBzdWNlc3NvIScsXHJcbiAgICAgICAgICAgICAgICBmb3JtU3VjY2VzczogdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghb3JhY2FvLm5vbWUpIHJldHVybiBzZXRSZXNwb25zZSh7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdQcmVlbmNoZW1lbnRvIGRvIGNhbXBvIE5vbWUgw6kgb2JyaWdhdMOzcmlvIScgfSk7XHJcbiAgICAgICAgaWYgKCFvcmFjYW8ubXNnKSByZXR1cm4gc2V0UmVzcG9uc2UoeyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiAnUHJlZW5jaGVtZW50byBkYSBtZW5zYWdlbSDDqSBvYnJpZ2F0w7NyaW8hJyB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk9yYcOnw6NvPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgY29udGVudD0naW5kZXgsIGZvbGxvdycgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPcmFpIHVucyBwZWxvcyBvdXRyb3MuIFNlZ3VuZGEgSWdyZWphIEJhdGlzdGEgbm8gUmVjYW50byBkYXMgRW1hcy1ERlwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRXJuaWxzb24gRGFuaWVsIExpbWEgZGUgU291emFcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiaGVhZC1vcmFjYW9cIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT57YC5oZWFkLW9yYWNhb3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1idXR0b206NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW4gISBpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1gfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTggdGV4dC1jZW50ZXJcIj5PcmHDp8OjbzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm0tb3JhY2FvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+e2AuaGVhZC1vcmFjYW97XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYnV0dG9tOjVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVuICEgaW1wb3J0YW50O1xyXG4gICAgICAgICB9YH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmZWF0dXJldHRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtlbnZNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJub21lXCI+Tm9tZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibm9tZVwiIGlkPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIFNldSBOb21lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgU2V1IEVtYWlsLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJtc2dcIj5NZW5zYWdlbTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cIm1zZ1wiIGlkPVwibWdzXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYXF1aSBzZXUgcGVkaWRvIGRlIG9yYcOnw6NvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS5mb3JtU2F2ZSA/IDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJ3YXJuaW5nXCIgZGlzYWJsZWQ+RW52aWFyLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gOiA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwid2FybmluZ1wiPkVudmlhcjwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmZWF0dXJldHRlLWhlYWRpbmdcIj5PcmFpIHNlbSBjZXNzYXIgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5BIG9yYcOnw6NvIGRvcyBqdXN0b3MgcG9kZW0gbXVpdG8gZW0gc2V1cyBlZmVpdG9zIC0gVGlhZ28gNToxNi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm9zc29zIGVuY29udHJvIGRlIG9yYcOnw6NvPC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gTm9zc29zIGVuY29udHJvcyBkZSBvcmHDp8O1ZXMgc8OjbyBuYXMgc2VndW5kYSBhcyAwODowMGhyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YXJ0YSBhcyAyMDowMCBlIHNleHRhIGFzIDE2OmhycyBuZXN0ZXMgZW5jb250cm9zIG5vc3NhcyBlcXVpcGVzIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Jhw6fDo28gZXN0YXJhbSBvcmFuZG8gcG9yIHNldXMgcGVkaWRvcyBubyBhbHRhciBpbnRlcmNlZGVuZG8gZSBjbGFtYW5kb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFvIERldXMgQWx0aXNzaW1vIHF1ZSBuw6NvIHRhcmRhcsOhIGVtIGF0ZW5kZS1sbywgcG9yIHRhbnRvIGZhw6dhIHNldSBwZWRpZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlIGNvbnRlIGNvbSBvIGFwb2lvIGRhIFNpYnJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlZGksIGUgZGFyLXNlLXZvcy3DoTsgYnVzY2FpLCBlIGVuY29udHJhcmVpczsgYmF0ZWksIGUgYWJyaXItc2Utdm9zLcOhLi4uPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0ZXVzIDc6NyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDxSb2RhUGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JhY2FvOyJdLCJzb3VyY2VSb290IjoiIn0=