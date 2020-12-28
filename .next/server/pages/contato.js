module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contato.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componete/Menu.js":
/*!***************************!*\
  !*** ./componete/Menu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ernil.LAPTOP-FID40H3U\\OneDrive\\\xC1rea de Trabalho\\site-sibre\\componete\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Menu = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    color: "info",
    dark: true,
    expand: "md",
    className: "fixed-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Sibre"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/comunhao",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, "Comunh\xE3o")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/contato",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Contato")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/sobre",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "Sobre"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Gloria a Deus!!!")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./pages/contato.js":
/*!**************************!*\
  !*** ./pages/contato.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componete_Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componete/Menu.js */ "./componete/Menu.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\ernil.LAPTOP-FID40H3U\\OneDrive\\\xC1rea de Trabalho\\site-sibre\\pages\\contato.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Contato = () => {
  const {
    0: contato,
    1: setContato
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nome: '',
    email: '',
    amsg: '',
    msg: ''
  });

  const onchangeInput = e => setContato(_objectSpread(_objectSpread({}, contato), {}, {
    [e.target.name]: e.target.value
  }));

  const {
    0: response,
    1: setResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    formSave: false,
    type: '',
    message: '',
    formSuccess: false
  });

  const envMsg = async e => {
    e.preventDefault();
    console.log(contato);
    if (!validate()) return;
    setResponse({
      formSave: true
    });

    try {
      const res = await fetch(`http://sibre2020-com-br.umbler.net/contato`, {
        method: `POST`,
        body: JSON.stringify(contato),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseEnv = await res.json();
      console.log(responseEnv);

      if (responseEnv.error) {
        setResponse({
          formSave: false,
          type: 'success',
          message: responseEnv.message
        });
      } else {
        setResponse({
          formSave: false,
          type: 'success',
          message: ' erro!'
        });
      }
    } catch (err) {
      setResponse({
        formSave: true,
        type: 'success',
        message: ' Mensagem enviada com sucesso!'
      });
      /* 
      if (!formSave) {
          return <Redirect to ={{
              pathname: '/'}}/>
      } 
      */
    }

    ;
  };

  const validate = () => {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Contato"), __jsx("meta", {
    name: "robots",
    content: "index, follow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "description",
    content: "Entre em contato com a Segunda Igreja Batista no Recanto das Emas-DF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "author",
    content: "Ernilson Daniel Lima de Souza",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  })), __jsx(_componete_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Jumbotron"], {
    fluid: true,
    className: "head-contato",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, `.head-contato{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "display-8 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, "Contato"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Jumbotron"], {
    fluid: true,
    className: "form-contato",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, `.head-contato{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row featurette",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, response.type === 'success' ? __jsx("div", {
    className: "alert alert-success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 56
    }
  }, response.message) : "", response.type === 'error' ? __jsx("div", {
    className: "alert alert-danger",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 54
    }
  }, response.message) : "", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: envMsg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    for: "nome",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "text-danger",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 51
    }
  }, "*"), " Nome:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "nome",
    id: "nome",
    placeholder: "Digite Seu Nome...",
    onChange: onchangeInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    for: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Digite Seu Email...",
    onChange: onchangeInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    for: "amsg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, "Assunto da Mensagem:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "amsg",
    id: "amsg",
    placeholder: "Digite o assunto...",
    onChange: onchangeInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    for: "msg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "text-danger",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 50
    }
  }, "*"), " Mensagem:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "textarea",
    name: "msg",
    id: "mgs",
    placeholder: "Digite sua mensagem...",
    onChange: onchangeInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  })), response.formSave ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 50
    }
  }, "Enviar...") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    outline: true,
    color: "warning",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 47
    }
  }, "Enviar"))), __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 47
    }
  }), __jsx("h3", {
    className: "featurette-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, "Contribua com o Reino "), __jsx("p", {
    className: "lead",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, "Banco-PagSeguro: N\xBA-290, Ag\xEAncia: 0001, Conta: 051116937, Tipo: Conta de Pagamento, CNPJ: 186855200001/40 - N\xBA da Chave Pix Aleat\xF3rio: 9738039b-806d-4fa59b85-261eb3d9d24."), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }), __jsx("address", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, "Endere\xE7o"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 54
    }
  }), "Quadra 105 Area Especial 01 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 57
    }
  }), "Av. Vargem das Ben\xE7\xE3o Recanto das Emas- DF", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 71
    }
  }), "(61)991323236 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 43
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contato);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZXRlL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGF0by5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiTWVudSIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlIiwiQ29udGF0byIsImNvbnRhdG8iLCJzZXRDb250YXRvIiwibm9tZSIsImVtYWlsIiwiYW1zZyIsIm1zZyIsIm9uY2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImZvcm1TYXZlIiwidHlwZSIsIm1lc3NhZ2UiLCJmb3JtU3VjY2VzcyIsImVudk1zZyIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRlIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZUVudiIsImpzb24iLCJlcnJvciIsImVyciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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QUFBQTtBQUFBO0FBQUEsSUFKbEIsQ0FMSixDQS9CSixDQUZKLENBUEosQ0FwQkksQ0FBUjtBQThFSCxDQXZKRDs7QUF5SmVkLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDaEtBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2NvbnRhdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NvbnRhdG8uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBDb2xsYXBzZSxcclxuICAgIE5hdmJhcixcclxuICAgIE5hdmJhclRvZ2dsZXIsXHJcbiAgICBOYXZiYXJCcmFuZCxcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgQ29udGFpbmVyXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIGNvbG9yPVwiaW5mb1wiIGRhcmsgZXhwYW5kPVwibWRcIiBjbGFzc05hbWU9XCJmaXhlZC10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj5TaWJyZTwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jb211bmhhb1wiPkNvbXVuaMOjbzwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvY29udGF0b1wiPkNvbnRhdG88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3NvYnJlXCI+U29icmU8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkdsb3JpYSBhIERldXMhISE8L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZXRlL01lbnUuanMnO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBKdW1ib3Ryb24sIENvbnRhaW5lciwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuXHJcbmNvbnN0IENvbnRhdG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29udGF0bywgc2V0Q29udGF0b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbm9tZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIGFtc2c6ICcnLFxyXG4gICAgICAgIG1zZzogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uY2hhbmdlSW5wdXQgPSBlID0+IHNldENvbnRhdG8oeyAuLi5jb250YXRvLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBmb3JtU3VjY2VzczogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBlbnZNc2cgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGF0byk7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgpKSByZXR1cm47XHJcbiAgICAgICAgc2V0UmVzcG9uc2UoeyBmb3JtU2F2ZTogdHJ1ZSB9KVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3NpYnJlMjAyMC1jb20tYnIudW1ibGVyLm5ldC9jb250YXRvYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBgUE9TVGAsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb250YXRvKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFbnYpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VFbnYuZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcgZXJybyEnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgZm9ybVNhdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnIE1lbnNhZ2VtIGVudmlhZGEgY29tIHN1Y2Vzc28hJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qIFxyXG4gICAgICAgICAgICBpZiAoIWZvcm1TYXZlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvID17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnLyd9fS8+XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250YXRvLm5vbWUpIHJldHVybiBzZXRSZXNwb25zZSh7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdQcmVlbmNoYSBvIGNhbXBvIG5vbWUhJyB9KTtcclxuICAgICAgICBpZiAoIWNvbnRhdG8uZW1haWwpIHJldHVybiBzZXRSZXNwb25zZSh7IHR5cGU6ICdlcnJvcicsIG1lc3NhZ2U6ICdQcmVlbmNoYSBvIGNhbXBvIGUtbWFpbCEnIH0pO1xyXG4gICAgICAgIGlmICghY29udGF0by5hbXNnKSByZXR1cm4gc2V0UmVzcG9uc2UoeyB0eXBlOiAnZXJyb3InLCBtZXNzYWdlOiAnUHJlZW5jaGEgbyBjYW1wbyBhc3N1bnRvIGRhIG1lbnNhZ2VtIScgfSk7XHJcbiAgICAgICAgaWYgKCFjb250YXRvLm1zZykgcmV0dXJuIHNldFJlc3BvbnNlKHsgdHlwZTogJ2Vycm9yJywgbWVzc2FnZTogJ1ByZWVuY2hhIG8gY2FtcG8gY29udGXDumRvIGRhIG1lbnNhZ2VtIScgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkNvbnRhdG88L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdyb2JvdHMnIGNvbnRlbnQ9J2luZGV4LCBmb2xsb3cnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFbnRyZSBlbSBjb250YXRvIGNvbSBhIFNlZ3VuZGEgSWdyZWphIEJhdGlzdGEgbm8gUmVjYW50byBkYXMgRW1hcy1ERlwiPjwvbWV0YT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJFcm5pbHNvbiBEYW5pZWwgTGltYSBkZSBTb3V6YVwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJoZWFkLWNvbnRhdG9cIj5cclxuICAgICAgICAgICAgPHN0eWxlPntgLmhlYWQtY29udGF0b3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1idXR0b206NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW4gISBpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1gfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS04IHRleHQtY2VudGVyXCI+Q29udGF0bzwvaDE+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm0tY29udGF0b1wiPlxyXG4gICAgICAgICAgICA8c3R5bGU+e2AuaGVhZC1jb250YXRve1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJ1dHRvbTo1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbiAhIGltcG9ydGFudDtcclxuICAgICAgICAgfWB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmZWF0dXJldHRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPntyZXNwb25zZS5tZXNzYWdlfTwvZGl2PiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9kaXY+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2Vudk1zZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJub21lXCI+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPiBOb21lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vbWVcIiBpZD1cIm5vbWVcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBTZXUgTm9tZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBTZXUgRW1haWwuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25jaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiYW1zZ1wiPkFzc3VudG8gZGEgTWVuc2FnZW06PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYW1zZ1wiIGlkPVwiYW1zZ1wiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gYXNzdW50by4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJtc2dcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+IE1lbnNhZ2VtOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJtc2dcIiBpZD1cIm1nc1wiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHN1YSBtZW5zYWdlbS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbmNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UuZm9ybVNhdmUgPyA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwid2FybmluZ1wiIGRpc2FibGVkPkVudmlhci4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+IDogPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cIndhcm5pbmdcIj5FbnZpYXI8L0J1dHRvbj59XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZlYXR1cmV0dGUtaGVhZGluZ1wiPkNvbnRyaWJ1YSBjb20gbyBSZWlubyA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+QmFuY28tUGFnU2VndXJvOiBOwrotMjkwLCBBZ8OqbmNpYTogMDAwMSwgQ29udGE6IDA1MTExNjkzNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvOiBDb250YSBkZSBQYWdhbWVudG8sIENOUEo6IDE4Njg1NTIwMDAwMS80MCAtIE7CuiBkYSBDaGF2ZSBQaXggQWxlYXTDs3JpbzogOTczODAzOWItODA2ZC00ZmE1OWI4NS0yNjFlYjNkOWQyNC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RW5kZXJlw6dvPC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWFkcmEgMTA1IEFyZWEgRXNwZWNpYWwgMDEgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdi4gVmFyZ2VtIGRhcyBCZW7Dp8OjbyBSZWNhbnRvIGRhcyBFbWFzLSBERjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDYxKTk5MTMyMzIzNiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0p1bWJvdHJvbj5cclxuXHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhdG87IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9