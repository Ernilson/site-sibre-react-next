webpackHotUpdate_N_E("pages/contato",{

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\ernil.LAPTOP-FID40H3U\\OneDrive\\\xC1rea de Trabalho\\site-sibre\\pages\\contato.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Contato = function Contato() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    nome: '',
    email: '',
    amsg: '',
    msg: ''
  }),
      contato = _useState[0],
      setContato = _useState[1];

  var onchangeInput = function onchangeInput(e) {
    return setContato(_objectSpread(_objectSpread({}, contato), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    formSave: false,
    type: '',
    message: '',
    formSuccess: false
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
              console.log(contato);

              if (validate()) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              setResponse({
                formSave: true
              });
              _context.prev = 5;
              _context.next = 8;
              return fetch("https://sibre2020-com-br.umbler.net/oracao", {
                method: "POST",
                body: JSON.stringify(contato),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 8:
              res = _context.sent;
              _context.next = 11;
              return res.json();

            case 11:
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
                  type: 'error',
                  message: responseEnv.message
                });
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](5);
              setResponse({
                formSave: false,
                type: 'success',
                message: ' Mensagem enviada com sucesso!',
                formSuccess: true
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 16]]);
    }));

    return function envMsg(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var validate = function validate() {
    if (!contato.nome) return setResponse({
      type: 'error',
      message: 'Preencha o campo nome!'
    });
    if (!contato.email) return setResponse({
      type: 'error',
      message: 'Preencha o campo e-mail!'
    });
    if (!contato.amsg) return setResponse({
      type: 'error',
      message: 'Preencha o campo assunto da mensagem!'
    });
    if (!contato.msg) return setResponse({
      type: 'error',
      message: 'Preencha o campo conteúdo da mensagem!'
    });
    return true;
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Contato"), __jsx("meta", {
    name: "robots",
    content: "index, follow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "description",
    content: "Entre em contato com a Segunda Igreja Batista no Recanto das Emas-DF",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "author",
    content: "Ernilson Daniel Lima de Souza",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })), __jsx(_componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
    fluid: true,
    className: "head-contato",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, ".head-contato{\n                padding-top: 60px;\n                padding-buttom:5px;\n                background-color: #fff;\n                margin-bottom: 0ren ! important;\n         }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "display-8 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Contato"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
    fluid: true,
    className: "form-contato",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, ".head-contato{\n                padding-top: 60px;\n                padding-buttom:5px;\n                background-color: #fff;\n                margin-bottom: 0ren ! important;\n         }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row featurette",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, response.type === 'success' ? __jsx("div", {
    className: "alert alert-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 56
    }
  }, response.message) : "", response.type === 'error' ? __jsx("div", {
    className: "alert alert-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 54
    }
  }, response.message) : "", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: envMsg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "nome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "text-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 51
    }
  }, "*"), " Nome:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "text",
    name: "nome",
    id: "nome",
    placeholder: "Digite Seu Nome...",
    onChange: onchangeInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Digite Seu Email...",
    onChange: onchangeInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "amsg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, "Assunto da Mensagem:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "text",
    name: "amsg",
    id: "amsg",
    placeholder: "Digite o assunto...",
    onChange: onchangeInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
    "for": "msg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "text-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 50
    }
  }, "*"), " Mensagem:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    type: "textarea",
    name: "msg",
    id: "mgs",
    placeholder: "Digite sua mensagem...",
    onChange: onchangeInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  })), response.formSave ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    disabled: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 50
    }
  }, "Enviar...") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 47
    }
  }, "Enviar"))), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 47
    }
  }), __jsx("h3", {
    className: "featurette-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, "Contribua com o Reino "), __jsx("p", {
    className: "lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "Banco-PagSeguro: N\xBA-290, Ag\xEAncia: 0001, Conta: 051116937, Tipo: Conta de Pagamento, CNPJ: 186855200001/40 - N\xBA da Chave Pix Aleat\xF3rio: 9738039b-806d-4fa59b85-261eb3d9d24."), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }), __jsx("address", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, "Endere\xE7o"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 54
    }
  }), "Quadra 105 Area Especial 01 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 57
    }
  }), "Av. Vargem das Ben\xE7\xE3o Recanto das Emas- DF", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 71
    }
  }), "(61)991323236 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 43
    }
  })))))));
};

_s(Contato, "jsjRqV/WL23Ci0+VzIHQ5vqbjfM=");

_c = Contato;
/* harmony default export */ __webpack_exports__["default"] = (Contato);

var _c;

$RefreshReg$(_c, "Contato");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGF0by5qcyJdLCJuYW1lcyI6WyJDb250YXRvIiwidXNlU3RhdGUiLCJub21lIiwiZW1haWwiLCJhbXNnIiwibXNnIiwiY29udGF0byIsInNldENvbnRhdG8iLCJvbmNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1TYXZlIiwidHlwZSIsIm1lc3NhZ2UiLCJmb3JtU3VjY2VzcyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlbnZNc2ciLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwianNvbiIsInJlc3BvbnNlRW52IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDO0FBQ25DQyxRQUFJLEVBQUUsRUFENkI7QUFFbkNDLFNBQUssRUFBRSxFQUY0QjtBQUduQ0MsUUFBSSxFQUFFLEVBSDZCO0FBSW5DQyxPQUFHLEVBQUU7QUFKOEIsR0FBRCxDQURwQjtBQUFBLE1BQ1hDLE9BRFc7QUFBQSxNQUNGQyxVQURFOztBQVFsQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxXQUFJRixVQUFVLGlDQUFNRCxPQUFOLHFHQUFnQkcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQXpCLEVBQWdDRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBekMsR0FBZDtBQUFBLEdBQXZCOztBQVJrQixtQkFVY1gsc0RBQVEsQ0FBQztBQUNyQ1ksWUFBUSxFQUFFLEtBRDJCO0FBRXJDQyxRQUFJLEVBQUUsRUFGK0I7QUFHckNDLFdBQU8sRUFBRSxFQUg0QjtBQUlyQ0MsZUFBVyxFQUFFO0FBSndCLEdBQUQsQ0FWdEI7QUFBQSxNQVVYQyxRQVZXO0FBQUEsTUFVREMsV0FWQzs7QUFrQmxCLE1BQU1DLE1BQU07QUFBQSxnTUFBRyxpQkFBTVYsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEEsZUFBQyxDQUFDVyxjQUFGO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWWhCLE9BQVo7O0FBRlcsa0JBR05pQixRQUFRLEVBSEY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFJWEwseUJBQVcsQ0FBQztBQUFFTCx3QkFBUSxFQUFFO0FBQVosZUFBRCxDQUFYO0FBSlc7QUFBQTtBQUFBLHFCQU9XVyxLQUFLLCtDQUErQztBQUNsRUMsc0JBQU0sUUFENEQ7QUFFbEVDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFldEIsT0FBZixDQUY0RDtBQUdsRXVCLHVCQUFPLEVBQUU7QUFBRSxrQ0FBZ0I7QUFBbEI7QUFIeUQsZUFBL0MsQ0FQaEI7O0FBQUE7QUFPREMsaUJBUEM7QUFBQTtBQUFBLHFCQWFtQkEsR0FBRyxDQUFDQyxJQUFKLEVBYm5COztBQUFBO0FBYURDLHlCQWJDO0FBY1BYLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVUsV0FBWjs7QUFDQSxrQkFBSUEsV0FBVyxDQUFDQyxLQUFoQixFQUF1QjtBQUNuQmYsMkJBQVcsQ0FBQztBQUNSTCwwQkFBUSxFQUFFLEtBREY7QUFFUkMsc0JBQUksRUFBRSxPQUZFO0FBR1JDLHlCQUFPLEVBQUVpQixXQUFXLENBQUNqQjtBQUhiLGlCQUFELENBQVg7QUFLSCxlQU5ELE1BTU87QUFDSEcsMkJBQVcsQ0FBQztBQUNSTCwwQkFBUSxFQUFFLElBREY7QUFFUkMsc0JBQUksRUFBRSxPQUZFO0FBR1JDLHlCQUFPLEVBQUVpQixXQUFXLENBQUNqQjtBQUhiLGlCQUFELENBQVg7QUFLSDs7QUEzQk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE2QlBHLHlCQUFXLENBQUM7QUFDUkwsd0JBQVEsRUFBRSxLQURGO0FBRVJDLG9CQUFJLEVBQUUsU0FGRTtBQUdSQyx1QkFBTyxFQUFFLGdDQUhEO0FBSVJDLDJCQUFXLEVBQUU7QUFKTCxlQUFELENBQVg7O0FBN0JPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQU5HLE1BQU07QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUF1Q0EsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFJLENBQUNqQixPQUFPLENBQUNKLElBQWIsRUFBbUIsT0FBT2dCLFdBQVcsQ0FBQztBQUFFSixVQUFJLEVBQUUsT0FBUjtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBQUQsQ0FBbEI7QUFDbkIsUUFBSSxDQUFDVCxPQUFPLENBQUNILEtBQWIsRUFBb0IsT0FBT2UsV0FBVyxDQUFDO0FBQUVKLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxhQUFPLEVBQUU7QUFBMUIsS0FBRCxDQUFsQjtBQUNwQixRQUFJLENBQUNULE9BQU8sQ0FBQ0YsSUFBYixFQUFtQixPQUFPYyxXQUFXLENBQUM7QUFBRUosVUFBSSxFQUFFLE9BQVI7QUFBaUJDLGFBQU8sRUFBRTtBQUExQixLQUFELENBQWxCO0FBQ25CLFFBQUksQ0FBQ1QsT0FBTyxDQUFDRCxHQUFiLEVBQWtCLE9BQU9hLFdBQVcsQ0FBQztBQUFFSixVQUFJLEVBQUUsT0FBUjtBQUFpQkMsYUFBTyxFQUFFO0FBQTFCLEtBQUQsQ0FBbEI7QUFFbEIsV0FBTyxJQUFQO0FBQ0gsR0FQRDs7QUFTQSxTQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFdBQU8sRUFBQyxlQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBQyxzRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsK0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURJLEVBT0osTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEksRUFRSixNQUFDLG9EQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUMsY0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc01BREosRUFPSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosQ0FQSixDQVJJLEVBb0JKLE1BQUMsb0RBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQWlCLGFBQVMsRUFBQyxjQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzTUFESixFQU9JLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsUUFBUSxDQUFDSCxJQUFULEtBQWtCLFNBQWxCLEdBQThCO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0NHLFFBQVEsQ0FBQ0YsT0FBL0MsQ0FBOUIsR0FBOEYsRUFEbkcsRUFFS0UsUUFBUSxDQUFDSCxJQUFULEtBQWtCLE9BQWxCLEdBQTRCO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNHLFFBQVEsQ0FBQ0YsT0FBOUMsQ0FBNUIsR0FBMkYsRUFGaEcsRUFHSSxNQUFDLCtDQUFEO0FBQU0sWUFBUSxFQUFFSSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFPLFdBQUksTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtCO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbEIsV0FESixFQUVJLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsTUFBeEI7QUFBK0IsTUFBRSxFQUFDLE1BQWxDO0FBQXlDLGVBQVcsRUFBQyxvQkFBckQ7QUFDSSxZQUFRLEVBQUVYLGFBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFNSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU8sV0FBSSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixRQUFJLEVBQUMsT0FBekI7QUFBaUMsTUFBRSxFQUFDLE9BQXBDO0FBQTRDLGVBQVcsRUFBQyxxQkFBeEQ7QUFDSSxZQUFRLEVBQUVBLGFBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBTkosRUFXSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU8sV0FBSSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSSxNQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLE1BQXhCO0FBQStCLE1BQUUsRUFBQyxNQUFsQztBQUF5QyxlQUFXLEVBQUMscUJBQXJEO0FBQ0ksWUFBUSxFQUFFQSxhQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQVhKLEVBZ0JJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTyxXQUFJLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQjtBQUFNLGFBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWpCLGVBREosRUFFSSxNQUFDLGdEQUFEO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBSSxFQUFDLEtBQTVCO0FBQWtDLE1BQUUsRUFBQyxLQUFyQztBQUEyQyxlQUFXLEVBQUMsd0JBQXZEO0FBQ0ksWUFBUSxFQUFFQSxhQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQWhCSixFQXFCS1MsUUFBUSxDQUFDSixRQUFULEdBQW9CLE1BQUMsaURBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLE1BQTdCO0FBQThCLFNBQUssRUFBQyxTQUFwQztBQUE4QyxZQUFRLE1BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXBCLEdBQ2lCLE1BQUMsaURBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLE1BQTdCO0FBQThCLFNBQUssRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJ0QixDQUhKLENBREosRUErQkk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBMUIsRUFDSTtBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhMQUZKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFDNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQ3QixrQ0FFZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZoQyxzREFHOEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUg5QyxvQkFJa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpsQixDQUxKLENBL0JKLENBRkosQ0FQSixDQXBCSSxDQUFSO0FBOEVILENBaEpEOztHQUFNYixPOztLQUFBQSxPO0FBa0pTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YXRvLjZlMzczYzY5MDNkYWZjMjJhNDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmV0ZS9NZW51LmpzJztcclxuaW1wb3J0IHsgUmVkaXJlY3QsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgSnVtYm90cm9uLCBDb250YWluZXIsIEZvcm0sIEZvcm1Hcm91cCwgSW5wdXQsIExhYmVsLCBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblxyXG5jb25zdCBDb250YXRvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvbnRhdG8sIHNldENvbnRhdG9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5vbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBhbXNnOiAnJyxcclxuICAgICAgICBtc2c6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbmNoYW5nZUlucHV0ID0gZSA9PiBzZXRDb250YXRvKHsgLi4uY29udGF0bywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgZm9ybVN1Y2Nlc3M6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgZW52TXNnID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhdG8pO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGUoKSkgcmV0dXJuO1xyXG4gICAgICAgIHNldFJlc3BvbnNlKHsgZm9ybVNhdmU6IHRydWUgfSlcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc2licmUyMDIwLWNvbS1ici51bWJsZXIubmV0L29yYWNhb2AsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYFBPU1RgLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGF0byksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFbnYpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VFbnYuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJyBNZW5zYWdlbSBlbnZpYWRhIGNvbSBzdWNlc3NvIScsXHJcbiAgICAgICAgICAgICAgICBmb3JtU3VjY2VzczogdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRhdG8ubm9tZSkgcmV0dXJuIHNldFJlc3BvbnNlKHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1ByZWVuY2hhIG8gY2FtcG8gbm9tZSEnIH0pO1xyXG4gICAgICAgIGlmICghY29udGF0by5lbWFpbCkgcmV0dXJuIHNldFJlc3BvbnNlKHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1ByZWVuY2hhIG8gY2FtcG8gZS1tYWlsIScgfSk7XHJcbiAgICAgICAgaWYgKCFjb250YXRvLmFtc2cpIHJldHVybiBzZXRSZXNwb25zZSh7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdQcmVlbmNoYSBvIGNhbXBvIGFzc3VudG8gZGEgbWVuc2FnZW0hJyB9KTtcclxuICAgICAgICBpZiAoIWNvbnRhdG8ubXNnKSByZXR1cm4gc2V0UmVzcG9uc2UoeyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiAnUHJlZW5jaGEgbyBjYW1wbyBjb250ZcO6ZG8gZGEgbWVuc2FnZW0hJyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+Q29udGF0bzwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3JvYm90cycgY29udGVudD0naW5kZXgsIGZvbGxvdycgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVudHJlIGVtIGNvbnRhdG8gY29tIGEgU2VndW5kYSBJZ3JlamEgQmF0aXN0YSBubyBSZWNhbnRvIGRhcyBFbWFzLURGXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkVybmlsc29uIERhbmllbCBMaW1hIGRlIFNvdXphXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImhlYWQtY29udGF0b1wiPlxyXG4gICAgICAgICAgICA8c3R5bGU+e2AuaGVhZC1jb250YXRve1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJ1dHRvbTo1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbiAhIGltcG9ydGFudDtcclxuICAgICAgICAgfWB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTggdGV4dC1jZW50ZXJcIj5Db250YXRvPC9oMT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZm9ybS1jb250YXRvXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZT57YC5oZWFkLWNvbnRhdG97XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYnV0dG9tOjVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVuICEgaW1wb3J0YW50O1xyXG4gICAgICAgICB9YH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZlYXR1cmV0dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyJz57cmVzcG9uc2UubWVzc2FnZX08L2Rpdj4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17ZW52TXNnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5vbWVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+IE5vbWU6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibm9tZVwiIGlkPVwibm9tZVwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIFNldSBOb21lLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIFNldSBFbWFpbC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJhbXNnXCI+QXNzdW50byBkYSBNZW5zYWdlbTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbXNnXCIgaWQ9XCJhbXNnXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBhc3N1bnRvLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm1zZ1wiPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj4gTWVuc2FnZW06PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cIm1zZ1wiIGlkPVwibWdzXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc3VhIG1lbnNhZ2VtLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uY2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS5mb3JtU2F2ZSA/IDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJ3YXJuaW5nXCIgZGlzYWJsZWQ+RW52aWFyLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gOiA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwid2FybmluZ1wiPkVudmlhcjwvQnV0dG9uPn1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZmVhdHVyZXR0ZS1oZWFkaW5nXCI+Q29udHJpYnVhIGNvbSBvIFJlaW5vIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5CYW5jby1QYWdTZWd1cm86IE7Cui0yOTAsIEFnw6puY2lhOiAwMDAxLCBDb250YTogMDUxMTE2OTM3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG86IENvbnRhIGRlIFBhZ2FtZW50bywgQ05QSjogMTg2ODU1MjAwMDAxLzQwIC0gTsK6IGRhIENoYXZlIFBpeCBBbGVhdMOzcmlvOiA5NzM4MDM5Yi04MDZkLTRmYTU5Yjg1LTI2MWViM2Q5ZDI0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbmRlcmXDp288L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YWRyYSAxMDUgQXJlYSBFc3BlY2lhbCAwMSA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF2LiBWYXJnZW0gZGFzIEJlbsOnw6NvIFJlY2FudG8gZGFzIEVtYXMtIERGPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoNjEpOTkxMzIzMjM2IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgIDwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGF0bzsiXSwic291cmNlUm9vdCI6IiJ9