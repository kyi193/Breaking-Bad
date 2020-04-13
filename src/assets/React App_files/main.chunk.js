(this["webpackJsonpbreakingbad"] = this["webpackJsonpbreakingbad"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".img {\n  width: 100px;\n  height: 150px;\n}\n\n#container {\n  padding: 30px;\n  border:1px solid black;\n  width: 1000px;\n  height: 800px;\n  margin: auto;\n}\n#left {\n  float: left;\n  padding-right:30px;\n  border-right: 7px solid white;\n}\n#charInfo {\n  padding-top: 50px;\n  padding-left: 50px;\n  color: white;\n  float: left;\n}\n\n#aboutContainer {\n  padding: 30px;\n  padding-top: 20px;\n  border:1px solid black;\n  width: max-content;\n  height: 800px;\n  margin: auto;\n}\n#video {\n  float: left;\n  padding-right:30px;\n  border-right: 7px solid white;\n}\n\n#aboutP {\n  float: left;\n  width: 500px;\n  color: white;\n}\n\n.App {\n  background-color: black;\n  height: max-content;\n}\n\n#aboutTitle {\n  color: white;\n  margin-bottom: 20px;\n}\n\n  .footer {\n    background-color:#565656;\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navigationbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigationbar */ "./src/components/Navigationbar.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/About */ "./src/components/About.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Jumbotron */ "./src/components/Jumbotron.js");
/* harmony import */ var _components_Character__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Character */ "./src/components/Character.js");
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/background.jpg */ "./src/assets/background.jpg");
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_background_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/App.js";









 // import 'bootstrap/dist/css/bootstrap.min.css';

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      searchResult: '',
      searchQuery: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    // fetch('https://www.breakingbadapi.com/api/characters/')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //     })
    //   })
    console.log("RERENDER APP");
  }

  submitSearch(event) {
    event.preventDefault();
    this.setState({
      searchQuery: this.state.searchResult
    });
  } //create updatesearch to set state


  updateSearch(event) {
    const inputSearch = event.target.value;
    this.setState({
      searchResult: inputSearch
    });
  }

  render() {
    // const { isLoaded } = this.state
    // if (!isLoaded) {
    //   return <div>Loading....</div>
    // }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigationbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      updateSearch: this.updateSearch,
      submitSearch: this.submitSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
        searchQuery: this.state.searchQuery,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 56
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/character/:key",
      component: _components_Character__WEBPACK_IMPORTED_MODULE_7__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/about",
      component: _components_About__WEBPACK_IMPORTED_MODULE_4__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/contact",
      component: _components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "footer text-center py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }, "Data derived from:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.breakingbadapi.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 12
      }
    }, " breakingbadapi.com/"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background.79999c5a.jpg";

/***/ }),

/***/ "./src/assets/headerBackground.jpg":
/*!*****************************************!*\
  !*** ./src/assets/headerBackground.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.a72a211b.png";

/***/ }),

/***/ "./src/assets/spinner.gif":
/*!********************************!*\
  !*** ./src/assets/spinner.gif ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spinner.142750c6.gif";

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/components/About.js";


class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "aboutContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      id: "aboutTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "video",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_1___default.a, {
      url: "https://www.youtube.com/watch?v=Xs6_vecSv2Y",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "charInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aboutP",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, "Breaking Bad follows protagonist Walter White (Bryan Cranston), a chemistry teacher who lives in New Mexico with his wife (Anna Gunn) and teenage son (RJ Mitte) who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.")));
  }

}

/***/ }),

/***/ "./src/components/Character.js":
/*!*************************************!*\
  !*** ./src/components/Character.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/components/Character.js";



const Sprite = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img`
  width: 20em;
  height: 25em;
  display: none;
`;
class Character extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
      imageUrl: '',
      occupations: '',
      status: '',
      nickName: '',
      portrayed: '',
      seasonsAppeared: '',
      imageLoading1: true,
      tooManyRequests1: false
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  } // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.searchQuery !== this.props.searchQuery) {
  //     this.fetchCharacters(this.props.searchQuery);
  //   }
  // }


  async fetchCharacters() {
    const charIndex = this.props.match.params.key;
    const characterRes = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://www.breakingbadapi.com/api/characters?name=${charIndex}`);
    const name = characterRes.data[0].name;
    const birthday = characterRes.data[0].birthday;
    const occupationList = characterRes.data[0].occupation;
    const imageUrl = characterRes.data[0].img;
    const status = characterRes.data[0].status;
    const nickName = characterRes.data[0].nickname;
    const seasons = characterRes.data[0].appearance;
    const portrayed = characterRes.data[0].portrayed;
    let seasonsAppeared = seasons[0];

    if (seasons.length > 1) {
      for (let i = 1; i < seasons.length; i++) {
        seasonsAppeared += ", " + seasons[i];
      }
    }

    let occupations = occupationList[0];

    if (occupationList.length > 1) {
      for (let i = 1; i < occupationList.length; i++) {
        occupations += ", " + occupationList[i];
      }
    }

    this.setState({
      name,
      birthday,
      imageUrl,
      occupations,
      status,
      nickName,
      seasonsAppeared,
      portrayed
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sprite, {
      className: "card-img-top rounded mx-auto mt-2",
      onLoad: () => this.setState({
        imageLoading1: false
      }),
      onError: () => this.setState({
        tooManyRequests1: true
      }),
      src: this.state.imageUrl,
      style: this.state.tooManyRequests ? {
        display: "none"
      } : this.state.imageLoading ? null : {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "charInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }, "Name: ", this.state.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }), "Birthday: ", this.state.birthday, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }), "Occupation(s): ", this.state.occupations, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }), "Status: ", this.state.status, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }), "Nick Name: ", this.state.nickName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }), "Seasons Appeared: ", this.state.seasonsAppeared, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }), "Portrayed By: ", this.state.portrayed, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }))));
  }

}

/***/ }),

/***/ "./src/components/CharacterCard.js":
/*!*****************************************!*\
  !*** ./src/components/CharacterCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_spinner_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/spinner.gif */ "./src/assets/spinner.gif");
/* harmony import */ var _assets_spinner_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_spinner_gif__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/components/CharacterCard.js";




const Sprite = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img`
  width: 12em;
  height: 15em;
  display: none;
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  background-color: #DCDCDC;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, .25, 1);
  &: hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-slect: none;
  -o-user-select: none;
`;
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
text-decoration: none;
color: black;
&: focus,
&: hover,
&: visited,
&: link,
&: active {
  text-decoration: none;
}

`;
class CharacterCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      charId: '',
      name: '',
      url: '',
      birthday: '',
      imageLoading: true,
      tooManyRequests: false
    };
  }

  componentDidMount() {
    const {
      charId,
      name,
      url,
      birthday
    } = this.props;
    this.setState({
      charId,
      name,
      url,
      birthday
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 col-sm-6 mb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
      to: `/character/${this.state.name}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
      className: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, this.state.name), this.state.imageLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_spinner_gif__WEBPACK_IMPORTED_MODULE_3___default.a,
      style: {
        width: '5em',
        height: '5em'
      },
      className: "card-img-top rounded mx-auto d-block mt-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sprite, {
      className: "card-img-top rounded mx-auto mt-2",
      onLoad: () => this.setState({
        imageLoading: false
      }),
      onError: () => this.setState({
        tooManyRequests: true
      }),
      src: this.state.url,
      style: this.state.tooManyRequests ? {
        display: "none"
      } : this.state.imageLoading ? null : {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }), this.state.tooManyRequests ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "mx-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "badge badge-danger mt-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, " Too Many Requests")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body mx-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "card-title ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }, this.state.name)))));
  }

}

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/components/Contact.js";

class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "aboutContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      id: "aboutTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "charInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aboutP",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, "Created by: Kevin Yi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: "aboutP",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, "Email: kevin.yi93@gmail.com")));
  }

}

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_characters_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/characters.json */ "./src/data/characters.json");
var _data_characters_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/characters.json */ "./src/data/characters.json", 1);
/* harmony import */ var _CharacterCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharacterCard */ "./src/components/CharacterCard.js");
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/components/Home.js";




const USE_MOCK_DATA = false;
class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchCharacters(this.props.searchQuery);
    }
  }

  fetchCharacters(queryName = '') {
    if (USE_MOCK_DATA) {
      this.setState({
        characters: _data_characters_json__WEBPACK_IMPORTED_MODULE_2__["characters"]
      });
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://www.breakingbadapi.com/api/characters?name=${queryName}`).then(json => {
      this.setState({
        characters: json.data
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, this.state.characters ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, this.state.characters.map(character => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CharacterCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: character.name,
      charId: character.char_id,
      name: character.name,
      url: character.img,
      birthday: character.birthday,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, "Loading Characters"));
  }

}

/***/ }),

/***/ "./src/components/Jumbotron.js":
/*!*************************************!*\
  !*** ./src/components/Jumbotron.js ***!
  \*************************************/
/*! exports provided: Jumbotron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return Jumbotron; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/components/Jumbotron.js";



const Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  .jumbo  {
    background-size: cover;
    margin-bottom: 0;
    color: #ccc;
    height: 30px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #0D3E10 !important;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;  
  }
`;
const Jumbotron = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styles, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Jumbotron"], {
  fluid: true,
  className: "jumbo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "overlay",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 11
  }
}, "Welcome!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 11
  }
}, "Learn about all your favorite Breaking Bad Characters Here!")))));

/***/ }),

/***/ "./src/components/Navigationbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navigationbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigationbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_headerBackground_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/headerBackground.jpg */ "./src/assets/headerBackground.jpg");
/* harmony import */ var _assets_headerBackground_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_headerBackground_jpg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/components/Navigationbar.js";





const Styles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  .navbar {
    background-color: #222;
    background: url(${_assets_headerBackground_jpg__WEBPACK_IMPORTED_MODULE_4___default.a});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .navbar-brand {
    font-size: 30px;
  }
  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    
    &:hover {
      color: white;
    }
  }
`;
class Navigationbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styles, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      expand: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      className: "ml-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
      href: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      inline: true,
      onSubmit: this.props.submitSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "text",
      placeholder: "Search",
      className: "mr-sm-2" // pass update search into onchange
      ,
      onChange: this.props.updateSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      variant: "outline-success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, "Search")))));
  }

}

/***/ }),

/***/ "./src/data/characters.json":
/*!**********************************!*\
  !*** ./src/data/characters.json ***!
  \**********************************/
/*! exports provided: characters, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"characters\":[{\"char_id\":1,\"name\":\"Walter White\",\"birthday\":\"09-07-1958\",\"occupation\":[\"High School Chemistry Teacher\",\"Meth King Pin\"],\"img\":\"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg\",\"status\":\"Presumed dead\",\"nickname\":\"Heisenberg\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Bryan Cranston\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":2,\"name\":\"Jesse Pinkman\",\"birthday\":\"09-24-1984\",\"occupation\":[\"Meth Dealer\"],\"img\":\"https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg\",\"status\":\"Alive\",\"nickname\":\"Cap n' Cook\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Aaron Paul\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":3,\"name\":\"Skyler White\",\"birthday\":\"08-11-1970\",\"occupation\":[\"House wife\",\"Book Keeper\",\"Car Wash Manager\",\"Taxi Dispatcher\"],\"img\":\"https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg\",\"status\":\"Alive\",\"nickname\":\"Sky\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Anna Gunn\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":4,\"name\":\"Walter White Jr.\",\"birthday\":\"07-08-1993\",\"occupation\":[\"Teenager\"],\"img\":\"https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg\",\"status\":\"Alive\",\"nickname\":\"Flynn\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"RJ Mitte\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":5,\"name\":\"Henry Schrader\",\"birthday\":\"Unknown\",\"occupation\":[\"DEA Agent\"],\"img\":\"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg\",\"status\":\"Deceased\",\"nickname\":\"Hank\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Dean Norris\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":6,\"name\":\"Marie Schrader\",\"birthday\":\"Unknown\",\"occupation\":[\"Housewife\",\"Clepto\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645\",\"status\":\"Alive\",\"nickname\":\"Marie\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Betsy Brandt\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":7,\"name\":\"Mike Ehrmantraut\",\"birthday\":\"Unknown\",\"occupation\":[\"Hitman\",\"Private Investigator\",\"Ex-Cop\"],\"img\":\"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg\",\"status\":\"Deceased\",\"nickname\":\"Mike\",\"appearance\":[2,3,4,5],\"portrayed\":\"Jonathan Banks\",\"category\":\"Breaking Bad, Better Call Saul\",\"better_call_saul_appearance\":[1,2,3,4]},{\"char_id\":8,\"name\":\"Saul Goodman\",\"birthday\":\"Unknown\",\"occupation\":[\"Lawyer\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846\",\"status\":\"Alive\",\"nickname\":\"Jimmy McGill\",\"appearance\":[2,3,4,5],\"portrayed\":\"Bob Odenkirk\",\"category\":\"Breaking Bad, Better Call Saul\",\"better_call_saul_appearance\":[1,2,3,4]},{\"char_id\":9,\"name\":\"Gustavo Fring\",\"birthday\":\"Unknown\",\"occupation\":[\"Los-Pollos co-Founder\",\"Philanthropist\",\"Cartel Leader\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925\",\"status\":\"Deceased\",\"nickname\":\"Gus\",\"appearance\":[2,3,4],\"portrayed\":\"Giancarlo Esposito\",\"category\":\"Breaking Bad, Better Call Saul\",\"better_call_saul_appearance\":[3,4]},{\"char_id\":10,\"name\":\"Hector Salamanca\",\"birthday\":\"Unknown\",\"occupation\":[\"Former Senior Cartel Leader\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606\",\"status\":\"Deceased\",\"nickname\":\"Don Hector\",\"appearance\":[1,2,3,4],\"portrayed\":\"Mark Margolis\",\"category\":\"Breaking Bad, Better Call Saul\",\"better_call_saul_appearance\":[2,3,4]},{\"char_id\":11,\"name\":\"Domingo Molina\",\"birthday\":\"Unknown\",\"occupation\":[\"Meth Distributor\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554\",\"status\":\"Deceased\",\"nickname\":\"Krazy-8\",\"appearance\":[1],\"portrayed\":\"Maximino Arciniega\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":12,\"name\":\"Tuco Salamanca\",\"birthday\":\"Unknown\",\"occupation\":[\"Meth Distributor\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445\",\"status\":\"Deceased\",\"nickname\":\"Tuco\",\"appearance\":[1,2],\"portrayed\":\"Raymond Cruz\",\"category\":\"Breaking Bad, Better Call Saul\",\"better_call_saul_appearance\":[1,2]},{\"char_id\":13,\"name\":\"Marco & Leonel Salamanca\",\"birthday\":\"Unknown\",\"occupation\":[\"Cartel Hitman\"],\"img\":\"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg\",\"status\":\"Deceased\",\"nickname\":\"The Cousins\",\"appearance\":[3],\"portrayed\":\"Luis & Daniel Moncada\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":14,\"name\":\"Lydia Rodarte-Quayle\",\"birthday\":\"Unknown\",\"occupation\":[\"Executive at Madrigal\"],\"img\":\"https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg\",\"status\":\"Alive\",\"nickname\":\"Lydia\",\"appearance\":[5],\"portrayed\":\"Laura Fraser\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":15,\"name\":\"Todd Alquist\",\"birthday\":\"Unknown\",\"occupation\":[\"Lab Assistant\",\"Enforcer\",\"Math Cook\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303\",\"status\":\"Deceased\",\"nickname\":\"Ricky Hitler\",\"appearance\":[5],\"portrayed\":\"Jesse Plemons\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":16,\"name\":\"Jane Margolis\",\"birthday\":\"Unknown\",\"occupation\":[\"Tattoo Artist\",\"Landlord\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653\",\"status\":\"Deceased\",\"nickname\":\"Apology Girl\",\"appearance\":[2],\"portrayed\":\"Krysten Ritter\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":17,\"name\":\"Skinny Pete\",\"birthday\":\"Unknown\",\"occupation\":[\"Low-level meth distributer\"],\"img\":\"https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623\",\"status\":\"Alive\",\"nickname\":\"Skinny\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Charles Baker\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":18,\"name\":\"Brandon Mayhew\",\"birthday\":\"Unknown\",\"occupation\":[\"Low-level meth distributer\"],\"img\":\"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg\",\"status\":\"Alive\",\"nickname\":\"Badger\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Matt L. Jones\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":19,\"name\":\"Huell Babineaux\",\"birthday\":\"Unknown\",\"occupation\":[\"Bodyguard\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es\",\"status\":\"Alive\",\"nickname\":\"Huell\",\"appearance\":[4,5],\"portrayed\":\"Lavell Crawford\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":20,\"name\":\"Steven Gomez\",\"birthday\":\"Unknown\",\"occupation\":[\"DEA Agent\"],\"img\":\"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg\",\"status\":\"Deceased\",\"nickname\":\"Gomie\",\"appearance\":[1,2,3,4,5],\"portrayed\":\"Steven Michael Quezada\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":21,\"name\":\"Theodore Beneke\",\"birthday\":\"Unknown\",\"occupation\":[\"Former President Beneke Fabricators\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_700x1000_todd-beneke-lg.jpg/revision/latest?cb=20170723165057\",\"status\":\"Alive\",\"nickname\":\"Ted\",\"appearance\":[2,3,4,5],\"portrayed\":\"Christopher Cousins\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":22,\"name\":\"Gale Boetticher\",\"birthday\":\"Unknown\",\"occupation\":[\"Chemist\",\"Meth manufacturer\"],\"img\":\"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_gale-boetticher-lg.jpg\",\"status\":\"Deceased\",\"nickname\":\"GB\",\"appearance\":[3],\"portrayed\":\"David Costabile\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":23,\"name\":\"Andrea Cantillo\",\"birthday\":\"Unknown\",\"occupation\":[\"Unknown\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/5/51/Andrea_-_To%27hajilee.png/revision/latest?cb=20131025094457\",\"status\":\"Deceased\",\"nickname\":\"Andrea\",\"appearance\":[3,4,5],\"portrayed\":\"Emily Rios\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":24,\"name\":\"Brock Cantillo\",\"birthday\":\"Unknown\",\"occupation\":[\"Kid\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/9/97/Brock.png/revision/latest?cb=20170725193144\",\"status\":\"Alive\",\"nickname\":\"Brock\",\"appearance\":[3,4,5],\"portrayed\":\"Ian Posada\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":25,\"name\":\"Carmen Molina\",\"birthday\":\"Unknown\",\"occupation\":[\"High School Principal\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/d/de/Carmen.JPG/revision/latest?cb=20100410125233\",\"status\":\"Alive\",\"nickname\":\"Carmen\",\"appearance\":[1,2,3,5],\"portrayed\":\"Carmen Serano\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":26,\"name\":\"Gretchen Schwartz\",\"birthday\":\"Unknown\",\"occupation\":[\"Co-owner Gray Matter\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/5/5e/Gretchen_Schwartz.png/revision/latest?cb=20131005103735&path-prefix=es\",\"status\":\"Alive\",\"nickname\":\"Gretchen\",\"appearance\":[1,2,5],\"portrayed\":\"Jessica Hecht\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":27,\"name\":\"Elliot Schwartz\",\"birthday\":\"Unknown\",\"occupation\":[\"Co-Founder Gray Matter\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/8/8a/Elliott_Schwartz.png/revision/latest?cb=20131005103743&path-prefix=es\",\"status\":\"Alive\",\"nickname\":\"Elliot\",\"appearance\":[1,5],\"portrayed\":\"Adam Godley\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":28,\"name\":\"Gonzo\",\"birthday\":\"Unknown\",\"occupation\":[\"Tuco's Bodyguard\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/d/d6/Gonzo.JPG/revision/latest?cb=20100415212944\",\"status\":\"Deceased\",\"nickname\":\"Gonzo\",\"appearance\":[1,2],\"portrayed\":\"Jesus, Payan, Jr.\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":29,\"name\":\"Christian Ortgea\",\"birthday\":\"Unknown\",\"occupation\":[\"Low-level meth distributor\"],\"img\":\"https://res.cloudinary.com/dwvrok1le/image/upload/v1540314304/c8acek3pimb0hb4efrvf.jpg\",\"status\":\"Deceased\",\"nickname\":\"Combo\",\"appearance\":[1,2,3],\"portrayed\":\"Rodney Rush\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":30,\"name\":\"Mrs. Pinkman\",\"birthday\":\"Unknown\",\"occupation\":[\"unknown\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754\",\"status\":\"Alive\",\"nickname\":\"Jesse's mom\",\"appearance\":[1,2,3],\"portrayed\":\"Tess Harper\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":31,\"name\":\"Adam Pinkman\",\"birthday\":\"Unknown\",\"occupation\":[\"unknown\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/c/c9/AdamPinkman.png/revision/latest?cb=20141117180836&path-prefix=es\",\"status\":\"Alive\",\"nickname\":\"Jesse's dad\",\"appearance\":[1,2,3],\"portrayed\":\"Michael Bofshever\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":32,\"name\":\"Jake Pinkman\",\"birthday\":\"Unknown\",\"occupation\":[\"Kid\",\"Jesse's little brother\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/a/a4/Jake.jpg/revision/latest?cb=20121214201656&path-prefix=de\",\"status\":\"Alive\",\"nickname\":\"Jake\",\"appearance\":[1],\"portrayed\":\"Ben Petry\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":33,\"name\":\"No-Doze\",\"birthday\":\"Unknown\",\"occupation\":[\"Juarez Cartel Lieutenant\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/c/ca/No_Doze_2.png/revision/latest?cb=20131014073210\",\"status\":\"Deceased\",\"nickname\":\"No-Doze\",\"appearance\":[1,2],\"portrayed\":\"Cesar Garcia\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":34,\"name\":\"Emilio Koyama\",\"birthday\":\"Unknown\",\"occupation\":[\"Low-level meth distributor\"],\"img\":\"https://vignette.wikia.nocookie.net/trbreakingbad/images/9/9c/Emilio.jpeg/revision/latest?cb=20161029192022\",\"status\":\"Deceased\",\"nickname\":\"Emilio\",\"appearance\":[1],\"portrayed\":\"John Koyama\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":35,\"name\":\"Dr. Delcavoli\",\"birthday\":\"Unknown\",\"occupation\":[\"Physician\"],\"img\":\"https://res.cloudinary.com/dwvrok1le/image/upload/v1540314509/lj5qlbe6xvmmpxnspz6y.jpg\",\"status\":\"Alive\",\"nickname\":\"Dr. Delcavoli\",\"appearance\":[1,2],\"portrayed\":\"David House\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":36,\"name\":\"Wendy S.\",\"birthday\":\"Unknown\",\"occupation\":[\"Prostitute\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Wendy.jpg/revision/latest?cb=20170721162715\",\"status\":\"Alive\",\"nickname\":\"Wendy\",\"appearance\":[1,2,3],\"portrayed\":\"Julie Minesci\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":37,\"name\":\"Bogdan Wolynetz\",\"birthday\":\"Unknown\",\"occupation\":[\"Former owner of A1A Car Wash\"],\"img\":\"https://i.pinimg.com/originals/d5/c0/34/d5c0345ae70fbdbaa33b7537d685da54.jpg\",\"status\":\"Alive\",\"nickname\":\"Bogdan\",\"appearance\":[1,3,4],\"portrayed\":\"Marius Stan\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":38,\"name\":\"Ken\",\"birthday\":\"Unknown\",\"occupation\":[\"Stock Broker\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/8/8c/Ken.png/revision/latest?cb=20170721163649\",\"status\":\"Alive\",\"nickname\":\"Ken Wins\",\"appearance\":[1],\"portrayed\":\"Kyle Bornheimer\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":39,\"name\":\"Holly White\",\"birthday\":\"Unknown\",\"occupation\":[\"Infant\"],\"img\":\"https://pmctvline2.files.wordpress.com/2013/09/breaking-bad-elanor-anne-wenrich-325.jpg?w=325&h=240\",\"status\":\"Alive\",\"nickname\":\"Holly\",\"appearance\":[2,3,4,5],\"portrayed\":\"Unknown\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":40,\"name\":\"George Merkert\",\"birthday\":\"Unknown\",\"occupation\":[\"Former Head of Albuquerque DEA\"],\"img\":\"https://m.media-amazon.com/images/M/MV5BMTkwMTkxNjUzM15BMl5BanBnXkFtZTgwMTg5MTczMTE@._V1_UY317_CR175,0,214,317_AL_.jpg\",\"status\":\"Alive\",\"nickname\":\"ASAC Merkert\",\"appearance\":[2,3,4,5],\"portrayed\":\"Michael Shamus Wiles\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":41,\"name\":\"Donald Margolis\",\"birthday\":\"Unknown\",\"occupation\":[\"Air-Traffic Controller\",\"Landlord\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/1/12/Donald_Margolis.png/revision/latest?cb=20120802212034\",\"status\":\"Unknown\",\"nickname\":\"Jane's dad\",\"appearance\":[2,3],\"portrayed\":\"John de Lancie\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":42,\"name\":\"Clovis\",\"birthday\":\"Unknown\",\"occupation\":[\"Mechanic\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/0/0f/Clovis.JPG/revision/latest?cb=20100415221013\",\"status\":\"Alive\",\"nickname\":\"Clovis\",\"appearance\":[2,3],\"portrayed\":\"Tom Kiesche\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":43,\"name\":\"SAC Ramey\",\"birthday\":\"Unknown\",\"occupation\":[\"DEA agent\"],\"img\":\"https://res.cloudinary.com/dwvrok1le/image/upload/v1539360786/o7thsjdorobfbetqaefj.jpg\",\"status\":\"Alive\",\"nickname\":\"SAC Ramey\",\"appearance\":[2,4,5],\"portrayed\":\"Todd Terry\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":44,\"name\":\"Victor\",\"birthday\":\"Unknown\",\"occupation\":[\"Henchman of Gustavo Fring\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/4/48/Victor2.png/revision/latest?cb=20131009225027\",\"status\":\"Deceased\",\"nickname\":\"Victor\",\"appearance\":[2,3,4],\"portrayed\":\"Jeremiah Bitsui\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":45,\"name\":\"Tomás Cantillo\",\"birthday\":\"Unknown\",\"occupation\":[\"Kid\",\"Gang member for a rival dealer in ABQ\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/e/ec/Tomas.png/revision/latest?cb=20130131043014\",\"status\":\"Deceased\",\"nickname\":\"Andrea's brother\",\"appearance\":[2,3],\"portrayed\":\"Angelo Martinez\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":46,\"name\":\"Francesca Liddy\",\"birthday\":\"Unknown\",\"occupation\":[\"Department of Motor Vehicles\",\"Secretary for Saul Goodman Associates\"],\"img\":\"https://res.cloudinary.com/dwvrok1le/image/upload/v1539362182/o9mstjonfn6dsdi3uij6.jpg\",\"status\":\"Alive\",\"nickname\":\"Honey Tits\",\"appearance\":[2,3,4,5],\"portrayed\":\"Tina Parker\",\"category\":\"Breaking Bad, Better Call Saul\",\"better_call_saul_appearance\":[3,4]},{\"char_id\":47,\"name\":\"Cynthia\",\"birthday\":\"Unknown\",\"occupation\":[\"Los Pollos Hermanos Manager\"],\"img\":\"https://res.cloudinary.com/dwvrok1le/image/upload/v1539362375/z63youp272k5mbqbuqj9.jpg\",\"status\":\"Alive\",\"nickname\":\"Cynthia\",\"appearance\":[2,3,4],\"portrayed\":\"Ashley Kajiki\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":48,\"name\":\"Tortuga\",\"birthday\":\"Unknown\",\"occupation\":[\"Juarez Cartel member\",\"DEA informant\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/5/58/BBWA_Tortuga.jpg/revision/latest?cb=20131101172007\",\"status\":\"Deceased\",\"nickname\":\"Tortuga\",\"appearance\":[2,3],\"portrayed\":\"Danny Trejo\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":49,\"name\":\"Tim Roberts\",\"birthday\":\"Unknown\",\"occupation\":[\"Detective for the APD\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/8/8d/2x02_-_Tim_Roberts.jpg/revision/latest?cb=20110927053954\",\"status\":\"Alive\",\"nickname\":\"Detective Roberts\",\"appearance\":[2,4],\"portrayed\":\"Nigel Gibbs\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":50,\"name\":\"Juan Bolsa\",\"birthday\":\"Unknown\",\"occupation\":[\"Mexican drug cartel boss\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/3/38/Bolsa.png/revision/latest?cb=20180825204033\",\"status\":\"Deceased\",\"nickname\":\"Don Juan\",\"appearance\":[3,4],\"portrayed\":\"Javier Grajeda\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":51,\"name\":\"Group Leader\",\"birthday\":\"Unknown\",\"occupation\":[\"Drug & Alcohol Rehabilitation Counselor\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333\",\"status\":\"Alive\",\"nickname\":\"Counselor\",\"appearance\":[3,4],\"portrayed\":\"Jere Burns\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":52,\"name\":\"Kaylee Ehrmantraut\",\"birthday\":\"Unknown\",\"occupation\":[\"Kid\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/c/cc/Kaylee.png/revision/latest?cb=20170810082843\",\"status\":\"Alive\",\"nickname\":\"Mike's Granddaughter\",\"appearance\":[3,5],\"portrayed\":\"Kaija Rose Bales\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":53,\"name\":\"Pamela\",\"birthday\":\"Unknown\",\"occupation\":[\"Attorney\"],\"img\":\"https://res.cloudinary.com/dwvrok1le/image/upload/v1539373707/bbb6muek0tcmbc3g2sog.jpg\",\"status\":\"Alive\",\"nickname\":\"Skyler's attorney\",\"appearance\":[3],\"portrayed\":\"Julie Dretzin\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":54,\"name\":\"Duane Chow\",\"birthday\":\"Unknown\",\"occupation\":[\"Owner of Golden Moth Chemical\"],\"img\":\"https://res.cloudinary.com/dwvrok1le/image/upload/v1539373871/ssk1t4hvo9tmhvdt5hcn.jpg\",\"status\":\"Deceased\",\"nickname\":\"Chow\",\"appearance\":[3,5],\"portrayed\":\"James Ning\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":55,\"name\":\"Stacey Ehrmantraut\",\"birthday\":\"Unknown\",\"occupation\":[\"Unknown\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049\",\"status\":\"Alive\",\"nickname\":\"Mike's daugter-in-law\",\"appearance\":[3],\"portrayed\":\"Kerry Condon\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":56,\"name\":\"Officer Saxton\",\"birthday\":\"Unknown\",\"occupation\":[\"APD Officer\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/f/f3/Officer_Saxton_-_I.F.T..png/revision/latest?cb=20131025090606\",\"status\":\"Alive\",\"nickname\":\"Saxton\",\"appearance\":[3],\"portrayed\":\"Stoney Westmoreland\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":57,\"name\":\"Jack Welker\",\"birthday\":\"Unknown\",\"occupation\":[\"Criminal Gang Leader\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/c/ce/Jack5x13.png/revision/latest?cb=20130912225922\",\"status\":\"Deceased\",\"nickname\":\"Uncle Jack\",\"appearance\":[5],\"portrayed\":\"Michael Bowen\",\"category\":\"Breaking Bad\",\"better_call_saul_appearance\":[]},{\"char_id\":112,\"name\":\"Kimberly Wexler\",\"birthday\":\"Unknown\",\"occupation\":[\"Lawyer\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/f/f7/BCS_S4_Kim_Wexler.jpg/revision/latest?cb=20180824195845\",\"status\":\"?\",\"nickname\":\"Kim\",\"appearance\":[],\"portrayed\":\"Rhea Seehorn\",\"category\":\"Better Call Saul\",\"better_call_saul_appearance\":[1,2,3,4]},{\"char_id\":113,\"name\":\"Howard Hamlin\",\"birthday\":\"Unknown\",\"occupation\":[\"Lawyer\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/5/57/BCS_S4_Howard_Hamlin.jpg/revision/latest?cb=20180824195855\",\"status\":\"?\",\"nickname\":\"Howard\",\"appearance\":[],\"portrayed\":\"Patrick Fabian\",\"category\":\"Better Call Saul\",\"better_call_saul_appearance\":[1,2,3,4]},{\"char_id\":114,\"name\":\"Charles McGill\",\"birthday\":\"Unknown\",\"occupation\":[\"Lawyer\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/3/3e/BCS_S3_ChuckMcGill.jpg/revision/latest?cb=20170327185308\",\"status\":\"?\",\"nickname\":\"Chuck\",\"appearance\":[],\"portrayed\":\"Michael McKean\",\"category\":\"Better Call Saul\",\"better_call_saul_appearance\":[1,2,3,4]},{\"char_id\":115,\"name\":\"Ignacio Varga\",\"birthday\":\"Unknown\",\"occupation\":[\"Crimal Gang Lieutenant\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/b/b1/BCS_S4_Nacho_Varga.jpg/revision/latest?cb=20180824195910\",\"status\":\"?\",\"nickname\":\"Nacho\",\"appearance\":[],\"portrayed\":\"Michael Mano\",\"category\":\"Better Call Saul\",\"better_call_saul_appearance\":[1,2,3,4]},{\"char_id\":116,\"name\":\"Eduardo Salamanca\",\"birthday\":\"Unknown\",\"occupation\":[\"Cartel Member\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/8/85/LaloProfileBCS.png/revision/latest?cb=20180925050152\",\"status\":\"?\",\"nickname\":\"Lalo\",\"appearance\":[],\"portrayed\":\"Tony Dalton\",\"category\":\"Better Call Saul\",\"better_call_saul_appearance\":[4]},{\"char_id\":117,\"name\":\"Stacey Ehrmantraut\",\"birthday\":\"Unknown\",\"occupation\":[\"Mother\"],\"img\":\"https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049\",\"status\":\"?\",\"nickname\":\"Stacey\",\"appearance\":[],\"portrayed\":\"Kerry Condon\",\"category\":\"Better Call Saul\",\"better_call_saul_appearance\":[1,2,3,4]}]}");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/kevinyi/werkflow/breakingbad/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kevinyi/werkflow/breakingbad/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/kevinyi/werkflow/breakingbad/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kevinyi/werkflow/breakingbad/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map