(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".body{\n  display: flex;\n  flex-flow: column;\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n\n.main{\n  flex: 1 1;\n  margin: 0 10px;\n}\n\n.app {\n  margin-left: 30px;\n  margin-top: 0px;\n}\n\n.appMain {\n  background-color: rgba(210, 235, 13, 0.31) ;\n  min-height: 500px;\n}\n\nfooter {\n  background-color: #000;\n  align-items: flex-start;\n  display: flex;\n  flex-flow: column;\n  color: #fff;\n  margin-top: 20;\n  height: 280px;\n  width: 100%;\n  line-height: 1.625rem;\n}\n\n.footer-main {\n  margin-left: 50px;\n  width: auto;\n}\n\nfooter .footer-main a{\n  color: #fff;\n}\n\nfooter .footer-main h2{\n  text-align: left;\n}\n\nfooter .links {\n  width: 100%;\n  height: 135px;\n  text-align: center;\n  font-family: 'Josefin Sans', sans-serif;\n}\n\nfooter .links img {\n  cursor: pointer;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: 20px;\n  height: 30%;\n  width: auto;\n\n}\n\nfooter .links ul {\n  list-style: none;\n  display: grid;\n  justify-content: center;\n  grid-template-columns:  repeat(2,100px);\n  grid-template-rows: auto;\n  grid-column-gap: 70px;\n  grid-row-gap: 10px;\n  grid-auto-flow: row;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\nfooter .links ul >*{\n  cursor: pointer;\n  display: inline-block;\n  border-bottom: 1px solid white;\n}\n\n.slides {\n\n  position: relative;\n  .slick-prev, .slick-next {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    z-index: 1 !important;\n  }\n  .slick-prev {\n    left: 5% !important;\n  }\n  .slick-next {\n    right: 5% !important;\n  }\n}\n\n.title {\n  padding: 20px 0px 0px;\n  font-family: \"Josefin Sans\",\"游ゴシック体\",Yu Gothic,YuGothic,\"ヒラギノ角ゴ Pro\",Hiragino Kaku Gothic Pro,\"メイリオ\",Meiryo,sans-serif;\n}\n\n.musicart {\n  font-family: Futura,Trebuchet MS,Arial,sans-serif;\n  font-style: italic;\n}\n\n.contact-form input,textarea{\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top : 10px;\n  margin-bottom : 30px;\n  padding : 18px;\n  font-size : 18px;\n  border : 1px solid #dee7ec;\n}\n\n.contact-form .submit{\n  background-color : #dee7ec;\n  color : #889eab;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n\n}\n\n.contact-form .submit:hover{\n  background-color : #b7d4e4;\n  color: rgb(136, 86, 223);\n  cursor: pointer;\n}\n\n.tickets-form button {\n  margin: 3px;\n  margin-top: 5px;\n}\n\n.tickets-form h5{\n  margin-top: 20px;\n}\n\n.tickets-form input,textarea, select{\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top : 10px;\n  margin-bottom : 30px;\n  padding : 18px;\n  font-size : 18px;\n  border : 1px solid #dee7ec;\n}\n\n.tickets-form .submit{\n  background-color : #dee7ec;\n  color : #889eab;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n\n}\n\n.tickets-form .submit:hover{\n  background-color : #b7d4e4;\n  color: rgb(136, 86, 223);\n  cursor: pointer;\n}\n\n.articleButton {\n  width: 100%;\n  display: block;\n  height: 50px;\n}\n\n.article-list p\n\n.articleFirst {\n  float: right;\n}\n\n.articlePrev{\n  float: left;\n}\n\n.articleNext{\n  float: right;\n}\n\n.tagSelector,.tagSearch {\n  margin: 0 8px 3px 0;\n}\n\n.tagSearch {\n  float: right;\n  padding-bottom: 0px;\n  padding-top: 9px;\n}\n\n.tagSelector{\n  float: left;\n}\n\n.tagSelector:focus, .tagSearch:focus {\n  outline: 0;\n}\n\n.twitter {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 420px;\n}\n\n@media only screen and (min-width:1018px) {\n  footer {\n    height: 150px;\n  }\n  footer .links ul{\n    display: flex;\n    margin: 0px 20px 10px 20px;\n  }\n  footer .links ul >*{\n    width: 100px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n}\n\n@media only screen and (max-width:1018px) and (min-width:850px) {\n  footer {\n    height: 200px;\n  }\n\n  footer .links ul {\n    grid-template-columns: repeat(5, 100px);\n  }\n}\n\n\n@media only screen and (min-width:732px) and (max-width:850px) {\n  footer {\n    height: 200px;\n  }\n\n  footer .links ul {\n    grid-template-columns: repeat(4, 100px);\n  }\n}\n\n@media only screen and (min-width:732px){\n  .main {\n    padding: 0px 30px;\n  }\n  .twitter{\n    width: 700px;\n  }\n  .contact-form input, textarea{\n    width : 400px;\n    display: block;\n    margin-left: 0;\n  }\n  .tickets-form input, textarea, select{\n    width : 400px !important;\n    display: block;\n    margin-left: 0;\n  }\n  .about .title {\n    margin-left: 8%;\n    margin-bottom: 10px;\n  }\n  .aboutMain {\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .aboutMain h5{\n    margin: 20px 0px;\n  }\n  .concertAbout {\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media only screen and (min-width:460px) and (max-width:732px){\n  .main {\n    padding: 0px 20px;\n  }\n\n  footer {\n    height: 240px;\n  }\n\n  footer .links ul {\n    grid-template-columns: repeat(3,100px);\n  }\n\n  .twitter {\n    width: 400px;\n  }\n}\n\n.article {\n  margin: 10px 0px\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/articles.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/static/css/articles.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".articleFirst {\n  float: left;\n  margin-left: 10px; }\n\nul.articles {\n  list-style: none;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px; }\n  ul.articles .article-date {\n    margin: 0;\n    width: 100%;\n    display: inline-block; }\n  ul.articles .tagDiv {\n    display: inline-block;\n    float: right; }\n  ul.articles li {\n    border: 0;\n    border-bottom: 1px solid rgba(42, 44, 50, 0.54);\n    margin-top: 10px;\n    -webkit-transition: .3s ease;\n    transition: .3s ease;\n    clear: both; }\n    ul.articles li div {\n      height: 100%; }\n    ul.articles li .article-list {\n      cursor: pointer;\n      width: 100%; }\n      ul.articles li .article-list > button {\n        width: 100%;\n        height: 100%;\n        border-style: none;\n        background: none;\n        padding-left: 0px;\n        text-align: left; }\n        ul.articles li .article-list > button:focus {\n          outline: 0; }\n    ul.articles li button.tagSelector {\n      font-size: 9px;\n      padding-top: 4px;\n      padding-left: 7px;\n      padding-right: 7px;\n      margin-right: 0.5px;\n      margin-left: 2.5px;\n      float: right;\n      height: 23px; }\n    ul.articles li .articleTags {\n      position: absolute;\n      right: 0;\n      bottom: 0; }\n    ul.articles li:hover {\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/carousel.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/static/css/carousel.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pic-component {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n}\n\n.pic-img {\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n}\n\n@media only screen and (min-width:768px){\n  .pic-img {\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.carousel-control-prev-icon, .carousel-control-next-icon {\n  background-color: black !important;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 50px !important;\n  height: 50px !important;\n  background-size: 50% 50% !important;\n  border-radius: 50% !important;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/concert.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/static/css/concert.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media only screen and (min-width: 732px) {\n  .articleSec-concert {\n    margin: 0 15%; } }\n\n.body.concert {\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  background-color: #363B40;\n  color: #b8bfc6;\n  border-color: transparent;\n  font-style: normal;\n  line-height: 1.625rem; }\n  .body.concert .main {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n    .body.concert .main button,\n    .body.concert .main input,\n    .body.concert .main select,\n    .body.concert .main textarea {\n      color: #b8bfc6;\n      border-color: transparent; }\n    .body.concert .main .concertLinks {\n      display: block;\n      width: 100%;\n      height: auto; }\n      .body.concert .main .concertLinks .concertLink {\n        display: block;\n        float: left;\n        margin-top: 5px;\n        padding-left: 5px;\n        padding-right: 0px; }\n        @media only screen and (min-width: 576px) and (max-width: 768px) {\n          .body.concert .main .concertLinks .concertLink {\n            padding: 0 20px; } }\n        .body.concert .main .concertLinks .concertLink h5 {\n          font-size: 1.4em;\n          margin-bottom: 0.5em; }\n          @media only screen and (min-width: 576px) {\n            .body.concert .main .concertLinks .concertLink h5 {\n              font-size: 0.95em; } }\n        .body.concert .main .concertLinks .concertLink img {\n          cursor: pointer; }\n    .body.concert .main .concertAbout {\n      clear: both; }\n    .body.concert .main button,\n    .body.concert .main input,\n    .body.concert .main select,\n    .body.concert .main textarea {\n      font-style: normal;\n      line-height: 1.625rem;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n    .body.concert .main hr {\n      height: 2px;\n      border: 0;\n      margin: 24px 0 !important; }\n    .body.concert .main h1,\n    .body.concert .main h2,\n    .body.concert .main h3,\n    .body.concert .main h4,\n    .body.concert .main h5,\n    .body.concert .main h6 {\n      font-family: \"Lucida Grande\", \"Corbel\", sans-serif;\n      font-weight: normal;\n      clear: both;\n      -ms-word-wrap: break-word;\n      word-wrap: break-word;\n      margin: 0;\n      padding: 0;\n      color: #DEDEDE; }\n    .body.concert .main h1 {\n      font-size: 2.5rem;\n      /* 36px */\n      line-height: 2.75rem;\n      /* 40px */\n      margin-bottom: 1.5rem;\n      /* 24px */\n      letter-spacing: -1.5px; }\n    .body.concert .main h2 {\n      font-size: 1.63rem;\n      /* 24px */\n      line-height: 1.875rem;\n      /* 30px */\n      margin-bottom: 1.5rem;\n      /* 24px */\n      letter-spacing: -1px;\n      font-weight: bold; }\n    .body.concert .main h3 {\n      font-size: 1.17rem;\n      /* 18px */\n      line-height: 1.5rem;\n      /* 24px */\n      margin-bottom: 1.5rem;\n      /* 24px */\n      letter-spacing: -1px;\n      font-weight: bold; }\n    .body.concert .main h4 {\n      font-size: 1.12rem;\n      /* 16px */\n      line-height: 1.375rem;\n      /* 22px */\n      margin-bottom: 1.5rem;\n      /* 24px */\n      color: white; }\n    .body.concert .main h5 {\n      font-size: 0.97rem;\n      /* 16px */\n      line-height: 1.25rem;\n      /* 22px */\n      margin-bottom: 1.5rem;\n      /* 24px */\n      font-weight: bold; }\n    .body.concert .main h6 {\n      font-size: 0.93rem;\n      /* 16px */\n      line-height: 1rem;\n      /* 16px */\n      margin-bottom: 0.75rem;\n      color: white; }\n    .body.concert .main a {\n      text-decoration: none;\n      outline: 0; }\n    .body.concert .main a:hover {\n      outline: 0; }\n    .body.concert .main a:focus {\n      outline: thin dotted; }\n    .body.concert .main sup {\n      background-color: #555;\n      color: #ddd; }\n    .body.concert .main img {\n      width: 100%;\n      display: block; }\n    .body.concert .main p {\n      -ms-word-wrap: break-word;\n      word-wrap: break-word; }\n      .body.concert .main p img {\n        max-width: 90%;\n        min-width: 45%;\n        display: block;\n        margin-left: auto;\n        margin-right: auto; }\n    @media screen and (min-width: 768px) {\n      .body.concert .main img {\n        width: 80%;\n        margin-left: auto;\n        margin-right: auto; }\n      .body.concert .main p img {\n        max-width: 70%; } }\n    .body.concert .main p,\n    .body.concert .main ul,\n    .body.concert .main dd,\n    .body.concert .main ol,\n    .body.concert .main hr,\n    .body.concert .main address,\n    .body.concert .main pre,\n    .body.concert .main table,\n    .body.concert .main iframe {\n      margin-top: 0;\n      margin-bottom: 1.5rem;\n      /* 24px */ }\n    .body.concert .main li > blockquote {\n      margin-bottom: 0; }\n    .body.concert .main audio:not([controls]) {\n      display: none; }\n    .body.concert .main [hidden] {\n      display: none; }\n    .body.concert .main ul,\n    .body.concert .main ol {\n      padding: 0 0 0 1.875rem;\n      /* 30px */ }\n    .body.concert .main ul {\n      list-style: square; }\n    .body.concert .main ol {\n      list-style: decimal; }\n    .body.concert .main ul ul,\n    .body.concert .main ol ol,\n    .body.concert .main ul ol,\n    .body.concert .main ol ul {\n      margin: 0; }\n    .body.concert .main b,\n    .body.concert .main th,\n    .body.concert .main dt,\n    .body.concert .main strong {\n      font-weight: bold; }\n    .body.concert .main i,\n    .body.concert .main em,\n    .body.concert .main dfn,\n    .body.concert .main cite {\n      font-style: italic; }\n    .body.concert .main blockquote {\n      padding-left: 1.875rem;\n      margin: 0 0 1.875rem 1.875rem;\n      border-left: solid 2px #474d54;\n      padding-left: 30px;\n      margin-top: 35px; }\n    .body.concert .main pre,\n    .body.concert .main code,\n    .body.concert .main kbd,\n    .body.concert .main tt,\n    .body.concert .main var {\n      background: rgba(0, 0, 0, 0.05);\n      font-size: 0.875rem;\n      font-family: Monaco, Consolas, \"Andale Mono\", \"DejaVu Sans Mono\", monospace; }\n    .body.concert .main ul, .body.concert .main ol {\n      padding-left: 20px;\n      overflow: scroll; }\n    .body.concert .main kbd {\n      padding: 2px 4px;\n      font-size: 90%;\n      color: #fff;\n      background-color: #333;\n      border-radius: 3px;\n      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n    .body.concert .main code,\n    .body.concert .main kbd,\n    .body.concert .main tt,\n    .body.concert .main var {\n      padding: 2px 5px; }\n    .body.concert .main table {\n      max-width: 100%;\n      width: 100%;\n      border-collapse: collapse;\n      border-spacing: 0; }\n    .body.concert .main th,\n    .body.concert .main td {\n      padding: 5px 10px;\n      vertical-align: top; }\n    .body.concert .main a {\n      -webkit-transition: all .2s ease-in-out;\n      transition: all .2s ease-in-out; }\n    .body.concert .main hr {\n      background: #474d54; }\n    .body.concert .main h1 {\n      margin-top: 2em; }\n    .body.concert .main a {\n      color: #e0e0e0;\n      text-decoration: underline; }\n    .body.concert .main a:hover {\n      color: #fff; }\n    .body.concert .main .mjx-chtml {\n      color: #81b1db; }\n    .body.concert .main b,\n    .body.concert .main th,\n    .body.concert .main dt,\n    .body.concert .main strong {\n      color: #DEDEDE;\n      /* variable */ }\n    .body.concert .main mark {\n      background: #D3D40E; }\n    .body.concert .main blockquote {\n      color: #9DA2A6; }\n    .body.concert .main table a {\n      color: #DEDEDE;\n      /* variable */ }\n    .body.concert .main th,\n    .body.concert .main td {\n      border: solid 1px #474d54;\n      /* variable */ }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/github1.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/static/css/github1.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./github/400.woff */ "./src/static/css/github/400.woff"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./github/400i.woff */ "./src/static/css/github/400i.woff"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./github/700.woff */ "./src/static/css/github/700.woff"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./github/700i.woff */ "./src/static/css/github/700i.woff"));

// Module
exports.push([module.i, "@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: normal;\n    src: local('Open Sans Regular'),url(" + ___CSS_LOADER_URL___0___ + ") format('woff');\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: italic;\n    font-weight: normal;\n    src: local('Open Sans Italic'),url(" + ___CSS_LOADER_URL___1___ + ") format('woff');\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: bold;\n    src: local('Open Sans Bold'),url(" + ___CSS_LOADER_URL___2___ + ") format('woff');\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: italic;\n    font-weight: bold;\n    src: local('Open Sans Bold Italic'),url(" + ___CSS_LOADER_URL___3___ + ") format('woff');\n}\n\n.article ul,ol {\n  padding-left: 20px;\n  overflow: scroll;\n}\n\n.article a {\n    color: #4183C4;\n}\n.article h1,\n.article h2,\n.article h3,\n.article h4,\n.article h5,\n.article h6 {\n    position: relative;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    font-weight: bold;\n    line-height: 1.4;\n    cursor: text;\n}\n.article h1:hover a.anchor,\n.article h2:hover a.anchor,\n.article h3:hover a.anchor,\n.article h4:hover a.anchor,\n.article h5:hover a.anchor,\n.article h6:hover a.anchor {\n    /*background: url(\"../../images/modules/styleguide/para.png\") no-repeat 10px center;*/\n    text-decoration: none;\n}\n.article h1 tt,\n.article h1 code {\n    font-size: inherit;\n}\n.article h2 tt,\n.article h2 code {\n    font-size: inherit;\n}\n.article h3 tt,\n.article h3 code {\n    font-size: inherit;\n}\n.article h4 tt,\n.article h4 code {\n    font-size: inherit;\n}\n.article h5 tt,\n.article h5 code {\n    font-size: inherit;\n}\n.article h6 tt,\n.article h6 code {\n    font-size: inherit;\n}\n.article h1 {\n    padding-bottom: .3em;\n    font-size: 2.25em;\n    line-height: 1.2;\n    border-bottom: 1px solid #eee;\n}\n.article h2, .article-title h2 {\n   padding-bottom: .3em;\n    font-size: 1.75em;\n    line-height: 1.225;\n    border-bottom: 1px solid #eee;\n}\n.article h3 {\n    font-size: 1.5em;\n    line-height: 1.43;\n}\n.article h4 {\n    font-size: 1.25em;\n}\n.article h5 {\n    font-size: 1em;\n}\n.article h6 {\n   font-size: 1em;\n    color: #777;\n}\n.article p,\n.article blockquote,\n.article ul,\n.article ol,\n.article dl,\n.article table{\n    margin: 0.4em 0;\n}\n\n.article p img{\n  max-width: 70%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.article li>ol,\n.article li>ul {\n    margin: 0 0;\n}\n.article hr {\n    height: 2px;\n    padding: 0;\n    margin: 16px 0;\n    background-color: #e7e7e7;\n    border: 0 none;\n    overflow: hidden;\n    box-sizing: content-box;\n}\n\n.article li p.first {\n    display: inline-block;\n}\n.article ul,\n.article ol {\n    padding-left: 30px;\n}\n.article ul:first-child,\n.article ol:first-child {\n    margin-top: 0;\n}\n.article ul:last-child,\n.article ol:last-child {\n    margin-bottom: 0;\n}\n.article blockquote {\n    border-left: 4px solid #dfe2e5;\n    padding: 0 15px;\n    color: #777777;\n}\n.article blockquote blockquote {\n    padding-right: 0;\n}\n.article table {\n    padding: 0;\n    word-break: initial;\n}\ntable tr {\n    border-top: 1px solid #dfe2e5;\n    margin: 0;\n    padding: 0;\n}\ntable tr:nth-child(2n),\nthead {\n    background-color: #f8f8f8;\n}\ntable tr th {\n    font-weight: bold;\n    border: 1px solid #dfe2e5;\n    border-bottom: 0;\n    text-align: left;\n    margin: 0;\n    padding: 6px 13px;\n}\ntable tr td {\n    border: 1px solid #dfe2e5;\n    text-align: left;\n    margin: 0;\n    padding: 6px 13px;\n}\ntable tr th:first-child,\ntable tr td:first-child {\n    margin-top: 0;\n}\ntable tr th:last-child,\ntable tr td:last-child {\n    margin-bottom: 0;\n}\n\n.code-tooltip {\n    box-shadow: 0 1px 1px 0 rgba(0,28,36,.3);\n    border-top: 1px solid #eef2f2;\n}\n\n.md-fences,\ncode,\ntt {\n    border: 1px solid #e7eaed;\n    background-color: #f8f8f8;\n    border-radius: 3px;\n    padding: 0;\n    padding: 2px 4px 0px 4px;\n    font-size: 0.9em;\n}\n\ncode {\n    background-color: #f3f4f4;\n    padding: 0 4px 2px 4px;\n}\n\n.article img{\n  max-width: 100%;\n  min-width: 75%\n}\n\n.md-task-list-item > input {\n  margin-left: -1.3em;\n}\n\n@media print {\n    .article table,\n    .article pre {\n        page-break-inside: avoid;\n    }\n    .article pre {\n        word-wrap: break-word;\n    }\n}\n\n.MathJax_SVG_Display .MathJax_SVG{\n  width: 100%;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/header.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/static/css/header.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navbar {\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n  font-family: \"Josefin Sans\",\"游ゴシック体\",Yu Gothic,YuGothic,\"ヒラギノ角ゴ Pro\",Hiragino Kaku Gothic Pro,\"メイリオ\",Meiryo,sans-serif;\n}\n\n.navbar.hide {\n  top: -100px;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n\n@media only screen and (min-width:768px){\n  .navbar.hide {\n    top: 0px;\n    -webkit-transition: none;\n    transition: none;\n  }\n  .navbar {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n@media only screen and (max-width:460px){\n  .navbar.hide {\n    top: -150px;\n  }\n}\n\n.navbar-light .navbar-nav .nav-link {\n    line-height: 1.625rem;\n    color: rgba(0,0,0,.7) ;\n    -webkit-transition: .3s ease !important;\n    transition: .3s ease !important;\n}\n\n.navbar-light .navbar-nav .nav-link :hover{\n    color: #000 ;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/members.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/static/css/members.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.tab-content h1,\n.tab-content h2,\n.tab-content h3,\n.tab-content h4 {\n  font-family: \"Josefin Sans\",\"游ゴシック体\",Yu Gothic,YuGothic,\"ヒラギノ角ゴ Pro\",Hiragino Kaku Gothic Pro,\"メイリオ\",Meiryo,sans-serif;\n  margin-top: 20px; }\n.tab-content a {\n  color: #4183C4 !important; }\n  .tab-content a:hover {\n    cursor: pointer; }\n.tab-content button.link-button {\n  color: #4183C4 !important;\n  background: none;\n  border: none;\n  border-bottom: 1px solid; }\n  .tab-content button.link-button:hover {\n    cursor: pointer; }\n", ""]);



/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _containers_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/Header */ "./src/containers/Header.jsx");
/* harmony import */ var _containers_News__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/News */ "./src/containers/News.jsx");
/* harmony import */ var _containers_Pictures__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/Pictures */ "./src/containers/Pictures.jsx");
/* harmony import */ var _containers_Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/Contact */ "./src/containers/Contact.jsx");
/* harmony import */ var _containers_About__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/About */ "./src/containers/About.jsx");
/* harmony import */ var _containers_Members__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/Members */ "./src/containers/Members.jsx");
/* harmony import */ var _containers_Concert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/Concert */ "./src/containers/Concert.jsx");
/* harmony import */ var _containers_Tickets_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/Tickets.jsx */ "./src/containers/Tickets.jsx");
/* harmony import */ var _containers_Concert_home__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/Concert_home */ "./src/containers/Concert_home.jsx");
/* harmony import */ var _containers_Concert_2019__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/Concert_2019 */ "./src/containers/Concert_2019.jsx");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Error */ "./src/components/Error.jsx");
/* harmony import */ var _containers_Footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/Footer */ "./src/containers/Footer.jsx");
/* harmony import */ var _static_css_concert_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./static/css/concert.css */ "./src/static/css/concert.css");
/* harmony import */ var _static_css_concert_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_css_concert_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_css_articles_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./static/css/articles.css */ "./src/static/css/articles.css");
/* harmony import */ var _static_css_articles_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_css_articles_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_css_github1_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./static/css/github1.css */ "./src/static/css/github1.css");
/* harmony import */ var _static_css_github1_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_css_github1_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _concert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./concert */ "./src/concert/index.jsx");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./news */ "./src/news/index.jsx");





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/App.jsx";
























var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
        store: this.props.store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["ConnectedRouter"], {
        history: this.props.history,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.props.concert ? 'body concert' : 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/",
        component: _containers_Pictures__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/",
        component: _containers_News__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/news",
        component: _containers_News__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/about",
        component: _containers_About__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/contact",
        component: _containers_Contact__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/members",
        component: _containers_Members__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/tickets",
        component: _containers_Tickets_jsx__WEBPACK_IMPORTED_MODULE_16__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/concert",
        component: _containers_Concert__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/concert/home",
        component: _containers_Concert_home__WEBPACK_IMPORTED_MODULE_17__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/concert/light_and_magic",
        component: _containers_Concert_2019__WEBPACK_IMPORTED_MODULE_18__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/error",
        component: _components_Error__WEBPACK_IMPORTED_MODULE_19__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), Object(_news__WEBPACK_IMPORTED_MODULE_25__["default"])(), Object(_concert__WEBPACK_IMPORTED_MODULE_24__["default"])()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_Footer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var concert = _ref.concert;
  return {
    concert: concert.concert
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/actions/articlesAction.js":
/*!***************************************!*\
  !*** ./src/actions/articlesAction.js ***!
  \***************************************/
/*! exports provided: saveStart, saveTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveStart", function() { return saveStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTag", function() { return saveTag; });
var saveStart = function saveStart(start, type) {
  return {
    type: 'SAVE_START',
    payload: {
      start: start,
      type: type
    }
  };
};
var saveTag = function saveTag(selectedTag, tagDisp, logPart, type) {
  return {
    type: 'SAVE_TAG',
    payload: {
      selectedTag: selectedTag,
      tagDisp: tagDisp,
      logPart: logPart,
      type: type
    }
  };
};

/***/ }),

/***/ "./src/actions/concertAction.js":
/*!**************************************!*\
  !*** ./src/actions/concertAction.js ***!
  \**************************************/
/*! exports provided: onConcert, outConcert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onConcert", function() { return onConcert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outConcert", function() { return outConcert; });
var onConcert = function onConcert() {
  return {
    type: 'ON_CONCERT'
  };
};
var outConcert = function outConcert() {
  return {
    type: 'OUT_CONCERT'
  };
};

/***/ }),

/***/ "./src/article/index.jsx":
/*!*******************************!*\
  !*** ./src/article/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/MANI/.musicart/musicart/src/article/index.jsx";



var routes = function routes(articles, path) {
  return articles.map(function (article, i) {
    var url = path + '/' + article.url;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: url,
      component: article.component,
      key: i + 'rout',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/components/Error.jsx":
/*!**********************************!*\
  !*** ./src/components/Error.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/MANI/.musicart/musicart/src/components/Error.jsx";



function Error() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "appMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\u623B\u308B"));
}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./src/components/ticketsInfo.jsx":
/*!****************************************!*\
  !*** ./src/components/ticketsInfo.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/MANI/.musicart/musicart/src/components/ticketsInfo.jsx";


var ticketsInfo = function ticketsInfo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tickets-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\u30C1\u30B1\u30C3\u30C8\u60C5\u5831"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ticketsInfo);

/***/ }),

/***/ "./src/components/twitter.jsx":
/*!************************************!*\
  !*** ./src/components/twitter.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/components/twitter.jsx";




var Twitter =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Twitter, _Component);

  function Twitter() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Twitter);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Twitter).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Twitter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_twitter_embed__WEBPACK_IMPORTED_MODULE_7__["TwitterTimelineEmbed"], {
        sourceType: "profile",
        screenName: "orch_musicart",
        options: {
          width: '100%',
          height: 400
        },
        theme: this.props.concert ? 'dark' : 'light',
        transparent: true,
        noFooter: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    }
  }]);

  return Twitter;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var concert = _ref.concert;
  return {
    concert: concert.concert
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Twitter));

/***/ }),

/***/ "./src/concert/articles/ai.jsx":
/*!*************************************!*\
  !*** ./src/concert/articles/ai.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/concert/articles/ai.jsx";



var ai =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ai, _Component);

  function ai() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ai);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ai).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ai, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return ai;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ai);

/***/ }),

/***/ "./src/concert/articles/assets/12:29map.png":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/12:29map.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/12:29map.f9ee3cb7.png";

/***/ }),

/***/ "./src/concert/articles/assets/AlonRosen.jpg":
/*!***************************************************!*\
  !*** ./src/concert/articles/assets/AlonRosen.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/AmirMilo.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/AmirMilo.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/AvnerMor.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/AvnerMor.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/BarakBen-Avinoam.jpg":
/*!**********************************************************!*\
  !*** ./src/concert/articles/assets/BarakBen-Avinoam.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/EletteBoyle.jpg":
/*!*****************************************************!*\
  !*** ./src/concert/articles/assets/EletteBoyle.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/EletteBoyle.5169ed39.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/EvaTunik.png":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/EvaTunik.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/EvaTunik.f492899e.png";

/***/ }),

/***/ "./src/concert/articles/assets/Grossberg.png":
/*!***************************************************!*\
  !*** ./src/concert/articles/assets/Grossberg.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Grossberg.45ba42fa.png";

/***/ }),

/***/ "./src/concert/articles/assets/HadarTal.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/HadarTal.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/IMG_4972.JPG":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_4972.JPG ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_4972.1a8d9160.JPG";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7569.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7569.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7569.4910ce4b.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7573.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7573.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7573.1608fee3.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7575.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7575.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7575.460ca1db.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7577.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7577.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7577.4958f7a7.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7578.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7578.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7578.5dfac8ce.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7579.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7579.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7579.50d12034.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7580.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7580.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7580.d9a219e2.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7596.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7596.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7596.6b257446.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7599.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7599.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7599.ff2e5898.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7607.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7607.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7607.274ebfbd.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7608.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7608.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7608.19b06e1e.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7622.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7622.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7622.dd8c5ecc.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7626.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7626.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7626.de1350dd.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7691.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7691.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7691.27432185.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7692.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7692.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7692.1d76ef33.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7693.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7693.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7693.e6619912.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7694.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7694.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7694.2a9da347.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7712.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7712.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7712.b3979d85.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7723.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7723.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7723.a827a1db.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7728.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7728.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7728.fb411d0c.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7729.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7729.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7729.6479cae3.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7737.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7737.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7737.db602c4a.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7751.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7751.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7751.bcc7caa4.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7756.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7756.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7756.a21200b9.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7759.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7759.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7759.c518183b.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7760.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7760.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7760.e615018c.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7767.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7767.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7767.48ddcbbe.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7768.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7768.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7768.10c94332.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7769.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7769.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7769.bb9c0bd9.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7776.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7776.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7776.613dab2c.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7779.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7779.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7779.98016f7f.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7782.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7782.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7782.e1b138c5.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7787.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7787.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7787.cf358e37.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7789.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7789.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7789.b5d08fac.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7867.JPG":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7867.JPG ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7867.580db12d.JPG";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7979.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7979.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7979.209af706.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7983.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7983.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7983.036be0d9.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7984.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7984.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7984.8ce15176.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7985.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7985.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7985.7fd13da5.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7986.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7986.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7986.9b0e5805.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_7988.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_7988.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7988.e21f160b.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8055.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8055.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8055.eaedec00.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8056.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8056.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8056.0825f429.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8066.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8066.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8066.0d2874b0.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8070.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8070.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8070.178bace4.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8074.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8074.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8074.da02a4a5.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8083.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8083.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8083.6d85c681.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8084.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8084.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8084.f962f39b.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8087.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8087.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8087.fb88797a.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8092.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8092.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8092.39581c70.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IMG_8095.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/IMG_8095.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_8095.3d69f364.jpg";

/***/ }),

/***/ "./src/concert/articles/assets/IzharShay.jpg":
/*!***************************************************!*\
  !*** ./src/concert/articles/assets/IzharShay.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/MorWeiss.jpg":
/*!**************************************************!*\
  !*** ./src/concert/articles/assets/MorWeiss.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/RoeeAhamori.jpg":
/*!*****************************************************!*\
  !*** ./src/concert/articles/assets/RoeeAhamori.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/ShumuliGoldberg.jpg":
/*!*********************************************************!*\
  !*** ./src/concert/articles/assets/ShumuliGoldberg.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/TanakaMasato.png":
/*!******************************************************!*\
  !*** ./src/concert/articles/assets/TanakaMasato.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/TanakaMasato.ac57321c.png";

/***/ }),

/***/ "./src/concert/articles/assets/ZvikaBrakerski.jpg":
/*!********************************************************!*\
  !*** ./src/concert/articles/assets/ZvikaBrakerski.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/concert/articles/assets/typora_download.png":
/*!*********************************************************!*\
  !*** ./src/concert/articles/assets/typora_download.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/typora_download.66853aec.png";

/***/ }),

/***/ "./src/concert/articles/assets/typora_setting1.png":
/*!*********************************************************!*\
  !*** ./src/concert/articles/assets/typora_setting1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/typora_setting1.5401bea5.png";

/***/ }),

/***/ "./src/concert/articles/assets/typora_setting2.png":
/*!*********************************************************!*\
  !*** ./src/concert/articles/assets/typora_setting2.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/typora_setting2.a5050a68.png";

/***/ }),

/***/ "./src/concert/articles/assets/typora_setting3.png":
/*!*********************************************************!*\
  !*** ./src/concert/articles/assets/typora_setting3.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/typora_setting3.019c8a69.png";

/***/ }),

/***/ "./src/concert/articles/assets/typora_setting4.png":
/*!*********************************************************!*\
  !*** ./src/concert/articles/assets/typora_setting4.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/typora_setting4.ac02b306.png";

/***/ }),

/***/ "./src/concert/articles/assets/typora_setting5.png":
/*!*********************************************************!*\
  !*** ./src/concert/articles/assets/typora_setting5.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/typora_setting5.e521c840.png";

/***/ }),

/***/ "./src/concert/articles/assets/デリー恵美子.png":
/*!*************************************************!*\
  !*** ./src/concert/articles/assets/デリー恵美子.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/デリー恵美子.d772d522.png";

/***/ }),

/***/ "./src/concert/articles/assets/水谷徹哉.png":
/*!**********************************************!*\
  !*** ./src/concert/articles/assets/水谷徹哉.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/水谷徹哉.202432d3.png";

/***/ }),

/***/ "./src/concert/articles/israel.jsx":
/*!*****************************************!*\
  !*** ./src/concert/articles/israel.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/IMG_7573.jpg */ "./src/concert/articles/assets/IMG_7573.jpg");
/* harmony import */ var _assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/IMG_7569.jpg */ "./src/concert/articles/assets/IMG_7569.jpg");
/* harmony import */ var _assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/IMG_7575.jpg */ "./src/concert/articles/assets/IMG_7575.jpg");
/* harmony import */ var _assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/IMG_7577.jpg */ "./src/concert/articles/assets/IMG_7577.jpg");
/* harmony import */ var _assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/IMG_7578.jpg */ "./src/concert/articles/assets/IMG_7578.jpg");
/* harmony import */ var _assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/IMG_7579.jpg */ "./src/concert/articles/assets/IMG_7579.jpg");
/* harmony import */ var _assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/IMG_7580.jpg */ "./src/concert/articles/assets/IMG_7580.jpg");
/* harmony import */ var _assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/AlonRosen.jpg */ "./src/concert/articles/assets/AlonRosen.jpg");
/* harmony import */ var _assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/IzharShay.jpg */ "./src/concert/articles/assets/IzharShay.jpg");
/* harmony import */ var _assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/AmirMilo.jpg */ "./src/concert/articles/assets/AmirMilo.jpg");
/* harmony import */ var _assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/IMG_7596.jpg */ "./src/concert/articles/assets/IMG_7596.jpg");
/* harmony import */ var _assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/IMG_7599.jpg */ "./src/concert/articles/assets/IMG_7599.jpg");
/* harmony import */ var _assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/IMG_7607.jpg */ "./src/concert/articles/assets/IMG_7607.jpg");
/* harmony import */ var _assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/IMG_7608.jpg */ "./src/concert/articles/assets/IMG_7608.jpg");
/* harmony import */ var _assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/ZvikaBrakerski.jpg */ "./src/concert/articles/assets/ZvikaBrakerski.jpg");
/* harmony import */ var _assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/IMG_7622.jpg */ "./src/concert/articles/assets/IMG_7622.jpg");
/* harmony import */ var _assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/Grossberg.png */ "./src/concert/articles/assets/Grossberg.png");
/* harmony import */ var _assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/TanakaMasato.png */ "./src/concert/articles/assets/TanakaMasato.png");
/* harmony import */ var _assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/水谷徹哉.png */ "./src/concert/articles/assets/水谷徹哉.png");
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/EvaTunik.png */ "./src/concert/articles/assets/EvaTunik.png");
/* harmony import */ var _assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/EletteBoyle.jpg */ "./src/concert/articles/assets/EletteBoyle.jpg");
/* harmony import */ var _assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/MorWeiss.jpg */ "./src/concert/articles/assets/MorWeiss.jpg");
/* harmony import */ var _assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/IMG_7626.jpg */ "./src/concert/articles/assets/IMG_7626.jpg");
/* harmony import */ var _assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/BarakBen-Avinoam.jpg */ "./src/concert/articles/assets/BarakBen-Avinoam.jpg");
/* harmony import */ var _assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/デリー恵美子.png */ "./src/concert/articles/assets/デリー恵美子.png");
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_assets_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/IMG_7692.jpg */ "./src/concert/articles/assets/IMG_7692.jpg");
/* harmony import */ var _assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/IMG_7693.jpg */ "./src/concert/articles/assets/IMG_7693.jpg");
/* harmony import */ var _assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/IMG_7694.jpg */ "./src/concert/articles/assets/IMG_7694.jpg");
/* harmony import */ var _assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/IMG_7691.jpg */ "./src/concert/articles/assets/IMG_7691.jpg");
/* harmony import */ var _assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/IMG_7712.jpg */ "./src/concert/articles/assets/IMG_7712.jpg");
/* harmony import */ var _assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assets/IMG_7723.jpg */ "./src/concert/articles/assets/IMG_7723.jpg");
/* harmony import */ var _assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assets/IMG_7728.jpg */ "./src/concert/articles/assets/IMG_7728.jpg");
/* harmony import */ var _assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assets/IMG_7729.jpg */ "./src/concert/articles/assets/IMG_7729.jpg");
/* harmony import */ var _assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assets/IMG_7737.jpg */ "./src/concert/articles/assets/IMG_7737.jpg");
/* harmony import */ var _assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assets/IMG_7751.jpg */ "./src/concert/articles/assets/IMG_7751.jpg");
/* harmony import */ var _assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./assets/IMG_7756.jpg */ "./src/concert/articles/assets/IMG_7756.jpg");
/* harmony import */ var _assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./assets/IMG_7759.jpg */ "./src/concert/articles/assets/IMG_7759.jpg");
/* harmony import */ var _assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./assets/IMG_7760.jpg */ "./src/concert/articles/assets/IMG_7760.jpg");
/* harmony import */ var _assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./assets/IMG_7767.jpg */ "./src/concert/articles/assets/IMG_7767.jpg");
/* harmony import */ var _assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./assets/IMG_7768.jpg */ "./src/concert/articles/assets/IMG_7768.jpg");
/* harmony import */ var _assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./assets/IMG_7769.jpg */ "./src/concert/articles/assets/IMG_7769.jpg");
/* harmony import */ var _assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./assets/IMG_7776.jpg */ "./src/concert/articles/assets/IMG_7776.jpg");
/* harmony import */ var _assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./assets/IMG_7779.jpg */ "./src/concert/articles/assets/IMG_7779.jpg");
/* harmony import */ var _assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./assets/IMG_7782.jpg */ "./src/concert/articles/assets/IMG_7782.jpg");
/* harmony import */ var _assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./assets/IMG_7787.jpg */ "./src/concert/articles/assets/IMG_7787.jpg");
/* harmony import */ var _assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./assets/IMG_7789.jpg */ "./src/concert/articles/assets/IMG_7789.jpg");
/* harmony import */ var _assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./assets/12:29map.png */ "./src/concert/articles/assets/12:29map.png");
/* harmony import */ var _assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./assets/IMG_7979.jpg */ "./src/concert/articles/assets/IMG_7979.jpg");
/* harmony import */ var _assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./assets/AvnerMor.jpg */ "./src/concert/articles/assets/AvnerMor.jpg");
/* harmony import */ var _assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./assets/IMG_4972.JPG */ "./src/concert/articles/assets/IMG_4972.JPG");
/* harmony import */ var _assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./assets/IMG_7983.jpg */ "./src/concert/articles/assets/IMG_7983.jpg");
/* harmony import */ var _assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./assets/IMG_7984.jpg */ "./src/concert/articles/assets/IMG_7984.jpg");
/* harmony import */ var _assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./assets/IMG_7985.jpg */ "./src/concert/articles/assets/IMG_7985.jpg");
/* harmony import */ var _assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./assets/IMG_7986.jpg */ "./src/concert/articles/assets/IMG_7986.jpg");
/* harmony import */ var _assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./assets/IMG_7988.jpg */ "./src/concert/articles/assets/IMG_7988.jpg");
/* harmony import */ var _assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./assets/RoeeAhamori.jpg */ "./src/concert/articles/assets/RoeeAhamori.jpg");
/* harmony import */ var _assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./assets/HadarTal.jpg */ "./src/concert/articles/assets/HadarTal.jpg");
/* harmony import */ var _assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./assets/ShumuliGoldberg.jpg */ "./src/concert/articles/assets/ShumuliGoldberg.jpg");
/* harmony import */ var _assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./assets/IMG_8055.jpg */ "./src/concert/articles/assets/IMG_8055.jpg");
/* harmony import */ var _assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./assets/IMG_8056.jpg */ "./src/concert/articles/assets/IMG_8056.jpg");
/* harmony import */ var _assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./assets/IMG_8070.jpg */ "./src/concert/articles/assets/IMG_8070.jpg");
/* harmony import */ var _assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./assets/IMG_8066.jpg */ "./src/concert/articles/assets/IMG_8066.jpg");
/* harmony import */ var _assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./assets/IMG_7867.JPG */ "./src/concert/articles/assets/IMG_7867.JPG");
/* harmony import */ var _assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./assets/IMG_8074.jpg */ "./src/concert/articles/assets/IMG_8074.jpg");
/* harmony import */ var _assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./assets/IMG_8083.jpg */ "./src/concert/articles/assets/IMG_8083.jpg");
/* harmony import */ var _assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./assets/IMG_8084.jpg */ "./src/concert/articles/assets/IMG_8084.jpg");
/* harmony import */ var _assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./assets/IMG_8087.jpg */ "./src/concert/articles/assets/IMG_8087.jpg");
/* harmony import */ var _assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var _assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./assets/IMG_8092.jpg */ "./src/concert/articles/assets/IMG_8092.jpg");
/* harmony import */ var _assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var _assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./assets/IMG_8095.jpg */ "./src/concert/articles/assets/IMG_8095.jpg");
/* harmony import */ var _assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_75__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/concert/articles/israel.jsx";








































































var israel =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(israel, _Component);

  function israel() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, israel);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(israel).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(israel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n# Israel\n\n12/22 to 1/9\n\n\n\n### 12/22\n\n#### Arrived\n\n- a little bit vip style\n- Good room at Alexander Yanai St.\n- good dinner at Bistro 56, Arena Mall\n\n![Israel Morning](./assets/IMG_7573.jpg)\n\n![\u30E0\u30B5\u30B5\u30D3](./assets/IMG_7569.jpg)\n\n### 12/23\n\n#### Breakfast\n\n- at Isrotel publica\n- buffet style\n- with Yamamoto san\n\n####Program overview : from 9:30\n\n- With Ron and Ilan at Corundum office\n\n- Guy Ganzu\n\n  - a vc\n\n    \u200B\t\t\t\t\n\n- \u200B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n  \u200B\n\n  \u200B\n\n  \u200B\n\n  \u200B\n\n  Izhat\n\n  -  Social, connecting religious people with high-tech industry\n\n- Masada : 12/28 tour\n\n  - Dannoura of Jewish  \n\n- Some problems with mobile phones, but Ron and Ilan said they took care of it.\n\n- Nice coffee, actually very strong\n\n#### Guy\n\n- purpose : discussion, he said its just his opinion made in Israel\n\n- beach playing, girls\n\n- 3 years of army,\n\n- diamonds factory\n\n- University London\n\n- computing diamond cutting:  the best cut coincidentally was the same with Japans\n\n- Not just investing, feeling like founder.\n\n- http://www.guygamzu.com/  **contacting to Guy**\n\n- He has a package for startups starting their business\n\n- What to expect to Angels\n\n  - High velocity\n  - Depends of each person, too types, low touching more investing number, high touching less investing number\n  - Pitching is future selling: telling a story of future is the key point, if not you'll never get funded\n\n- Iclick\n\n  - projetion technology for children\n  - first for a more in a wider range, then found the kids enjoy them most\n\n- **fiverr**\n\n  - service selling from 5 dollars\n  - trainig giving for freelance\n\n- spike\n\n  - https://www.spikenow.com/\n  - email to conversation\n\n- AIRev pitch\n\n  - Giving an analogy\n  - Sharp and focused on changing the world\n  - Revenue in the second\n\n- Eaglys\n\n  - Focusing on what you want the listeners to bring home\n  - storing telling good, the financing\n  - Too much information, only one use case, make eager the listener with an analogy, why this can change the world and how large it is. Just make it as a magic. How is the secondary,\n  - what if a single word is deprecated\n  - **structure your story, it's not taking**  to make it qualier\n\n- Yspace\n\n  - Miguel: the long span of your project should be more stressed\n\n  - have your product that could make interesting\n\n  - where are you heading, who are you\n\n    - what is going to do for this product\n\n  - b to b or, content, more about yourself not just the product because there are many competitor, **how you delivery and who**\n\n  - key words ,\n\n  - more about the product vision\n\n  - Too soft, 'what can I help him?', so say more details about what you need and why you are telling them. And make examples that help telling that.\n\n  - Give a picture of the future grouth, what's next.\n\n  -  first, maximize the value for small number of people\n\n    \u200B\n\n  \u200B\n\n- what would you do for a longer presentation\n\n  - quality\n\n- Maruyama: scaring part is too boring\n\n  - find out a different part for others, that is interesting\n  - Make difference from not only your people, all who you met.\n  - Opening up\n\n#### Zohar Zisapel\n\n- Japan, not antreprenours, Israel not good at big industries\n- He knows better, we can do it if someone can, Japanese has the opposite  \n- Strategic not so much, too slow,\n- Big companies\n  - Big companies are better! but,,,,\n  - Longer and slower movements, politics, just local interested are conciderated,\n  - How to deal it: brainstorming, competitions, VCs \u2192 even so fail.\n  - The company is managed by the customers, can't make any change freely\n  - The new market is too small for them, thus Toyota didn't take a look at E cars\n- he started with startups, RAD\n  - even in Israel, that time there wasn't any VCs\n  - computers cellphone and internet changed all the communication industry\n  - He mede a group of startups in this chaos.\n  - but after 2000, this change stoped and became satiable industry (until these days)\n  - Even him, couldn't understand that the big componies got the powers in that era\n- How to find a startup field: Find a change\n  - so cyber security field\n    - more pc, connected, clouds, (also the cars)\n    - attackers can attack in any contries and governments doesn't coorporate to pretend them.\n- automobile is the change\n  - E, connected\u2192autonomous, sharing\n  - even so it hasn't chaged in long time for now\n  - car driving will be rading horse\n  - Tesla: chose sport car, with small battery and needs good accelaration, which is good for batery cost and its advantage\n  - it will become a world that no one has responsavility on acssidents\n  - first, starts in some fields which\n    - the easiest field\n    - and the most utilized field\n  - to start then to full auto\n- sharing\n  - easier so faster\n  - so also thier is not protection from copying\n- see the next, and what your bussiness will do there\n- **what is your difference** is the keypoint he sees when investing\n\n#### Dinner at HouseIn\n\n- https://www.google.com/maps?q=32.158931,34.808969&hl=ja-JP&gl=jp\n- A mid-east  food restaurant\n- huge eggplant and delisious salads and meat(beaf and ram)\n- also extraordinary hot pepper\n\n\n\n![](./assets/IMG_7575.jpg)\n\n![](./assets/IMG_7577.jpg)\n\n![](./assets/IMG_7578.jpg)\n\n![](./assets/IMG_7579.jpg)\n\n![](./assets/IMG_7580.jpg)\n\n### 12/24\n\n#### Academic lecture: *Alon Rosen*\n\n![Alon Rosen](./assets/AlonRosen.jpg)\n\n- Prof, ? , MIT, protocols, NOW IDC Herzliya\n- Zvika FHE inventor\n- Elette Homographic secret sharing\n- Format-preserving Encryption\n- E voting\n  - the difficulty is privacy and accuracy\n  - encryption makes a balance on those two\n- voting in US\n  - 8 years ago, still using machine\n  - 1 in 10 people wasn't counted\n  - 70% using \u5857\u308A\u3064\u3076\u3057\u578B\n  - \u9593\u9055\u3048\u3066\u62BC\u3057\u3061\u3083\u3063\u305F\u4EBA\u304C\u591A\u3044\u7591\u60D1\u3067\u30D6\u30C3\u30B7\u30E5\u52DD\u3064\n- voting electronic machine\n  - actually doesn't change at all\n  - not transparency\n- the problem in paper and electric is both has an blackbox after voting\n- if an attacker would attack, they would at the weakest point\n-  the difficulty is privacy and accuracy and encryption makes a balance on those two\n- only care about that the sum is correct and your inside it\n- wombat voting project\n- **zero knowledge**\n  - can tell there is no knowledge leek without defining knowledge\n  - proof: a method for eastablishing truth\n  - I did a Q to Alon and get the response, I attach all\n    - Q: When using the ZN proof to wombat voting project, is the problem \u2018Are all the same votes after they were mixed?\u2019? I understood like this, so that without reveling all the votes, you can prove that they weren\u2019t reduced, added nor changed.\n    - A: Regarding your question about the statement proved in ZK in mixnets, it is an NP statement of the form:  L = {(c_1,...,c_N), (d_1,...,d_N) | c_i's are the input ciphertexts and d_i's are the output ciphertexts and there exist a permutation pi: [N]->[N] so that for all i in [N]  it holds that Dec(d_{pi(i)}) = Dec(c_i)}  (Here the \"secret\" NP witness is pi, and also implicitly the randomness r_i used to generate c_i and s_i used to generate d_i.)  The ZK proof will hide pi and the r_i's and s_i's and convince the verifier that the multiset of votes that are encrypted in (c_1,...,c_N) is identical to the multiset of the votes encrypted in (d_1,...,d_N) (which in particular guarantees that the tally is the same).\n\n#### How Investors think? :  *Izhar Shay*\n\n![Izhar Shay](./assets/IzharShay.jpg)\n\n- primesense : he invested. the base of kinect  and was bought by Apple\n- He used to be elctronic engineer and became investor at canaan in first US, then israel\n- there are many types divided on stage, sectors and geography(so that they can stay close to the companies)\n- invester needs speed\n- invester needs money\n- invester needs impact\n- the global startup ecosystem ranking : https://startupgenome.com/reports/2018/GSER-2018-v1.1.pdf\n- hot trends: fin-tech, cyber security, IoT, autonomous drive, crypto currency\n- impact could be mejored and is growing,\n- examples\n  - ad to e sports\n  - robots cleaning buildings windows\n  - delivery with drones\n  - IoT healthcare cyber\n  - fishing protection\n  - *smell and tattoo*         **winner**\n- How long time does the VCs have?\n  - Normally, VCs set a time limit, about 10 years.\n  - ask how long ago the fund was established\n- today's conern\n  - economic\n  - US and China\n  - US politocs\n  - north cores, Russia, Iran\n  - Mid-East tensions\n  - EU immigration situation\n\n#### equivio:  *Amir Milo*\n\n![](./assets/AmirMilo.jpg)\n\n- \u30EA\u30FC\u30F3\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u7CFB: many interviews\n\n\u200B\n\n- entrepreneur\n\n- equivio is a text managing AI company\n\n- background in computer mathematics\n\n- working in Microsoft and also funding some companies\n\n- Israel : informal and small atmospher\n\n- hard work for the happy-end\n\n- one conference\n\n  - He met a lady that said that the layers are having problems with the legal documents that had to be read \u2014 millions of it.\n\n  - nearly 20 to 40% of documents are near documents(very similar ones)\n\n  - by\n\n    - grouping them and dividing between the layers\n    - email to tree\n\n  - 50% of time saving\n\n  - However, what was the purpose of reading the documents at all??\n\n  - Then started scoring the docs by machine learning\n\n  - If you need high accuracy, you need x% to read to have the 90% of the relevant docs, while if not just read 5%\n\n  - How much would that save money? You should find an exact price.\n\n  - Focus on one, you're a small company\n\n    \u200B\n\n- when doing interview to customers\n\n  - people say yes, than No and I don't know\n  - even, these interviews are good for presenting to VCs\n  - How you're going to use it, workflow\n\n- market leader\n\n  - 20 to 30% of market\n  - How to be one?\n  - Segmentation:  divide the product depended on the market. Start with small markets, get them and then make the next segmentation.\n\n- Diside which feature you DONT do.\n\n  - If you're asking 'is this feature going to be used at all?'', don't make it.\n  - Co-funder and mentor\n\n- AIRev presentation\n\n  - Focus\n\n- \u7D4C\u55B6\u4F01\u753B\u5BA4\u3092\u653B\u6483\u306E\u5BFE\u8C61\u306B\n\n#### Dinner at 'Kyoto'\n\n- the return of the red pepper and the born of red hot chilly pepper\n\n![](./assets/IMG_7596.jpg)\n\n#### Present Preparation\n\n![](./assets/IMG_7599.jpg)\n\n### 12/25\n\n#### Morning\n\n![](./assets/IMG_7607.jpg)\n\n![](./assets/IMG_7608.jpg)\n\n- I found a hot plate, so Made a cheese sand and a nutella sand\n\n#### An intro to Fully Homomorphic Encryption: *Dr. Brakerski*\n\n![](./assets/ZvikaBrakerski.jpg)\n\n- No undergraduates\n- *How much your life is on the cloud?*\n- when sending your data to an outsorcing computation, you want to send an Enc(x),return Enc(f(x)) so that the server could know nothing and you colud get f(x) = Dec(Enc(f(x)))\n- NAND  is universal which means that  with NAND you can compute any circuit\n- you even can't know if the enc has information or hasn't. $Enc(x)\\cong Enc(0)$\n- not just this for application\n- besides Gnetry made FHE, the application was\n- approximate eigenvectors: $\\vec{s}\\cdot C =\\vec{e}+ x\\vec s\\sim x\\vec  s$\n- but the noise will grow, especially when multiplicating\n- $G\\cdot bits(C)=C$\n- so, when definig $\\vec s \\cdot C \\simeq  x\\cdot \\vec s G$ ,can do multiplicating by $C_{mult}=C_1\\cdot G^{-1}(C_2)$ and because $G^{-1}(C)$ is  small, the noise won't growth too much\n- only issue: *Circular security* issue\n- Multi-key FHE\n- Quantum FHE\n  - BJ15,DSS16,M18a\n  - Hybrid Enc. Approach [BJ15] but to universal\n  - Fully QFHE [M18a] but hard to add\n- Constructing from Learning with Errors\n  - used to be an matemathics problem and started to be used as security barrier.\n  - $Enc(x)\\simeq Enc(0)$ How to do this? : Bootstrap. Make an A,$\\eta\\sim0$ that $\\vec{s}A=\\eta$  and a random and small R so that  $\\vec s \\cdot C \\simeq \\vec s \\cdot (AR + xG)=(\\vec s \\cdot A)R + \\vec s\\cdot xG\\simeq \\vec s\\cdot xG$. This makes the $C$ toltaly random not depending on x(=0 or 1). Then, to decrypt, because G and $\\vec s$ are big, if $x = 0$ , $\\vec s\\cdot xG\\sim0$ while if $x=1$, it would be a bigger matrix , so you can\n  -  squentialization: The error when multiplication $\\vec e_{mult}= \\vec e_1 \\cdot G^{-1}(C_2)+x_1\\vec e_2$ became smaller when $\\vec e_1<<\\vec e_2$ rather than the other way. The longer circuit makes larger noise, so when doing  many calculations, sequentialized is better than paralleled.\n  - Barrington's Theorem: Memory could be replaced with Depth\n  - The error end up being just $4^d$ for a depth of d, instead of $(N-1)^d$ that\n- Multi-Key construction\n- Scale Invariance\n  - the error scale doesn't affect, the ration does\n  - before, the error expands with  $\\vec e_1 \\cdot G^{-1}(C_2)$, but the error became $e^2$ and a multiplication with something in $O(N)$.\n- The Ring Setting\n  - make a polynomial that makes a ring\n\n- Introduction to secure computation: *Elette Boylo*\n  - Encryption on Lovers\n  - Computation indistinguishable : $\\cong$\n    - no one can tell which is which if both are given differently\n  - OT\n    - sends the pkey wich the bit you want and another pkey but one that you don't have the skey\n    - You can make complete for secure computation\n    - only revealing $a\\and b$   \n\n#### Meet up\n\n![](./assets/IMG_7622.jpg)\n\n- Kenneth A. Grossberg\n  - Used to be a WBS prof.\n\n![](./assets/Grossberg.png)\n\n- Tanaka  Masato\n  - Helping companies starting business at Israel\n\n![Tanaka Masato](./assets/TanakaMasato.png)\n\n- \u6C34\u8C37\u5FB9\u54C9\n  - Cyber Security Engineer\n  - the decline of the Dark Web on Japan\n\n![\u6C34\u8C37 \u5FB9\u54C9](./assets/\u6C34\u8C37\u5FB9\u54C9.png)\n\n- Eva Tunik\n  - Designer and writer?\n  - Better to wear a team color, Japanese fice are undistinguishable\n  - reconmanded Sakura, but notihng was found\n  - Will meet on Saturday, doing a tour in Tel Aviv\n\n![Eva Tunik](./assets/EvaTunik.png)\n\n- Aki Kumagai\n  - \u7D4C\u6E08\u5B66\u90E83\u5E74\u751F\n  - \u81EA\u5206\u63A2\u3057\n  - \u4EBA\u6750\n  - \u6728\u66DC\u306E\u6388\u696D\u6765\u308B\u304B\u3082\n\n### 12/26\n\n#### Introduction to secure computation: *Elette Boylo*\n\n![](./assets/EletteBoyle.jpg)\n\n- One side doesn't learn nothing\n- Linearly function: $a_A + a_B = a$\u3068\u3057\u3066\u60C5\u5831\u3092\u5206\u6563\n- Hiding each input, can calculate\n  - adding(or) by just normal adding\n  - multiplication(and) by using OT\n    - random shares\n    - kind of quantom computing(\u96F0\u56F2\u6C17)\n    - but needs some communications between\n  - Garbled circuits\n    - not only for secure computing, also for knowing if who computes did the right function\n  - the classic methods need too much communication bits\n- Homomorphic Secret Sharing\n  - Not-linear functions\n  - not only sending numbers or imformations, also function sendings\n  - also for voting(updating the server)\n    - $f_A(j)+f_B(j)=f_{i,1}(j)$\u3088\u308A\uFF0C\u81EA\u5206\u304C\u3069\u3053\u306B\u6295\u7968\u3057\u305F\u306E\u304B\u308F\u304B\u3089\u306A\u3044\u307E\u307E\uFF0C\u6700\u5F8C\u306B\u8DB3\u3057\u5408\u308F\u305B\u308B\u3053\u3068\u306B\u3088\u308A\u6295\u7968\u7D50\u679C\u306F\u8A08\u7B97\u3067\u304D\u308B\n- Contractions\n  - pseudorandom function\n    - the undestinguishness of the difference between the truly random fiction and the real function(encryption)\n    - PSG is an func that duble one total random seed\n    - GGM is a tree of random rows made from a random seed by PSG\n    - $\\Delta=S_1+S_2$,so that when the difference disappears, the next b become 0\n  - RMS\n    - the multiplication is only allowed between any output and the first input\n    - the red dots can be selected freely, while if they are too sparse, the steps will be longer and took time, on the other hand, if they are more close, there would be more error dut to stuck one in the middle of the two.\n\n#### Format-Preserving Encryption 1, Intro and Def: *Mor Weiss*\n\n![](./assets/MorWeiss.jpg)\n\n- story\n  - T-Mobile's clould were attacked and leaked the Social Security and ID number\n- deterministic\n  - no randomizing function on encryption\n  - can see if they are the same\n- Tweakable\n  - dictionary attack\n    - for deterministic enc., if you know one time the dec. of an X, the next time you see them, you already find that that is X\n    - only way to recover is to change the key\n  - solution: Tweak\n    - use an additional information called Tweak Space and use to encrypt\n    - kind of public key and secret key\n- Format-Preserving Encryption *FPE*\n  - problem\n    - applications won't be used at all\n    - need different type of table\n  - solution: so make the space(format) of the message and the cryptography space be the same\n    - if not, just returns error\n  - pseudorandom privacy\n  - single point indistinguishability\n    - weaker\n    - indistinguishable between actual cyfertext and random cyfertext\n    - ?? \u81EA\u7136\u8A00\u8A9E\u306EFormat-Preserving Encryption\n  - Message Privacy\n    - with the ciphertext  you can't assume any function of the message\n  - Message Recovery\n    - with the ciphertext  you can't assume the message\n  - PRP $\\Leftrightarrow$ SPI $\\Rightarrow$ MP $\\Rightarrow$  MR\n- Constructing\n  - purpose: make a universal method to make a FPE\n  - Int-FPE\n  - Feistel Network\n    - \u565B\u307E\u305B\u308B\u95A2\u6570F\u306F\u9006\u6F14\u7B97\u4E0D\u53EF\u80FD\u3067\u3082\u3044\u3044(\u6697\u53F7\u306A\u306E\u306B)\n  - Generalize\n    - for $\\Z_{ab}$\n    - for $\\{1,...,m-1\\}^n$\n- General Format\n  - Social numbers don't have 666xxxxxx\n  - What to do if the encryption is 666xxxxxx? :  encrypt again!\n  - the same in date: ddmmyyyy\n  - the efficiency: average = rate of the valid space\n  - with ranking anything you want, any type colud be designed\n- Rank and Unrank\n  - ranking bad could make a security problem\n\n####  Dinner\n\n- At the apartment with Asahi sensei\n- Maruyamasan and Imabayashisan made Yakiniku and kind of Yakimeshi\n- Good cheese\n\n![](./assets/IMG_7626.jpg)\n\n### 12/27\n\n#### What to do when you have an idea? : *Barak Ben-Avinoam*\n\n![BarakBen-Avinoam](./assets/BarakBen-Avinoam.jpg)\n\n- secure AI = an AI that offers security or an AI that is secure?\n- **entrepreneur is like a game, so what?**\n- an enpty stadium\n- for having fun, sometimes fails\n- Real Start \u2014 7 statements$^{TM}$\n  - Need exists\n  - Customers interested in addressing it: real interest and need\n  - No good solution:  how the customer is dealing with it in the daily life\n  - We have a good solution: not the perfect, a simple solution for a specific problem\n  - Customers are willing to pay for it\n  - We have a way to get it to the market\n  - The market is big enough\n- Evaluate these and discuss\n  - with better evidence\n  - have a meeting and discuss if we have a good answer\n- Realize that I will fail because of timing\n  - How to deal it?\n  - Pretotyping to the rescue\n    - **Make sure you are building the right 'it' before you build 'it' right.**\n    - Never ask people \"How you think about 'it'\".  They will be in the Thoughtland.  In there any idea could both succeess or fail\n  - Make tests\n    - Before makeing a speech to text product, did a test of instead of computer, another person in other room will type it.\n  - What we need\n    - Evidence not opinion\n    - That srengthen our 7 statements\n    - Found by us\n    - In an objective way\n  - Fail fast\n    - if not, you won't have a way to listen to the real\n  - Making an artificial artificial inteligence\n  - Make a Fake door\n    - see if the customers have at least interest\n  - One-Night Stand: Just show an example, not the real\n  - Show how it would look like\n\n- Where to get money from\n  - The three money: Friends and Family and Fools\n    - Not good\n  - From specialist\n  - Bilateral Funds\n  - Technology incubator\n  - For VC\n    - Search a VC that invest on your field and stage\n    - also when it was established\n  - The art of Pitching by *Guy Kawasaki*\n    - https://www.youtube.com/watch?v=MerKnt0BHdA\n    - less word better actually\n    - 10 slides\n    - when to talk: specially about of the team\n    - the inventors won't belive your numbers, they just want to see your thought process\n    - projection: the growth based on numbers\n    - timeline: the plan based on text\n    - 20 minutes\n    - $\\ge$30 point font\n  - premoney evluation and post-money evaluation\n  - equity value\n    - your own % of the company could be smaller\n    - even though, with the growth of the company your actual owning value could grow\n- start-up nation\n  - low Power Distance Score: Everyone can say whatever you want to anyone\n- Lean Startup\n  - leanstartupmachine\n  - https://www.youtube.com/watch?v=HhoducyStMw\n  - Validation Board\n- version of models and data\n\n#### Before Dinner\n\n- went to search for somewhere to buy the dinner with Maruyama-san And Ko-san\n- walked for almost one hour but nowhere was open due to Shabbat\n- Although, the restaurants were open, so we went to Meat Bar with Asahi sensei\n\n### 12/28\n\nWe went to a tour with Emiko Deery\n\n![\u30C6\u3099\u30EA\u30FC\u6075\u7F8E\u5B50](./assets/\u30C6\u3099\u30EA\u30FC\u6075\u7F8E\u5B50.png)\n\n#### Al-Maghtas\n\n\uFF0F\uFF0A<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4826.8939128648035!2d35.543917404816916!3d31.837146147341297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cca67b01fdf29%3A0x994b7cf22b0d6dbc!2sQasr+el+Yahud!5e0!3m2!1sja!2sil!4v1546255531427\" width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\uFF0A\uFF0F\n\n- Where Jesus get his Baptism\n- Now it's a tourist place, but for many years was closed due to the miles\n- Prohibited to close the river and the fence\n\n![](./assets/IMG_7692.jpg)\n\n![](./assets/IMG_7693.jpg)\n\n![](./assets/IMG_7694.jpg)\n\n![](./assets/IMG_7691.jpg)\n\n#### Masada\n\n- Where many Judas was besided for 3 years.\n- When was finally broken the entrance, decided to suicide\n- 10 men killed almost of the resident, then dicided who kill the other 9 using lottery.\n- It was because for Judas suiciding was prohibited.\n- Emiko san dropped her book to a very dangerous place\n\n![](./assets/IMG_7712.jpg)\n\n![](./assets/IMG_7723.jpg)\n\n![](./assets/IMG_7728.jpg)\n\n![](./assets/IMG_7729.jpg)\n\n![](./assets/IMG_7737.jpg)\n\n![](./assets/IMG_7751.jpg)\n\n![](./assets/IMG_7756.jpg)\n\n![](./assets/IMG_7759.jpg)\n\n![](./assets/IMG_7760.jpg)\n\n![](./assets/IMG_7767.jpg)\n\n![](./assets/IMG_7768.jpg)\n\n![](./assets/IMG_7769.jpg)\n\n![](./assets/IMG_7776.jpg)\n\n![](./assets/IMG_7779.jpg)\n\n#### Dead Sea\n\n- Ate Macdonals at the hotel pool\n- The hotel has a beach and pools with Dead sea water\n- Hurts, very cold, but was exciting\n- Dinner was at the Meat Bar, Herzliya\n\n![](./assets/IMG_7782.jpg)\n\n![](./assets/IMG_7787.jpg)\n\n![](./assets/IMG_7789.jpg)\n\n### 12/29\n\nI went to Tel Aviv with Eva Tunik. Walked from the Museum of Art to Jaffa\n\n![12:29map](./assets/12:29map.png)\n\n### 12/30\n\n![](./assets/IMG_7979.jpg)\n\n####  *Barak Ben-Avinoam*\n\n- 'Problem' slide is crutial\n\n- Total Available Market $\\supset$ Saervise Available Market $\\supset$Service Obtainable Market\n\n- Market Research\n\n  - Proper Objective Research\n  - Primary research\n    - Observation\n      - Easiest but could make some bias\n    - Focus groups\n      - Also could make bias\n      - Better than observation because we can choose who to do the research\n    - In-Depth Interviews\n      - Interview to experter on some people\n    - Questionarios\n      - Difficult to see who they are\n  - Secondary Research\n    - Research on the Internet\n    - Not random, using **Competitors and Government reports**\n    - The newest report could be expensive, so use one or two year older one\n\n  1. Ask the customers what they wan\n  2. Ask the customers who theu dream of\n  3. Talk to 'non-customers'\n  4. Talk to competitors\n     - in seminors, events without identifying your purpose clearly\n  5. Understand the competitors buissiness model\n     - as a late comer, you should be 10 times better\n  6. Know the positioning map of the industry\n  7. Talk to distributors\n     - Knows the customers and their needsz\n  8. $\\large Test$\n\n  - STP\n\n  - Segmentation\n\n    - Understanding the customers need\n    - First dicide some axis and evaluate\n\n  - Targeting\n\n    - Select which customer to aim\n\n  - Positionning\n\n  - Eaglys segmantation\n\n    - People who want to utilize sensitive data\n\n      \u200B\n\n- segment and target the best one, then do all\n\n- Market potential\n\n  - Type of customer\n  - Where\n  - How many\n  - How often\n  - Competition\n  - Price\n  - Growth\n  - My share\n\n  1. define target market\n  2. geographic buondaries\n  3. average expenditures for the category\n  4. average household income in the area\n  5. $MP = N \\times P \\times Q (Market \\  potential,Number \\  of \\  possible \\  buyers,Price,annual \\ consumption )$\n\n- Pricing Strategies\n\n  - New product  \n  - there are many mechanism to charge money\n\n  1. first detirmine the objective\n\n  2. demand\n\n  3. estimating cost\n\n     - water, electricity, and so on\n\n  4. analyze competitor's\n\n  5. selecting the pricing method\n\n     - based on the objective\n     - skiming\n       - high setting\n       - buyers must want the product at the price\n       - for startup, inbounding strategy\n     - penetration\n       - low settings\n       - analyze the market constantly and react quickly\n     - line\n       - think the line where their product are selling\n     - optional\n       - additional\n       - easy when selling something expensive already\n     - captive\n       - set a place or system that they can only use your product\n       - printer and Desney land\n     - two-part\n       - fixed fee and usage\n     - by-product\n       - selling something that has made as a result of the main product\n     - bundle\n       - value set\n     - discount and allowance\n       - quantity discount\n       - cash discount\n       - seasonal discount\n       - functional discount(ikea making your furniture)\n     - segmented pricing\n       - selling in different segment\n       - changing the customers and product function could change the price\n       - also time: uber at rush time\n       - market should be segmentable\n     - phycological pricing\n     - promotional pricing\n       - not all time\n       - loss-leader: one product discounting and buys others also\n       - cash rebates: 'return 5 dollars!' but nobody do\n       - Risks: damaging the brand, price war\n       -\n\n     \u200B\n\n  6. final pricing\n\n- Bussiness model canvas\n\n  - also making a profile of the customer\n  - value all of your ploduct and connect to customers pain and gain\n  - and for the price, think about how much the customer would put, Price on Value\n  - demand and supply\n  - Don't promise more than you actually can\n  - Alternatives\n  - cost\n    - fixed cost: even selling nothing\n    - variable costs: when sell something\n    - economy of scale\n  - Diveide in what we konw and what we don't know\n  - What,How,Who,Why: Change at least two\n  - dynamic pricing\n\n- tommorow: pitch\n\n#### Avner Mor: Unbound CEO\n\n![](./assets/AvnerMor.jpg)\n\n- multi-party computation: one \u4F8B is who is going to pay without knowing each one's salary\n- two cryptography prof.s established\n- all using mobil and cloud, no one knows from where comes\n- hardwere too slow and no innovative\n- software platform : distrivute the trust\n- key based security is not enough\n- make the key is invisible, even in the middle in the calculation the key still shared and uncomposed\n- the distribution change per time\n- security company *gartner*: Hype Cycle for data Security 2018\n- sell use case, not security\n- scalability / automative / computing\n- key control / crypto of things(for IoT) / crypto assset security platform(block chain)\n- main market is cloud\n- each one is a different go-to-market\n- with the same API used in hardware\n- don't like custormisation\n- first days, got rejected, deliver the message\n- fully license, not saas\n- first patent was made in the university, then trying to establish more than 5 per year\n- who have the pain and money: for them it was on finance\n- what is his/her plan\n- first stared on US, other rejected\n- working with the customeres is the best, they tell us what to do\n- at large companies being innovative quite difficult : 'don't touch my customer and API'\n- EAGLYS\n  - duality\n\n#### Dinner\n\n- We bought big steaks and tacos at the Arena Moll and cooked\n\n![](./assets/IMG_4972.JPG)\n\n![](./assets/IMG_7983.jpg)\n\n![](./assets/IMG_7984.jpg)\n\n### 12/31\n\n#### Morning\n\n- I ate nutella\n\n![](./assets/IMG_7985.jpg)\n\n#### *Barak Ben-Avinoam*\n\n- Elevator Pitch\n\n  - Give enough information to make the audience want to know more\n\n  1. Balidation board\n\n  2. bussiness model canvas\n\n     - research\n\n     - competitive analisys table\n\n     - subjective but you have to show that yours the best\n\n       |        | your company                       | comp 1 | 2    | 3    |\n       | ------ | ---------------------------------- | ------ | ---- | ---- |\n       | Teck   | \u2714\uFE0E                                  | \xD7      | \xD7    | \xD7    |\n       | Price  | 5                                  | 3      | 4    | 1    |\n       | Patent | \u2714\uFE0E\u2714\uFE0E                                 | \u2714\uFE0E\u2714\uFE0E\u2714\uFE0E    | \u2714\uFE0E    | \u2714\uFE0E    |\n       | ...    | **our company should be the best** |        |      |      |\n\n  3. investor Deck(Presentation)\n\n     - 10 slides, 20 minuts, 30 font\n\n  4. elevator pitch\n\n     - story-telling\n     - hook\n\n  - EAGLYS pitch\n    - how big is the problem: the problem could be solved on different way so mention and discuss about that\n    - confusing: answering the problem, not generalize\n    - more specific: the pricing structure\n    - additonal slide for detail of the core security\n    - no need of 'company growth' on the market slide\n    - team: mention of the trustful bussiness person\n    - NET: \u5229\u76CA, not in yen, in dollars\n  - AIRev\n    - Number of the problem, specially how much\n    - More about the trainig process: who and how\n  - Yspace\n    - For Roppongi maybe 'google and ex. are there'\n    - mention education in the begining\n    - clearlize the problem:\n    - is not the solution of the problem: It seems clear for me but maybe is just an assumption and is  incorrect\n    - uniqueness\n    - better picture\n    - one side arrow only\n    - put a slide about the Mars project award for the history of Yspace\n  - I was wondering if you could arrange an meating for us \u307F\u305F\u3044\u306A\u304A\u9858\u3044\n\n- Financial\n\n  - Reporting about back: finalcial report\n\n  - Profit & Loss statements\n\n    |                        | 2015.12.31 | 2016.12.31 | 2017.12.31 |\n    | ---------------------- | ---------- | ---------- | ---------- |\n    | sales / revenues       |            | 2.0        | 30.0       |\n    | cost of sales(COGS)    |            | -1.0       | -15.0      |\n    | **gross profit**       |            | 1.0        | 30.0       |\n    | Development            | -5.0       | -8.0       |            |\n    | tax                    |            | -1.0       |            |\n    | **Loss**               |            |            |            |\n    | ...                    |            |            |            |\n    | **Net Profit**         | -5.0       | -8.0       | 4.0        |\n    | capital investment     | -1.5       | -2.0       | -2.5       |\n    | issuanve of shares     | 20.0       |            |            |\n    | Loans                  |            | 6.0        |            |\n    | Loans repayments       |            |            | -5.0       |\n    | **Net cash flow**      | 13.5       | -4.0       | -3.5       |\n    | Cash - Opening Balance | 0.0        | 13.5       | 9.5        |\n    | Cash - Closing Balance | 13.5       | 9.5        | 6.0        |\n\n    - Burn rate(monthly, annual): the net cash flow\n    - Capitalization table\n\n    | Share holder | #    | %    |\n    | ------------ | ---- | ---- |\n    | Barak        | 200  | 50   |\n    | Joe          | 100  | 25   |\n    | Sarah        | 100  | 25   |\n    | Total        | 400  | 100  |\n\n    - common shares (\u682A) / preferred shares: have differnts rights\n\n  - Cash flow statement\n\n  - Planing with Project Timeline\n\n    - Using Google\n    - Each line is a task (what)\n    - Start timeand end time (when)\n    - **Resources** (how)\n    - make in differnt category\n\n  - From the planing you can make the Projection\n\n    - Each costs and Revenue\n    - Cash flow positive point and Breack even point\n    - Make the detail, then summarize for the investors\n\n- With Lawyer\n\n  - Valuate\n  - Dividents(\u914D\u5F53)\n    - if you can't give, loan\n      - straight (10% of the investment) or cumulative (every time recouting the 10%)\n  - Liquidation\n    - Straight or Participating\n  - Board Seats\n    - who can hire and fire the CEO\n  - Option Pool\n    - a pool of shares for stock option\n    - 10-25%\n    - Cashless or Exercize price\n  - Anti-dilution Example\n    - Ratchet: giving additional stocks if you sell the stocks in different price\n  - Drag-Along\n    - Drag-Along Right: the right to force a transaction\n  - Founders Restrictive Stock\n  - Pay-to-play\n    - poker\n  - Redemption Rights\n    - the right to buy the VCs share\n    - also other VC can buy instead of the founders\n\n#### *Amir Ofek*\n\n- **Cyberint**\n\n- First board member then CEO\n  - first the fouco-CEO\n- Tavel guy\n- manage detection and responding to the cyber attack\n  - cloud base\n  - platfrom and addition\n- fraud  \n- Asia is the main market\n  - not Japan, Japan don't wanna see the problem accting like \u30C0\u30C1\u30E7\u30A6\n    - language\n    - culture: differnce real yes or unfortunaly yes\n    - cyberism(softbank)\n    - contraction speed: desision making and plan changing\n  - recently in US\n  - moinly E-comers and finance\n- technology\n  - in Israel, where of the Army they ware\n  - innovative experience\n  - team corporative\n  - experience is curtial\n- Working in the army again one weak per year\n  - recruiting\n- first see the revenue then hire\n- even in Israel young people are wanting more about spare time\n- pay attention on new employees  and hear their feelings\n\n![](./assets/IMG_7986.jpg)\n\n#### Dinner\n\n- Maruyamasan made penne with salmon\n- Job san made some thai food\n- Ozoni\n\n![](./assets/IMG_7988.jpg)\n\n### 1/1\n\n#### *Roee Aharoni*\n\n![](./assets/RoeeAhamori.jpg)\n\n##### Why Neural Nets for NLP\n\n- *Graham Neubig* legend of NLP\n\n- level of language\n\n  - morphology(\u5358\u8A9E) / syntax(order) / semantics(meanings)\n\n- syntax:We can use rules :happy:\n\n- But, every rules have exception\n\n- And, what if we don't know any word of a language?\n\n- Nerural Net is just one of the tools\n\n- Classification\n\n  - 'I hate this movie' and 'I love this movie'\n  - Bag of Words **BOW** model: sum of vector\n    - but, can't analyze the convination of words such as 'Thers is nothing i don't love about this movie.'\n  - Continius Bag of Words **CBOW** model: sum, then multiple a matrix\n  - Deeo CBOW: sum \u2192 \u7DDA\u5F62 \u2192 tanh \u2192 \u7DDA\u5F62 \u2192 tanh \u2192 \u7DDA\u5F62 \u2192 result\n    - can save the convention and make another cell of the convention not leaner\n    - the tanh is the activation function\n    - can add a loss function that delite the information that we don't need, for example like the information of race\n\n- New Loss function: if the model is bad, higher\n\n- implementation\n\n  - static: tensorflow,theano, mxnet\n\n    - first decide the all the graph\n      - can't do a dinamic framework\n      - not good for NLP\n\n  - Dynamic: $\\part y/net$, Chainer, PYTORCH\n\n    - less optimization\n    - better for NLP, because can dynamicaly change the parameters numbers\n\n    1. Create a model\n    2. create a graph\n    3. calculate\n    4. back propagation and update\n    5. for 2~5, do it on each input\n\n    - defaultdict\n\n    -  loss func: $-\\log$ because when the classification is bad, meaning that the place of the right tag  is near 0, the loss will be very high, while in the opposite it wolud be 0\n\n      ```python\n      w2i = defaultdict(lambda : len(w2i))#add an id to each word, if exist that is in the dict, if not gives a new id\n      model = dy.Model()\n      trainer = dy. AdamTrainer(model)\n      W_sm = model.add_lookup_parameters((nwords,ntags))\n      b_sm = model.add_parametors((ntags))\n      ```\n\n##### Simple Exercise for NLP\n\n- Language models\n  - rank the language to see which is the most probabl\n  - Log-likelihood: $LL(\\varepsilon_{test})=\\sum_{E\\in\\varepsilon_{test}}\\log P(E)$\n  - Per-word Log-likelihood: $WLL(\\varepsilon_{test})=\\frac{1}{\\sum_{E\\in\\varepsilon_{test}}|E|}\\sum_{E\\in\\varepsilon_{test}}\\log P(E)$\n  - Per word cross entropy: $H(\\varepsilon_{test})=\\frac{1}{\\sum_{E\\in\\varepsilon_{test}}|E|}\\sum_{E\\in\\varepsilon_{test}}-\\log_2 P(E)$\n  - Perplexity: $ppl(\\varepsilon_{test})=2^{H(\\varepsilon_{test})}=e^{-WLL(\\varepsilon_{test})}$\n  - 'Jane went to the store' \u2192 <font color='green'>High</font>\n  - 'store to went Jane the' \u2192 <font color=red>Low</font>\n  - for each order and word make a word vector\n  - softmax part is the heaviest\n- Unkonwn word\n  - Byte per Encoding **BPE**\n    - First, divide in every character, then see the character combination and add the most frecuent combination as a new 'character'.\n    - I| w|e|n|t   t|o  k|y|o|t|o \u2192 to is in everywhere \u2192 I| w|e|n|t   <font color='red'>to</font>  k|y|o|t|o\n- Non Lenear\n  - Use Neural Network\n- Training tricks\n  - shfful the data\n  - other optimizaion\n  - Dropout: imitate multy different nural networks\n- Batching\n  - do the model coputing in parallel:\n- word embeddings\n  - word2vec\n    - kind of language model using predicting the next word, predict the middle word\n    - \u2192 get\n  - distributional\n    - similar words appear in similar contexts\n    - $\\leftrightarrow$non-distributional ex. math \u2192 \u7B97\u6570 and \u6570\u5B66 so \u7B97\u6570 $\\approx$ \u6570\u5B66\n  - discriminate\n\n#### The challenge of seling in start-ups *Hadar Tal*\n\n![](./assets/HadarTal.jpg)\n\n- Selling infrastracture\n\n- **Work all the base things form the day zero.**\n\n- The Challenge\n\n  - how to grow\n\n- Finish the incubator phase\n\n  - first paying will customor\n  - business model\n  - Budget Authority Need Timeline **BANT** understanding\n\n- mapping bussiness point\n\n  - Customer\n    - who? b or c\n    - Who do sign the purchase oder?\n  - Contacts\n    - decision maker\n    - additional (R&D, sales)\n    - find with who the decision maker will talk\n  - Budget\n    - Does the customer have budget? (\u4E88\u7B97)\n    - How to use the existing budget to your purpose.\n    - Or there isn't budget, need to find a new 'line'.\n  - Regions\n    - Where?\n    - Try to be focused\n  - Partners\n    - list of potential partners\n    - better to find a way to do your own selling connection\n    - if you need partner, just for specific regions\n    - maintaining the connection with the partner, not only finding and making a contract\n\n- Selling phases\n\n  - Terms\n\n    - High touch, Mid touch, Low touch,No touch\n\n      - How frecuantly you should have conntact with the customer\n      - How much will cost to maintain customers\n\n    - Hunting\n\n      - Start-up\n\n      1. lead\n         - list of the potential customer\n         - first meeting\n         - LinkedIn Navigator: not free\n      2. contact\n         - maybe not so bussinessly\n      3. contact with value\n         - Personal relationship\n      4. meeting\n         - Demo: Demonstration of your business\n         - **Make next meeting**\n      5. account management\n         - Even after a happy meeting, there is a quiet period\n         - Find a reason to keep contact\n         - Use LinkedIn Navigator to keep an eye on the customer's action\n         - prepare for the next phase, ask such as the document formats\n      6. price proposal\n         - based on document\n         - template containing your value proposition\n         - and in English\n      7. Negotiation\n         - Mapping who is going to take the decision\n      8. closing\n\n    - Farming\n\n      - secure a returning business\n      - next to Hunting\n\n- Pipeline management\n\n  - **Customer Relationship Management**  CRM\n\n    - https://www.capterra.com/customer-relationship-management-software/\n    - mail integration\n    - integration to marketing system\n    -\n\n  - Leads classification\n\n    - What was the problem of that Lead, meeting, Demo?\n\n    - evaluate the situation\n\n      | probability[%] | situation                               |\n      | -------------- | --------------------------------------- |\n      | 10             | initial contact                         |\n      | 20             | solution learning                       |\n      | 40             | evaluation                              |\n      | 60             | proposal sent and decision process      |\n      | 90             | waiting for an official signed document |\n      | 100            | official signed document                |\n\n  - Think dayly of the short, mid, long term opportunities of customers and contract\n\n- Metrics & Sales targets\n\n  - Metrics\n    - \u200B\t\t\t\t\t\tHow much will take since booking to sales\t\t\t\t\t\t\n    - number of new accounts\n    - ACV, ARR(\u65E2\u5B58\u306E\u9867\u5BA2\u304C\u5168\u9867\u5BA2\u306B\u5360\u3081\u308B\u5272\u5408), CAC(\u4E00\u9867\u5BA2\u7372\u5F97\u306E\u5358\u4FA1), CHRUM(\u96E2\u308C\u308B\u5272\u5408)\n  - Sales targets\n    - number of new accounts\n\n- Building Sales Team\n\n  - first one person\n    - Start up mentality\n    - Hunter\n    - Already did it\n  - then making a professional team\n\n- secure the firest paying customer\n\n  - understand the pain\n  - don't be afraid with customers\n  - 'I will check something and come back.'\n  - 'There is nothing for free.'\n\n- Together Each Achieves More **TEAM**\n\n### 1/2\n\n#### *Roee Aharoni*\n\n- window(how many words you take from after and before the word)\n\n  - small : synthetic\n\n  - large: semantic\n\n- skip-gram\n\n  - take a word a predict the neighbors\n\n- GloVe\n\n  - comparing the probability of the relationship with a word\n\n- linear pca and non-linear t-SNE\n\n- Evaluation type\n\n- Intrinsic: using scores\n\n  - relatedness\n  - analogy\n  - categorization\n  - selectional preferences\n\n- extrinsic : using actual usages\n\n  - Initialize: you can choose if freezing the model while the task or not\n  - Concatenate:\n\n- embedding is useful for training with small amount of data\n\n  - some problems\n    - bias, same word with different meanings, dog an dogs are too different\n\n- NN for NLP\n\n  - 1D CNN kind of thing\n    - can do Bags of n-grams without the explosion of memory\n    - also faster because parallelize is able\n  - Stacked\n    - can save the computation by striding but also can save the information of the entirety sentence\n    - relu or soft plus are better\n  - Structured convolution\n    - using syntax: the relation between words such as Object, \u4FEE\u98FE\u8A9E, ...\n  - Using to sentence pairs\n    - Q&A\n  - CNN is easy to backtrack because you can see where the result came from due to the max pulling. Thus the understanding is better and can implement by analyzing the result\n  - Lower the model is better\n\n- RNN\n\n  - Recurrent: Depends on the previous computation\n  - Bi-RNN: Not only the previous words, the following words\n  - Vanilla RNN problem: Vanishing Gradient, the loss don\u2019t depends on so much on the farer inputs\n\n- LSTM\n\n  - add an linear computation (sum) to a memory cell so to solve the RNN\u2019s problem\n  - not so sensitive as RNN\n  - LSTM problem\n    - too slow\n    - solve with mini-batching and Masking\n    - or with bucketing and sorting\n\n### LaeGeex *Shmuli Goldberg*\nVP Marketing\n\n![](./assets/ShumuliGoldberg.jpg)\n\n- shmul@gmail.com\n- Analyze Contract documents using AI\n- Everyone can concentrate on their(company) needs\n- Every employee at LeaGeex can hire any employee\n  - So that, everyone contributes to make the company stronger because each can fill their weak point.\n\n\n\n### 1/3\n\n#### *Roee Aharoni*\n\n##### Conditional language Model\n\n- Conditional language Model\n\n  1. Encode the sentence (or, what you want to input)\n  2. Decode the translation(or what you want to output)\n\n  - Most important NLP model\n  - Beam search: select the k best words and for each continue predicting until all end(output \\</s>)\n\n- Ensembling\n\n  - make the probability for each model and compare\n  - log-linear  or linear\n    - multiplication or adding\n\n- Stacking\n\n  - We have two different models\n  - Score the prediction of one of the models on the another\n  - We can evaluate the translation using\n  - **Expensive one to rerank** because for generating the bigger one takes more time, but you can use it to evaluate and imitate\n\n- Evaluate\n\n  - BLUE\n    - count how many n-grams match with the human translation(maybe collected from internet)\n  - METEOR\n    - use paraphrases, reordering from dictionaries\n\n##### Attention\n\n- Make connection between the words\n  - Get the comparison between each word of the translation and all the sentence\n  - And learn where to look(translate) next\n- Intra-Attention / Self Attention\n  - LSTM is too slow\n  - So, use only attention\n  - For all the words, get all the attention from the other words\n  - With only this, we can't differ the position of the words, so...\n    - learn a position matrix\n    - or use matrix that was made by many frequency $\\sin$s to present the position\n- Multi-headed Attention\n  - Using more attention methods and\n- 'Attention is all you need'\n  - Attention layers for the encoder and decoder\n  - Fast because can do parallel work using the layers and masking\n\n#### Last Pitching\n\n- Be aware to all the asked question\n  - Your and member's background\n  - How you came up with the number\n- Use all your strength and emphasis in the slide\n- Technology problem \u2192 Business problem\n\n### 1/4\n\n#### Jerusalem\n\n- \u30AA\u30EA\u30FC\u30D6\u5C71\n  - \u30AD\u30EA\u30B9\u30C8\u306B\u3064\u3044\u3066\n    - \u30A8\u30EB\u30B5\u30EC\u30E0\u5165\u57CE\n    - \u6607\u5929\n    - \u518D\u81E8\n\n![](./assets/IMG_8055.jpg)\n\n![](./assets/IMG_8056.jpg)\n\n![](./assets/IMG_8070.jpg)\n\n- \u30E1\u30B7\u30A2\u306E\u964D\u81E8\u3092\u5F85\u3064\u30E6\u30C0\u30E4\u6559\u5F92\u305F\u3061\n\n![](./assets/IMG_8066.jpg)\n\n- \u82E6\u60B6\u306E\u6559\u4F1A\n  - \u8056\u66F8\u3067\u306F\u4F8B\u306E\u5834\u6240\u3068\u3057\u3066\u767B\u5834\n  - \u30A8\u30EB\u30B5\u30EC\u30E0\u304B\u3089\u306F\u591C\u306F\u8FFD\u3044\u51FA\u3055\u308C\u308B\u3002\u57CE\u58C1\u306E\u5916\u306B\u3042\u308B\u3053\u3053\u3067\u591C\u3092\u904E\u3054\u3057\u305F\u3002\n\n![](./assets/IMG_7867.JPG)\n\n![](./assets/IMG_8074.jpg)\n\n- \u6A39\u9F621000\u5E74\u306E\u30AA\u30EA\u30FC\u30D6\n\n![](./assets/IMG_8083.jpg)\n\n![](./assets/IMG_8084.jpg)\n\n- \u30AA\u30EA\u30FC\u30D6\n\n![](./assets/IMG_8087.jpg)\n\n- \u7CDE\u9580\n  - \u751F\u8D04\u306B\u6367\u3052\u305F\u7F8A\u306E\u6B7B\u4F53\u3084\u7CDE\u5C3F\u306A\u3069\u4E0D\u6D44\u306A\u3082\u306E\u3092\u904B\u3073\u51FA\u3059\u306E\u306B\u4F7F\u308F\u308C\u305F\u9580\n  - \u30A8\u30EB\u30B5\u30EC\u30E0\u81EA\u4F53\u306F\u6614\u306F\u3082\u3063\u3068\u6771\u5357\u306B\u3088\u3063\u3066\u3044\u305F\u305F\u3081\uFF0C\u6614\u306F\u3082\u3063\u3068\u4E0B\u3063\u305F\u6240\u306B\u3042\u3063\u305F\n\n![](./assets/IMG_8092.jpg)\n\n![](./assets/IMG_8095.jpg)\n\n- \u5606\u304D\u306E\u58C1\u3053\u3068\u897F\u306E\u58C1\n  - \u89B3\u5149\u5BA2\u3067\u3082\u8CB8\u3057\u30AD\u30D1\u88AB\u308C\u3070\u5165\u308C\u308B\n  - \u7537\u5973\u306E\u30B9\u30DA\u30FC\u30B9\u6BD4\u306F2:1\u3067\u3042\u308B\u3002\u795E\u6BBF\u5185\u306E\u7537\u5973\u304C\u305D\u308C\u305E\u308C\u5165\u308C\u308B\u305D\u308C\u305E\u308C\n- \u30D4\u30E9\u30C8\u7DCF\u7763\n  - \u4E8C\u3064\u306E\u3044\u305F\u5834\u6240\u306E\u8AAC\n  - 2000\u5E74\u524D\u306E\u77F3\u5E8A\u3092\u307F\u3064\u3051\u3066\u7279\u5B9A\n\n\n\n\n\n### 1/6\n\n#### Barak Ben-Avinoam\n\n- Eaglys\n  - Fraud detection\n  - Big cloud companies\n  - Fin-tech\n  - Freemium hasn't to be completely free\n  - If it's freemium, maybe not just the actual customer could try the encryption and give a proof\n  - Make clear the rights that the University owns\n- Product / Market Fit\n  - Between the Early adopters(here, they are people the like it because it's new) and the Majority is a gap\n- How to validate\n  - Survay\n    - easy\n    - just for not complicate product\n  - Lean product process\n    - Iterate process to fit to the market\n  - Analytics Metrics\n    - Many measurements\n".replace('./assets/IMG_7573.jpg', _assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5___default.a).replace('./assets/IMG_7569.jpg', _assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6___default.a).replace('./assets/IMG_7575.jpg', _assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7___default.a).replace('./assets/IMG_7577.jpg', _assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8___default.a).replace('./assets/IMG_7578.jpg', _assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9___default.a).replace('./assets/IMG_7579.jpg', _assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10___default.a).replace('./assets/IMG_7580.jpg', _assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11___default.a).replace('./assets/AlonRosen.jpg', _assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12___default.a).replace('./assets/IzharShay.jpg', _assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13___default.a).replace('./assets/AmirMilo.jpg', _assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14___default.a).replace('./assets/IMG_7596.jpg', _assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15___default.a).replace('./assets/IMG_7599.jpg', _assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16___default.a).replace('./assets/IMG_7607.jpg', _assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17___default.a).replace('./assets/IMG_7608.jpg', _assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18___default.a).replace('./assets/ZvikaBrakerski.jpg', _assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19___default.a).replace('./assets/IMG_7622.jpg', _assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20___default.a).replace('./assets/Grossberg.png', _assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21___default.a).replace('./assets/TanakaMasato.png', _assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22___default.a).replace('./assets/水谷徹哉.png', _assets_png__WEBPACK_IMPORTED_MODULE_23___default.a).replace('./assets/EvaTunik.png', _assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24___default.a).replace('./assets/EletteBoyle.jpg', _assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25___default.a).replace('./assets/MorWeiss.jpg', _assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26___default.a).replace('./assets/IMG_7626.jpg', _assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27___default.a).replace('./assets/BarakBen-Avinoam.jpg', _assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28___default.a).replace('./assets/デリー恵美子.png', _assets_png__WEBPACK_IMPORTED_MODULE_29___default.a).replace('./assets/IMG_7692.jpg', _assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30___default.a).replace('./assets/IMG_7693.jpg', _assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31___default.a).replace('./assets/IMG_7694.jpg', _assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32___default.a).replace('./assets/IMG_7691.jpg', _assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33___default.a).replace('./assets/IMG_7712.jpg', _assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34___default.a).replace('./assets/IMG_7723.jpg', _assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35___default.a).replace('./assets/IMG_7728.jpg', _assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36___default.a).replace('./assets/IMG_7729.jpg', _assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37___default.a).replace('./assets/IMG_7737.jpg', _assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38___default.a).replace('./assets/IMG_7751.jpg', _assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39___default.a).replace('./assets/IMG_7756.jpg', _assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40___default.a).replace('./assets/IMG_7759.jpg', _assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41___default.a).replace('./assets/IMG_7760.jpg', _assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42___default.a).replace('./assets/IMG_7767.jpg', _assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43___default.a).replace('./assets/IMG_7768.jpg', _assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44___default.a).replace('./assets/IMG_7769.jpg', _assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45___default.a).replace('./assets/IMG_7776.jpg', _assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46___default.a).replace('./assets/IMG_7779.jpg', _assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47___default.a).replace('./assets/IMG_7782.jpg', _assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48___default.a).replace('./assets/IMG_7787.jpg', _assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49___default.a).replace('./assets/IMG_7789.jpg', _assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50___default.a).replace('./assets/12:29map.png', _assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51___default.a).replace('./assets/IMG_7979.jpg', _assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52___default.a).replace('./assets/AvnerMor.jpg', _assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53___default.a).replace('./assets/IMG_4972.JPG', _assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54___default.a).replace('./assets/IMG_7983.jpg', _assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55___default.a).replace('./assets/IMG_7984.jpg', _assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56___default.a).replace('./assets/IMG_7985.jpg', _assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57___default.a).replace('./assets/IMG_7986.jpg', _assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58___default.a).replace('./assets/IMG_7988.jpg', _assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59___default.a).replace('./assets/RoeeAhamori.jpg', _assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60___default.a).replace('./assets/HadarTal.jpg', _assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61___default.a).replace('./assets/ShumuliGoldberg.jpg', _assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62___default.a).replace('./assets/IMG_8055.jpg', _assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63___default.a).replace('./assets/IMG_8056.jpg', _assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64___default.a).replace('./assets/IMG_8070.jpg', _assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65___default.a).replace('./assets/IMG_8066.jpg', _assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66___default.a).replace('./assets/IMG_7867.JPG', _assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67___default.a).replace('./assets/IMG_8074.jpg', _assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68___default.a).replace('./assets/IMG_8083.jpg', _assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69___default.a).replace('./assets/IMG_8084.jpg', _assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70___default.a).replace('./assets/IMG_8087.jpg', _assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71___default.a).replace('./assets/IMG_8092.jpg', _assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72___default.a).replace('./assets/IMG_8095.jpg', _assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73___default.a);
      return react__WEBPACK_IMPORTED_MODULE_74___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_75___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1658
        },
        __self: this
      });
    }
  }]);

  return israel;
}(react__WEBPACK_IMPORTED_MODULE_74__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (israel);

/***/ }),

/***/ "./src/concert/articles/israel2.jsx":
/*!******************************************!*\
  !*** ./src/concert/articles/israel2.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/IMG_7573.jpg */ "./src/concert/articles/assets/IMG_7573.jpg");
/* harmony import */ var _assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/IMG_7569.jpg */ "./src/concert/articles/assets/IMG_7569.jpg");
/* harmony import */ var _assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/IMG_7575.jpg */ "./src/concert/articles/assets/IMG_7575.jpg");
/* harmony import */ var _assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/IMG_7577.jpg */ "./src/concert/articles/assets/IMG_7577.jpg");
/* harmony import */ var _assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/IMG_7578.jpg */ "./src/concert/articles/assets/IMG_7578.jpg");
/* harmony import */ var _assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/IMG_7579.jpg */ "./src/concert/articles/assets/IMG_7579.jpg");
/* harmony import */ var _assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/IMG_7580.jpg */ "./src/concert/articles/assets/IMG_7580.jpg");
/* harmony import */ var _assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/AlonRosen.jpg */ "./src/concert/articles/assets/AlonRosen.jpg");
/* harmony import */ var _assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/IzharShay.jpg */ "./src/concert/articles/assets/IzharShay.jpg");
/* harmony import */ var _assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/AmirMilo.jpg */ "./src/concert/articles/assets/AmirMilo.jpg");
/* harmony import */ var _assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/IMG_7596.jpg */ "./src/concert/articles/assets/IMG_7596.jpg");
/* harmony import */ var _assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/IMG_7599.jpg */ "./src/concert/articles/assets/IMG_7599.jpg");
/* harmony import */ var _assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/IMG_7607.jpg */ "./src/concert/articles/assets/IMG_7607.jpg");
/* harmony import */ var _assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/IMG_7608.jpg */ "./src/concert/articles/assets/IMG_7608.jpg");
/* harmony import */ var _assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/ZvikaBrakerski.jpg */ "./src/concert/articles/assets/ZvikaBrakerski.jpg");
/* harmony import */ var _assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/IMG_7622.jpg */ "./src/concert/articles/assets/IMG_7622.jpg");
/* harmony import */ var _assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/Grossberg.png */ "./src/concert/articles/assets/Grossberg.png");
/* harmony import */ var _assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/TanakaMasato.png */ "./src/concert/articles/assets/TanakaMasato.png");
/* harmony import */ var _assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/水谷徹哉.png */ "./src/concert/articles/assets/水谷徹哉.png");
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/EvaTunik.png */ "./src/concert/articles/assets/EvaTunik.png");
/* harmony import */ var _assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/EletteBoyle.jpg */ "./src/concert/articles/assets/EletteBoyle.jpg");
/* harmony import */ var _assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/MorWeiss.jpg */ "./src/concert/articles/assets/MorWeiss.jpg");
/* harmony import */ var _assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/IMG_7626.jpg */ "./src/concert/articles/assets/IMG_7626.jpg");
/* harmony import */ var _assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/BarakBen-Avinoam.jpg */ "./src/concert/articles/assets/BarakBen-Avinoam.jpg");
/* harmony import */ var _assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/デリー恵美子.png */ "./src/concert/articles/assets/デリー恵美子.png");
/* harmony import */ var _assets_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_assets_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/IMG_7692.jpg */ "./src/concert/articles/assets/IMG_7692.jpg");
/* harmony import */ var _assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/IMG_7693.jpg */ "./src/concert/articles/assets/IMG_7693.jpg");
/* harmony import */ var _assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/IMG_7694.jpg */ "./src/concert/articles/assets/IMG_7694.jpg");
/* harmony import */ var _assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/IMG_7691.jpg */ "./src/concert/articles/assets/IMG_7691.jpg");
/* harmony import */ var _assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/IMG_7712.jpg */ "./src/concert/articles/assets/IMG_7712.jpg");
/* harmony import */ var _assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assets/IMG_7723.jpg */ "./src/concert/articles/assets/IMG_7723.jpg");
/* harmony import */ var _assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assets/IMG_7728.jpg */ "./src/concert/articles/assets/IMG_7728.jpg");
/* harmony import */ var _assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assets/IMG_7729.jpg */ "./src/concert/articles/assets/IMG_7729.jpg");
/* harmony import */ var _assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assets/IMG_7737.jpg */ "./src/concert/articles/assets/IMG_7737.jpg");
/* harmony import */ var _assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assets/IMG_7751.jpg */ "./src/concert/articles/assets/IMG_7751.jpg");
/* harmony import */ var _assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./assets/IMG_7756.jpg */ "./src/concert/articles/assets/IMG_7756.jpg");
/* harmony import */ var _assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./assets/IMG_7759.jpg */ "./src/concert/articles/assets/IMG_7759.jpg");
/* harmony import */ var _assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./assets/IMG_7760.jpg */ "./src/concert/articles/assets/IMG_7760.jpg");
/* harmony import */ var _assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./assets/IMG_7767.jpg */ "./src/concert/articles/assets/IMG_7767.jpg");
/* harmony import */ var _assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./assets/IMG_7768.jpg */ "./src/concert/articles/assets/IMG_7768.jpg");
/* harmony import */ var _assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./assets/IMG_7769.jpg */ "./src/concert/articles/assets/IMG_7769.jpg");
/* harmony import */ var _assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./assets/IMG_7776.jpg */ "./src/concert/articles/assets/IMG_7776.jpg");
/* harmony import */ var _assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./assets/IMG_7779.jpg */ "./src/concert/articles/assets/IMG_7779.jpg");
/* harmony import */ var _assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./assets/IMG_7782.jpg */ "./src/concert/articles/assets/IMG_7782.jpg");
/* harmony import */ var _assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./assets/IMG_7787.jpg */ "./src/concert/articles/assets/IMG_7787.jpg");
/* harmony import */ var _assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./assets/IMG_7789.jpg */ "./src/concert/articles/assets/IMG_7789.jpg");
/* harmony import */ var _assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./assets/12:29map.png */ "./src/concert/articles/assets/12:29map.png");
/* harmony import */ var _assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./assets/IMG_7979.jpg */ "./src/concert/articles/assets/IMG_7979.jpg");
/* harmony import */ var _assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./assets/AvnerMor.jpg */ "./src/concert/articles/assets/AvnerMor.jpg");
/* harmony import */ var _assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./assets/IMG_4972.JPG */ "./src/concert/articles/assets/IMG_4972.JPG");
/* harmony import */ var _assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./assets/IMG_7983.jpg */ "./src/concert/articles/assets/IMG_7983.jpg");
/* harmony import */ var _assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./assets/IMG_7984.jpg */ "./src/concert/articles/assets/IMG_7984.jpg");
/* harmony import */ var _assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./assets/IMG_7985.jpg */ "./src/concert/articles/assets/IMG_7985.jpg");
/* harmony import */ var _assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./assets/IMG_7986.jpg */ "./src/concert/articles/assets/IMG_7986.jpg");
/* harmony import */ var _assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./assets/IMG_7988.jpg */ "./src/concert/articles/assets/IMG_7988.jpg");
/* harmony import */ var _assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./assets/RoeeAhamori.jpg */ "./src/concert/articles/assets/RoeeAhamori.jpg");
/* harmony import */ var _assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./assets/HadarTal.jpg */ "./src/concert/articles/assets/HadarTal.jpg");
/* harmony import */ var _assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./assets/ShumuliGoldberg.jpg */ "./src/concert/articles/assets/ShumuliGoldberg.jpg");
/* harmony import */ var _assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./assets/IMG_8055.jpg */ "./src/concert/articles/assets/IMG_8055.jpg");
/* harmony import */ var _assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./assets/IMG_8056.jpg */ "./src/concert/articles/assets/IMG_8056.jpg");
/* harmony import */ var _assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./assets/IMG_8070.jpg */ "./src/concert/articles/assets/IMG_8070.jpg");
/* harmony import */ var _assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./assets/IMG_8066.jpg */ "./src/concert/articles/assets/IMG_8066.jpg");
/* harmony import */ var _assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./assets/IMG_7867.JPG */ "./src/concert/articles/assets/IMG_7867.JPG");
/* harmony import */ var _assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./assets/IMG_8074.jpg */ "./src/concert/articles/assets/IMG_8074.jpg");
/* harmony import */ var _assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./assets/IMG_8083.jpg */ "./src/concert/articles/assets/IMG_8083.jpg");
/* harmony import */ var _assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./assets/IMG_8084.jpg */ "./src/concert/articles/assets/IMG_8084.jpg");
/* harmony import */ var _assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./assets/IMG_8087.jpg */ "./src/concert/articles/assets/IMG_8087.jpg");
/* harmony import */ var _assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var _assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./assets/IMG_8092.jpg */ "./src/concert/articles/assets/IMG_8092.jpg");
/* harmony import */ var _assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var _assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./assets/IMG_8095.jpg */ "./src/concert/articles/assets/IMG_8095.jpg");
/* harmony import */ var _assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(_assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_75__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/concert/articles/israel2.jsx";








































































var israel2 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(israel2, _Component);

  function israel2() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, israel2);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(israel2).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(israel2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n# Israel\n\n12/22 to 1/9\n\n\n\n### 12/22\n\n#### Arrived\n\n- a little bit vip style\n- Good room at Alexander Yanai St.\n- good dinner at Bistro 56, Arena Mall\n\n![Israel Morning](./assets/IMG_7573.jpg)\n\n![\u30E0\u30B5\u30B5\u30D3](./assets/IMG_7569.jpg)\n\n### 12/23\n\n#### Breakfast\n\n- at Isrotel publica\n- buffet style\n- with Yamamoto san\n\n####Program overview : from 9:30\n\n- With Ron and Ilan at Corundum office\n\n- Guy Ganzu\n\n  - a vc\n\n    \u200B\t\t\t\t\n\n- \u200B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\n  \u200B\n\n  \u200B\n\n  \u200B\n\n  \u200B\n\n  Izhat\n\n  -  Social, connecting religious people with high-tech industry\n\n- Masada : 12/28 tour\n\n  - Dannoura of Jewish  \n\n- Some problems with mobile phones, but Ron and Ilan said they took care of it.\n\n- Nice coffee, actually very strong\n\n#### Guy\n\n- purpose : discussion, he said its just his opinion made in Israel\n\n- beach playing, girls\n\n- 3 years of army,\n\n- diamonds factory\n\n- University London\n\n- computing diamond cutting:  the best cut coincidentally was the same with Japans\n\n- Not just investing, feeling like founder.\n\n- http://www.guygamzu.com/  **contacting to Guy**\n\n- He has a package for startups starting their business\n\n- What to expect to Angels\n\n  - High velocity\n  - Depends of each person, too types, low touching more investing number, high touching less investing number\n  - Pitching is future selling: telling a story of future is the key point, if not you'll never get funded\n\n- Iclick\n\n  - projetion technology for children\n  - first for a more in a wider range, then found the kids enjoy them most\n\n- **fiverr**\n\n  - service selling from 5 dollars\n  - trainig giving for freelance\n\n- spike\n\n  - https://www.spikenow.com/\n  - email to conversation\n\n- AIRev pitch\n\n  - Giving an analogy\n  - Sharp and focused on changing the world\n  - Revenue in the second\n\n- Eaglys\n\n  - Focusing on what you want the listeners to bring home\n  - storing telling good, the financing\n  - Too much information, only one use case, make eager the listener with an analogy, why this can change the world and how large it is. Just make it as a magic. How is the secondary,\n  - what if a single word is deprecated\n  - **structure your story, it's not taking**  to make it qualier\n\n- Yspace\n\n  - Miguel: the long span of your project should be more stressed\n\n  - have your product that could make interesting\n\n  - where are you heading, who are you\n\n    - what is going to do for this product\n\n  - b to b or, content, more about yourself not just the product because there are many competitor, **how you delivery and who**\n\n  - key words ,\n\n  - more about the product vision\n\n  - Too soft, 'what can I help him?', so say more details about what you need and why you are telling them. And make examples that help telling that.\n\n  - Give a picture of the future grouth, what's next.\n\n  -  first, maximize the value for small number of people\n\n    \u200B\n\n  \u200B\n\n- what would you do for a longer presentation\n\n  - quality\n\n- Maruyama: scaring part is too boring\n\n  - find out a different part for others, that is interesting\n  - Make difference from not only your people, all who you met.\n  - Opening up\n\n#### Zohar Zisapel\n\n- Japan, not antreprenours, Israel not good at big industries\n- He knows better, we can do it if someone can, Japanese has the opposite  \n- Strategic not so much, too slow,\n- Big companies\n  - Big companies are better! but,,,,\n  - Longer and slower movements, politics, just local interested are conciderated,\n  - How to deal it: brainstorming, competitions, VCs \u2192 even so fail.\n  - The company is managed by the customers, can't make any change freely\n  - The new market is too small for them, thus Toyota didn't take a look at E cars\n- he started with startups, RAD\n  - even in Israel, that time there wasn't any VCs\n  - computers cellphone and internet changed all the communication industry\n  - He mede a group of startups in this chaos.\n  - but after 2000, this change stoped and became satiable industry (until these days)\n  - Even him, couldn't understand that the big componies got the powers in that era\n- How to find a startup field: Find a change\n  - so cyber security field\n    - more pc, connected, clouds, (also the cars)\n    - attackers can attack in any contries and governments doesn't coorporate to pretend them.\n- automobile is the change\n  - E, connected\u2192autonomous, sharing\n  - even so it hasn't chaged in long time for now\n  - car driving will be rading horse\n  - Tesla: chose sport car, with small battery and needs good accelaration, which is good for batery cost and its advantage\n  - it will become a world that no one has responsavility on acssidents\n  - first, starts in some fields which\n    - the easiest field\n    - and the most utilized field\n  - to start then to full auto\n- sharing\n  - easier so faster\n  - so also thier is not protection from copying\n- see the next, and what your bussiness will do there\n- **what is your difference** is the keypoint he sees when investing\n\n#### Dinner at HouseIn\n\n- https://www.google.com/maps?q=32.158931,34.808969&hl=ja-JP&gl=jp\n- A mid-east  food restaurant\n- huge eggplant and delisious salads and meat(beaf and ram)\n- also extraordinary hot pepper\n\n\n\n![](./assets/IMG_7575.jpg)\n\n![](./assets/IMG_7577.jpg)\n\n![](./assets/IMG_7578.jpg)\n\n![](./assets/IMG_7579.jpg)\n\n![](./assets/IMG_7580.jpg)\n\n### 12/24\n\n#### Academic lecture: *Alon Rosen*\n\n![Alon Rosen](./assets/AlonRosen.jpg)\n\n- Prof, ? , MIT, protocols, NOW IDC Herzliya\n- Zvika FHE inventor\n- Elette Homographic secret sharing\n- Format-preserving Encryption\n- E voting\n  - the difficulty is privacy and accuracy\n  - encryption makes a balance on those two\n- voting in US\n  - 8 years ago, still using machine\n  - 1 in 10 people wasn't counted\n  - 70% using \u5857\u308A\u3064\u3076\u3057\u578B\n  - \u9593\u9055\u3048\u3066\u62BC\u3057\u3061\u3083\u3063\u305F\u4EBA\u304C\u591A\u3044\u7591\u60D1\u3067\u30D6\u30C3\u30B7\u30E5\u52DD\u3064\n- voting electronic machine\n  - actually doesn't change at all\n  - not transparency\n- the problem in paper and electric is both has an blackbox after voting\n- if an attacker would attack, they would at the weakest point\n-  the difficulty is privacy and accuracy and encryption makes a balance on those two\n- only care about that the sum is correct and your inside it\n- wombat voting project\n- **zero knowledge**\n  - can tell there is no knowledge leek without defining knowledge\n  - proof: a method for eastablishing truth\n  - I did a Q to Alon and get the response, I attach all\n    - Q: When using the ZN proof to wombat voting project, is the problem \u2018Are all the same votes after they were mixed?\u2019? I understood like this, so that without reveling all the votes, you can prove that they weren\u2019t reduced, added nor changed.\n    - A: Regarding your question about the statement proved in ZK in mixnets, it is an NP statement of the form:  L = {(c_1,...,c_N), (d_1,...,d_N) | c_i's are the input ciphertexts and d_i's are the output ciphertexts and there exist a permutation pi: [N]->[N] so that for all i in [N]  it holds that Dec(d_{pi(i)}) = Dec(c_i)}  (Here the \"secret\" NP witness is pi, and also implicitly the randomness r_i used to generate c_i and s_i used to generate d_i.)  The ZK proof will hide pi and the r_i's and s_i's and convince the verifier that the multiset of votes that are encrypted in (c_1,...,c_N) is identical to the multiset of the votes encrypted in (d_1,...,d_N) (which in particular guarantees that the tally is the same).\n\n#### How Investors think? :  *Izhar Shay*\n\n![Izhar Shay](./assets/IzharShay.jpg)\n\n- primesense : he invested. the base of kinect  and was bought by Apple\n- He used to be elctronic engineer and became investor at canaan in first US, then israel\n- there are many types divided on stage, sectors and geography(so that they can stay close to the companies)\n- invester needs speed\n- invester needs money\n- invester needs impact\n- the global startup ecosystem ranking : https://startupgenome.com/reports/2018/GSER-2018-v1.1.pdf\n- hot trends: fin-tech, cyber security, IoT, autonomous drive, crypto currency\n- impact could be mejored and is growing,\n- examples\n  - ad to e sports\n  - robots cleaning buildings windows\n  - delivery with drones\n  - IoT healthcare cyber\n  - fishing protection\n  - *smell and tattoo*         **winner**\n- How long time does the VCs have?\n  - Normally, VCs set a time limit, about 10 years.\n  - ask how long ago the fund was established\n- today's conern\n  - economic\n  - US and China\n  - US politocs\n  - north cores, Russia, Iran\n  - Mid-East tensions\n  - EU immigration situation\n\n#### equivio:  *Amir Milo*\n\n![](./assets/AmirMilo.jpg)\n\n- \u30EA\u30FC\u30F3\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u7CFB: many interviews\n\n\u200B\n\n- entrepreneur\n\n- equivio is a text managing AI company\n\n- background in computer mathematics\n\n- working in Microsoft and also funding some companies\n\n- Israel : informal and small atmospher\n\n- hard work for the happy-end\n\n- one conference\n\n  - He met a lady that said that the layers are having problems with the legal documents that had to be read \u2014 millions of it.\n\n  - nearly 20 to 40% of documents are near documents(very similar ones)\n\n  - by\n\n    - grouping them and dividing between the layers\n    - email to tree\n\n  - 50% of time saving\n\n  - However, what was the purpose of reading the documents at all??\n\n  - Then started scoring the docs by machine learning\n\n  - If you need high accuracy, you need x% to read to have the 90% of the relevant docs, while if not just read 5%\n\n  - How much would that save money? You should find an exact price.\n\n  - Focus on one, you're a small company\n\n    \u200B\n\n- when doing interview to customers\n\n  - people say yes, than No and I don't know\n  - even, these interviews are good for presenting to VCs\n  - How you're going to use it, workflow\n\n- market leader\n\n  - 20 to 30% of market\n  - How to be one?\n  - Segmentation:  divide the product depended on the market. Start with small markets, get them and then make the next segmentation.\n\n- Diside which feature you DONT do.\n\n  - If you're asking 'is this feature going to be used at all?'', don't make it.\n  - Co-funder and mentor\n\n- AIRev presentation\n\n  - Focus\n\n- \u7D4C\u55B6\u4F01\u753B\u5BA4\u3092\u653B\u6483\u306E\u5BFE\u8C61\u306B\n\n#### Dinner at 'Kyoto'\n\n- the return of the red pepper and the born of red hot chilly pepper\n\n![](./assets/IMG_7596.jpg)\n\n#### Present Preparation\n\n![](./assets/IMG_7599.jpg)\n\n### 12/25\n\n#### Morning\n\n![](./assets/IMG_7607.jpg)\n\n![](./assets/IMG_7608.jpg)\n\n- I found a hot plate, so Made a cheese sand and a nutella sand\n\n#### An intro to Fully Homomorphic Encryption: *Dr. Brakerski*\n\n![](./assets/ZvikaBrakerski.jpg)\n\n- No undergraduates\n- *How much your life is on the cloud?*\n- when sending your data to an outsorcing computation, you want to send an Enc(x),return Enc(f(x)) so that the server could know nothing and you colud get f(x) = Dec(Enc(f(x)))\n- NAND  is universal which means that  with NAND you can compute any circuit\n- you even can't know if the enc has information or hasn't. $Enc(x)\\cong Enc(0)$\n- not just this for application\n- besides Gnetry made FHE, the application was\n- approximate eigenvectors: $\\vec{s}\\cdot C =\\vec{e}+ x\\vec s\\sim x\\vec  s$\n- but the noise will grow, especially when multiplicating\n- $G\\cdot bits(C)=C$\n- so, when definig $\\vec s \\cdot C \\simeq  x\\cdot \\vec s G$ ,can do multiplicating by $C_{mult}=C_1\\cdot G^{-1}(C_2)$ and because $G^{-1}(C)$ is  small, the noise won't growth too much\n- only issue: *Circular security* issue\n- Multi-key FHE\n- Quantum FHE\n  - BJ15,DSS16,M18a\n  - Hybrid Enc. Approach [BJ15] but to universal\n  - Fully QFHE [M18a] but hard to add\n- Constructing from Learning with Errors\n  - used to be an matemathics problem and started to be used as security barrier.\n  - $Enc(x)\\simeq Enc(0)$ How to do this? : Bootstrap. Make an A,$\\eta\\sim0$ that $\\vec{s}A=\\eta$  and a random and small R so that  $\\vec s \\cdot C \\simeq \\vec s \\cdot (AR + xG)=(\\vec s \\cdot A)R + \\vec s\\cdot xG\\simeq \\vec s\\cdot xG$. This makes the $C$ toltaly random not depending on x(=0 or 1). Then, to decrypt, because G and $\\vec s$ are big, if $x = 0$ , $\\vec s\\cdot xG\\sim0$ while if $x=1$, it would be a bigger matrix , so you can\n  -  squentialization: The error when multiplication $\\vec e_{mult}= \\vec e_1 \\cdot G^{-1}(C_2)+x_1\\vec e_2$ became smaller when $\\vec e_1<<\\vec e_2$ rather than the other way. The longer circuit makes larger noise, so when doing  many calculations, sequentialized is better than paralleled.\n  - Barrington's Theorem: Memory could be replaced with Depth\n  - The error end up being just $4^d$ for a depth of d, instead of $(N-1)^d$ that\n- Multi-Key construction\n- Scale Invariance\n  - the error scale doesn't affect, the ration does\n  - before, the error expands with  $\\vec e_1 \\cdot G^{-1}(C_2)$, but the error became $e^2$ and a multiplication with something in $O(N)$.\n- The Ring Setting\n  - make a polynomial that makes a ring\n\n- Introduction to secure computation: *Elette Boylo*\n  - Encryption on Lovers\n  - Computation indistinguishable : $\\cong$\n    - no one can tell which is which if both are given differently\n  - OT\n    - sends the pkey wich the bit you want and another pkey but one that you don't have the skey\n    - You can make complete for secure computation\n    - only revealing $a\\and b$   \n\n#### Meet up\n\n![](./assets/IMG_7622.jpg)\n\n- Kenneth A. Grossberg\n  - Used to be a WBS prof.\n\n![](./assets/Grossberg.png)\n\n- Tanaka  Masato\n  - Helping companies starting business at Israel\n\n![Tanaka Masato](./assets/TanakaMasato.png)\n\n- \u6C34\u8C37\u5FB9\u54C9\n  - Cyber Security Engineer\n  - the decline of the Dark Web on Japan\n\n![\u6C34\u8C37 \u5FB9\u54C9](./assets/\u6C34\u8C37\u5FB9\u54C9.png)\n\n- Eva Tunik\n  - Designer and writer?\n  - Better to wear a team color, Japanese fice are undistinguishable\n  - reconmanded Sakura, but notihng was found\n  - Will meet on Saturday, doing a tour in Tel Aviv\n\n![Eva Tunik](./assets/EvaTunik.png)\n\n- Aki Kumagai\n  - \u7D4C\u6E08\u5B66\u90E83\u5E74\u751F\n  - \u81EA\u5206\u63A2\u3057\n  - \u4EBA\u6750\n  - \u6728\u66DC\u306E\u6388\u696D\u6765\u308B\u304B\u3082\n\n### 12/26\n\n#### Introduction to secure computation: *Elette Boylo*\n\n![](./assets/EletteBoyle.jpg)\n\n- One side doesn't learn nothing\n- Linearly function: $a_A + a_B = a$\u3068\u3057\u3066\u60C5\u5831\u3092\u5206\u6563\n- Hiding each input, can calculate\n  - adding(or) by just normal adding\n  - multiplication(and) by using OT\n    - random shares\n    - kind of quantom computing(\u96F0\u56F2\u6C17)\n    - but needs some communications between\n  - Garbled circuits\n    - not only for secure computing, also for knowing if who computes did the right function\n  - the classic methods need too much communication bits\n- Homomorphic Secret Sharing\n  - Not-linear functions\n  - not only sending numbers or imformations, also function sendings\n  - also for voting(updating the server)\n    - $f_A(j)+f_B(j)=f_{i,1}(j)$\u3088\u308A\uFF0C\u81EA\u5206\u304C\u3069\u3053\u306B\u6295\u7968\u3057\u305F\u306E\u304B\u308F\u304B\u3089\u306A\u3044\u307E\u307E\uFF0C\u6700\u5F8C\u306B\u8DB3\u3057\u5408\u308F\u305B\u308B\u3053\u3068\u306B\u3088\u308A\u6295\u7968\u7D50\u679C\u306F\u8A08\u7B97\u3067\u304D\u308B\n- Contractions\n  - pseudorandom function\n    - the undestinguishness of the difference between the truly random fiction and the real function(encryption)\n    - PSG is an func that duble one total random seed\n    - GGM is a tree of random rows made from a random seed by PSG\n    - $\\Delta=S_1+S_2$,so that when the difference disappears, the next b become 0\n  - RMS\n    - the multiplication is only allowed between any output and the first input\n    - the red dots can be selected freely, while if they are too sparse, the steps will be longer and took time, on the other hand, if they are more close, there would be more error dut to stuck one in the middle of the two.\n\n#### Format-Preserving Encryption 1, Intro and Def: *Mor Weiss*\n\n![](./assets/MorWeiss.jpg)\n\n- story\n  - T-Mobile's clould were attacked and leaked the Social Security and ID number\n- deterministic\n  - no randomizing function on encryption\n  - can see if they are the same\n- Tweakable\n  - dictionary attack\n    - for deterministic enc., if you know one time the dec. of an X, the next time you see them, you already find that that is X\n    - only way to recover is to change the key\n  - solution: Tweak\n    - use an additional information called Tweak Space and use to encrypt\n    - kind of public key and secret key\n- Format-Preserving Encryption *FPE*\n  - problem\n    - applications won't be used at all\n    - need different type of table\n  - solution: so make the space(format) of the message and the cryptography space be the same\n    - if not, just returns error\n  - pseudorandom privacy\n  - single point indistinguishability\n    - weaker\n    - indistinguishable between actual cyfertext and random cyfertext\n    - ?? \u81EA\u7136\u8A00\u8A9E\u306EFormat-Preserving Encryption\n  - Message Privacy\n    - with the ciphertext  you can't assume any function of the message\n  - Message Recovery\n    - with the ciphertext  you can't assume the message\n  - PRP $\\Leftrightarrow$ SPI $\\Rightarrow$ MP $\\Rightarrow$  MR\n- Constructing\n  - purpose: make a universal method to make a FPE\n  - Int-FPE\n  - Feistel Network\n    - \u565B\u307E\u305B\u308B\u95A2\u6570F\u306F\u9006\u6F14\u7B97\u4E0D\u53EF\u80FD\u3067\u3082\u3044\u3044(\u6697\u53F7\u306A\u306E\u306B)\n  - Generalize\n    - for $\\Z_{ab}$\n    - for $\\{1,...,m-1\\}^n$\n- General Format\n  - Social numbers don't have 666xxxxxx\n  - What to do if the encryption is 666xxxxxx? :  encrypt again!\n  - the same in date: ddmmyyyy\n  - the efficiency: average = rate of the valid space\n  - with ranking anything you want, any type colud be designed\n- Rank and Unrank\n  - ranking bad could make a security problem\n\n####  Dinner\n\n- At the apartment with Asahi sensei\n- Maruyamasan and Imabayashisan made Yakiniku and kind of Yakimeshi\n- Good cheese\n\n![](./assets/IMG_7626.jpg)\n\n### 12/27\n\n#### What to do when you have an idea? : *Barak Ben-Avinoam*\n\n![BarakBen-Avinoam](./assets/BarakBen-Avinoam.jpg)\n\n- secure AI = an AI that offers security or an AI that is secure?\n- **entrepreneur is like a game, so what?**\n- an enpty stadium\n- for having fun, sometimes fails\n- Real Start \u2014 7 statements$^{TM}$\n  - Need exists\n  - Customers interested in addressing it: real interest and need\n  - No good solution:  how the customer is dealing with it in the daily life\n  - We have a good solution: not the perfect, a simple solution for a specific problem\n  - Customers are willing to pay for it\n  - We have a way to get it to the market\n  - The market is big enough\n- Evaluate these and discuss\n  - with better evidence\n  - have a meeting and discuss if we have a good answer\n- Realize that I will fail because of timing\n  - How to deal it?\n  - Pretotyping to the rescue\n    - **Make sure you are building the right 'it' before you build 'it' right.**\n    - Never ask people \"How you think about 'it'\".  They will be in the Thoughtland.  In there any idea could both succeess or fail\n  - Make tests\n    - Before makeing a speech to text product, did a test of instead of computer, another person in other room will type it.\n  - What we need\n    - Evidence not opinion\n    - That srengthen our 7 statements\n    - Found by us\n    - In an objective way\n  - Fail fast\n    - if not, you won't have a way to listen to the real\n  - Making an artificial artificial inteligence\n  - Make a Fake door\n    - see if the customers have at least interest\n  - One-Night Stand: Just show an example, not the real\n  - Show how it would look like\n\n- Where to get money from\n  - The three money: Friends and Family and Fools\n    - Not good\n  - From specialist\n  - Bilateral Funds\n  - Technology incubator\n  - For VC\n    - Search a VC that invest on your field and stage\n    - also when it was established\n  - The art of Pitching by *Guy Kawasaki*\n    - https://www.youtube.com/watch?v=MerKnt0BHdA\n    - less word better actually\n    - 10 slides\n    - when to talk: specially about of the team\n    - the inventors won't belive your numbers, they just want to see your thought process\n    - projection: the growth based on numbers\n    - timeline: the plan based on text\n    - 20 minutes\n    - $\\ge$30 point font\n  - premoney evluation and post-money evaluation\n  - equity value\n    - your own % of the company could be smaller\n    - even though, with the growth of the company your actual owning value could grow\n- start-up nation\n  - low Power Distance Score: Everyone can say whatever you want to anyone\n- Lean Startup\n  - leanstartupmachine\n  - https://www.youtube.com/watch?v=HhoducyStMw\n  - Validation Board\n- version of models and data\n\n#### Before Dinner\n\n- went to search for somewhere to buy the dinner with Maruyama-san And Ko-san\n- walked for almost one hour but nowhere was open due to Shabbat\n- Although, the restaurants were open, so we went to Meat Bar with Asahi sensei\n\n### 12/28\n\nWe went to a tour with Emiko Deery\n\n![\u30C6\u3099\u30EA\u30FC\u6075\u7F8E\u5B50](./assets/\u30C6\u3099\u30EA\u30FC\u6075\u7F8E\u5B50.png)\n\n#### Al-Maghtas\n\n\uFF0F\uFF0A<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4826.8939128648035!2d35.543917404816916!3d31.837146147341297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cca67b01fdf29%3A0x994b7cf22b0d6dbc!2sQasr+el+Yahud!5e0!3m2!1sja!2sil!4v1546255531427\" width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\uFF0A\uFF0F\n\n- Where Jesus get his Baptism\n- Now it's a tourist place, but for many years was closed due to the miles\n- Prohibited to close the river and the fence\n\n![](./assets/IMG_7692.jpg)\n\n![](./assets/IMG_7693.jpg)\n\n![](./assets/IMG_7694.jpg)\n\n![](./assets/IMG_7691.jpg)\n\n#### Masada\n\n- Where many Judas was besided for 3 years.\n- When was finally broken the entrance, decided to suicide\n- 10 men killed almost of the resident, then dicided who kill the other 9 using lottery.\n- It was because for Judas suiciding was prohibited.\n- Emiko san dropped her book to a very dangerous place\n\n![](./assets/IMG_7712.jpg)\n\n![](./assets/IMG_7723.jpg)\n\n![](./assets/IMG_7728.jpg)\n\n![](./assets/IMG_7729.jpg)\n\n![](./assets/IMG_7737.jpg)\n\n![](./assets/IMG_7751.jpg)\n\n![](./assets/IMG_7756.jpg)\n\n![](./assets/IMG_7759.jpg)\n\n![](./assets/IMG_7760.jpg)\n\n![](./assets/IMG_7767.jpg)\n\n![](./assets/IMG_7768.jpg)\n\n![](./assets/IMG_7769.jpg)\n\n![](./assets/IMG_7776.jpg)\n\n![](./assets/IMG_7779.jpg)\n\n#### Dead Sea\n\n- Ate Macdonals at the hotel pool\n- The hotel has a beach and pools with Dead sea water\n- Hurts, very cold, but was exciting\n- Dinner was at the Meat Bar, Herzliya\n\n![](./assets/IMG_7782.jpg)\n\n![](./assets/IMG_7787.jpg)\n\n![](./assets/IMG_7789.jpg)\n\n### 12/29\n\nI went to Tel Aviv with Eva Tunik. Walked from the Museum of Art to Jaffa\n\n![12:29map](./assets/12:29map.png)\n\n### 12/30\n\n![](./assets/IMG_7979.jpg)\n\n####  *Barak Ben-Avinoam*\n\n- 'Problem' slide is crutial\n\n- Total Available Market $\\supset$ Saervise Available Market $\\supset$Service Obtainable Market\n\n- Market Research\n\n  - Proper Objective Research\n  - Primary research\n    - Observation\n      - Easiest but could make some bias\n    - Focus groups\n      - Also could make bias\n      - Better than observation because we can choose who to do the research\n    - In-Depth Interviews\n      - Interview to experter on some people\n    - Questionarios\n      - Difficult to see who they are\n  - Secondary Research\n    - Research on the Internet\n    - Not random, using **Competitors and Government reports**\n    - The newest report could be expensive, so use one or two year older one\n\n  1. Ask the customers what they wan\n  2. Ask the customers who theu dream of\n  3. Talk to 'non-customers'\n  4. Talk to competitors\n     - in seminors, events without identifying your purpose clearly\n  5. Understand the competitors buissiness model\n     - as a late comer, you should be 10 times better\n  6. Know the positioning map of the industry\n  7. Talk to distributors\n     - Knows the customers and their needsz\n  8. $\\large Test$\n\n  - STP\n\n  - Segmentation\n\n    - Understanding the customers need\n    - First dicide some axis and evaluate\n\n  - Targeting\n\n    - Select which customer to aim\n\n  - Positionning\n\n  - Eaglys segmantation\n\n    - People who want to utilize sensitive data\n\n      \u200B\n\n- segment and target the best one, then do all\n\n- Market potential\n\n  - Type of customer\n  - Where\n  - How many\n  - How often\n  - Competition\n  - Price\n  - Growth\n  - My share\n\n  1. define target market\n  2. geographic buondaries\n  3. average expenditures for the category\n  4. average household income in the area\n  5. $MP = N \\times P \\times Q (Market \\  potential,Number \\  of \\  possible \\  buyers,Price,annual \\ consumption )$\n\n- Pricing Strategies\n\n  - New product  \n  - there are many mechanism to charge money\n\n  1. first detirmine the objective\n\n  2. demand\n\n  3. estimating cost\n\n     - water, electricity, and so on\n\n  4. analyze competitor's\n\n  5. selecting the pricing method\n\n     - based on the objective\n     - skiming\n       - high setting\n       - buyers must want the product at the price\n       - for startup, inbounding strategy\n     - penetration\n       - low settings\n       - analyze the market constantly and react quickly\n     - line\n       - think the line where their product are selling\n     - optional\n       - additional\n       - easy when selling something expensive already\n     - captive\n       - set a place or system that they can only use your product\n       - printer and Desney land\n     - two-part\n       - fixed fee and usage\n     - by-product\n       - selling something that has made as a result of the main product\n     - bundle\n       - value set\n     - discount and allowance\n       - quantity discount\n       - cash discount\n       - seasonal discount\n       - functional discount(ikea making your furniture)\n     - segmented pricing\n       - selling in different segment\n       - changing the customers and product function could change the price\n       - also time: uber at rush time\n       - market should be segmentable\n     - phycological pricing\n     - promotional pricing\n       - not all time\n       - loss-leader: one product discounting and buys others also\n       - cash rebates: 'return 5 dollars!' but nobody do\n       - Risks: damaging the brand, price war\n       -\n\n     \u200B\n\n  6. final pricing\n\n- Bussiness model canvas\n\n  - also making a profile of the customer\n  - value all of your ploduct and connect to customers pain and gain\n  - and for the price, think about how much the customer would put, Price on Value\n  - demand and supply\n  - Don't promise more than you actually can\n  - Alternatives\n  - cost\n    - fixed cost: even selling nothing\n    - variable costs: when sell something\n    - economy of scale\n  - Diveide in what we konw and what we don't know\n  - What,How,Who,Why: Change at least two\n  - dynamic pricing\n\n- tommorow: pitch\n\n#### Avner Mor: Unbound CEO\n\n![](./assets/AvnerMor.jpg)\n\n- multi-party computation: one \u4F8B is who is going to pay without knowing each one's salary\n- two cryptography prof.s established\n- all using mobil and cloud, no one knows from where comes\n- hardwere too slow and no innovative\n- software platform : distrivute the trust\n- key based security is not enough\n- make the key is invisible, even in the middle in the calculation the key still shared and uncomposed\n- the distribution change per time\n- security company *gartner*: Hype Cycle for data Security 2018\n- sell use case, not security\n- scalability / automative / computing\n- key control / crypto of things(for IoT) / crypto assset security platform(block chain)\n- main market is cloud\n- each one is a different go-to-market\n- with the same API used in hardware\n- don't like custormisation\n- first days, got rejected, deliver the message\n- fully license, not saas\n- first patent was made in the university, then trying to establish more than 5 per year\n- who have the pain and money: for them it was on finance\n- what is his/her plan\n- first stared on US, other rejected\n- working with the customeres is the best, they tell us what to do\n- at large companies being innovative quite difficult : 'don't touch my customer and API'\n- EAGLYS\n  - duality\n\n#### Dinner\n\n- We bought big steaks and tacos at the Arena Moll and cooked\n\n![](./assets/IMG_4972.JPG)\n\n![](./assets/IMG_7983.jpg)\n\n![](./assets/IMG_7984.jpg)\n\n### 12/31\n\n#### Morning\n\n- I ate nutella\n\n![](./assets/IMG_7985.jpg)\n\n#### *Barak Ben-Avinoam*\n\n- Elevator Pitch\n\n  - Give enough information to make the audience want to know more\n\n  1. Balidation board\n\n  2. bussiness model canvas\n\n     - research\n\n     - competitive analisys table\n\n     - subjective but you have to show that yours the best\n\n       |        | your company                       | comp 1 | 2    | 3    |\n       | ------ | ---------------------------------- | ------ | ---- | ---- |\n       | Teck   | \u2714\uFE0E                                  | \xD7      | \xD7    | \xD7    |\n       | Price  | 5                                  | 3      | 4    | 1    |\n       | Patent | \u2714\uFE0E\u2714\uFE0E                                 | \u2714\uFE0E\u2714\uFE0E\u2714\uFE0E    | \u2714\uFE0E    | \u2714\uFE0E    |\n       | ...    | **our company should be the best** |        |      |      |\n\n  3. investor Deck(Presentation)\n\n     - 10 slides, 20 minuts, 30 font\n\n  4. elevator pitch\n\n     - story-telling\n     - hook\n\n  - EAGLYS pitch\n    - how big is the problem: the problem could be solved on different way so mention and discuss about that\n    - confusing: answering the problem, not generalize\n    - more specific: the pricing structure\n    - additonal slide for detail of the core security\n    - no need of 'company growth' on the market slide\n    - team: mention of the trustful bussiness person\n    - NET: \u5229\u76CA, not in yen, in dollars\n  - AIRev\n    - Number of the problem, specially how much\n    - More about the trainig process: who and how\n  - Yspace\n    - For Roppongi maybe 'google and ex. are there'\n    - mention education in the begining\n    - clearlize the problem:\n    - is not the solution of the problem: It seems clear for me but maybe is just an assumption and is  incorrect\n    - uniqueness\n    - better picture\n    - one side arrow only\n    - put a slide about the Mars project award for the history of Yspace\n  - I was wondering if you could arrange an meating for us \u307F\u305F\u3044\u306A\u304A\u9858\u3044\n\n- Financial\n\n  - Reporting about back: finalcial report\n\n  - Profit & Loss statements\n\n    |                        | 2015.12.31 | 2016.12.31 | 2017.12.31 |\n    | ---------------------- | ---------- | ---------- | ---------- |\n    | sales / revenues       |            | 2.0        | 30.0       |\n    | cost of sales(COGS)    |            | -1.0       | -15.0      |\n    | **gross profit**       |            | 1.0        | 30.0       |\n    | Development            | -5.0       | -8.0       |            |\n    | tax                    |            | -1.0       |            |\n    | **Loss**               |            |            |            |\n    | ...                    |            |            |            |\n    | **Net Profit**         | -5.0       | -8.0       | 4.0        |\n    | capital investment     | -1.5       | -2.0       | -2.5       |\n    | issuanve of shares     | 20.0       |            |            |\n    | Loans                  |            | 6.0        |            |\n    | Loans repayments       |            |            | -5.0       |\n    | **Net cash flow**      | 13.5       | -4.0       | -3.5       |\n    | Cash - Opening Balance | 0.0        | 13.5       | 9.5        |\n    | Cash - Closing Balance | 13.5       | 9.5        | 6.0        |\n\n    - Burn rate(monthly, annual): the net cash flow\n    - Capitalization table\n\n    | Share holder | #    | %    |\n    | ------------ | ---- | ---- |\n    | Barak        | 200  | 50   |\n    | Joe          | 100  | 25   |\n    | Sarah        | 100  | 25   |\n    | Total        | 400  | 100  |\n\n    - common shares (\u682A) / preferred shares: have differnts rights\n\n  - Cash flow statement\n\n  - Planing with Project Timeline\n\n    - Using Google\n    - Each line is a task (what)\n    - Start timeand end time (when)\n    - **Resources** (how)\n    - make in differnt category\n\n  - From the planing you can make the Projection\n\n    - Each costs and Revenue\n    - Cash flow positive point and Breack even point\n    - Make the detail, then summarize for the investors\n\n- With Lawyer\n\n  - Valuate\n  - Dividents(\u914D\u5F53)\n    - if you can't give, loan\n      - straight (10% of the investment) or cumulative (every time recouting the 10%)\n  - Liquidation\n    - Straight or Participating\n  - Board Seats\n    - who can hire and fire the CEO\n  - Option Pool\n    - a pool of shares for stock option\n    - 10-25%\n    - Cashless or Exercize price\n  - Anti-dilution Example\n    - Ratchet: giving additional stocks if you sell the stocks in different price\n  - Drag-Along\n    - Drag-Along Right: the right to force a transaction\n  - Founders Restrictive Stock\n  - Pay-to-play\n    - poker\n  - Redemption Rights\n    - the right to buy the VCs share\n    - also other VC can buy instead of the founders\n\n#### *Amir Ofek*\n\n- **Cyberint**\n\n- First board member then CEO\n  - first the fouco-CEO\n- Tavel guy\n- manage detection and responding to the cyber attack\n  - cloud base\n  - platfrom and addition\n- fraud  \n- Asia is the main market\n  - not Japan, Japan don't wanna see the problem accting like \u30C0\u30C1\u30E7\u30A6\n    - language\n    - culture: differnce real yes or unfortunaly yes\n    - cyberism(softbank)\n    - contraction speed: desision making and plan changing\n  - recently in US\n  - moinly E-comers and finance\n- technology\n  - in Israel, where of the Army they ware\n  - innovative experience\n  - team corporative\n  - experience is curtial\n- Working in the army again one weak per year\n  - recruiting\n- first see the revenue then hire\n- even in Israel young people are wanting more about spare time\n- pay attention on new employees  and hear their feelings\n\n![](./assets/IMG_7986.jpg)\n\n#### Dinner\n\n- Maruyamasan made penne with salmon\n- Job san made some thai food\n- Ozoni\n\n![](./assets/IMG_7988.jpg)\n\n### 1/1\n\n#### *Roee Aharoni*\n\n![](./assets/RoeeAhamori.jpg)\n\n##### Why Neural Nets for NLP\n\n- *Graham Neubig* legend of NLP\n\n- level of language\n\n  - morphology(\u5358\u8A9E) / syntax(order) / semantics(meanings)\n\n- syntax:We can use rules :happy:\n\n- But, every rules have exception\n\n- And, what if we don't know any word of a language?\n\n- Nerural Net is just one of the tools\n\n- Classification\n\n  - 'I hate this movie' and 'I love this movie'\n  - Bag of Words **BOW** model: sum of vector\n    - but, can't analyze the convination of words such as 'Thers is nothing i don't love about this movie.'\n  - Continius Bag of Words **CBOW** model: sum, then multiple a matrix\n  - Deeo CBOW: sum \u2192 \u7DDA\u5F62 \u2192 tanh \u2192 \u7DDA\u5F62 \u2192 tanh \u2192 \u7DDA\u5F62 \u2192 result\n    - can save the convention and make another cell of the convention not leaner\n    - the tanh is the activation function\n    - can add a loss function that delite the information that we don't need, for example like the information of race\n\n- New Loss function: if the model is bad, higher\n\n- implementation\n\n  - static: tensorflow,theano, mxnet\n\n    - first decide the all the graph\n      - can't do a dinamic framework\n      - not good for NLP\n\n  - Dynamic: $\\part y/net$, Chainer, PYTORCH\n\n    - less optimization\n    - better for NLP, because can dynamicaly change the parameters numbers\n\n    1. Create a model\n    2. create a graph\n    3. calculate\n    4. back propagation and update\n    5. for 2~5, do it on each input\n\n    - defaultdict\n\n    -  loss func: $-\\log$ because when the classification is bad, meaning that the place of the right tag  is near 0, the loss will be very high, while in the opposite it wolud be 0\n\n      ```python\n      w2i = defaultdict(lambda : len(w2i))#add an id to each word, if exist that is in the dict, if not gives a new id\n      model = dy.Model()\n      trainer = dy. AdamTrainer(model)\n      W_sm = model.add_lookup_parameters((nwords,ntags))\n      b_sm = model.add_parametors((ntags))\n      ```\n\n##### Simple Exercise for NLP\n\n- Language models\n  - rank the language to see which is the most probabl\n  - Log-likelihood: $LL(\\varepsilon_{test})=\\sum_{E\\in\\varepsilon_{test}}\\log P(E)$\n  - Per-word Log-likelihood: $WLL(\\varepsilon_{test})=\\frac{1}{\\sum_{E\\in\\varepsilon_{test}}|E|}\\sum_{E\\in\\varepsilon_{test}}\\log P(E)$\n  - Per word cross entropy: $H(\\varepsilon_{test})=\\frac{1}{\\sum_{E\\in\\varepsilon_{test}}|E|}\\sum_{E\\in\\varepsilon_{test}}-\\log_2 P(E)$\n  - Perplexity: $ppl(\\varepsilon_{test})=2^{H(\\varepsilon_{test})}=e^{-WLL(\\varepsilon_{test})}$\n  - 'Jane went to the store' \u2192 <font color='green'>High</font>\n  - 'store to went Jane the' \u2192 <font color=red>Low</font>\n  - for each order and word make a word vector\n  - softmax part is the heaviest\n- Unkonwn word\n  - Byte per Encoding **BPE**\n    - First, divide in every character, then see the character combination and add the most frecuent combination as a new 'character'.\n    - I| w|e|n|t   t|o  k|y|o|t|o \u2192 to is in everywhere \u2192 I| w|e|n|t   <font color='red'>to</font>  k|y|o|t|o\n- Non Lenear\n  - Use Neural Network\n- Training tricks\n  - shfful the data\n  - other optimizaion\n  - Dropout: imitate multy different nural networks\n- Batching\n  - do the model coputing in parallel:\n- word embeddings\n  - word2vec\n    - kind of language model using predicting the next word, predict the middle word\n    - \u2192 get\n  - distributional\n    - similar words appear in similar contexts\n    - $\\leftrightarrow$non-distributional ex. math \u2192 \u7B97\u6570 and \u6570\u5B66 so \u7B97\u6570 $\\approx$ \u6570\u5B66\n  - discriminate\n\n#### The challenge of seling in start-ups *Hadar Tal*\n\n![](./assets/HadarTal.jpg)\n\n- Selling infrastracture\n\n- **Work all the base things form the day zero.**\n\n- The Challenge\n\n  - how to grow\n\n- Finish the incubator phase\n\n  - first paying will customor\n  - business model\n  - Budget Authority Need Timeline **BANT** understanding\n\n- mapping bussiness point\n\n  - Customer\n    - who? b or c\n    - Who do sign the purchase oder?\n  - Contacts\n    - decision maker\n    - additional (R&D, sales)\n    - find with who the decision maker will talk\n  - Budget\n    - Does the customer have budget? (\u4E88\u7B97)\n    - How to use the existing budget to your purpose.\n    - Or there isn't budget, need to find a new 'line'.\n  - Regions\n    - Where?\n    - Try to be focused\n  - Partners\n    - list of potential partners\n    - better to find a way to do your own selling connection\n    - if you need partner, just for specific regions\n    - maintaining the connection with the partner, not only finding and making a contract\n\n- Selling phases\n\n  - Terms\n\n    - High touch, Mid touch, Low touch,No touch\n\n      - How frecuantly you should have conntact with the customer\n      - How much will cost to maintain customers\n\n    - Hunting\n\n      - Start-up\n\n      1. lead\n         - list of the potential customer\n         - first meeting\n         - LinkedIn Navigator: not free\n      2. contact\n         - maybe not so bussinessly\n      3. contact with value\n         - Personal relationship\n      4. meeting\n         - Demo: Demonstration of your business\n         - **Make next meeting**\n      5. account management\n         - Even after a happy meeting, there is a quiet period\n         - Find a reason to keep contact\n         - Use LinkedIn Navigator to keep an eye on the customer's action\n         - prepare for the next phase, ask such as the document formats\n      6. price proposal\n         - based on document\n         - template containing your value proposition\n         - and in English\n      7. Negotiation\n         - Mapping who is going to take the decision\n      8. closing\n\n    - Farming\n\n      - secure a returning business\n      - next to Hunting\n\n- Pipeline management\n\n  - **Customer Relationship Management**  CRM\n\n    - https://www.capterra.com/customer-relationship-management-software/\n    - mail integration\n    - integration to marketing system\n    -\n\n  - Leads classification\n\n    - What was the problem of that Lead, meeting, Demo?\n\n    - evaluate the situation\n\n      | probability[%] | situation                               |\n      | -------------- | --------------------------------------- |\n      | 10             | initial contact                         |\n      | 20             | solution learning                       |\n      | 40             | evaluation                              |\n      | 60             | proposal sent and decision process      |\n      | 90             | waiting for an official signed document |\n      | 100            | official signed document                |\n\n  - Think dayly of the short, mid, long term opportunities of customers and contract\n\n- Metrics & Sales targets\n\n  - Metrics\n    - \u200B\t\t\t\t\t\tHow much will take since booking to sales\t\t\t\t\t\t\n    - number of new accounts\n    - ACV, ARR(\u65E2\u5B58\u306E\u9867\u5BA2\u304C\u5168\u9867\u5BA2\u306B\u5360\u3081\u308B\u5272\u5408), CAC(\u4E00\u9867\u5BA2\u7372\u5F97\u306E\u5358\u4FA1), CHRUM(\u96E2\u308C\u308B\u5272\u5408)\n  - Sales targets\n    - number of new accounts\n\n- Building Sales Team\n\n  - first one person\n    - Start up mentality\n    - Hunter\n    - Already did it\n  - then making a professional team\n\n- secure the firest paying customer\n\n  - understand the pain\n  - don't be afraid with customers\n  - 'I will check something and come back.'\n  - 'There is nothing for free.'\n\n- Together Each Achieves More **TEAM**\n\n### 1/2\n\n#### *Roee Aharoni*\n\n- window(how many words you take from after and before the word)\n\n  - small : synthetic\n\n  - large: semantic\n\n- skip-gram\n\n  - take a word a predict the neighbors\n\n- GloVe\n\n  - comparing the probability of the relationship with a word\n\n- linear pca and non-linear t-SNE\n\n- Evaluation type\n\n- Intrinsic: using scores\n\n  - relatedness\n  - analogy\n  - categorization\n  - selectional preferences\n\n- extrinsic : using actual usages\n\n  - Initialize: you can choose if freezing the model while the task or not\n  - Concatenate:\n\n- embedding is useful for training with small amount of data\n\n  - some problems\n    - bias, same word with different meanings, dog an dogs are too different\n\n- NN for NLP\n\n  - 1D CNN kind of thing\n    - can do Bags of n-grams without the explosion of memory\n    - also faster because parallelize is able\n  - Stacked\n    - can save the computation by striding but also can save the information of the entirety sentence\n    - relu or soft plus are better\n  - Structured convolution\n    - using syntax: the relation between words such as Object, \u4FEE\u98FE\u8A9E, ...\n  - Using to sentence pairs\n    - Q&A\n  - CNN is easy to backtrack because you can see where the result came from due to the max pulling. Thus the understanding is better and can implement by analyzing the result\n  - Lower the model is better\n\n- RNN\n\n  - Recurrent: Depends on the previous computation\n  - Bi-RNN: Not only the previous words, the following words\n  - Vanilla RNN problem: Vanishing Gradient, the loss don\u2019t depends on so much on the farer inputs\n\n- LSTM\n\n  - add an linear computation (sum) to a memory cell so to solve the RNN\u2019s problem\n  - not so sensitive as RNN\n  - LSTM problem\n    - too slow\n    - solve with mini-batching and Masking\n    - or with bucketing and sorting\n\n### LaeGeex *Shmuli Goldberg*\nVP Marketing\n\n![](./assets/ShumuliGoldberg.jpg)\n\n- shmul@gmail.com\n- Analyze Contract documents using AI\n- Everyone can concentrate on their(company) needs\n- Every employee at LeaGeex can hire any employee\n  - So that, everyone contributes to make the company stronger because each can fill their weak point.\n\n\n\n### 1/3\n\n#### *Roee Aharoni*\n\n##### Conditional language Model\n\n- Conditional language Model\n\n  1. Encode the sentence (or, what you want to input)\n  2. Decode the translation(or what you want to output)\n\n  - Most important NLP model\n  - Beam search: select the k best words and for each continue predicting until all end(output \\</s>)\n\n- Ensembling\n\n  - make the probability for each model and compare\n  - log-linear  or linear\n    - multiplication or adding\n\n- Stacking\n\n  - We have two different models\n  - Score the prediction of one of the models on the another\n  - We can evaluate the translation using\n  - **Expensive one to rerank** because for generating the bigger one takes more time, but you can use it to evaluate and imitate\n\n- Evaluate\n\n  - BLUE\n    - count how many n-grams match with the human translation(maybe collected from internet)\n  - METEOR\n    - use paraphrases, reordering from dictionaries\n\n##### Attention\n\n- Make connection between the words\n  - Get the comparison between each word of the translation and all the sentence\n  - And learn where to look(translate) next\n- Intra-Attention / Self Attention\n  - LSTM is too slow\n  - So, use only attention\n  - For all the words, get all the attention from the other words\n  - With only this, we can't differ the position of the words, so...\n    - learn a position matrix\n    - or use matrix that was made by many frequency $\\sin$s to present the position\n- Multi-headed Attention\n  - Using more attention methods and\n- 'Attention is all you need'\n  - Attention layers for the encoder and decoder\n  - Fast because can do parallel work using the layers and masking\n\n#### Last Pitching\n\n- Be aware to all the asked question\n  - Your and member's background\n  - How you came up with the number\n- Use all your strength and emphasis in the slide\n- Technology problem \u2192 Business problem\n\n### 1/4\n\n#### Jerusalem\n\n- \u30AA\u30EA\u30FC\u30D6\u5C71\n  - \u30AD\u30EA\u30B9\u30C8\u306B\u3064\u3044\u3066\n    - \u30A8\u30EB\u30B5\u30EC\u30E0\u5165\u57CE\n    - \u6607\u5929\n    - \u518D\u81E8\n\n![](./assets/IMG_8055.jpg)\n\n![](./assets/IMG_8056.jpg)\n\n![](./assets/IMG_8070.jpg)\n\n- \u30E1\u30B7\u30A2\u306E\u964D\u81E8\u3092\u5F85\u3064\u30E6\u30C0\u30E4\u6559\u5F92\u305F\u3061\n\n![](./assets/IMG_8066.jpg)\n\n- \u82E6\u60B6\u306E\u6559\u4F1A\n  - \u8056\u66F8\u3067\u306F\u4F8B\u306E\u5834\u6240\u3068\u3057\u3066\u767B\u5834\n  - \u30A8\u30EB\u30B5\u30EC\u30E0\u304B\u3089\u306F\u591C\u306F\u8FFD\u3044\u51FA\u3055\u308C\u308B\u3002\u57CE\u58C1\u306E\u5916\u306B\u3042\u308B\u3053\u3053\u3067\u591C\u3092\u904E\u3054\u3057\u305F\u3002\n\n![](./assets/IMG_7867.JPG)\n\n![](./assets/IMG_8074.jpg)\n\n- \u6A39\u9F621000\u5E74\u306E\u30AA\u30EA\u30FC\u30D6\n\n![](./assets/IMG_8083.jpg)\n\n![](./assets/IMG_8084.jpg)\n\n- \u30AA\u30EA\u30FC\u30D6\n\n![](./assets/IMG_8087.jpg)\n\n- \u7CDE\u9580\n  - \u751F\u8D04\u306B\u6367\u3052\u305F\u7F8A\u306E\u6B7B\u4F53\u3084\u7CDE\u5C3F\u306A\u3069\u4E0D\u6D44\u306A\u3082\u306E\u3092\u904B\u3073\u51FA\u3059\u306E\u306B\u4F7F\u308F\u308C\u305F\u9580\n  - \u30A8\u30EB\u30B5\u30EC\u30E0\u81EA\u4F53\u306F\u6614\u306F\u3082\u3063\u3068\u6771\u5357\u306B\u3088\u3063\u3066\u3044\u305F\u305F\u3081\uFF0C\u6614\u306F\u3082\u3063\u3068\u4E0B\u3063\u305F\u6240\u306B\u3042\u3063\u305F\n\n![](./assets/IMG_8092.jpg)\n\n![](./assets/IMG_8095.jpg)\n\n- \u5606\u304D\u306E\u58C1\u3053\u3068\u897F\u306E\u58C1\n  - \u89B3\u5149\u5BA2\u3067\u3082\u8CB8\u3057\u30AD\u30D1\u88AB\u308C\u3070\u5165\u308C\u308B\n  - \u7537\u5973\u306E\u30B9\u30DA\u30FC\u30B9\u6BD4\u306F2:1\u3067\u3042\u308B\u3002\u795E\u6BBF\u5185\u306E\u7537\u5973\u304C\u305D\u308C\u305E\u308C\u5165\u308C\u308B\u305D\u308C\u305E\u308C\n- \u30D4\u30E9\u30C8\u7DCF\u7763\n  - \u4E8C\u3064\u306E\u3044\u305F\u5834\u6240\u306E\u8AAC\n  - 2000\u5E74\u524D\u306E\u77F3\u5E8A\u3092\u307F\u3064\u3051\u3066\u7279\u5B9A\n\n\n\n\n\n### 1/6\n\n#### Barak Ben-Avinoam\n\n- Eaglys\n  - Fraud detection\n  - Big cloud companies\n  - Fin-tech\n  - Freemium hasn't to be completely free\n  - If it's freemium, maybe not just the actual customer could try the encryption and give a proof\n  - Make clear the rights that the University owns\n- Product / Market Fit\n  - Between the Early adopters(here, they are people the like it because it's new) and the Majority is a gap\n- How to validate\n  - Survay\n    - easy\n    - just for not complicate product\n  - Lean product process\n    - Iterate process to fit to the market\n  - Analytics Metrics\n    - Many measurements\n".replace('./assets/IMG_7573.jpg', _assets_IMG_7573_jpg__WEBPACK_IMPORTED_MODULE_5___default.a).replace('./assets/IMG_7569.jpg', _assets_IMG_7569_jpg__WEBPACK_IMPORTED_MODULE_6___default.a).replace('./assets/IMG_7575.jpg', _assets_IMG_7575_jpg__WEBPACK_IMPORTED_MODULE_7___default.a).replace('./assets/IMG_7577.jpg', _assets_IMG_7577_jpg__WEBPACK_IMPORTED_MODULE_8___default.a).replace('./assets/IMG_7578.jpg', _assets_IMG_7578_jpg__WEBPACK_IMPORTED_MODULE_9___default.a).replace('./assets/IMG_7579.jpg', _assets_IMG_7579_jpg__WEBPACK_IMPORTED_MODULE_10___default.a).replace('./assets/IMG_7580.jpg', _assets_IMG_7580_jpg__WEBPACK_IMPORTED_MODULE_11___default.a).replace('./assets/AlonRosen.jpg', _assets_AlonRosen_jpg__WEBPACK_IMPORTED_MODULE_12___default.a).replace('./assets/IzharShay.jpg', _assets_IzharShay_jpg__WEBPACK_IMPORTED_MODULE_13___default.a).replace('./assets/AmirMilo.jpg', _assets_AmirMilo_jpg__WEBPACK_IMPORTED_MODULE_14___default.a).replace('./assets/IMG_7596.jpg', _assets_IMG_7596_jpg__WEBPACK_IMPORTED_MODULE_15___default.a).replace('./assets/IMG_7599.jpg', _assets_IMG_7599_jpg__WEBPACK_IMPORTED_MODULE_16___default.a).replace('./assets/IMG_7607.jpg', _assets_IMG_7607_jpg__WEBPACK_IMPORTED_MODULE_17___default.a).replace('./assets/IMG_7608.jpg', _assets_IMG_7608_jpg__WEBPACK_IMPORTED_MODULE_18___default.a).replace('./assets/ZvikaBrakerski.jpg', _assets_ZvikaBrakerski_jpg__WEBPACK_IMPORTED_MODULE_19___default.a).replace('./assets/IMG_7622.jpg', _assets_IMG_7622_jpg__WEBPACK_IMPORTED_MODULE_20___default.a).replace('./assets/Grossberg.png', _assets_Grossberg_png__WEBPACK_IMPORTED_MODULE_21___default.a).replace('./assets/TanakaMasato.png', _assets_TanakaMasato_png__WEBPACK_IMPORTED_MODULE_22___default.a).replace('./assets/水谷徹哉.png', _assets_png__WEBPACK_IMPORTED_MODULE_23___default.a).replace('./assets/EvaTunik.png', _assets_EvaTunik_png__WEBPACK_IMPORTED_MODULE_24___default.a).replace('./assets/EletteBoyle.jpg', _assets_EletteBoyle_jpg__WEBPACK_IMPORTED_MODULE_25___default.a).replace('./assets/MorWeiss.jpg', _assets_MorWeiss_jpg__WEBPACK_IMPORTED_MODULE_26___default.a).replace('./assets/IMG_7626.jpg', _assets_IMG_7626_jpg__WEBPACK_IMPORTED_MODULE_27___default.a).replace('./assets/BarakBen-Avinoam.jpg', _assets_BarakBen_Avinoam_jpg__WEBPACK_IMPORTED_MODULE_28___default.a).replace('./assets/デリー恵美子.png', _assets_png__WEBPACK_IMPORTED_MODULE_29___default.a).replace('./assets/IMG_7692.jpg', _assets_IMG_7692_jpg__WEBPACK_IMPORTED_MODULE_30___default.a).replace('./assets/IMG_7693.jpg', _assets_IMG_7693_jpg__WEBPACK_IMPORTED_MODULE_31___default.a).replace('./assets/IMG_7694.jpg', _assets_IMG_7694_jpg__WEBPACK_IMPORTED_MODULE_32___default.a).replace('./assets/IMG_7691.jpg', _assets_IMG_7691_jpg__WEBPACK_IMPORTED_MODULE_33___default.a).replace('./assets/IMG_7712.jpg', _assets_IMG_7712_jpg__WEBPACK_IMPORTED_MODULE_34___default.a).replace('./assets/IMG_7723.jpg', _assets_IMG_7723_jpg__WEBPACK_IMPORTED_MODULE_35___default.a).replace('./assets/IMG_7728.jpg', _assets_IMG_7728_jpg__WEBPACK_IMPORTED_MODULE_36___default.a).replace('./assets/IMG_7729.jpg', _assets_IMG_7729_jpg__WEBPACK_IMPORTED_MODULE_37___default.a).replace('./assets/IMG_7737.jpg', _assets_IMG_7737_jpg__WEBPACK_IMPORTED_MODULE_38___default.a).replace('./assets/IMG_7751.jpg', _assets_IMG_7751_jpg__WEBPACK_IMPORTED_MODULE_39___default.a).replace('./assets/IMG_7756.jpg', _assets_IMG_7756_jpg__WEBPACK_IMPORTED_MODULE_40___default.a).replace('./assets/IMG_7759.jpg', _assets_IMG_7759_jpg__WEBPACK_IMPORTED_MODULE_41___default.a).replace('./assets/IMG_7760.jpg', _assets_IMG_7760_jpg__WEBPACK_IMPORTED_MODULE_42___default.a).replace('./assets/IMG_7767.jpg', _assets_IMG_7767_jpg__WEBPACK_IMPORTED_MODULE_43___default.a).replace('./assets/IMG_7768.jpg', _assets_IMG_7768_jpg__WEBPACK_IMPORTED_MODULE_44___default.a).replace('./assets/IMG_7769.jpg', _assets_IMG_7769_jpg__WEBPACK_IMPORTED_MODULE_45___default.a).replace('./assets/IMG_7776.jpg', _assets_IMG_7776_jpg__WEBPACK_IMPORTED_MODULE_46___default.a).replace('./assets/IMG_7779.jpg', _assets_IMG_7779_jpg__WEBPACK_IMPORTED_MODULE_47___default.a).replace('./assets/IMG_7782.jpg', _assets_IMG_7782_jpg__WEBPACK_IMPORTED_MODULE_48___default.a).replace('./assets/IMG_7787.jpg', _assets_IMG_7787_jpg__WEBPACK_IMPORTED_MODULE_49___default.a).replace('./assets/IMG_7789.jpg', _assets_IMG_7789_jpg__WEBPACK_IMPORTED_MODULE_50___default.a).replace('./assets/12:29map.png', _assets_12_29map_png__WEBPACK_IMPORTED_MODULE_51___default.a).replace('./assets/IMG_7979.jpg', _assets_IMG_7979_jpg__WEBPACK_IMPORTED_MODULE_52___default.a).replace('./assets/AvnerMor.jpg', _assets_AvnerMor_jpg__WEBPACK_IMPORTED_MODULE_53___default.a).replace('./assets/IMG_4972.JPG', _assets_IMG_4972_JPG__WEBPACK_IMPORTED_MODULE_54___default.a).replace('./assets/IMG_7983.jpg', _assets_IMG_7983_jpg__WEBPACK_IMPORTED_MODULE_55___default.a).replace('./assets/IMG_7984.jpg', _assets_IMG_7984_jpg__WEBPACK_IMPORTED_MODULE_56___default.a).replace('./assets/IMG_7985.jpg', _assets_IMG_7985_jpg__WEBPACK_IMPORTED_MODULE_57___default.a).replace('./assets/IMG_7986.jpg', _assets_IMG_7986_jpg__WEBPACK_IMPORTED_MODULE_58___default.a).replace('./assets/IMG_7988.jpg', _assets_IMG_7988_jpg__WEBPACK_IMPORTED_MODULE_59___default.a).replace('./assets/RoeeAhamori.jpg', _assets_RoeeAhamori_jpg__WEBPACK_IMPORTED_MODULE_60___default.a).replace('./assets/HadarTal.jpg', _assets_HadarTal_jpg__WEBPACK_IMPORTED_MODULE_61___default.a).replace('./assets/ShumuliGoldberg.jpg', _assets_ShumuliGoldberg_jpg__WEBPACK_IMPORTED_MODULE_62___default.a).replace('./assets/IMG_8055.jpg', _assets_IMG_8055_jpg__WEBPACK_IMPORTED_MODULE_63___default.a).replace('./assets/IMG_8056.jpg', _assets_IMG_8056_jpg__WEBPACK_IMPORTED_MODULE_64___default.a).replace('./assets/IMG_8070.jpg', _assets_IMG_8070_jpg__WEBPACK_IMPORTED_MODULE_65___default.a).replace('./assets/IMG_8066.jpg', _assets_IMG_8066_jpg__WEBPACK_IMPORTED_MODULE_66___default.a).replace('./assets/IMG_7867.JPG', _assets_IMG_7867_JPG__WEBPACK_IMPORTED_MODULE_67___default.a).replace('./assets/IMG_8074.jpg', _assets_IMG_8074_jpg__WEBPACK_IMPORTED_MODULE_68___default.a).replace('./assets/IMG_8083.jpg', _assets_IMG_8083_jpg__WEBPACK_IMPORTED_MODULE_69___default.a).replace('./assets/IMG_8084.jpg', _assets_IMG_8084_jpg__WEBPACK_IMPORTED_MODULE_70___default.a).replace('./assets/IMG_8087.jpg', _assets_IMG_8087_jpg__WEBPACK_IMPORTED_MODULE_71___default.a).replace('./assets/IMG_8092.jpg', _assets_IMG_8092_jpg__WEBPACK_IMPORTED_MODULE_72___default.a).replace('./assets/IMG_8095.jpg', _assets_IMG_8095_jpg__WEBPACK_IMPORTED_MODULE_73___default.a);
      return react__WEBPACK_IMPORTED_MODULE_74___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_75___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1658
        },
        __self: this
      });
    }
  }]);

  return israel2;
}(react__WEBPACK_IMPORTED_MODULE_74__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (israel2);

/***/ }),

/***/ "./src/concert/articles/test13.jsx":
/*!*****************************************!*\
  !*** ./src/concert/articles/test13.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/concert/articles/test13.jsx";



var test13 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test13, _Component);

  function test13() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test13);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test13).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test13, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n\n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    }
  }]);

  return test13;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test13);

/***/ }),

/***/ "./src/concert/articles/testn2.jsx":
/*!*****************************************!*\
  !*** ./src/concert/articles/testn2.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/concert/articles/testn2.jsx";



var testn2 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(testn2, _Component);

  function testn2() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, testn2);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(testn2).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(testn2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## \u8A18\u4E8B\u306E\u524A\u9664\n\n\u300C\u8A18\u4E8B\u524A\u9664.app\u300D\u3092\u8D77\u52D5\u3057\u8A18\u4E8B\u306E\u60C5\u5831\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\uFF0C\u8A18\u4E8B\u306E\u516C\u958B\u3092\u6B62\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u65E2\u306B\u3042\u308B\u8A18\u4E8B\u3092\u624B\u76F4\u3057\u3059\u308B\u5834\u5408\u3082\uFF0C\u4E00\u5EA6\u8A18\u4E8B\u3092\u6D88\u3057\u305F\u4E0A\u3067\u518D\u5EA6\u300C\u8A18\u4E8B\u66F4\u65B0.app\u300D\u3067\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n\u203B\u8A18\u4E8B\u3092\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u306F\uFF0C\u305D\u306E\u8A18\u4E8B\u3067\u8A2D\u5B9A\u3057\u305FURL\u304C\u5FC5\u8981\u3067\u3059\u3002\u308F\u304B\u3089\u306A\u3044\u5834\u5408\u306F\uFF0C\u300C\u8A18\u4E8B\u691C\u7D22.app\u300D\u3067\u8A18\u4E8B\u306E\u30BF\u30A4\u30C8\u30EB\u304B\u3089\u691C\u7D22\u3067\u304D\u307E\u3059\u3002\n\n\u203B\u4E00\u5EA6\u524A\u9664\u3057\u305F\u8A18\u4E8B\u306F\u5143\u306B\u623B\u305B\u306A\u3044\u306E\u3067\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002\n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    }
  }]);

  return testn2;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (testn2);

/***/ }),

/***/ "./src/concert/articles/typora.jsx":
/*!*****************************************!*\
  !*** ./src/concert/articles/typora.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _assets_typora_download_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/typora_download.png */ "./src/concert/articles/assets/typora_download.png");
/* harmony import */ var _assets_typora_download_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_typora_download_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_typora_setting1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/typora_setting1.png */ "./src/concert/articles/assets/typora_setting1.png");
/* harmony import */ var _assets_typora_setting1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_typora_setting1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_typora_setting2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/typora_setting2.png */ "./src/concert/articles/assets/typora_setting2.png");
/* harmony import */ var _assets_typora_setting2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_typora_setting2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_typora_setting3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/typora_setting3.png */ "./src/concert/articles/assets/typora_setting3.png");
/* harmony import */ var _assets_typora_setting3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_typora_setting3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_typora_setting5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/typora_setting5.png */ "./src/concert/articles/assets/typora_setting5.png");
/* harmony import */ var _assets_typora_setting5_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_typora_setting5_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_typora_setting4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/typora_setting4.png */ "./src/concert/articles/assets/typora_setting4.png");
/* harmony import */ var _assets_typora_setting4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_typora_setting4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/concert/articles/typora.jsx";









var typora =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(typora, _Component);

  function typora() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, typora);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(typora).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(typora, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n# Typora\u306E\u4F7F\u3044\u65B9\n\n### Typora\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\n\n\u8A18\u4E8B\u3054\u3068\u306B\u66F8\u304D\u65B9\u3068\u30B9\u30BF\u30A4\u30EB\u306B\u4E00\u8CAB\u6027\u3082\u305F\u305B\u3064\u3064\u7C21\u5358\u306B\u4F5C\u6210\u3067\u304D\u308B\u3088\u3046\u306BTypora\u3068\u3044\u3046\u30A2\u30D7\u30EA\u3092\u4F7F\u304A\u3046\u3068\u601D\u3063\u3066\u3044\u307E\u3059\u3002\u4F7F\u308F\u306A\u304F\u3066\u3082\u304B\u3051\u308B\u306E\u3067\uFF0C\u30A2\u30D7\u30EA\u3092\u5165\u308C\u3089\u308C\u306A\u3044\uFF0C\u3082\u3057\u304F\u306F\u30D1\u30BD\u30B3\u30F3\u3058\u3083\u306A\u304F\u30B9\u30DE\u30DB\u3067\u66F8\u304D\u305F\u3044\u3068\u3044\u3046\u65B9\u306F\u4EE5\u4E0B\u306EDillinger\u306A\u3069\u3092\u3054\u4F7F\u7528\u304F\u3060\u3055\u3044\u3002\u4F7F\u3044\u65B9\u306F[**Markdown\u3068\u306F**](#Markdown\u3068\u306F)\u3092\u53C2\u8003\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n**Dillinger**\n\nhttps://dillinger.io/\n\n#### \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u65B9\u6CD5\n\n\u4EE5\u4E0B\u306E\u30B5\u30A4\u30C8\u304B\u3089Typora\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002(\u4ECA\u306E\u3068\u3053\u308D)\u7121\u6599\u3067\u3059\u3002\n\nhttps://typora.io/\n\n\u5C11\u3057\u30B9\u30AF\u30ED\u30FC\u30EB\u3059\u308B\u3068\u51FA\u3066\u304F\u308B\u53F3\u4E0A\u306EDownload\u30DC\u30BF\u30F3\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002\u30D1\u30BD\u30B3\u30F3\u306EOS\u306B\u5408\u308F\u305B\u3066\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\n\n![Typora Download](./assets/typora_download.png)\n\n\u3042\u3068\u306F\u624B\u9806\u306B\u6CBF\u3063\u3066\u9032\u3081\u3066\u304F\u3060\u3055\u3044\u3002\n\n### Typora\u306E\u8A2D\u5B9A\n\nTypora\u3092\u958B\u3051\u307E\u3057\u305F\u3089\u3044\u304F\u3064\u304B\u8A2D\u5B9A\u3092\u52A0\u3048\u307E\u3059\u3002\n\n\u305D\u306E\u307E\u307E\u3067\u3082\u4F7F\u3048\u307E\u3059\u304C\uFF0C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u306E\u898B\u305F\u76EE\u3092\u518D\u73FE\u3059\u308B\u305F\u3081\uFF0CNews\u30DA\u30FC\u30B8\u3068Concert\u30DA\u30FC\u30B8\u306B\u5BFE\u5FDC\u3057\u305F\u30C6\u30FC\u30DE\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\n\n\u2460 OS\u306B\u3088\u3063\u3066\u5834\u6240\u306F\u5C11\u3057\u9055\u3044\u307E\u3059\u304C\uFF0C\u4E0A\u306E\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u304B\u3089\u30D5\u30A1\u30A4\u30EB>\u8A2D\u5B9A(mac\u306A\u3089Typora>\u8A2D\u5B9A)\u3067\u8A2D\u5B9A\u753B\u9762\u3092\u958B\u304D\u307E\u3059\u3002\n\n![Typora Settings](./assets/typora_setting1.png)\n\n\u2461 \u8A2D\u5B9A\u753B\u9762\u304B\u3089\u300C\u30C6\u30FC\u30DE\u30D5\u30A9\u30EB\u30C0\u3092\u958B\u304F\u300D\u3092\u9078\u629E\u3057\u307E\u3059\u3002\n\n![Typora Settings](./assets/typora_setting2.png)\n\n\u2462 themes\u30D5\u30A9\u30EB\u30C0\u304C\u958B\u304D\u307E\u3059\u3002\u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u5143\u3005\u5165\u3063\u3066\u3044\u305F\u300C\u66F4\u65B0\u300D\u30D5\u30A9\u30EB\u30C0\u306E\u4E2D\u304B\u3089\uFF0CStyle\u30D5\u30A9\u30EB\u30C0\u3092\u9078\u629E\u3057\u4E2D\u8EAB\u3092\u5168\u3066themes\u30D5\u30A9\u30EB\u30C0\u306B\u79FB\u3057\u307E\u3059\u3002\n\n![Add css themes](./assets/typora_setting3.png)\n\n\u2463\u8A2D\u5B9A\u753B\u9762\u306B\u623B\u308A\uFF0C\u753B\u50CF\u633F\u5165\u306E\u3068\u3053\u308D\u3092'Copy image to ./assets'\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002(Windows\u306E\u5834\u5408\u306F\u8A2D\u5B9A\u65B9\u6CD5\u304C\u5C11\u3057\u9055\u3046\u304B\u3082\u3057\u308C\u307E\u305B\u3093)\n\n![Path Setting](./assets/typora_setting5.png)\n\n\u2464 \u3053\u3053\u307E\u3067\u3067\u304D\u305F\u3089\uFF0CTypora\u3092**\u4E00\u5EA6\u7D42\u4E86\u3057\u518D\u8D77\u52D5\u3057\u307E\u3059\u3002**\n\n\u2465 \u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u304B\u3089\u30C6\u30FC\u30DE\u3092\u9078\u629E\u3057\uFF0C\u66F8\u304D\u305F\u3044\u8A18\u4E8B\u306E\u7A2E\u985E\u306B\u3088\u3063\u3066News\u307E\u305F\u306FConcert\u3092\u9078\u629E\u3057\u307E\u3059\u3002\n\n![Theme Setting](./assets/typora_setting4.png)\n\n### Markdown\u3068\u306F\n\nWeb\u30DA\u30FC\u30B8\u3092\u66F8\u304D\u305F\u3044\u5834\u5408\uFF0C\u666E\u901A\u306FHTML\u3068\u547C\u3070\u308C\u308B\u3082\u306E\u3092\u4F7F\u3046\u304B\uFF0C\u666E\u901A\u306E\u30E1\u30E2\u5E33\u306A\u3069\u306B\u66F8\u3044\u305F\u3082\u306E\u3092\u305D\u306E\u307E\u307E\u8868\u793A\u3057\u307E\u3059\u3002\u305F\u3060HTML\u306F\u66F8\u304D\u305F\u304B\u3092\u5B66\u3076\u306E\u306B\u6642\u9593\u304C\u304B\u304B\u308A\uFF0C\u307E\u305F\u30E1\u30E2\u5E33\u306B\u66F8\u304F\u306E\u306F\u7C21\u5358\u3067\u3059\u304C\u305D\u306E\u307E\u307E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306B\u8F09\u305B\u305F\u3089\u753B\u50CF\u3084\u30EA\u30F3\u30AF\u3092\u5165\u308C\u3089\u308C\u307E\u305B\u3093\u3002\n\n\u305D\u3053\u3067\u4E8C\u3064\u306E\u4E2D\u9593\u5730\u70B9\u3068\u3057\u3066Markdown\u3068\u3044\u3046\u66F8\u304D\u65B9\u3092\u4F7F\u3044\u307E\u3059\u3002\u3068\u308A\u3042\u3048\u305ATypora(\u3082\u3057\u304F\u306FDillinger) \u3067\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u308A\uFF0C\u4EE5\u4E0B\u306E\u56DB\u89D2\u306B\u56F2\u307E\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30D4\u30DA\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002\n\n```markdown\n# \u30BF\u30A4\u30C8\u30EB\n### \u30B5\u30D6\u30BF\u30A4\u30C8\u30EB\n##### \u5C0F\u898B\u51FA\u3057\n\n\\#+\u534A\u89D2\u30B9\u30DA\u30FC\u30B9 \u3092\u66F8\u304F\u3068\u52DD\u624B\u306B\u30BF\u30A4\u30C8\u30EB\u306B\u306A\u308B\u3002\\#\u5897\u3084\u305B\u3070\u6587\u5B57\u304C\u5C0F\u3055\u304F\u306A\u308B\u3002\n\n![\u306A\u3093\u304B\u306E\u753B\u50CF](https://homepages.cae.wisc.edu/~ece533/images/tulips.png)\n- \u5DE6\u306E\u3088\u3046\u306B'-'+\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3067\n- \u30EA\u30B9\u30C8\u304C\u66F8\u3051\u308B\n1. \u6570\u5B57+'.'\u3067\n2. \u756A\u53F7\u4ED8\u304D\u30EA\u30B9\u30C8\u3082\u304B\u3051\u308B\n<div style=\"color:red;\">HTML\u3082\u66F8\u304D\u305F\u3051\u308C\u3070\u304B\u3051\u308B</div>\n<iframe width=\"560\" height=\"410\" src=\"https://www.youtube.com/embed/oPG2Yw-eVNE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n**Youtube\u3082\u8868\u793A\u3067\u304D\u308B\u3002**\n*\\*\u3067\u56F2\u3080\u3068\u30A4\u30BF\u30EA\u30C3\u30AF\u4F53\uFF0C\\*\\*\u3067\u56F2\u3081\u3070\u30DC\u30FC\u30EB\u30C9\u4F53\u306B\u306A\u308B*\n```\n\n\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308B\u306F\u305A\u3067\u3059\u3002(\u30B9\u30DE\u30DB\u3067Dillinger\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u53F3\u4E0A\u306E\u76EE\u306E\u30DE\u30FC\u30AF\u3092\u62BC\u3057\u307E\u3059\u3002)\n\n# \u30BF\u30A4\u30C8\u30EB\n\n### \u30B5\u30D6\u30BF\u30A4\u30C8\u30EB\n\n##### \u5C0F\u898B\u51FA\u3057\n\n\n\n\\# + \u534A\u89D2\u30B9\u30DA\u30FC\u30B9 \u3092\u66F8\u304F\u3068\u52DD\u624B\u306B\u30BF\u30A4\u30C8\u30EB\u306B\u306A\u308B\u3002\\#\u5897\u3084\u305B\u3070\u6587\u5B57\u304C\u5C0F\u3055\u304F\u306A\u308B\u3002\n\n\n\n![\u306A\u3093\u304B\u306E\u753B\u50CF](https://homepages.cae.wisc.edu/~ece533/images/tulips.png)\n\n- \u5DE6\u306E\u3088\u3046\u306B'-'+\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3067\n- \u30EA\u30B9\u30C8\u304C\u66F8\u3051\u308B\n1. \u6570\u5B57+'.'\u3067\n2. \u756A\u53F7\u4ED8\u304D\u30EA\u30B9\u30C8\u3082\u304B\u3051\u308B\n\n<div style=\"color:red;\">HTML\u3082\u66F8\u304D\u305F\u3051\u308C\u3070\u304B\u3051\u308B</div>\n\n<iframe width=\"560\" height=\"410\" src=\"https://www.youtube.com/embed/oPG2Yw-eVNE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n**Youtube\u3082\u8868\u793A\u3067\u304D\u308B\u3002**\n\n*\\*\u3067\u56F2\u3080\u3068\u30A4\u30BF\u30EA\u30C3\u30AF\u4F53\uFF0C\\*\\*\u3067\u56F2\u3081\u3070\u30DC\u30FC\u30EB\u30C9\u4F53\u306B\u306A\u308B*\n\n\u3053\u306E\u3088\u3046\u306B\uFF0C\u3044\u304F\u3064\u304B\u306E\u8A18\u53F7\u3092\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u306B\u3088\u308A\u30DA\u30FC\u30B8\u306B\u5FC5\u8981\u306A\u6700\u4F4E\u9650\u306E\u30EC\u30A4\u30A2\u30A6\u30C8\u304C\u7D44\u3081\u307E\u3059\u3002\n\n\u8A73\u3057\u3044\u66F8\u304D\u65B9\u306F\u300C[Markdown\u3068\u306F](./Markdown\u3068\u306F.html)\u300D\u3084\u4EE5\u4E0B\u306E\u30B5\u30A4\u30C8\u306A\u3069\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\u3002\n\n<https://www.asobou.co.jp/blog/bussiness/markdown>\n\n### Typora\u306E\u4FBF\u5229\u306A\u4F7F\u3044\u65B9\n\nTypora\u3067\u66F8\u304F\u3068\u304D\u306B\u3088\u304F\u4F7F\u3046\u6A5F\u80FD\u3084\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3067\u3059\u3002Mac\u7248\u3067\u78BA\u8A8D\u3057\u3066\u3044\u307E\u3059\u304C\uFF0C\u591A\u5206\u4ED6\u306EOS\u3067\u3082\u3067\u304D\u308B\u306F\u305A\u3067\u3059\u3002\u554F\u984C\u3042\u308A\u307E\u3057\u305F\u3089manimigue0701@gmail.com\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002\n\n\u8A73\u3057\u304F\u306F(\u82F1\u8A9E\u3067\u3059\u304C)[\u516C\u5F0F\u30B5\u30DD\u30FC\u30C8\u30B5\u30A4\u30C8](http://support.typora.io/)\u3082\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002\u65E5\u672C\u8A9E\u3067\u3057\u305F\u3089[\u3053\u3061\u3089](https://qiita.com/AnchorBlues/items/532dba54cd2f0465af97)\u3084[\u3053\u3061\u3089](https://qiita.com/kenji_shinoda/items/97320dc3f40a4c98df35)\u306E\u30B5\u30A4\u30C8\u3082\u8A73\u3057\u3044\u3067\u3059\u3002\n\n###### \u76EE\u6B21\n\n[\u753B\u50CF\u633F\u5165](#\u753B\u50CF\u633F\u5165)\n\n[\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8](#\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8)\n\n#### \u753B\u50CF\u633F\u5165\n\n\u753B\u50CF\u306E\u633F\u5165\u65B9\u6CD5\u306B\u306F\u8272\u3005\u3042\u308A\u307E\u3059\u3002\u6CE8\u610F\u3059\u308B\u70B9\u3068\u3057\u3066\u306F\uFF0C\u81EA\u5206\u306E\u753B\u50CF\u306E\u5834\u5408\uFF0Cassets\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u753B\u50CF\u3057\u304B\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u307E\u305B\u3093\u3002[Typora\u306E\u8A2D\u5B9A](#Typora\u306E\u8A2D\u5B9A)\u2463\u3092\u3057\u3066\u3042\u308C\u3070\u81EA\u52D5\u3067assets\u30D5\u30A9\u30EB\u30C0\u306B\u30B3\u30D4\u30FC\u3055\u308C\u308B\u306E\u3067\u3053\u308C\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\n\n1. **\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7**\n\n   \u753B\u50CF\u3092\u633F\u5165\u3057\u305F\u3044\u7B87\u6240\u306B\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\n\n   <iframe width=\"560\" height=\"450\" src=\"https://www.youtube.com/embed/X16uwgThWUE\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n2. **Markdown\u5F62\u5F0F\u3067\u8A18\u8FF0\u3059\u308B**\n\n   !\\[\u30BF\u30A4\u30C8\u30EB\\]\\(URL\\)\u3068\u66F8\u304F\u3053\u3068\u306B\u3088\u308A\uFF0C\u753B\u50CF\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\u306F\u3053\u306E\u8A18\u8FF0\u3092\u81EA\u52D5\u3067\u3084\u3063\u3066\u304F\u308C\u308B\u3060\u3051\u3067\uFF0C\u3084\u3063\u3066\u3044\u308B\u3053\u3068\u306F\u540C\u3058\u3067\u3059\u3002\n\n3. **\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u304B\u3089\uFF0C\u7DE8\u96C6>\u753B\u50CF\u30C4\u30FC\u30EB\u304B\u3089\u753B\u50CF\u306E\u633F\u5165\uFF0C\u8A2D\u5B9A\u3092\u884C\u3046**\n\n   \u3088\u308A\u8A73\u3057\u3044\u8A2D\u5B9A\u304C\u884C\u3048\u307E\u3059\u3002\n\n#### \u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\n\n\u8A73\u3057\u304F\u306F[\u516C\u5F0F\u30B5\u30A4\u30C8](<http://support.typora.io/Shortcut-Keys/>)\u3078\n\n| \u6A5F\u80FD            | Widows/Linux     | Mac                 |\n| ------------------- | ---------------- | ------------------- |\n| \u30BB\u30FC\u30D6               | Ctrl + S         | Command + S         |\n| \u540D\u524D\u3092\u3064\u3051\u3066\u4FDD\u5B58 / \u8907\u88FD | Ctrl + Shift + S | Command + Shift + S |\n| \u898B\u51FA\u30571~6          | Ctrl + 1~6         | Command + 1~6     |\n| \u691C\u7D22          | Ctrl + F         | Command + F      |\n| \u8A2D\u5B9A          | Ctrl + ,         | Command + ,         |\n| \u30DC\u30FC\u30EB\u30C9\u4F53 | Ctrl + B | Command + B |\n| \u30A4\u30BF\u30EA\u30C3\u30AF\u4F53 | Ctrl + I | Command + I |\n| \u4E0B\u7DDA | Ctrl + U | Command + U |\n| \u30EA\u30F3\u30AF | Ctrl + K | Command + K |\n".replace('./assets/typora_download.png', _assets_typora_download_png__WEBPACK_IMPORTED_MODULE_5___default.a).replace('./assets/typora_setting1.png', _assets_typora_setting1_png__WEBPACK_IMPORTED_MODULE_6___default.a).replace('./assets/typora_setting2.png', _assets_typora_setting2_png__WEBPACK_IMPORTED_MODULE_7___default.a).replace('./assets/typora_setting3.png', _assets_typora_setting3_png__WEBPACK_IMPORTED_MODULE_8___default.a).replace('./assets/typora_setting5.png', _assets_typora_setting5_png__WEBPACK_IMPORTED_MODULE_9___default.a).replace('./assets/typora_setting4.png', _assets_typora_setting4_png__WEBPACK_IMPORTED_MODULE_10___default.a);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      });
    }
  }]);

  return typora;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (typora);

/***/ }),

/***/ "./src/concert/components.js":
/*!***********************************!*\
  !*** ./src/concert/components.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articles_ai_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles/ai.jsx */ "./src/concert/articles/ai.jsx");
/* harmony import */ var _articles_israel_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles/israel.jsx */ "./src/concert/articles/israel.jsx");
/* harmony import */ var _articles_israel2_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles/israel2.jsx */ "./src/concert/articles/israel2.jsx");
/* harmony import */ var _articles_test13_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/test13.jsx */ "./src/concert/articles/test13.jsx");
/* harmony import */ var _articles_testn2_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/testn2.jsx */ "./src/concert/articles/testn2.jsx");
/* harmony import */ var _articles_typora_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/typora.jsx */ "./src/concert/articles/typora.jsx");






var concert = [{
  title: "testN2",
  url: "testn2",
  date: "2019-05-16",
  author: "三石ミゲール",
  component: _articles_testn2_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  title: "Test13",
  url: "test13",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test13_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  title: "Typora",
  url: "typora",
  date: "2019-04-28",
  author: "三石ミゲール",
  component: _articles_typora_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  title: "AI",
  url: "ai",
  date: "2019-04-21",
  author: "三石ミゲール",
  component: _articles_ai_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  title: "Test",
  url: "israel",
  date: "2019-04-21",
  author: "三石ミゲール",
  component: _articles_israel_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  title: "Test2",
  url: "israel2",
  date: "2019-04-21",
  author: "三石ミゲール",
  component: _articles_israel2_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (concert);

/***/ }),

/***/ "./src/concert/index.jsx":
/*!*******************************!*\
  !*** ./src/concert/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article */ "./src/article/index.jsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/concert/components.js");
var _jsxFileName = "/Users/MANI/.musicart/musicart/src/concert/index.jsx";




var concertRoutes = function concertRoutes(props) {
  var routeList = Object(_article__WEBPACK_IMPORTED_MODULE_1__["default"])(_components__WEBPACK_IMPORTED_MODULE_2__["default"], '/concert');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, routeList);
};

/* harmony default export */ __webpack_exports__["default"] = (concertRoutes);

/***/ }),

/***/ "./src/concert/log.json":
/*!******************************!*\
  !*** ./src/concert/log.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"url":"testn2","title":"testN2","date":"2019-05-16","file":"記事の削除.md","author":"三石ミゲール","copied":[]},{"url":"test13","title":"Test13","date":"2019-05-15","file":"6.md","author":"三石ミゲール","copied":[]},{"url":"typora","title":"Typora","date":"2019-04-28","file":"Typoraの使い方.md","author":"三石ミゲール","copied":["./assets/typora_download.png","./assets/typora_setting1.png","./assets/typora_setting2.png","./assets/typora_setting3.png","./assets/typora_setting5.png","./assets/typora_setting4.png",""]},{"title":"AI","url":"ai","date":"2019-04-21","author":"三石ミゲール","copied":[]},{"url":"israel","title":"Test","date":"2019-04-21","author":"三石ミゲール","copied":["./assets/IMG_7573.jpg","./assets/IMG_7569.jpg","./assets/IMG_7575.jpg","./assets/IMG_7577.jpg","./assets/IMG_7578.jpg","./assets/IMG_7579.jpg","./assets/IMG_7580.jpg","./assets/AlonRosen.jpg","./assets/IzharShay.jpg","./assets/AmirMilo.jpg","./assets/IMG_7596.jpg","./assets/IMG_7599.jpg","./assets/IMG_7607.jpg","./assets/IMG_7608.jpg","./assets/ZvikaBrakerski.jpg","./assets/IMG_7622.jpg","./assets/Grossberg.png","./assets/TanakaMasato.png","./assets/水谷徹哉.png","./assets/EvaTunik.png","./assets/EletteBoyle.jpg","./assets/MorWeiss.jpg","./assets/IMG_7626.jpg","./assets/BarakBen-Avinoam.jpg","./assets/デリー恵美子.png","./assets/IMG_7692.jpg","./assets/IMG_7693.jpg","./assets/IMG_7694.jpg","./assets/IMG_7691.jpg","./assets/IMG_7712.jpg","./assets/IMG_7723.jpg","./assets/IMG_7728.jpg","./assets/IMG_7729.jpg","./assets/IMG_7737.jpg","./assets/IMG_7751.jpg","./assets/IMG_7756.jpg","./assets/IMG_7759.jpg","./assets/IMG_7760.jpg","./assets/IMG_7767.jpg","./assets/IMG_7768.jpg","./assets/IMG_7769.jpg","./assets/IMG_7776.jpg","./assets/IMG_7779.jpg","./assets/IMG_7782.jpg","./assets/IMG_7787.jpg","./assets/IMG_7789.jpg","./assets/12:29map.png","./assets/IMG_7979.jpg","./assets/AvnerMor.jpg","./assets/IMG_4972.JPG","./assets/IMG_7983.jpg","./assets/IMG_7984.jpg","./assets/IMG_7985.jpg","./assets/IMG_7986.jpg","./assets/IMG_7988.jpg","./assets/RoeeAhamori.jpg","./assets/HadarTal.jpg","./assets/ShumuliGoldberg.jpg","./assets/IMG_8055.jpg","./assets/IMG_8056.jpg","./assets/IMG_8070.jpg","./assets/IMG_8066.jpg","./assets/IMG_7867.JPG","./assets/IMG_8074.jpg","./assets/IMG_8083.jpg","./assets/IMG_8084.jpg","./assets/IMG_8087.jpg","./assets/IMG_8092.jpg","./assets/IMG_8095.jpg",""]},{"url":"israel2","title":"Test2","date":"2019-04-21","author":"三石ミゲール","copied":[]}];

/***/ }),

/***/ "./src/containers/About.jsx":
/*!**********************************!*\
  !*** ./src/containers/About.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/twitter */ "./src/components/twitter.jsx");





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/About.jsx";





var About =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _Component);

  function About(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "About Orchestra", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "musicart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "M\u03BCsicart")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "aboutMain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Orchestra M\u03BCsicart\uFF08\u30AA\u30FC\u30B1\u30B9\u30C8\u30E9\u30FB\u30DF\u30E5\u30FC\u30B8\u30AB\u30EB\u30C8\uFF09\u306F2018\u5E74\u306B\u300C\u97F3\u697D\u74B0\u5883\u3064\u304F\u308A\u300D\u300C\u65B0\u5236\u4F5C\u3078\u306E\u6311\u6226\u300D\u300C\u30A2\u30FC\u30C8\u6587\u5316\u306E\u767A\u5C55\u300D\u306E\u4E09\u3064\u306E\u7406\u5FF5\u3092\u63B2\u3052\u3066\u7D50\u6210\u3055\u308C\u307E\u3057\u305F\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "\u300C\u97F3\u697D\u74B0\u5883\u3064\u304F\u308A\u2014\u2014\u3053\u308C\u307E\u3067\u3082\u97F3\u697D\u3092\u3001\u3053\u308C\u304B\u3089\u3082\u97F3\u697D\u3092\u300D")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u672A\u6765\u306E\u97F3\u697D\u30B7\u30FC\u30F3\u3092\u8003\u3048\u308B\u969B\u3001\u300C\u90E8\u6D3B\u52D5\u3084\u3001\u30B5\u30FC\u30AF\u30EB\u3067\u97F3\u697D\u3092\u3084\u3063\u3066\u3044\u305F\u4EBA\u306F\u305F\u304F\u3055\u3093\u3044\u308B\u306F\u305A\u306A\u306E\u306B\u3001\u305D\u306E\u4EBA\u305F\u3061\u306F\u4E00\u4F53\u3069\u3053\u306B\u300D\u3068\u3044\u3046\u7591\u554F\u306B\u3076\u3064\u304B\u308A\u307E\u3059\u3002\u3069\u308C\u3060\u3051\u6642\u9593\u304C\u7D4C\u3063\u3066\u3057\u307E\u3063\u3066\u3082\u3001\u307E\u305F\u3082\u3046\u4E00\u5EA6\u3068\u3044\u3046\u601D\u3044\u304C\u3042\u308C\u3070\u97F3\u697D\u3092\u59CB\u3081\u3089\u308C\u308B\u3001\u305D\u3093\u306A\u74B0\u5883\u306F\u6B8B\u5FF5\u306A\u304C\u3089\u591A\u304F\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u672C\u56E3\u4F53\u306F\u3053\u308C\u307E\u3067\u97F3\u697D\u3092\u3084\u3063\u3066\u3044\u305F\u4EBA\u304C\u3001\u3053\u308C\u304B\u3089\u3082\u97F3\u697D\u3092\u7D9A\u3051\u3089\u308C\u308B\u3088\u3046\u306B\u3001\u7D9A\u3051\u305F\u3044\u3068\u601D\u3048\u308B\u3088\u3046\u306B\u3001\u97F3\u697D\u74B0\u5883\u4F5C\u308A\u306B\u53D6\u308A\u7D44\u307F\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u305D\u3057\u3066\u3001\u3053\u308C\u307E\u3067\u97F3\u697D\u306B\u95A2\u308F\u308B\u6A5F\u4F1A\u304C\u3042\u307E\u308A\u306A\u304B\u3063\u305F\u4EBA\u306B\u5411\u3051\u3066\u3082\u6249\u3092\u958B\u304D\u3001\u97F3\u697D\u4EBA\u53E3\u3092\u5897\u3084\u3057\u3066\u3044\u304D\u305F\u3044\u3068\u8003\u3048\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u300C\u65B0\u5236\u4F5C\u3078\u306E\u6311\u6226\u2014\u2014\u65B0\u3057\u3044\u30B3\u30F3\u30B5\u30FC\u30C8\u306B\u5411\u3051\u3066\u300D")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "21 \u4E16\u7D00\u304C \u59CB\u307E\u308A20 \u5E74\u304C\u7D4C\u3068\u3046\u3068\u3057\u3066\u3044\u308B\u73FE\u5728\u3001\u591A\u304F\u306E\u30B3\u30F3\u30B5\u30FC\u30C8\u306F\u8074\u8846\u306E\u4E00\u65B9\u7684\u306A\u4EAB\u53D7\u306E\u5834\u3068\u306A\u3063\u3066\u304A\u308A\u3001\u30DB\u30FC\u30EB\u306F\u821E\u53F0\u3068\u5BA2\u5E2D\u304C\u5B8C\u5168\u306B\u5206\u96E2\u3055\u308C\u305F\u7A7A\u9593\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u30A4\u30F3\u30B9\u30BF\u30EC\u30FC\u30B7\u30E7\u30F3\u3084\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u3068\u3044\u3063\u305F\u8A00\u8449\u304C\u51FA\u56DE\u308B\u4E2D\u3001\u307E\u308B\u3067\u6642\u9593\u304C\u6B62\u307E\u3063\u305F\u3088\u3046\u306B\u4F1D\u7D71\u82B8\u80FD\u3068\u5316\u3057\u3064\u3064\u3042\u308B\u30B3\u30F3\u30B5\u30FC\u30C8\u306E\u6982\u5FF5\u3092\u5909\u3048\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u97F3\u697D\u3092\u8074\u899A\u7684\u306B\u306E\u307F\u6349\u3048\u308B\u3060\u3051\u306B\u3068\u3069\u307E\u3089\u305A\u3001\u3088\u308A\u5168\u8EAB\u3067\u3001\u81EA\u5DF1\u610F\u5FD7\u3092\u3082\u3063\u3066\u8074\u8846\u304C\u53C2\u52A0\u3057\u3001\u6CA1\u5165\u3067\u304D\u308B\u30B3\u30F3\u30B5\u30FC\u30C8\u306E\u5F62\u614B\u306B\u53D6\u308A\u7D44\u307F\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "\u300C\u30A2\u30FC\u30C8\u6587\u5316\u306E\u767A\u5C55\u2014\u2014\u65E5\u3005\u306E\u751F\u6D3B\u306B\u97F3\u697D\u3092\u300D")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "\u30AF\u30E9\u30B7\u30C3\u30AF\u304C\u4E00\u90E8\u306E\u611B\u597D\u5BB6\u304C\u901A\u3046\u3060\u3051\u306E\u30B3\u30F3\u30B5\u30FC\u30C8\u306B\u306A\u3063\u3066\u3057\u307E\u3046\u3068\u3001\u3053\u306E\u307E\u307E\u3067\u306F\u7D76\u6EC5\u5371\u60E7\u7A2E\u3068\u306A\u308B\u3067\u3057\u3087\u3046\u3002\u305D\u3093\u306A\u672A\u6765\u306F\u8FD1\u3044\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u97F3\u697D\u306F\u5225\u306B\u5D07\u9AD8\u306A\u3082\u306E\u3067\u306F\u306A\u3044\u306E\u3067\u3059\u3002\u30C8\u30EC\u30F3\u30C9\u306B\u3064\u3044\u3066\u8A9E\u308B\u3088\u3046\u306B\u3001CM\u3084\u6620\u753B\u3067\u6C17\u306B\u306A\u3063\u305F\u97F3\u697D\u306B\u3064\u3044\u3066\u5171\u6709\u3059\u308B\u3001\u305D\u3093\u306A\u65E5\u3005\u306E\u751F\u6D3B\u306B\u3042\u3075\u308C\u3066\u3044\u308B\u306F\u305A\u306E\u97F3\u697D\u3092\u5C11\u3057\u3067\u3082\u8EAB\u8FD1\u306B\u611F\u3058\u3066\u3082\u3089\u3048\u308B\u3088\u3046\u306B\u52AA\u529B\u3057\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\u6211\u3005\u306F\u30D7\u30ED\u3067\u306F\u306A\u3044\u306E\u3067\u3059\u3002\u3057\u304B\u3057\u3001\u30D7\u30ED\u306E\u30B3\u30F3\u30B5\u30FC\u30C8\u306E\u6577\u5C45\u304C\u9AD8\u3044\u3068\u611F\u3058\u308B\u4EBA\u306B\u305D\u3053\u3078\u306E\u968E\u6BB5\u3092\u4F5C\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002\u305D\u3093\u306A\u307F\u3093\u306A\u306E\u97F3\u697D\u3078\u306E\u30D5\u30A1\u30FC\u30B9\u30C8\u30B9\u30C6\u30C3\u30D7\u3092\u76EE\u6307\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\u3053\u308C\u3089\u4E09\u3064\u306E\u7406\u5FF5\u3092\u3082\u3068\u306B\u69D8\u3005\u306A\u4F01\u753B\u3001\u697D\u66F2\u306B\u53D6\u308A\u7D44\u307F\u3001\u65B0\u3057\u3044\u97F3\u697D\u30B7\u30FC\u30F3\u3092\u4F5C\u308A\u4E0A\u3052\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_twitter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var links = _ref.links;
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(About));

/***/ }),

/***/ "./src/containers/Articles.jsx":
/*!*************************************!*\
  !*** ./src/containers/Articles.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_twitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/twitter */ "./src/components/twitter.jsx");
/* harmony import */ var _actions_articlesAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/articlesAction */ "./src/actions/articlesAction.js");





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Articles.jsx";







var Articles =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Articles, _Component);

  function Articles(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Articles);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Articles).call(this, props));

    _this.setSlice = function (start, end, logPart) {
      _this.setState({
        logSlice: logPart.slice(start, end),
        listTag: true
      });
    };

    _this.first = function (range) {
      var logPart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.logPart;

      _this.setState({
        start: 0,
        end: range
      });

      _this.setSlice(0, range, logPart);
    };

    _this.previous = function (start, range) {
      _this.setState({
        end: start,
        start: start - range
      });

      _this.setSlice(start - range, start, _this.state.logPart);
    };

    _this.next = function (end, range) {
      _this.setState({
        start: end,
        end: end + range
      });

      _this.setSlice(end, end + range, _this.state.logPart);
    };

    _this.toUrl = function (url, range, logPart) {
      var index = logPart.findIndex(function (l) {
        return l.url === url;
      });
      var start = Math.floor(index / range) * 5;

      _this.setState({
        start: start,
        end: start + range
      });

      _this.setSlice(start, start + range, logPart);
    };

    _this.selectTag = function (tag, range, selectedTag) {
      var toFirst = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var url = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var nTag = tag === selectedTag ? null : tag;
      var logPart = nTag !== null ? _this.props.log.filter(function (l) {
        return l.tag.includes(nTag);
      }) : _this.props.log;

      _this.setState({
        selectedTag: nTag,
        logPart: logPart
      });

      if (toFirst || url === null) {
        _this.first(range, logPart);
      } else {
        _this.toUrl(url, range, logPart);
      }
    };

    _this.switchTagDisp = function (tagDisp) {
      _this.setState({
        tagDisp: !tagDisp
      });
    };

    _this.listRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.state = {
      start: props.start[props.type],
      selectedTag: props.selectedTag[props.type],
      tagDisp: props.tagDisp[props.type],
      logPart: props.logPart[props.type] === null ? props.log : props.logPart[props.type],
      listTag: true
    };

    if (props.range !== false) {
      for (var i = 0; i < props.range; i++) {
        _this["tagRef".concat(i)] = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
      }

      if (_this.state.start < props.range) {
        _this.state.prevBut = false;
      } else {
        _this.state.prevBut = true;
      }

      _this.state.end = _this.state.start + props.range;

      if (_this.state.end >= _this.state.logPart.length) {
        _this.state.nextBut = false;
      } else {
        _this.state.nextBut = true;
      }
    } else {
      _this.state.nextBut = false;
      _this.state.end = _this.state.logPart.length;
    }

    _this.state.logSlice = _this.state.logPart.slice(_this.state.start, _this.state.end);
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Articles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tags !== false) {
        var listWidth = this.listRef.current.offsetWidth;

        if (this.state.listTag) {
          for (var i = 0; i < this.state.logSlice.length; i++) {
            try {
              if (listWidth - this["tagRef".concat(i)].current.offsetWidth < 170) {
                this.setState({
                  listTag: false
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
        }
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextProps.range !== false) {
        if (nextState.start < nextProps.range) {
          if (nextState.prevBut) {
            this.setState({
              prevBut: false
            });
          }
        } else {
          if (!nextState.prevBut) {
            this.setState({
              prevBut: true
            });
          }
        }

        if (nextState.end >= nextState.logPart.length) {
          if (nextState.nextBut) {
            this.setState({
              nextBut: false
            });
          }
        } else {
          if (!nextState.nextBut) {
            this.setState({
              nextBut: true
            });
          }
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.tags !== false) {
        var listWidth = this.listRef.current.offsetWidth;

        if (this.state.listTag) {
          for (var i = 0; i < this.state.logSlice.length; i++) {
            try {
              if (listWidth - this["tagRef".concat(i)].current.offsetWidth < 170) {
                this.setState({
                  listTag: false
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.saveStart(this.state.start, this.props.type);
      this.props.saveTag(this.state.selectedTag, this.state.tagDisp, this.state.logPart, this.props.type);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          title = _this$props.title,
          range = _this$props.range,
          tags = _this$props.tags;
      var _this$state = this.state,
          start = _this$state.start,
          end = _this$state.end,
          prevBut = _this$state.prevBut,
          nextBut = _this$state.nextBut,
          selectedTag = _this$state.selectedTag,
          tagDisp = _this$state.tagDisp,
          logSlice = _this$state.logSlice,
          listTag = _this$state.listTag;
      var lists = logSlice.map(function (article, i) {
        var articleTags = tags !== false && listTag ? article.tag.map(function (tag) {
          var tagSelector = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
            className: "tagSelector",
            variant: tag === selectedTag ? "secondary" : "outline-secondary",
            onClick: function onClick() {
              return _this2.selectTag(tag, range, selectedTag, false, article.url);
            },
            key: article.url + tag,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          }, tag);
          return tagSelector;
        }) : null;
        var tagDiv = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          display: "inline-block",
          className: "tagDiv",
          key: i,
          ref: _this2["tagRef".concat(i)],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, articleTags);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: article.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "article-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          key: article.url + 'button',
          onClick: function onClick() {
            return _this2.props.linkToPage('Route', '/' + type + '/' + article.url);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          key: article.url + 'h2',
          className: "article-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, article.title))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: article.url + 'p',
          className: "article-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, "\u66F4\u65B0\u65E5:", article.date), tagDiv));
      });
      var button = nextBut || prevBut ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "articleButton",
        height: "50px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "articlePrev",
        variant: "dark",
        style: {
          display: prevBut ? 'block' : 'none'
        },
        onClick: function onClick() {
          return _this2.previous(start, range);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "\u2039 \u623B\u308B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "articleFirst",
        variant: "secondary",
        style: {
          display: start !== 0 ? 'inline-block' : 'none'
        },
        onClick: function onClick() {
          return _this2.first(range);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "\xAB \u6700\u65B0\u3078"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "articleNext",
        variant: "dark",
        style: {
          display: nextBut ? 'block' : 'none'
        },
        onClick: function onClick() {
          return _this2.next(end, range);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "\u6B21\u3078 \u203A")) : null;
      var tagSearch = tags !== false ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: "tagSearch",
        onClick: function onClick() {
          return _this2.switchTagDisp(tagDisp);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "search")) : null;
      var tagSelectors = tags !== false && tagDisp !== false ? tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          className: "tagSelector",
          variant: tag === selectedTag ? "secondary" : "outline-secondary",
          onClick: function onClick() {
            return _this2.selectTag(tag, range, selectedTag);
          },
          key: tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, tag);
      }) : null;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "articleSec articleSec-" + type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, title, tagSearch), tagSelectors, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "articles",
        ref: this.listRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, lists), button), this.props.twitter ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_twitter__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }) : null);
    }
  }]);

  return Articles;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Articles.defaultProps = {
  range: false,
  tags: false,
  twitter: true
};

var mapStateToProps = function mapStateToProps(_ref) {
  var articles = _ref.articles;
  return {
    start: articles.start,
    selectedTag: articles.selectedTag,
    tagDisp: articles.tagDisp,
    logPart: articles.logPart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    linkToPage: function linkToPage(type, url) {
      switch (type) {
        case 'Route':
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])(url));
          }

        case 'a':
          {
            window.location.href = url;
            break;
          }

        default:
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])('/error'));
          }
      }
    },
    saveStart: function saveStart(start, type) {
      dispatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_10__["saveStart"])(start, type));
    },
    saveTag: function saveTag(selectedTag, tagDisp, logPart, type) {
      dispatch(Object(_actions_articlesAction__WEBPACK_IMPORTED_MODULE_10__["saveTag"])(selectedTag, tagDisp, logPart, type));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Articles));

/***/ }),

/***/ "./src/containers/Concert.jsx":
/*!************************************!*\
  !*** ./src/containers/Concert.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_concertAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/concertAction */ "./src/actions/concertAction.js");





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Concert.jsx";




var Concert =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Concert, _Component);

  function Concert(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Concert);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Concert).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Concert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onConcert();
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.outConcert();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }]);

  return Concert;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onConcert: function onConcert() {
      dispatch(Object(_actions_concertAction__WEBPACK_IMPORTED_MODULE_7__["onConcert"])());
    },
    outConcert: function outConcert() {
      dispatch(Object(_actions_concertAction__WEBPACK_IMPORTED_MODULE_7__["outConcert"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Concert));

/***/ }),

/***/ "./src/containers/Concert_2019.jsx":
/*!*****************************************!*\
  !*** ./src/containers/Concert_2019.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Concert_2019; });
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Articles */ "./src/containers/Articles.jsx");
/* harmony import */ var _concert_log_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../concert/log.json */ "./src/concert/log.json");
var _concert_log_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../concert/log.json */ "./src/concert/log.json", 1);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Concert_2019.jsx";




var Concert_2019 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Concert_2019, _Component);

  function Concert_2019(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Concert_2019);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Concert_2019).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Concert_2019, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "concertAbout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "\u5149\u3068\u97F3\u697D\u306B\u5305\u307E\u308C\u308B\u3001\u305D\u308C\u306F\u307E\u308B\u3067\u9B54\u6CD5\u306E\u3088\u3046\u306B\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "\u30AA\u30FC\u30B1\u30B9\u30C8\u30E9\u306B\u5149\u3084\u6620\u50CF\u3068\u3044\u3063\u305F\u6F14\u51FA\u3092\u52A0\u3048\u305F\u65B0\u3057\u3044\u30B3\u30F3\u30B5\u30FC\u30C8\u7A7A\u9593\u3078\u306E\u6311\u6226\u3002"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "\u30D7\u30ED\u30B0\u30E9\u30E0\u306F\u4ECA\u5E74\u6CA1\u5F8C150\u5E74\u3092\u8FCE\u3048\u308B\u30A8\u30AF\u30C8\u30EB\u30FB\u30D9\u30EB\u30EA\u30AA\u30FC\u30BA\u3092\u306F\u3058\u3081\u3068\u3059\u308B\u30D5\u30E9\u30F3\u30B9\u306E\u4F5C\u66F2\u5BB6\u306B\u7126\u70B9\u3092\u5F53\u3066\u3001\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002\u30F4\u30A1\u30A4\u30AA\u30EA\u30F3\u3092\u6301\u3063\u305F\u6B7B\u795E\u3001\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u306B\u96C6\u307E\u308B\u9B54\u5973\u7B49\u3001\u307E\u3055\u306B\u9B54\u6CD5\u306E\u4E16\u754C\u3092\u97F3\u697D\u3067\u8868\u73FE\u3057\u305F\u4F5C\u54C1\u306E\u6570\u3005\u3001\u305D\u3093\u306A\u602A\u3057\u304F\u3082\u7F8E\u3057\u3044\u4F5C\u54C1\u3092\u5149\u3068\u6620\u50CF\u3067\u5F69\u308A\u307E\u3059\u3002\u4ECA\u5BB5\u3001\u30B3\u30F3\u30B5\u30FC\u30C8\u30DB\u30FC\u30EB\u306F\u9B54\u5973\u306E\u591C\u5BB4\u3078\u3068\u59FF\u3092\u5909\u3048\u308B\u3067\u3057\u3087\u3046\u3002")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Articles__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Program Note",
        log: _concert_log_json__WEBPACK_IMPORTED_MODULE_7__,
        type: "concert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return Concert_2019;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/containers/Concert_home.jsx":
/*!*****************************************!*\
  !*** ./src/containers/Concert_home.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var _img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/concert2019_logo.png */ "./src/img/concert2019_logo.png");
/* harmony import */ var _img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_coming_soon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/coming-soon.png */ "./src/img/coming-soon.png");
/* harmony import */ var _img_coming_soon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_coming_soon_png__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Concert_home.jsx";






var Concert_home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Concert_home, _Component);

  function Concert_home(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Concert_home);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Concert_home).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Concert_home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "concert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Concerts"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "concertLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "concertLink concert2019 col-xs-6 col-sm-5 col-md-4 col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u5149\u3068\u9B54\u6CD5\u306E\u30B3\u30F3\u30B5\u30FC\u30C8"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "\u30B3\u30F3\u30B5\u30FC\u30C8\u30ED\u30B4",
        onClick: this.props.linkToPage('Route', '/concert/light_and_magic'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "concertLink concert2019 col-xs-6 col-sm-5 col-md-4 col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Coming Soon!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_coming_soon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Coming Soon",
        style: {
          cursor: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }))));
    }
  }]);

  return Concert_home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    linkToPage: function linkToPage(type, url) {
      switch (type) {
        case 'Route':
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])(url));
          }

        case 'a':
          {
            window.location.href = url;
            break;
          }

        default:
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])('/error'));
          }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Concert_home));

/***/ }),

/***/ "./src/containers/Contact.jsx":
/*!************************************!*\
  !*** ./src/containers/Contact.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Contact.jsx";


var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _Component);

  function Contact() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var mail = "manimigue0701@gmail.com";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "\u304A\u554F\u3044\u5408\u308F\u305B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        method: "POST",
        action: "https://formspree.io/" + mail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "\u304A\u540D\u524D"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        name: "\u304A\u540D\u524D",
        placeholder: "\u4F50\u85E4\u3000\u592A\u90CE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        name: "\u8FD4\u4FE1\u5148",
        placeholder: "you@example.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
        name: "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "submit",
        type: "submit",
        value: "Send",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/containers/Footer.jsx":
/*!***********************************!*\
  !*** ./src/containers/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_mu_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/mu-logo.png */ "./src/img/mu-logo.png");
/* harmony import */ var _img_mu_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_mu_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_twitter_64_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/twitter-64.png */ "./src/img/twitter-64.png");
/* harmony import */ var _img_twitter_64_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_twitter_64_png__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Footer.jsx";







var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var lists = this.props.links.map(function (link) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: link.text,
          onClick: function onClick() {
            return _this2.props.linkToPage(link.type, link.url);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, link.text);
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "musicart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "M\u03BCsicart"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, lists), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_mu_logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "M\u03BCsicart",
        size: "60%",
        onClick: function onClick() {
          return _this2.props.linkToPage('Route', '/');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://twitter.com/orch_musicart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "twitter",
        src: _img_twitter_64_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "twitter",
        width: "5%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var links = _ref.links;
  return {
    links: links.headerLinks
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    linkToPage: function linkToPage(type, url) {
      switch (type) {
        case 'Route':
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])(url));
          }

        case 'a':
          {
            window.location.href = url;
            break;
          }

        default:
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])('/error'));
          }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Footer));

/***/ }),

/***/ "./src/containers/Header.jsx":
/*!***********************************!*\
  !*** ./src/containers/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var _img_header_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/header_logo.png */ "./src/img/header_logo.png");
/* harmony import */ var _img_header_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_header_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_css_header_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/css/header.css */ "./src/static/css/header.css");
/* harmony import */ var _static_css_header_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_header_css__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Header.jsx";









var Header =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    _this.hideBar = function () {
      var isHide = _this.state.isHide;
      window.scrollY > _this.prev ? !isHide && _this.setState({
        isHide: true
      }) : isHide && _this.setState({
        isHide: false
      });
      _this.prev = window.scrollY;
    };

    _this.setNavExpanded = function (expanded) {
      _this.setState({
        navExpanded: expanded
      });
    };

    _this.closeNav = function () {
      _this.setState({
        navExpanded: false
      });
    };

    _this.state = {
      isHide: false,
      navExpanded: false
    };
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.hideBar);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.hideBar);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classHide = this.state.isHide ? 'hide' : '';
      var lists = this.props.links.map(function (link) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9___default.a.Link, {
          key: link.text,
          onClick: function onClick() {
            _this2.props.linkToPage(link.type, link.url);

            _this2.closeNav();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, link.text);
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classHide,
        collapseOnSelect: true,
        expand: "md",
        bg: this.props.concert ? 'dark' : 'white',
        variant: this.props.concert ? 'dark' : "light",
        sticky: "top",
        onToggle: this.setNavExpanded,
        expanded: this.state.navExpanded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10___default.a.Brand, {
        href: "#home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_header_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "M\u03BCsicart",
        width: "200",
        onClick: function onClick() {
          return _this2.props.linkToPage('Route', '/');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10___default.a.Toggle, {
        "aria-controls": "responsive-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10___default.a.Collapse, {
        id: "responsive-navbar-nav",
        className: "justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onSelect: this.closeNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, lists)));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var links = _ref.links,
      concert = _ref.concert;
  return {
    links: links.headerLinks,
    concert: concert.concert
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    linkToPage: function linkToPage(type, url) {
      switch (type) {
        case 'Route':
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])(url));
          }

        case 'a':
          {
            window.location.href = url;
            break;
          }

        default:
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])('/error'));
          }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/containers/Members.jsx":
/*!************************************!*\
  !*** ./src/containers/Members.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/Tabs.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/Tab.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_css_members_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/css/members.css */ "./src/static/css/members.css");
/* harmony import */ var _static_css_members_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_members_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Members.jsx";








var Members =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Members, _Component);

  function Members(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Members);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Members).call(this, props));
    _this.state = {
      key: 'Orchestra'
    };
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Members, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabs = this.props.tabs.map(function (tab) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_9___default.a, {
          eventKey: tab.tab,
          color: tab.color,
          title: tab.tab,
          key: tab.tab,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, tab.head), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "material-icons",
          color: tab.color,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, tab.icon), tab.sub), tab.text, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "\u3054\u9023\u7D61\u306F", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "link-button",
          onClick: function onClick() {
            return _this2.props.linkToPage(tab.type, tab.url);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0"), "\u307E\u3067"));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "member-tab",
        activeKey: this.state.key,
        onSelect: function onSelect(key) {
          return _this2.setState({
            key: key
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, tabs);
    }
  }]);

  return Members;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var links = _ref.links;
  return {
    tabs: links.membersLinks
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    linkToPage: function linkToPage(type, url) {
      switch (type) {
        case 'Route':
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])(url));
          }

        case 'a':
          {
            window.location.href = url;
            break;
          }

        default:
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])('/error'));
          }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Members));

/***/ }),

/***/ "./src/containers/News.jsx":
/*!*********************************!*\
  !*** ./src/containers/News.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _news_log_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../news/log.json */ "./src/news/log.json");
var _news_log_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../news/log.json */ "./src/news/log.json", 1);
/* harmony import */ var _news_tag_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../news/tag.json */ "./src/news/tag.json");
var _news_tag_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../news/tag.json */ "./src/news/tag.json", 1);
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Articles */ "./src/containers/Articles.jsx");





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/News.jsx";






var News =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(News, _Component);

  function News() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, News);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(News).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(News, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Articles__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "News",
        log: _news_log_json__WEBPACK_IMPORTED_MODULE_7__,
        type: "news",
        range: 5,
        tags: _news_tag_json__WEBPACK_IMPORTED_MODULE_8__,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(News));

/***/ }),

/***/ "./src/containers/Pictures.jsx":
/*!*************************************!*\
  !*** ./src/containers/Pictures.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/Carousel.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_css_carousel_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/css/carousel.css */ "./src/static/css/carousel.css");
/* harmony import */ var _static_css_carousel_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_carousel_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Pictures.jsx";







var Pictures =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Pictures, _Component);

  function Pictures(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pictures);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pictures).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pictures, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var components = this.props.pictures.map(function (pic) {
        var link = pic.link;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
          key: link.text + 'car',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: link.text + 'Div',
          className: "pic-component",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          key: link.text,
          alt: link.text,
          className: "pic-img",
          src: pic.img,
          onClick: function onClick() {
            return _this2.props.linkToPage(link.type, link.url);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        })));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8___default.a, {
        fade: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, components);
    }
  }]);

  return Pictures;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var homepic = _ref.homepic;
  return {
    pictures: homepic.pictures
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    linkToPage: function linkToPage(type, url) {
      switch (type) {
        case 'Route':
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])(url));
          }

        case 'a':
          {
            window.location.href = url;
            break;
          }

        default:
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])('/error'));
          }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Pictures));

/***/ }),

/***/ "./src/containers/Tickets.jsx":
/*!************************************!*\
  !*** ./src/containers/Tickets.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ticketsInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ticketsInfo */ "./src/components/ticketsInfo.jsx");





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/containers/Tickets.jsx";







var Tickets =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tickets, _Component);

  function Tickets(props) {
    var _this;

    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tickets);

    _this = Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tickets).call(this, props));

    _this.addTicket = function () {
      if (_this.state.ticketTypeNum < 3) {
        _this.setState({
          ticketTypeNum: _this.state.ticketTypeNum + 1
        });
      }
    };

    _this.reduceTicket = function () {
      if (_this.state.ticketTypeNum > 1) {
        _this.setState({
          ticketTypeNum: _this.state.ticketTypeNum - 1
        });
      }
    };

    _this.state = {
      ticketTypeNum: 1
    };
    return _this;
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tickets, [{
    key: "render",
    value: function render() {
      var mail = "manimigue0701@gmail.com";
      var tel = "0312345678";
      var ticketTypeNum = this.state.ticketTypeNum;
      var _this$props = this.props,
          ticketTypes = _this$props.ticketTypes,
          ticketMax = _this$props.ticketMax;

      var ticketSelect = function ticketSelect(type) {
        return type <= ticketTypeNum ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ticket-type type" + type.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "\u5238\u7A2E", type), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default.a.Control, {
          name: '券種' + type.toString(),
          as: "select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, ticketTypes.map(function (t) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
            key: t,
            value: t,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, t);
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "\u679A\u6570", type), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9___default.a.Control, {
          name: '枚数' + type.toString(),
          as: "select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, Array.from(Array(ticketMax), function (v, num) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
            key: num,
            value: num + 1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, num + 1);
        }))) : null;
      };

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ticketsInfo__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tickets-buy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ticketpay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "1. \u30C1\u30B1\u30C3\u30C8\u30DA\u30A4\u3067\u8CFC\u5165"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u8CFC\u5165")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tickets-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "2. \u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3067\u4E88\u7D04\u3059\u308B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        method: "POST",
        action: "https://formspree.io/" + mail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, ticketSelect(1), ticketSelect(2), ticketSelect(3), this.state.ticketTypeNum < 3 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: this.addTicket,
        className: "add-ticketTypes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, " + ") : null, this.state.ticketTypeNum > 1 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
        onClick: this.reduceTicket,
        className: "reduce-ticketTypes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, " - ") : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u4EE3\u8868\u8005\u540D"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        name: "\u4EE3\u8868\u8005\u540D",
        placeholder: "\u4F50\u85E4\u3000\u592A\u90CE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        name: "\u8FD4\u4FE1\u5148\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
        placeholder: "you@example.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\u96FB\u8A71\u756A\u53F7"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "tel",
        name: "\u8FD4\u4FE1\u5148\u96FB\u8A71\u756A\u53F7",
        placeholder: "09012345678",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\u305D\u306E\u4ED6\u304A\u554F\u3044\u5408\u308F\u305B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
        name: "\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "submit",
        type: "submit",
        value: "Send",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tickets-tel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "3. \u96FB\u8A71\u3067\u4E88\u7D04\u3059\u308B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u96FB\u8A71\u756A\u53F7 ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "tel:" + tel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, tel)))));
    }
  }]);

  return Tickets;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var tickets = _ref.tickets;
  return {
    ticketTypes: tickets.ticketTypes,
    ticketMax: tickets.ticketMax
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    linkToPage: function linkToPage(type, url) {
      switch (type) {
        case 'Route':
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])(url));
          }

        case 'a':
          {
            window.location.href = url;
            break;
          }

        default:
          {
            return dispatch(Object(react_router_redux__WEBPACK_IMPORTED_MODULE_7__["push"])('/error'));
          }
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Tickets));

/***/ }),

/***/ "./src/img/classical-music-1838390_1280.jpg":
/*!**************************************************!*\
  !*** ./src/img/classical-music-1838390_1280.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/classical-music-1838390_1280.d0a3cc84.jpg";

/***/ }),

/***/ "./src/img/coming-soon.png":
/*!*********************************!*\
  !*** ./src/img/coming-soon.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/coming-soon.701b3c3c.png";

/***/ }),

/***/ "./src/img/concert2019_logo.png":
/*!**************************************!*\
  !*** ./src/img/concert2019_logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/concert2019_logo.0b3a4461.png";

/***/ }),

/***/ "./src/img/header_logo.png":
/*!*********************************!*\
  !*** ./src/img/header_logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/header_logo.d28a7e16.png";

/***/ }),

/***/ "./src/img/mu-logo.png":
/*!*****************************!*\
  !*** ./src/img/mu-logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mu-logo.ad01d700.png";

/***/ }),

/***/ "./src/img/twitter-64.png":
/*!********************************!*\
  !*** ./src/img/twitter-64.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEt0lEQVR4nO2ba4hVVRSAvz3IMIhEiEjIFCaDzA+RFJEeg4iFRfRHCAShsKyI6EFGBWGCCAXZAyEK8pFk/QopsYQECaPSiizpQWJmWImUTmElas18/dhn7HbnnnPPvXPPmVvdDy6Xmb3P3mutsx9r77UudOjQoUOH/y9hvAXIQp0IXA9cC8wGLgS6gDPAj8DnwHbgnRDCn+MlZ8tRJ6lr1JPm44h6lzohR9uT1VVqX1qF2gUloS5Sv8upeDWfqP0p7far69Vf1b1pnU9NKiwvUsk0krf4R5PKj/Czujhpb4Z6t/peVZ2FaQI8lFQYUm8tWfk7k35bwZDp02drlhB7qxq5oyTlBxz7m8/DR+qkNCF61LNVDwypKwtWvkc9WILyB9QpFf32qcsqBenPePgpc6ywTRrg3hKU3632qgvUterHxhG3qFKQK+s08qY6ucXKd6mHC1R8hCOOHt0rq4UZyNnQghYaoJ7Ri2LdiAxdFfL8kkPm6cDbxv30ghbYYGEL2miUZ4GHR/1XnWhj29AP6m2OYW1QN7T83WbzeD2BDjTR6EF1udrThAFebal66fyu3lxLhq6qv99oVAlgJvAicNjov1/SwLMNG61JdoUQXqpVUG2ATcBwk51MA1YTDbHHuL31qdV9VHKuyb4a5XRawT+ECyF8A7w8xs4mAAuA9cAh4JC6NTHIQuN+3J3UPT7GvvLyW1rBqPsA9SLgADC1QIFOA4NAd8H9jPB0COGBWgWjhmcI4ThwE8UOz4lAL+UoD3AyreC8AdS56nyAEMIu4BbKm6NFkzrVKkdAP/CB8cS0CjgGrABOFSxcGRxNK6h0Yo4l3/OSzwjN7grtxNdpBZUj4Kscdf6NnAK+Tys8r1yy+H1ahkQlsz/rxrj67W4oWJjx4N2swmoDbOHvteC/wu6swmpP8DTwaKHilMsg8H5WhVoL3BZgVxHSjAM7QwiZvkwtT3AYWArsL0qqEnmlXoXU2KDx/m8b43Nr0wqOAxfXixmm7vEhhEFiUPIx/p0u8cY8AdNc0WFjvO1+YBlQO7DQXpwDLg0h1N3RMg2gziW6y8PJdy9wD/G8385sDCHcnqdivQvNG4A1Y5enVM4B2ZefFdTz818g4zalTXkuudnKRaYBkvPBuqw6bcYJYG0jD+Q56T0BfNiUOOVzX7J75SbvLtAL7AFmNCNVSbweQljS6EO5k6TU6cAOYFajnZTAUWBOo28fGrjsCCF8C1wFbKa9bonOAEubUb5p1Pnqa5aT1ZHFkJVJDk0wpjxBYwxhMXAFcWpcRrme4oMhhCdL7K82arcx86I6CaFI2sNBMyZWfFai4qqPjLfeqLOM4e1Wpbbl4awlp+9VK92j3qi+VbLiGhMyWn4Iq3canECMGA0AVxMXvFakxjTKTmBF4pq3lKAOEI+4IyfDbmLwcgrR8xvP8/8gMZ9nc3JVVwzqbHVHyUM6i7Pq82pZ0ePzhpinbrP8+V2p+CZ1ZqmK1zBEn/qM+lNJih9RV6vTyta13iLYDVwDLAGuI16JtYJh4Evi4rYd2FfoHM+gIVfY+GOKy4E5xN1hBjE5Km1nGCYuZEeJIeoviPGGfSGEE03K3KFDhw4dOrSIvwCPQ6qZnKB1LgAAAABJRU5ErkJggg=="

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
/* harmony import */ var _store_creatStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/creatStore */ "./src/store/creatStore.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
var _jsxFileName = "/Users/MANI/.musicart/musicart/src/index.js";



 //import PropTypes from 'prop-types';



var history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])({
  basename: ""
});
var store = Object(_store_creatStore__WEBPACK_IMPORTED_MODULE_2__["default"])(history);
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
  history: history,
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/news/articles/assets/スクリーンショット2019-04-13225551.png":
/*!****************************************************************!*\
  !*** ./src/news/articles/assets/スクリーンショット2019-04-13225551.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/スクリーンショット2019-04-13225551.bddd0f74.png";

/***/ }),

/***/ "./src/news/articles/assets/スクリーンショット2019-04-13231007.png":
/*!****************************************************************!*\
  !*** ./src/news/articles/assets/スクリーンショット2019-04-13231007.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/スクリーンショット2019-04-13231007.f2da9dba.png";

/***/ }),

/***/ "./src/news/articles/assets/スクリーンショット2019-04-13231433.png":
/*!****************************************************************!*\
  !*** ./src/news/articles/assets/スクリーンショット2019-04-13231433.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/スクリーンショット2019-04-13231433.6125159e.png";

/***/ }),

/***/ "./src/news/articles/assets/スクリーンショット2019-04-14214537.png":
/*!****************************************************************!*\
  !*** ./src/news/articles/assets/スクリーンショット2019-04-14214537.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/スクリーンショット2019-04-14214537.f0397344.png";

/***/ }),

/***/ "./src/news/articles/assets/スクリーンショット2019-04-14223924.png":
/*!****************************************************************!*\
  !*** ./src/news/articles/assets/スクリーンショット2019-04-14223924.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/スクリーンショット2019-04-14223924.99cd8ac0.png";

/***/ }),

/***/ "./src/news/articles/atest.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/atest.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/atest.jsx";



var atest =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(atest, _Component);

  function atest() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, atest);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(atest).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(atest, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return atest;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (atest);

/***/ }),

/***/ "./src/news/articles/nTest2.jsx":
/*!**************************************!*\
  !*** ./src/news/articles/nTest2.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/nTest2.jsx";



var nTest2 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(nTest2, _Component);

  function nTest2() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, nTest2);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(nTest2).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(nTest2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return nTest2;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (nTest2);

/***/ }),

/***/ "./src/news/articles/nTest3.jsx":
/*!**************************************!*\
  !*** ./src/news/articles/nTest3.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/nTest3.jsx";



var nTest3 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(nTest3, _Component);

  function nTest3() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, nTest3);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(nTest3).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(nTest3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return nTest3;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (nTest3);

/***/ }),

/***/ "./src/news/articles/release.jsx":
/*!***************************************!*\
  !*** ./src/news/articles/release.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/release.jsx";



var release =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(release, _Component);

  function release() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, release);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(release).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(release, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n# News\u7B2C1\u5F3E\n## Home Page\u3092\u958B\u8A2D\n\n \u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3092\u958B\u8A2D\u3057\u307E\u3057\u305F\uFF01\uFF01\n\u30B3\u30F3\u30B5\u30FC\u30C8\u60C5\u5831\u3001\u6D3B\u52D5\u306B\u3064\u3044\u3066\u3001\u30E1\u30F3\u30D0\u30FC\u52DF\u96C6\u306A\u3069\u968F\u6642\u66F4\u65B0\u4E88\u5B9A\u3067\u3059\u3002\n\nOrchestra M\u03BCsicart\u306F\u3001\u591A\u304F\u306E\u4EBA\u304C\u30AF\u30E9\u30B7\u30C3\u30AF\u30B3\u30F3\u30B5\u30FC\u30C8\u306B\u8DB3\u3092\u904B\u3073\u305F\u304F\u306A\u308B\u3088\u3046\u306A\u3001\u65B0\u3057\u3044\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u76EE\u6307\u3057\u3066\u30012018\u5E74\u306B\u767A\u8DB3\u3057\u307E\u3057\u305F\u3002\n \u7B2C1\u56DE\u30B3\u30F3\u30B5\u30FC\u30C8\u306F\u300111/3\u306B\u68EE\u306Ea\u30DB\u30FC\u30EB21 \u5927\u30DB\u30FC\u30EB\u3067\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002\n\n \u307E\u3060\u307E\u3060\u56E3\u54E1\u3082\u52DF\u96C6\u4E2D\u3067\u3059\u3002\u8A73\u3057\u304F\u306F\u3001[Join Us](https://manimigue.github.io/musicart/members)\u30DA\u30FC\u30B8\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002\n\u5171\u306B\u30AA\u30FC\u30B1\u30B9\u30C8\u30E9\u3092\u697D\u3057\u307F\u307E\u3057\u3087\u3046\uFF01\n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    }
  }]);

  return release;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (release);

/***/ }),

/***/ "./src/news/articles/settings.jsx":
/*!****************************************!*\
  !*** ./src/news/articles/settings.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _assets_2019_04_13225551_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/スクリーンショット2019-04-13225551.png */ "./src/news/articles/assets/スクリーンショット2019-04-13225551.png");
/* harmony import */ var _assets_2019_04_13225551_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_2019_04_13225551_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_2019_04_13231007_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/スクリーンショット2019-04-13231007.png */ "./src/news/articles/assets/スクリーンショット2019-04-13231007.png");
/* harmony import */ var _assets_2019_04_13231007_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_2019_04_13231007_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_2019_04_13231433_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/スクリーンショット2019-04-13231433.png */ "./src/news/articles/assets/スクリーンショット2019-04-13231433.png");
/* harmony import */ var _assets_2019_04_13231433_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_2019_04_13231433_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_2019_04_14214537_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/スクリーンショット2019-04-14214537.png */ "./src/news/articles/assets/スクリーンショット2019-04-14214537.png");
/* harmony import */ var _assets_2019_04_14214537_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_2019_04_14214537_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_2019_04_14223924_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/スクリーンショット2019-04-14223924.png */ "./src/news/articles/assets/スクリーンショット2019-04-14223924.png");
/* harmony import */ var _assets_2019_04_14223924_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_2019_04_14223924_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/settings.jsx";








var settings =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(settings, _Component);

  function settings() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, settings);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(settings).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## \u521D\u671F\u8A2D\u5B9A\n\n1. Xcode\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\n   App Store\u304B\u3089Xcode\u3092\u691C\u7D22\u3057\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3002\n\n   ![\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-13 22.55.51](assets/\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-13 22.55.51.png)\n\n2. GitHub\u306B\u767B\u9332\n\n   <https://github.com/join>\xA0\u306B\u3066GitHub\u306B\u767B\u9332\u3057\u307E\u3059\u3002\n\n   1. \u30E6\u30FC\u30B6\u30FC\u30CD\u30FC\u30E0\uFF0C\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF0C\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8A2D\u5B9A\n\n      ![\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-13 23.10.07](assets/\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-13 23.10.07.png)\n\n   2. Free\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u9078\u629E\n\n      ![\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-13 23.14.33](assets/\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-13 23.14.33.png)\n\n   3. \u3044\u304F\u3064\u304B\u8CEA\u554F\u306B\u7B54\u3048\u308B(\u30B9\u30AD\u30C3\u30D7\u53EF)\n\n   4. \u30A2\u30AB\u30A6\u30F3\u30C8\u78BA\u8A8D\u30E1\u30FC\u30EB\u304C\u5C4A\u304F\u306E\u3067\uFF0C\u300CVerify email address\u300D\u3092\u62BC\u3057\u3066\u767B\u9332\u3092\u7D42\u3048\u308B\u3002\n\n3. GitHub\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A\n\n   1. \u521D\u671F\u8A2D\u5B9A\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u300C\u8A2D\u5B9A\uFF11.app\u300D\u3092\u8D77\u52D5\u3057\uFF0C\u6307\u793A\u306B\u5F93\u3063\u3066GitHub\u306E\u60C5\u5831\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\n\n      \u4EE5\u4E0B\u306E\u753B\u9762\u304C\u51FA\u305F\u3089\u300C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n      ![\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-14 21.45.37](assets/\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-14 21.45.37.png)\n\n   2. \u300CSSH-KEY\u304C\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3057\u305F\u300D\u3068\u8868\u793A\u3055\u308C\u305F\u3089\uFF0C\u305D\u306ESSH-KEY\u3092GitHub\u306B\u767B\u9332\u3057\u307E\u3059\u3002\n\n      1. https://github.com/settings/ssh/new\xA0\u306B\u3066SSH-KEY\u3092\u767B\u9332\u3057\u307E\u3059\u3002\n\n         \u65E2\u306BSSH-KEY\u306F\u30B3\u30D4\u30FC\u3055\u308C\u3066\u3044\u308B\u306E\u3067\uFF0CKey\u6B04\u306B\u30DA\u30FC\u30B9\u30C8\u3057\u3066\u304F\u3060\u3055\u3044\u3002Title\u306F'SSH'\u306A\u3069\uFF0C\u9069\u5F53\u3067\u69CB\u3044\u307E\u305B\u3093\u3002\n\n         ![\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-14 22.39.24](assets/\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2019-04-14 22.39.24.png)\n\n      2. \u300CAdd SSH key\u300D\u3092\u62BC\u3057\u3066\u767B\u9332\u3092\u5B8C\u4E86\u3057\u307E\u3059\u3002\n\n   3. GitHub\u306B\u5FC5\u8981\u306A\u8A2D\u5B9A\u306F\u4E00\u65E6\u3053\u308C\u3067\u7D42\u308F\u308A\u3067\u3059\u3002\u7BA1\u7406\u8005\u304B\u3089\u30E1\u30FC\u30EB\u3067\u8FD4\u4FE1\u304C\u3042\u308B\u307E\u3067\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002\n\n4. \u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u60C5\u5831\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002\n\n   1. \u7BA1\u7406\u8005\u304B\u3089\u8A2D\u5B9A\u304C\u5B8C\u4E86\u3057\u305F\u30E1\u30FC\u30EB\u304C\u5C4A\u3044\u305F\u3089\uFF0C\u300C\u8A2D\u5B9A\uFF12.app\u300D\u3092\u8D77\u52D5\u3057\u6307\u793A\u306B\u5F93\u3063\u3066\u5165\u529B\u3057\u3066\u3044\u3063\u3066\u304F\u3060\u3055\u3044\u3002\n\n### \u8A2D\u5B9A\u5B8C\u4E86\n\n\u3053\u3053\u307E\u3067\u7D42\u308F\u308C\u3070\u5168\u3066\u306E\u8A2D\u5B9A\u306F\u5B8C\u4E86\u3067\u3059\uFF01\n\n\u8A18\u4E8B\u306E\u66F4\u65B0\u306B\u306F\u66F4\u65B0\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u300C\u65B0\u3057\u3044\u8A18\u4E8B\u306E\u4F5C\u308A\u65B9\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n".replace('assets/スクリーンショット 2019-04-13 22.55.51.png', _assets_2019_04_13225551_png__WEBPACK_IMPORTED_MODULE_5___default.a).replace('assets/スクリーンショット 2019-04-13 23.10.07.png', _assets_2019_04_13231007_png__WEBPACK_IMPORTED_MODULE_6___default.a).replace('assets/スクリーンショット 2019-04-13 23.14.33.png', _assets_2019_04_13231433_png__WEBPACK_IMPORTED_MODULE_7___default.a).replace('assets/スクリーンショット 2019-04-14 21.45.37.png', _assets_2019_04_14214537_png__WEBPACK_IMPORTED_MODULE_8___default.a).replace('assets/スクリーンショット 2019-04-14 22.39.24.png', _assets_2019_04_14223924_png__WEBPACK_IMPORTED_MODULE_9___default.a);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "article news",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
    }
  }]);

  return settings;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./src/news/articles/t4m.jsx":
/*!***********************************!*\
  !*** ./src/news/articles/t4m.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/t4m.jsx";



var t4m =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(t4m, _Component);

  function t4m() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, t4m);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t4m).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(t4m, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n# \u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u3068\u5E7B\u60F3\u4EA4\u97FF\u66F2\n\n##### 2019.04.30\n\n\u7686\u3055\u3093\u3001\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u306F\u3054\u5B58\u77E5\u3067\u3057\u3087\u3046\u304B\u3002\u30B2\u30FC\u30C6\u306E\u300E\u30D5\u30A1\u30A6\u30B9\u30C8\u300F\u3092\u8AAD\u3093\u3060\u3053\u3068\u304C\u3042\u308B\u65B9\u306F\u3054\u5B58\u77E5\u304B\u3068\u601D\u3044\u307E\u3059\u304C\u3001\u4ECA\u65E5\u306F\u305D\u3093\u306A\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u3068\u300A\u5E7B\u60F3\u4EA4\u97FF\u66F2\u300B\u306E\u95A2\u4FC2\u306B\u3064\u3044\u3066\u5C11\u3057\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002\n\n\n\n######\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u3068\u306F\n\n\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u3068\u306F5\u67081\u65E5\u306E\u524D\u306E\u6669\u306B\u9B54\u5973\u305F\u3061\u304C\u30D6\u30ED\u30C3\u30B1\u30F3\u5C71\u306B\u96C6\u307E\u308A\u3001\u3069\u3093\u3061\u3083\u3093\u9A12\u304E\u3092\u3059\u308B\u3068\u3044\u3046\u3082\u306E\u3067\u3001\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u3068\u306F\u75AB\u75C5\u3068\u9B54\u6CD5\u306B\u5BFE\u3057\u3066\u4EBA\u9593\u3092\u8B77\u308B\u795E\u306E\u3053\u3068\u3067\u3059\u3002\u3053\u306E\u30D6\u30ED\u30C3\u30B1\u30F3\u5C71\u3068\u306F\u30C9\u30A4\u30C4\u306B\u3042\u308A\u307E\u3059\u3002\n\n\u30B2\u30FC\u30C6\u306E\u300E\u30D5\u30A1\u30A6\u30B9\u30C8\u300F\u3067\u306F\u30E1\u30D5\u30A3\u30B9\u30C8\u30FC\u30D5\u30A7\u30EC\u30B9\u304C\u3053\u306E\u3088\u3046\u306B\u8A00\u3063\u3066\u3044\u307E\u3059\u3002\n\n*\u62BC\u3057\u5408\u3044\u5727\u5408\u3044\u3001\u305B\u3044\u305F\u308A\u3001\u304C\u306A\u3063\u305F\u308A\u3001\u3057\u3085\u3063\u3057\u3085\u3063\u3044\u3063\u305F\u308A\u3001\u6E26\u3092\u5DFB\u3044\u305F\u308A\u3001\u5F15\u3063\u5F35\u3063\u305F\u308A\u3001\u7121\u99C4\u53E3\u3092\u53E9\u3044\u305F\u308A\u3001\u5149\u3063\u305F\u308A\u3001\u304D\u3089\u3081\u3044\u305F\u308A\u3001\u81ED\u6C17\u3092\u767A\u3059\u308B\u3001\u71C3\u3048\u3082\u3059\u308B\u3002\u3053\u308C\u304C\u307B\u3093\u3068\u306E\u9B54\u5973\u9A12\u304E\u3060\u3002*\uFF08\u30D5\u30A1\u30A6\u30B9\u30C8 \u7B2C\u4E00\u90E8 \u30B2\u30FC\u30C6 / \u9AD8\u6A4B\u7FA9\u5B5D\u8A33\uFF09 \n\n\n\n###### \u300E\u30D5\u30A1\u30A6\u30B9\u30C8\u300F\u3068\u30D9\u30EB\u30EA\u30AA\u30FC\u30BA\n\n\u30D9\u30EB\u30EA\u30AA\u30FC\u30BA\u306F\u30B2\u30FC\u30C6\u306E\u30D5\u30A1\u30A6\u30B9\u30C8\u306B\u975E\u5E38\u306B\u5F71\u97FF\u3092\u53D7\u3051\u3066\u304A\u308A\u3001\u305D\u308C\u306F\u300A\u30D5\u30A1\u30A6\u30B9\u30C8\u306E\u516B\u3064\u306E\u60C5\u666F\u300B(1828)\u300A\u30D5\u30A1\u30A6\u30B9\u30C8\u306E\u52AB\u7F70\u300B(1845-46) \u3068\u3044\u3063\u305F\u4F5C\u54C1\u306B\u898B\u3089\u308C\u307E\u3059\u3002\u305D\u3057\u3066\u300A\u5E7B\u60F3\u4EA4\u97FF\u66F2\u300B\u306E\u7B2C5\u697D\u7AE0 \u3008\u30B5\u30D0\u30C8\u306E\u591C\u306E\u5922 Songe d\u2019une Nuit du Sabbat\u3009\u3082\u307E\u305F\u3001\u3053\u306E\u30D5\u30A1\u30A6\u30B9\u30C8\u304B\u3089\u5F71\u97FF\u3092\u53D7\u3051\u305F\u3068\u8A00\u3048\u307E\u3059\u3002\u539F\u984C\u306B\u3042\u308B\u30B5\u30D0\u30C8\u3068\u306F\u9B54\u5973\u306E\u591C\u5BB4\u3092\u610F\u5473\u3057\u3066\u304A\u308A\u3001\u3053\u3053\u3067\u306F\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u3092\u6307\u3057\u3066\u3044\u308B\u3068\u3055\u308C\u3066\u3044\u307E\u3059\u3002\n\n\u30D9\u30EB\u30EA\u30AA\u30FC\u30BA\u306F\u300A\u5E7B\u60F3\u4EA4\u97FF\u66F2\u300B\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u30CE\u30FC\u30C8\uFF08\u7B2C3\u7A3F\uFF09\u306E\u4E2D\u3067\u6B21\u306E\u3088\u3046\u306B\u8A18\u3057\u3066\u3044\u307E\u3059\u3002\n\n*\u3042\u308C\u306F\u5F7C\u5973\u3060\u3001\u5F7C\u5973\u304C\u30B5\u30D0\u30C8\u306B\u3084\u3063\u3066\u304D\u305F\u306E\u3060\u3002*\uFF08\u30D9\u30EB\u30EA\u30AA\u30FC\u30BA\u3068\u305D\u306E\u6642\u4EE3 W. \u30C7\u30FC\u30E0\u30EA\u30F3\u30B0 / \u6C60\u4E0A\u7D14\u4E00\u8A33\uFF09\n\n\n\n\u300A\u5E7B\u60F3\u4EA4\u97FF\u66F2\u300B\u306F\u82E5\u3044\u97F3\u697D\u5BB6\u304C\u611B\u3057\u305F\u5973\u6027\u3092\u6BBA\u3057\u3066\u3057\u307E\u3044\u3001\u305D\u306E\u5F7C\u5973\u304C\u30B5\u30D0\u30C8\u306B\u73FE\u308C\u308B\u3068\u3044\u3046\u7269\u8A9E\u3067\u3059\u304C\u3001\u3053\u306E\u30B5\u30D0\u30C8\u306B\u611B\u3057\u305F\u5973\u6027\u304C\u73FE\u308C\u308B\u3068\u3044\u3046\u306E\u3082\u3001\u5B9F\u306F\u300E\u30D5\u30A1\u30A6\u30B9\u30C8\u300F\u306B\u5F71\u97FF\u3092\u53D7\u3051\u3066\u3044\u308B\u3068\u601D\u308F\u308C\u307E\u3059\u3002\n\n*\u30D5\u30A1\u30A6\u30B9\u30C8\u300C\u541B\u3001\u5411\u3053\u3046\u306B\u8272\u84BC\u3056\u3081\u305F\u3001\u304D\u308C\u3044\u306A\u5B50\u304C\u4E00\u4EBA\u307C\u3063\u3061\u3067\u7ACB\u3063\u3066\u3044\u308B\u306E\u304C\u898B\u3048\u308B\u3060\u308D\u3046\u3002\u3072\u3069\u304F\u3086\u3063\u304F\u308A\u52D5\u3044\u3066\u3044\u308B\u3068\u3053\u308D\u3092\u898B\u308B\u3068\u3001\u4E21\u8DB3\u304C\u9396\u3067\u7E1B\u3089\u308C\u3066\u3044\u308B\u306E\u3067\u306F\u306A\u3044\u304B\u306A\u3002\u3069\u3046\u3082\u5DF1\u306B\u306F\u3042\u306E\u5B50\u304C\u3001\u53EF\u611B\u3044\u30B0\u30EC\u30FC\u30C8\u30D2\u30A7\u30F3\u306B\u4F3C\u3066\u3044\u308B\u3088\u3046\u306B\u601D\u308F\u308C\u3066\u306A\u3089\u306A\u3044\u306E\u3060\u304C\u3002\u300D*\uFF08\u30D5\u30A1\u30A6\u30B9\u30C8 \u7B2C\u4E00\u90E8 \u30B2\u30FC\u30C6 / \u9AD8\u6A4B\u7FA9\u5B5D\u8A33\uFF09 \n\n\n\n\u300E\u30D5\u30A1\u30A6\u30B9\u30C8\u300F\u3067\u306F\u30D5\u30A1\u30A6\u30B9\u30C8\u304C\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u306B\u30D6\u30ED\u30C3\u30B1\u30F3\u5C71\u3067\u611B\u3059\u308B\u30B0\u30EC\u30FC\u30C8\u30D2\u30A7\u30F3\u306E\u59FF\u3092\u76EE\u6483\u3057\u307E\u3059\uFF08\u30E1\u30D5\u30A3\u30B9\u30C8\u30FC\u30D5\u30A7\u30EC\u30B9\u306B\u306F\u5E7B\u3060\u3068\u8A00\u308F\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u304C\uFF09\u3002\u3053\u306E\u63CF\u5199\u306F\u30B5\u30D0\u30C8\u306E\u4E2D\u306B\u611B\u3057\u305F\u5973\u6027\u3092\u898B\u51FA\u3057\u305F\u300A\u5E7B\u60F3\u4EA4\u97FF\u66F2\u300B\u306E\u7269\u8A9E\u3068\u91CD\u306A\u308B\u3082\u306E\u304C\u3042\u308B\u3068\u601D\u3044\u307E\u305B\u3093\u304B\u3002\n\n\n\n###### \u6700\u5F8C\u306B\n\n\u3053\u306E\u3088\u3046\u306B\u3001\u4ECA\u65E5\u306F\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u3068\u300E\u5E7B\u60F3\u4EA4\u97FF\u66F2\u300F\u306E\u95A2\u4FC2\u306B\u3064\u3044\u3066\u5C11\u3057\u3060\u3051\u3054\u7D39\u4ECB\u3057\u307E\u3057\u305F\u3002\u300E\u30D5\u30A1\u30A6\u30B9\u30C8\u300F\u304C\u6C17\u306B\u306A\u3063\u305F\u65B9\u306F\u662F\u975E\u3001\u8AAD\u3093\u3067\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u304D\u3063\u3068\u300A\u5E7B\u60F3\u4EA4\u97FF\u66F2\u300B\u304C\u4F55\u500D\u3082\u697D\u3057\u304F\u306A\u308B\u306F\u305A\u3067\u3059\u3002\n\n\u3061\u306A\u307F\u306B\u73FE\u5728\u3082\u30C9\u30A4\u30C4\u306E\u5404\u5730\u3067\u306F4\u670830\u65E5\u304B\u30895\u67081\u65E5\u306B\u304B\u3051\u3066\u30F4\u30A1\u30EB\u30D7\u30EB\u30AE\u30B9\u306E\u591C\u306E\u304A\u796D\u308A\u3092\u3059\u308B\u305D\u3046\u3067\u3059\u3002\u4E00\u5EA6\u306F\u884C\u3063\u3066\u307F\u305F\u3044\u3067\u3059\u306D\u3002\n\n\uFF08\u524D\u7530\u7693\u751F\uFF09\n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      });
    }
  }]);

  return t4m;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (t4m);

/***/ }),

/***/ "./src/news/articles/test.jsx":
/*!************************************!*\
  !*** ./src/news/articles/test.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test.jsx";



var test =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test, _Component);

  function test() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B\n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9\n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB\n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**\n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046\n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b\n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B\n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)\n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B\n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B\n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?\n#### \u5206\u985E\u30E2\u30C7\u30EB\n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B\nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B\n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B\n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B\n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE\n#### K-NN\n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044\n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B\n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046\n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B\n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory\nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044\n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D\n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790\n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B\n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)\n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B\nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044\n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B\nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B\n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN\n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408\ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570\nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)\n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F\n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387\n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044\n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F\n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B\nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044\nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089\n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B\n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093\n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044\n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B\n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)\n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059\n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B\n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B\n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B\n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044\n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B\n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B\n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064\ndeep is bette\n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ }),

/***/ "./src/news/articles/test10.jsx":
/*!**************************************!*\
  !*** ./src/news/articles/test10.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test10.jsx";



var test10 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test10, _Component);

  function test10() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test10);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test10).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test10, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test10;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test10);

/***/ }),

/***/ "./src/news/articles/test11.jsx":
/*!**************************************!*\
  !*** ./src/news/articles/test11.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test11.jsx";



var test11 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test11, _Component);

  function test11() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test11);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test11).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test11, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test11;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test11);

/***/ }),

/***/ "./src/news/articles/test12.jsx":
/*!**************************************!*\
  !*** ./src/news/articles/test12.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test12.jsx";



var test12 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test12, _Component);

  function test12() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test12);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test12).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test12, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test12;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test12);

/***/ }),

/***/ "./src/news/articles/test2.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test2.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test2.jsx";



var test2 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test2, _Component);

  function test2() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test2);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test2).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B\n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9\n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB\n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**\n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046\n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b\n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B\n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)\n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B\n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B\n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?\n#### \u5206\u985E\u30E2\u30C7\u30EB\n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B\nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B\n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B\n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B\n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE\n#### K-NN\n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044\n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B\n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046\n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B\n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory\nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044\n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D\n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790\n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B\n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)\n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B\nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044\n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B\nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B\n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN\n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408\ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570\nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)\n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F\n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387\n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044\n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F\n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B\nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044\nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089\n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B\n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093\n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044\n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B\n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)\n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059\n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B\n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B\n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B\n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044\n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B\n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B\n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064\ndeep is bette\n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test2;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test2);

/***/ }),

/***/ "./src/news/articles/test2m.jsx":
/*!**************************************!*\
  !*** ./src/news/articles/test2m.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test2m.jsx";



var test2m =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test2m, _Component);

  function test2m() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test2m);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test2m).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test2m, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n\n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    }
  }]);

  return test2m;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test2m);

/***/ }),

/***/ "./src/news/articles/test3.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test3.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test3.jsx";



var test3 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test3, _Component);

  function test3() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test3);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test3).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test3;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test3);

/***/ }),

/***/ "./src/news/articles/test4.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test4.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test4.jsx";



var test4 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test4, _Component);

  function test4() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test4);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test4).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test4, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test4;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test4);

/***/ }),

/***/ "./src/news/articles/test5.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test5.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test5.jsx";



var test5 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test5, _Component);

  function test5() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test5);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test5).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test5, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test5;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test5);

/***/ }),

/***/ "./src/news/articles/test6.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test6.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test6.jsx";



var test6 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test6, _Component);

  function test6() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test6);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test6).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test6, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test6;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test6);

/***/ }),

/***/ "./src/news/articles/test7.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test7.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test7.jsx";



var test7 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test7, _Component);

  function test7() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test7);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test7).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test7, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test7;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test7);

/***/ }),

/***/ "./src/news/articles/test8.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test8.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test8.jsx";



var test8 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test8, _Component);

  function test8() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test8);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test8).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test8, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test8;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test8);

/***/ }),

/***/ "./src/news/articles/test9.jsx":
/*!*************************************!*\
  !*** ./src/news/articles/test9.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/markdown */ "./node_modules/@nteract/markdown/lib/index.js");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/articles/test9.jsx";



var test9 =
/*#__PURE__*/
function (_Component) {
  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(test9, _Component);

  function test9() {
    Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, test9);

    return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(test9).apply(this, arguments));
  }

  Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(test9, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var source = "\n## AI Boot Camp\nCNN(\u7573\u307F\u8FBC\u307F\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF)\u3092\u6271\u3044\u3001\u753B\u50CF\u8A8D\u8B58\u3092\u5B9F\u88C5\u3059\u308B  \n\u5F37\u3044AI\u3068\u5F31\u3044AI\u3000\u6C4E\u7528\u6027\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u3060\u304C\u3001\u73FE\u5728\u306E\u4E3B\u6D41\u306F\u5F31\u3044\u65B9  \n#### \u6559\u5E2B\u3042\u308A\u5B66\u7FD2\n\u5206\u985E\u30E2\u30C7\u30EB\u3068\u6570\u5024\u4E88\u6E2C\u3092\u3059\u308B\u56DE\u5E30\u30E2\u30C7\u30EB  \n**\u8A13\u7DF4\u30C7\u30FC\u30BF\u3068\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u306B\u5206\u3051\u3066\u904E\u5B66\u7FD2\u3092\u9632\u3050**  \n\u4EBA\u304C\u6C7A\u3081\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3092*\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC*\u3068\u3044\u3046  \n#### \u56DE\u5E30\u30E2\u30C7\u30EB\n\u7DDA\u578B\u5358\u56DE\u5E30\u3000from one to one data   \u76F4\u7DDA\u3092\u6C7A\u3081\u308B\u3000y = ax + b  \n\u7DDA\u578B\u91CD\u56DE\u5E30\u3000\u5E73\u9762\u3092\u6C7A\u3081\u308B  \n\u640D\u5931\u95A2\u6570\u3068\u3044\u3046\u306E\u304C\u8272\u3005\u3042\u308B\u3000(MSE)  \n#### \u6C4E\u5316\n\u904E\u5B66\u7FD2\u3092\u9632\u304E\u3001\u672A\u77E5\u306E\u30C7\u30FC\u30BF\u306B\u3082\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u6ED1\u3089\u304B\u306A\u66F2\u7DDA\u3092\u5F97\u308B  \n\u305D\u306E\u305F\u3081\u306B\u306F\u6B63\u5247\u5316(\u640D\u5931\u95A2\u6570\u4EE5\u5916\u306B\u30DA\u30CA\u30EB\u30C6\u30A3\u9805\u3092\u305F\u3059\u3001L1\u306FLasso\u56DE\u5E30,L2\u306FRidge\u56DE\u5E30,L1L2\u3069\u3061\u3089\u3082\u4F7F\u3046\u306E\u304CElastic Net\u56DE\u5E30)\u3092\u3059\u308B  \n\u975E\u7DDA\u5F62\u56DE\u5E30\u306F\u7DDA\u578B\u306B\u306A\u308B\u3088\u3046\u306B\u7DDA\u578B\u306B\u79FB\u52D5\u3057\u3066\u304B\u3089\u3084\u308B?  \n#### \u5206\u985E\u30E2\u30C7\u30EB  \n\u30ED\u30B8\u30B9\u30C6\u30A3\u30C3\u30AF\u56DE\u5E30\u3001\u56DE\u5E30\u30E2\u30C7\u30EB\u3068\u3057\u3066\u78BA\u7387\u3092\u5F97\u308B  \nsupport vector machine SVN \u5206\u96E2\u3059\u308B\u76F4\u7DDA\u3092\u5F15\u304D\u3001\u30B5\u30DD\u30FC\u30C8\u30D9\u30AF\u30C8\u30EB(\u4E00\u756A\u8FD1\u3044\u70B9\u304B\u3089\u76F4\u7DDA\u3078\u306E\u30D9\u30AF\u30C8\u30EB)\u304C\u6700\u3082\u5927\u304D\u304F\u306A\u308B\u3088\u3046\u306B\u3059\u308B  \n\u76F4\u7DDA\u3067\u306A\u3044\u3068\u304D\u306F\u975E\u7DDA\u5F62\u30E2\u30C7\u30EB\u3082\u4F7F\u3048\u308B  \n#### \u6C7A\u5B9A\u6728\n\u4E0D\u9806\u5EA6(\u5206\u985E\u51FA\u6765\u5177\u5408)\u306B\u3088\u3063\u3066\u6700\u9069\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6C7A\u3081\u308B  \n\u3053\u308C\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u306E\u304C**\u30E9\u30F3\u30C0\u30E0\u30D5\u30A9\u30EC\u30B9\u30C8**,\u5404\u6C7A\u5B9A\u6728\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E,\u5C0F\u3055\u306A\u6728\u3092\u3044\u3063\u3071\u3044\u4F7F\u3046\u304B\u3089\u68EE  \n#### K-NN  \n\u4E8B\u524D\u5B66\u7FD2\u3092\u884C\u308F\u306A\u3044\u6020\u60F0\u5B66\u7FD2\u3000\u5468\u308A\u304B\u3089\u4E00\u5B9A\u306E\u8DDD\u96E2\u306B\u3042\u308B\u30C7\u30FC\u30BF\u306E\u591A\u6570\u6C7A\u3067\u5206\u985E\u3000\u3053\u306E\u8DDD\u96E2\u304C\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF  \n### \u30C7\u30FC\u30BF\u306E\u5206\u3051\u65B9\n#### \u30DB\u30FC\u30EB\u30C9\u30A2\u30A6\u30C8\u6CD5\n7:3\u3050\u3089\u3044  \n#### K-\u5206\u5272\u4EA4\u5DEE\u6CD5\nk\u500B\u306B\u5206\u5272\u30011\u500B\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u8A55\u4FA1\u3001k\u56DE\u884C\u3044\u5E73\u5747\u3092\u53D6\u308B  \n### \u8A55\u4FA1\u306E\u65B9\u6CD5\n#### \u6C7A\u5B9A\u4FC2\u6570\n\u51FA\u529B\u3068\u5B9F\u969B\u306E\u5DEE\u304B\u3089\u30011\u306B\u8FD1\u3044\u307B\u3069\u3044\u3044\u30E2\u30C7\u30EB\n#### \u6DF7\u5408\u884C\u5217\u3068\u6B63\u89E3\u7387\nPN\u306B\u5206\u985E\u3059\u308B\u5834\u5408\u3001TrueFalse\u3000\u3067TP,FP,FN,TN\u306B\u5206\u3051\u3089\u308C\u308B\u3000\u3053\u306E\u3046\u3061\u306EF\u306E\u5272\u5408\u3092\u6B63\u89E3\u7387\u3068\u3044\u3046  \n\u9069\u5408\u7387\u3000\u5B9F\u969BP\u306E\u3046\u3061T\u3067\u3042\u308B\u7CBE\u5EA6\u3000TP/FN+TP \u9593\u9055\u3063\u3066\u3082\u3044\u3044\u304B\u3089P\u3092\u51FA\u3057\u305F\u3044\u5834\u5408\u5927\u4E8B\u306B\u306A\u308B  \n\u9069\u5408\u7387\u3068\u518D\u73FE\u7387\u306F\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306E\u95A2\u4FC2\u306B\u3042\u308B\u3000F\u5024\u3092\u826F\u304F\u4F7F\u3046\u3000\n### Google Colaboratory  \nGPU\u3092\u4F7F\u3048\u308B\u304B\u3089\u3001\u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4F7F\u3046\u3093\u3060\u3063\u305F\u3089\u3053\u3063\u3061\u306E\u65B9\u304C\u65E9\u3044  \n\u3066\u304B\u4ED6\u306B\u3082\u4F7F\u3048\u308B\u306D  \n## \u6559\u5E2B\u306A\u3057\u5B66\u7FD2\n\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3068\u4E3B\u6210\u5206\u5206\u6790  \n#### \u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\n\u30C7\u30FC\u30BF\u304C\u8FD1\u3044\u3082\u306E\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \n\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u304B\u3089\u3055\u3089\u306B\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u95A2\u4FC2\u3092\u6A39\u5F62\u56F3\u306B\u307E\u3068\u3081\u3089\u308C\u308B  \n\u975E\u968E\u5C64\u7684\u30AF\u30E9\u30B9\u30BF\u30EA\u30F3\u30B0\u3000\u30AF\u30E9\u30B9\u30BF\u306E\u4E0A\u4E0B\u95A2\u4FC2\u306F\u306A\u304F\u3001\u70B9\u3067\u306E\u307F\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u3063\u3066\u3044\u304F  \nk-means \u30AF\u30E9\u30B9\u30BF\u6570k\u3092\u30CF\u30A4\u30D1\u30FC\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3059\u308B\u3000\u30E9\u30F3\u30C0\u30E0\u3067\u30AF\u30E9\u30B9\u30BF\u3092\u4F5C\u308A\u3001\u305D\u3053\u306B\u5165\u308B\u3088\u3046\u5C11\u3057\u305A\u3064\u5206\u985E\u3001\u518D\u8A08\u7B97\u3000KMeans(k,,,)  \n\u30A8\u30EB\u30DC\u30FC\u6CD5\u3000k\u3092\u30AF\u30E9\u30B9\u30BF\u306E\u96C6\u7D04\u5EA6\u3068\u591A\u3055\u3092\u5929\u79E4\u304B\u3051\u3066\u6C7A\u3081\u3066\u304F\u308C\u308B  \nDBSCAN \u3081\u3063\u3061\u3083\u307E\u3068\u307E\u3063\u3066\u308B\u30B3\u30A2\u70B9\u306E\u307F\u4F7F\u3046\u3000\u30CE\u30A4\u30BA\u3092\u9664\u53BB\u3057\u3084\u3059\u3044  \n#### \u4E3B\u6210\u5206\u5206\u6790\n\u30C7\u30FC\u30BF\u306E\u8981\u7D20\u304C\u591A\u3044\u6642\u306B\u5727\u7E2E\u3057\u3066\u6B21\u5143\u6570\u3092\u3046\u307E\u304F\u524A\u308B\u3000\u5404\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u60C5\u5831\u3092\u305D\u308C\u305E\u308C\u306E\u76F8\u95A2\u304B\u3089\u5727\u7E2E\u3059\u308B  \nPCA \u8A08\u7B97\u91CF\u3092\u524A\u6E1B\u3067\u304D\u308B  \n## \u30CB\u30E5\u30FC\u30E9\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nRNN(\u6DF1\u5C64)-> CNN  \n\u3000\u3000\u3000\u3000\u3000-> RNN\u56DE\u5E30\u7D50\u5408  \ninput x \u2192 $\\sigma (wx+b)= 0,1$ w\u91CD\u307F\u3000b\u30D0\u30A4\u30A2\u30B9\u3000$\\sigma$\u6D3B\u6027\u5316\u95A2\u6570  \nW = [[w_11,w_12,..],[,,,],,,]\u3001B=[b1,b2,,,,] \u3068\u3059\u308B\u3068 \u51FA\u529B\u306F$\\sigma$(WX+B)  \n\u51FA\u529B\u3068\u6B63\u89E3\u306E\u4E8C\u4E57\u8AA4\u5DEE\u3092\u5C0F\u3055\u304F\u3057\u3066\u3044\u304F  \n#### \u52FE\u914D\u964D\u4E0B\u6CD5\n$x_{new} = x_{old} - \\mu \\frac{dy}{dx} a$  $\\mu$\u5B66\u7FD2\u7387  \n\u5B66\u7FD2\u7387\u306F\u56FA\u5B9A\u3057\u305F\u308A\u3057\u306A\u304B\u3063\u305F\u308A\u3000\u5909\u66F4\u306E\u65B9\u6CD5\u306F\u3001\u6700\u521D\u5927\u304D\u304F\u3001\u3060\u3093\u3060\u3093\u5C0F\u3055\u304F\u304C\u591A\u3044  \n\u5404\u30CE\u30FC\u30C9\u306E\u504F\u5FAE\u5206(\u5909\u5316\u91CF)\u304C\u7D50\u679C\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3067\u5C11\u3057\u305A\u3064\u5909\u3048\u3066\u3044\u304F  \n\u305F\u3060\u3057\u3001\u30CE\u30FC\u30C9\u304C\u591A\u3044\u3068\u304B\u3051\u3066\u884C\u3063\u3066\u5C0F\u3055\u304F\u306A\u308A\u3059\u304E\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308B  \nrelu\u95A2\u6570\u306F\u5FAE\u5206\u304C1\u3067\u4E00\u5B9A\u306A\u306E\u3067\u3053\u308C\u304C\u8D77\u3053\u308A\u306B\u304F\u3044  \nAdam\u304C\u6700\u9069\u3089\u3057\u3044\u3000\u306A\u305C\u306A\u3089\u5B66\u7FD2\u7387\u3092\u81EA\u52D5\u3067\u6C7A\u3081\u3066\u884C\u3063\u3066\u304F\u308C\u3001\u3044\u308D\u3044\u308D\u306A\u65B9\u6CD5\u306E\u3044\u3044\u3068\u3053\u53D6\u308A\u307F\u305F\u3044\u306A\u3084\u3064\u3060\u304B\u3089  \n\u904E\u5B66\u7FD2\u3092\u6291\u3048\u308B\u30C9\u30ED\u30C3\u30D7\u30A2\u30A6\u30C8\u6CD5\u3000\u4E00\u90E8\u30E9\u30F3\u30C0\u30E0\u3067\u4F7F\u308F\u306A\u3044\u3088\u3046\u306B\u3059\u308B  \n\u518D\u73FE\u7387\u304C\u9AD8\u3044\u2192\u7570\u5E38\u306F\u691C\u77E5\u3067\u304D\u308B\u304C\u8AA4\u5224\u5B9A\u306F\u77E5\u3089\u3093  \n\u7CBE\u5EA6\u304C\u9AD8\u3044\u2192\u7570\u5E38\u3067\u3042\u308B\u53EF\u80FD\u6027\u306F\u9AD8\u3044\u304C\u691C\u77E5\u3067\u304D\u306A\u3044\u306E\u306F\u308F\u304B\u3089\u306A\u3044  \n### \u30C7\u30A3\u30FC\u30D7\u30E9\u30FC\u30CB\u30F3\u30B0\u306E\u30D6\u30EC\u30A4\u30AF\u30B9\u30EB\u30FC\n\u30EA\u30BD\u30FC\u30B9\u306E\u5145\u5B9F(\u30C7\u30FC\u30BF\u91CF\u3001GPGPU\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u666E\u53CA)\u306B\u3088\u308B  \n## CNN\n\u5927\u304D\u3055\u3001\u8272\u5408\u3044\u304C\u9055\u3048\u3069\u540C\u3058\u3082\u306E\u3092\u8B58\u5225\u3057\u305F\u3044\u2192\u751F\u7269\u306E\u8996\u91CE\u306B\u4F3C\u3066\u3044\u308B\u7573\u307F\u8FBC\u307F(\u7573\u307F\u8FBC\u307F\u5C64=\u5358\u7D14\u7D30\u80DE\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u5C64=\u8907\u96D1\u7D30\u80DE)  \n\u30AB\u30FC\u30CD\u30EB\u3067\u4E00\u3064\u306E\u7279\u5FB4\u3092\u6349\u3048(\u91CD\u307F\u5171\u6709\u7D50\u5408)\u3001\u30D7\u30FC\u30EA\u30F3\u30B0\u3067\u4E00\u90E8\u524A\u304E\u843D\u3068\u3059  \n\u30AB\u30FC\u30CD\u30EB\u306F\u3061\u3087\u3063\u3068\u3057\u305F\u914D\u5217\u3001\u3053\u308C\u3092\u5165\u529B\u5168\u4F53\u306B\u90E8\u5206\u7684\u306B\u8981\u7D20\u7A4D\u3068\u3063\u3066\u884C\u3063\u3066\u51FA\u529B\u3068\u3059\u308B\u2192\u30AB\u30FC\u30CD\u30EB\u306E\u8981\u7D20\u3092\u3069\u308C\u3050\u3089\u3044\u3069\u3053\u306B\u542B\u3093\u3067\u3044\u308B\u304B  \n\u5468\u56F2\u3092\u30BC\u30ED\u3067\u57CB\u3081\u3066(\u30BC\u30ED\u30D1\u30C7\u30A3\u30F3\u30B0)\u30B9\u30C8\u30E9\u30A4\u30C9\u3092\u5E83\u3052\u3066\u3082\u5168\u4F53\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B  \n\u30B9\u30C8\u30E9\u30A4\u30C9\u306F\u5927\u304D\u3044\u3068\u8A08\u7B97\u306F\u6E1B\u308B\u304C\u7CBE\u5EA6\u843D\u3061\u308B  \n\u30D7\u30FC\u30EA\u30F3\u30B0\u3000\u30DE\u30C3\u30AF\u30B9\u30D7\u30FC\u30EA\u30F3\u30B0\u306F\u5206\u5272\u9818\u57DF\u306E\u6700\u5927\u5024\u306E\u307F\u3068\u308B\u3001\u3068\u304B\u4E00\u90E8\u306E\u7279\u5FB4\u306B\u307E\u3068\u3081\u308B\u2192\u4F4D\u7F6E\u306B\u3088\u308B\u5909\u5316\u306B\u5F71\u97FF\u53D7\u3051\u306B\u304F\u3044  \n#### \u5B66\u7FD2\u524D\n\u6C34\u5897\u3057\u3000\u5B66\u7FD2\u524D\u306B\u30C7\u30FC\u30BF\u3092\u7DDA\u578B\u79FB\u52D5\u3057\u3066\u3044\u308D\u3044\u308D\u306A\u30BF\u30A4\u30D7\u306E\u753B\u50CF\u4F5C\u308B\u3068\u540C\u6642\u306B\u5B66\u7FD2\u30C7\u30FC\u30BF\u3092\u591A\u304F\u3059\u308B  \n\u6B63\u898F\u5316\u3059\u308B\u3068\u5883\u754C\u3092\u5F37\u8ABF\u3067\u304D\u308B  \n#### \u3044\u308D\u3044\u308D\nR-CNN \u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u51E6\u7406\u306E\u3084\u3064  \ndeep is bette  \n";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_nteract_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "article concert",
        source: source,
        escapeHtml: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return test9;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (test9);

/***/ }),

/***/ "./src/news/components.js":
/*!********************************!*\
  !*** ./src/news/components.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articles_atest_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles/atest.jsx */ "./src/news/articles/atest.jsx");
/* harmony import */ var _articles_nTest2_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles/nTest2.jsx */ "./src/news/articles/nTest2.jsx");
/* harmony import */ var _articles_nTest3_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles/nTest3.jsx */ "./src/news/articles/nTest3.jsx");
/* harmony import */ var _articles_release_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/release.jsx */ "./src/news/articles/release.jsx");
/* harmony import */ var _articles_settings_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/settings.jsx */ "./src/news/articles/settings.jsx");
/* harmony import */ var _articles_t4m_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/t4m.jsx */ "./src/news/articles/t4m.jsx");
/* harmony import */ var _articles_test_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles/test.jsx */ "./src/news/articles/test.jsx");
/* harmony import */ var _articles_test10_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles/test10.jsx */ "./src/news/articles/test10.jsx");
/* harmony import */ var _articles_test11_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./articles/test11.jsx */ "./src/news/articles/test11.jsx");
/* harmony import */ var _articles_test12_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articles/test12.jsx */ "./src/news/articles/test12.jsx");
/* harmony import */ var _articles_test2_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./articles/test2.jsx */ "./src/news/articles/test2.jsx");
/* harmony import */ var _articles_test2m_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./articles/test2m.jsx */ "./src/news/articles/test2m.jsx");
/* harmony import */ var _articles_test3_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./articles/test3.jsx */ "./src/news/articles/test3.jsx");
/* harmony import */ var _articles_test4_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./articles/test4.jsx */ "./src/news/articles/test4.jsx");
/* harmony import */ var _articles_test5_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./articles/test5.jsx */ "./src/news/articles/test5.jsx");
/* harmony import */ var _articles_test6_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./articles/test6.jsx */ "./src/news/articles/test6.jsx");
/* harmony import */ var _articles_test7_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./articles/test7.jsx */ "./src/news/articles/test7.jsx");
/* harmony import */ var _articles_test8_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./articles/test8.jsx */ "./src/news/articles/test8.jsx");
/* harmony import */ var _articles_test9_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./articles/test9.jsx */ "./src/news/articles/test9.jsx");



















var news = [{
  title: "Test4m",
  url: "t4m",
  date: "2019-05-25",
  author: "前田皓生",
  component: _articles_t4m_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  title: "Test2M",
  url: "test2m",
  date: "2019-05-25",
  author: "前田皓生",
  component: _articles_test2m_jsx__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  title: "Ntest3",
  url: "nTest3",
  date: "2019-05-20",
  author: "三石ミゲール",
  component: _articles_nTest3_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  title: "NTEST",
  url: "nTest2",
  date: "2019-05-20",
  author: "三石ミゲール",
  component: _articles_nTest2_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  title: "aTest",
  url: "atest",
  date: "2019-05-16",
  author: "三石ミゲール",
  component: _articles_atest_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  title: "Test12",
  url: "test12",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test12_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  title: "Test11",
  url: "test11",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test11_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  title: "test10",
  url: "test10",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test10_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  title: "Test9",
  url: "test9",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test9_jsx__WEBPACK_IMPORTED_MODULE_18__["default"]
}, {
  title: "test8",
  url: "test8",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test8_jsx__WEBPACK_IMPORTED_MODULE_17__["default"]
}, {
  title: "Test7",
  url: "test7",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test7_jsx__WEBPACK_IMPORTED_MODULE_16__["default"]
}, {
  title: "test6",
  url: "test6",
  date: "2019-05-15",
  author: "三石ミゲール",
  component: _articles_test6_jsx__WEBPACK_IMPORTED_MODULE_15__["default"]
}, {
  title: "Test5",
  url: "test5",
  date: "2019-05-07",
  author: "三石ミゲール",
  component: _articles_test5_jsx__WEBPACK_IMPORTED_MODULE_14__["default"]
}, {
  title: "ホームページリリース",
  url: "release",
  date: "2019-05-02",
  author: "三石ミゲール",
  component: _articles_release_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  title: "Test4",
  url: "test4",
  date: "2019-04-30",
  author: "三石ミゲール",
  component: _articles_test4_jsx__WEBPACK_IMPORTED_MODULE_13__["default"]
}, {
  title: "Test3",
  url: "test3",
  date: "2019-04-29",
  author: "三石ミゲール",
  component: _articles_test3_jsx__WEBPACK_IMPORTED_MODULE_12__["default"]
}, {
  title: "Test2",
  url: "test2",
  date: "2019-04-29",
  author: "三石ミゲール",
  component: _articles_test2_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]
}, {
  title: "Test",
  url: "test",
  date: "2019-04-29",
  author: "三石ミゲール",
  component: _articles_test_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  title: "初期設定",
  url: "settings",
  date: "2019-04-23",
  author: "三石ミゲール",
  component: _articles_settings_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (news);

/***/ }),

/***/ "./src/news/index.jsx":
/*!****************************!*\
  !*** ./src/news/index.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article */ "./src/article/index.jsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/news/components.js");
var _jsxFileName = "/Users/MANI/.musicart/musicart/src/news/index.jsx";




var newsRoutes = function newsRoutes(props) {
  var routeList = Object(_article__WEBPACK_IMPORTED_MODULE_1__["default"])(_components__WEBPACK_IMPORTED_MODULE_2__["default"], '/news');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, routeList);
};

/* harmony default export */ __webpack_exports__["default"] = (newsRoutes);

/***/ }),

/***/ "./src/news/log.json":
/*!***************************!*\
  !*** ./src/news/log.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, default */
/***/ (function(module) {

module.exports = [{"url":"t4m","title":"Test4m","date":"2019-05-25","file":"test2.md","author":"前田皓生","copied":[],"tag":["お知らせ"]},{"url":"test2m","title":"Test2M","date":"2019-05-25","file":"Musicart\rweb\rfor\rtest2.md","author":"前田皓生","copied":[],"tag":["お知らせ"]},{"url":"nTest3","title":"Ntest3","date":"2019-05-20","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コラム","a","c"]},{"url":"nTest2","title":"NTEST","date":"2019-05-20","file":"0.md","author":"三石ミゲール","copied":[],"tag":[]},{"url":"atest","title":"aTest","date":"2019-05-16","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コラム"]},{"url":"test12","title":"Test12","date":"2019-05-15","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"test11","title":"Test11","date":"2019-05-15","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"test10","title":"test10","date":"2019-05-15","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"test9","title":"Test9","date":"2019-05-15","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"test8","title":"test8","date":"2019-05-15","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"test7","title":"Test7","date":"2019-05-15","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"test6","title":"test6","date":"2019-05-15","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"test5","title":"Test5","date":"2019-05-07","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コンサート"]},{"url":"release","title":"ホームページリリース","date":"2019-05-02","file":"Home Page release Article.md","author":"三石ミゲール","copied":[],"tag":["コラム"]},{"url":"test4","title":"Test4","date":"2019-04-30","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コラム"]},{"url":"test3","title":"Test3","date":"2019-04-29","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コラム"]},{"url":"test2","title":"Test2","date":"2019-04-29","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コラム"]},{"url":"test","title":"Test","date":"2019-04-29","file":"0.md","author":"三石ミゲール","copied":[],"tag":["コラム"]},{"url":"settings","title":"初期設定","date":"2019-04-23","author":"三石ミゲール","copied":["./assets/スクリーンショット2019-04-13225551.png","./assets/スクリーンショット2019-04-13231007.png","./assets/スクリーンショット2019-04-13231433.png","./assets/スクリーンショット2019-04-14214537.png","./assets/スクリーンショット2019-04-14223924.png",""],"tag":["コラム","コンサート"]}];

/***/ }),

/***/ "./src/news/tag.json":
/*!***************************!*\
  !*** ./src/news/tag.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = ["コラム","コンサート","チケット","お知らせ"];

/***/ }),

/***/ "./src/reducers/articlesReducer.jsx":
/*!******************************************!*\
  !*** ./src/reducers/articlesReducer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");


var initialState = {
  start: {
    'concert': 0,
    'news': 0
  },
  selectedTag: {
    'concert': null,
    'news': null
  },
  tagDisp: {
    'concert': false,
    'news': false
  },
  logPart: {
    'concert': null,
    'news': null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'SAVE_START':
      return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        start: Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.start, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload.type, action.payload.start))
      });

    case 'SAVE_TAG':
      return Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        selectedTag: Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.selectedTag, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload.type, action.payload.selectedTag)),
        tagDisp: Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.tagDisp, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload.type, action.payload.tagDisp)),
        logPart: Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.logPart, Object(_Users_MANI_musicart_musicart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload.type, action.payload.logPart))
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/concertReducer.jsx":
/*!*****************************************!*\
  !*** ./src/reducers/concertReducer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initialState = {
  concert: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'ON_CONCERT':
      return {
        concert: true
      };

    case 'OUT_CONCERT':
      return {
        concert: false
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/homepicReducer.jsx":
/*!*****************************************!*\
  !*** ./src/reducers/homepicReducer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/concert2019_logo.png */ "./src/img/concert2019_logo.png");
/* harmony import */ var _img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_classical_music_1838390_1280_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/classical-music-1838390_1280.jpg */ "./src/img/classical-music-1838390_1280.jpg");
/* harmony import */ var _img_classical_music_1838390_1280_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_classical_music_1838390_1280_jpg__WEBPACK_IMPORTED_MODULE_1__);


var initialState = {
  pictures: [{
    img: _img_concert2019_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    link: {
      text: 'concert logo',
      type: 'Route',
      url: '/concert/home'
    }
  }, {
    img: _img_classical_music_1838390_1280_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    link: {
      text: 'Demo photo',
      type: 'a',
      url: 'https://pixabay.com/ja/%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E9%9F%B3%E6%A5%BD-%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%88-%E3%83%9E%E3%82%AF%E3%83%AD-%E9%9F%B3%E6%A5%BD-%E6%A5%BD%E5%99%A8-%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%B7%E3%83%A3%E3%83%B3-1838390/'
    }
  }]
};

function homepicReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (homepicReducer);

/***/ }),

/***/ "./src/reducers/linksReducer.jsx":
/*!***************************************!*\
  !*** ./src/reducers/linksReducer.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/MANI/.musicart/musicart/src/reducers/linksReducer.jsx";
// import * as types from '../actions/links';

var initialState = {
  headerLinks: [{
    type: 'Route',
    url: '/news',
    text: 'News'
  }, {
    type: 'Route',
    url: '/about',
    text: 'About'
  }, {
    type: 'Route',
    url: '/concert/home',
    text: 'Concert'
  }, {
    type: 'Route',
    url: '/members',
    text: 'Join us'
  }, {
    type: 'Route',
    url: '/tickets',
    text: 'Tickets'
  }, {
    type: 'Route',
    url: '/contact',
    text: 'Contact'
  }, {
    type: 'Route',
    url: '/',
    text: 'Home'
  }],
  membersLinks: [{
    type: 'Route',
    url: '/contact',
    tab: 'Orchestra',
    head: 'オーケストラ',
    icon: 'music_note',
    sub: 'Orchestra Member',
    text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, "Orchestra M\u03BCsicart \u3067\u306F\u6F14\u594F\u4F1A\u6BCE\u306B\u65B0\u898F\u56E3\u54E1\u3092\u52DF\u96C6\u3057\u3066\u304A\u308A\u307E\u3059\u3002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }), "\u697D\u5668\u306B\u30D6\u30E9\u30F3\u30AF\u304C\u3042\u308B\u65B9\u3001\u521D\u5FC3\u8005\u3068\u3044\u3046\u65B9\u3082\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002\u307E\u305F\u3001\u52DF\u96C6\u30D1\u30FC\u30C8\u306F\u968F\u6642\u5909\u66F4\u3057\u307E\u3059\u306E\u3067\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, "\u30D5\u30A1\u30B4\u30C3\u30C8\xD71\u540D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, "\u30F4\u30A1\u30A4\u30AA\u30EA\u30F3\xD7\u82E5\u5E72\u540D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, "\u30F4\u30A3\u30AA\u30E9\xD7\u82E5\u5E72\u540D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, "\u30C1\u30A7\u30ED\xD7\u82E5\u5E72\u540D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, "\u30B3\u30F3\u30C8\u30E9\u30D0\u30B9\xD7\u82E5\u5E72\u540D")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "\u6D3B\u52D5\u5185\u5BB9\u53CA\u3073\u7DF4\u7FD2\u65E5\u7A0B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, "\u5E741\uFF5E2\u56DE\u306E\u6F14\u594F\u4F1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, "\u571F\u65E5\u3092\u4E2D\u5FC3\u306B\u67081\uFF5E3\u56DE\u7A0B\u5EA6\u306E\u7DF4\u7FD2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, "\u500B\u4EBA\u7DF4\u7FD2\u3092\u81EA\u5B85\u3067\u3067\u304D\u306A\u3044\u4EBA\u5411\u3051\u306E\u7DF4\u7FD2\u74B0\u5883\u3092\u6E96\u5099\u3067\u304D\u308B\u3088\u3046\u8ABF\u6574\u4E2D")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, "\u203B\u539F\u5247\u67081\uFF5E2\u56DE\u7A0B\u5EA6\u306E\u7DF4\u7FD2\u3001\u672C\u756A\u76F4\u524D\u306F\u8ABF\u6574\u3042\u308A\u3002\u7DF4\u7FD2\u65E5\u7A0B\u306F2\u30F6\u6708\u524D\u3092\u76EE\u51E6\u306B\u6708\u6BCE\u306B\u901A\u9054\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, "\u7DF4\u7FD2\u5834\u6240"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, "\u7DF4\u99AC\u30FB\u6749\u4E26\u30FB\u65B0\u5BBF\u30FB\u8C4A\u5CF6\u30A8\u30EA\u30A2"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      start: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, "\u56E3\u8CBB"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, "\u5E74\u4F1A\u8CBB1\u4E07\u5186\uFF08\u30B7\u30FC\u30BA\u30F3\u9014\u4E2D\u3067\u306E\u5165\u56E3\u306E\u5834\u5408\u3001\u5FDC\u76F8\u8AC7\uFF09"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, "\u6F14\u594F\u4F1A\u53C2\u52A0\u8CBB2\u4E07\u5186 / \u56DE\uFF08\u6F14\u594F\u4F1A\u306E\u4E88\u7B97\u306B\u3088\u3063\u3066\u306F\u82E5\u5E72\u524D\u5F8C\u3059\u308B\u53EF\u80FD\u6027\u306F\u3042\u308A\u307E\u3059\uFF09")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      start: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, "\u52DF\u96C6\u8981\u9805")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, "\u4E0B\u8A18\u306E\u5168\u3066\u306B\u8A72\u5F53\u3059\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }), " \u672C\u56E3\u4F53\u306E\u6D3B\u52D5\u7406\u5FF5\u306B\u7406\u89E3\u306E\u3042\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    }), " 18\u6B73\u4EE5\u4E0A\uFF08\u9AD8\u6821\u751F\u4E0D\u53EF\uFF09\u203B\u5E74\u9F62\u306B\u4E0A\u9650\u306F\u3042\u308A\u307E\u305B\u3093"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }), " \u69D8\u3005\u306A\u80CC\u666F\u3092\u6301\u3064\u56E3\u54E1\u3068\u5354\u8ABF\u3067\u304D\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }), " \u30AA\u30FC\u30B1\u30B9\u30C8\u30E9\u697D\u5668\u7D4C\u9A13\u8005\u3001\u6216\u3044\u306F\u697D\u5668\u672A\u7D4C\u9A13\u8005\uFF08\u672A\u7D4C\u9A13\u8005\u306F\u5FDC\u76F8\u8AC7\uFF09"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }), " \u81EA\u5206\u3067\u697D\u5668\u3092\u6301\u3063\u3066\u3044\u308B\u65B9\uFF08\u30B3\u30F3\u30C8\u30E9\u30D0\u30B9\u3001\u6253\u697D\u5668\u3001\u7279\u6B8A\u697D\u5668\u306B\u95A2\u3057\u3066\u306F\u5FDC\u76F8\u8AC7\uFF09"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }), " \u30B2\u30CD\u30D7\u30ED\u672C\u756A\u3092\u542B\u3080\u5FC5\u8981\u6700\u4F4E\u9650\u306E\u7DF4\u7FD2\u306B\u53C2\u52A0\u3067\u304D\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }), " \u81EA\u8EAB\u306E\u6F14\u594F\u6280\u8853\u306E\u5411\u4E0A\u306B\u524D\u5411\u304D\u306A\u65B9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, "\u305D\u306E\u4ED6\u306E\u30D1\u30FC\u30C8\u3082\u72B6\u6CC1\u306B\u5FDC\u3058\u3066\u52DF\u96C6\u3044\u305F\u3057\u307E\u3059\u306E\u3067\u3001\u307E\u305A\u306F\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002")),
    background: 'rgba(228, 89, 45, 0.59)',
    color: 'rgb(212, 62, 6)'
  }, {
    type: 'Route',
    url: '/contact',
    tab: 'Artist',
    head: 'アーティスト',
    icon: 'brush',
    sub: 'Artist',
    text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: undefined
    }, "Orchestra M\u03BCsicart \u3067\u306F\u4E00\u7DD2\u306B\u4F5C\u54C1\u3092\u4F5C\u308A\u4E0A\u3052\u308B\u3042\u3089\u3086\u308B\u30B8\u30E3\u30F3\u30EB\u306E\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }, "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30C7\u30B6\u30A4\u30F3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: undefined
    }, "3D\u30C7\u30B6\u30A4\u30F3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: undefined
    }, "\u6620\u50CF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: undefined
    }, "\u7167\u660E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    }, "\u97F3\u97FF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: undefined
    }, "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }, "\u821E\u53F0\u9053\u5177\uFF08\u5927\u9053\u5177\u3001\u5C0F\u9053\u5177\u7B49\uFF09"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: undefined
    }, "\u30B3\u30F3\u30C6\u30F3\u30DD\u30E9\u30EA\u30FC\u30A2\u30FC\u30C8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    }, "\u30A4\u30F3\u30B9\u30BF\u30EC\u30FC\u30B7\u30E7\u30F3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }, "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3\u30C7\u30B6\u30A4\u30F3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    }, "\u30D8\u30A2\u30E1\u30A4\u30AF\u3000\u7B49")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, "\u6D3B\u52D5\u5185\u5BB9\u53CA\u3073\u7DF4\u7FD2\u65E5\u7A0B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: undefined
    }, "\u5E741\uFF5E2\u56DE\u306E\u6F14\u594F\u4F1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: undefined
    }, "\u571F\u65E5\u3092\u4E2D\u5FC3\u306B\u67081\uFF5E3\u56DE\u7A0B\u5EA6\u306E\u7DF4\u7FD2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: undefined
    }, "\u203B\u539F\u5247\u67081\uFF5E2\u56DE\u7A0B\u5EA6\u306E\u7DF4\u7FD2\u3001\u672C\u756A\u76F4\u524D\u306F\u8ABF\u6574\u3042\u308A\u3002\u7DF4\u7FD2\u65E5\u7A0B\u306F2\u30F6\u6708\u524D\u3092\u76EE\u51E6\u306B\u6708\u6BCE\u306B\u901A\u9054\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: undefined
    }, "\u203B\u6253\u3061\u5408\u308F\u305B\u306B\u95A2\u3057\u3066\u306F\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u8ABF\u6574\u3001\u57FA\u672C\u306F\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: undefined
    }, "\u7DF4\u7FD2\u5834\u6240"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: undefined
    }, "\u7DF4\u99AC\u30FB\u6749\u4E26\u30FB\u65B0\u5BBF\u30FB\u8C4A\u5CF6\u30A8\u30EA\u30A2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: undefined
    }, "\u52DF\u96C6\u8981\u9805"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: undefined
    }, "\u4E0B\u8A18\u306B\u8A72\u5F53\u3059\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: undefined
    }), " \u672C\u56E3\u4F53\u306E\u6D3B\u52D5\u7406\u5FF5\u306B\u7406\u89E3\u306E\u3042\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: undefined
    }), " 18\u6B73\u4EE5\u4E0A\uFF08\u9AD8\u6821\u751F\u4E0D\u53EF\uFF09\u203B\u5E74\u9F62\u306B\u4E0A\u9650\u306F\u3042\u308A\u307E\u305B\u3093"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }), " \u69D8\u3005\u306A\u80CC\u666F\u3092\u6301\u3064\u56E3\u54E1\uFF0C\u30B9\u30BF\u30C3\u30D5\u3068\u5354\u8ABF\u3067\u304D\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }), " \u30B2\u30CD\u30D7\u30ED\u672C\u756A\u3092\u542B\u3080\u5FC5\u8981\u6700\u4F4E\u9650\u306E\u7DF4\u7FD2\uFF0C\u6253\u3061\u5408\u308F\u305B\u306B\u53C2\u52A0\u3067\u304D\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }), " \u81EA\u8EAB\u306E\u6280\u8853\u306E\u5411\u4E0A\u306B\u524D\u5411\u304D\u306A\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: undefined
    }), " \u672A\u7D4C\u9A13\u8005\u3067\u3042\u3063\u3066\u3082\u7FD2\u5F97\u610F\u6B32\u306E\u3042\u308B\u65B9"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: undefined
    }, "\u72B6\u6CC1\u306B\u3088\u3063\u3066\u52DF\u96C6\u5185\u5BB9\u306F\u5909\u66F4\u3044\u305F\u3057\u307E\u3059\u3002\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002\u307E\u305A\u306F\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002")),
    background: 'rgba(131, 195, 123, 0.86)',
    color: 'rgb(18, 121, 5)'
  }, {
    type: 'Route',
    url: '/contact',
    tab: 'Concert Staff',
    head: 'スタッフ',
    icon: 'people',
    sub: 'Concert Staff',
    text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: undefined
    }, "Orchestra M\u03BCsicart \u3067\u306F\u4E00\u7DD2\u306B\u30B3\u30F3\u30B5\u30FC\u30C8\u3092\u4F5C\u308A\u4E0A\u3052\u308B\u30B9\u30BF\u30C3\u30D5\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059\u3002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: undefined
    }, "\u30D5\u30ED\u30A2\u30B9\u30BF\u30C3\u30D5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: undefined
    }, "\u30B9\u30C6\u30FC\u30B8\u30B9\u30BF\u30C3\u30D5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: undefined
    }, "\u696D\u52D9\u5185\u5BB9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: undefined
    }, "\u5E741\u301C2\u56DE\u306E\u6F14\u594F\u4F1A\u3067\u306E\u30B3\u30F3\u30B5\u30FC\u30C8\u30B9\u30BF\u30C3\u30D5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: undefined
    }, "\u203B\u6253\u3061\u5408\u308F\u305B\u306B\u95A2\u3057\u3066\u306F\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u8ABF\u6574\u3001\u57FA\u672C\u306F\u5F53\u65E5\u306E\u4F1A\u5834\u3067\u306E\u696D\u52D9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: undefined
    }, "\u30D5\u30ED\u30A2\u30B9\u30BF\u30C3\u30D5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: undefined
    }, "\u5F53\u65E5\u30C1\u30B1\u30C3\u30C8\u306E\u8CA9\u58F2\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u914D\u5E03\u3001\u30B2\u30B9\u30C8\u8A98\u5C0E\u306A\u3069\u30EC\u30BB\u30D7\u30B7\u30E7\u30F3\u696D\u52D9\u3092\u4E2D\u5FC3\u306B\u884C\u3063\u3066\u9802\u304D\u307E\u3059\u3002\u30B3\u30F3\u30B5\u30FC\u30C8\u306B\u304A\u3044\u3066\u6700\u521D\u306B\u30B2\u30B9\u30C8\u306E\u65B9\u3092\u8FCE\u3048\u308B\u306E\u306F\u30D5\u30ED\u30A2\u30B9\u30BF\u30C3\u30D5\u3067\u3059\u3002\u958B\u6F14\u524D\u306B\u30B2\u30B9\u30C8\u306E\u65B9\u306E\u30EF\u30AF\u30EF\u30AF\u3092\u6700\u5927\u9650\u307E\u3067\u5F15\u304D\u51FA\u3059\u5927\u5207\u306A\u304A\u4ED5\u4E8B\u3067\u3059\u3002")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: undefined
    }, "\u30B9\u30C6\u30FC\u30B8\u30B9\u30BF\u30C3\u30D5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: undefined
    }, "\u5F53\u65E5\u306E\u821E\u53F0\u30BB\u30C3\u30C8\u3001\u9032\u884C\u7BA1\u7406\u306A\u3069\u30B9\u30C6\u30FC\u30B8\u696D\u52D9\u3092\u4E2D\u5FC3\u306B\u884C\u3063\u3066\u9802\u304D\u307E\u3059\u3002Orchestra M\u03BCsicart\u3067\u306F\u69D8\u3005\u306A\u6F14\u51FA\u3092\u60F3\u5B9A\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u6F14\u594F\u8005\u3068\u30B9\u30C6\u30FC\u30B8\u30B9\u30BF\u30C3\u30D5\u306E\u9023\u643A\u304C\u5FC5\u8981\u4E0D\u53EF\u6B20\u306B\u306A\u308A\u307E\u3059\u3002\u6700\u9AD8\u306E\u30B9\u30C6\u30FC\u30B8\u3092\u4F5C\u308A\u3042\u3052\u308B\u305F\u3081\u306E\u5927\u5207\u306A\u304A\u4ED5\u4E8B\u3067\u3059\u3002")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: undefined
    }, "\u52E4\u52D9\u5730\u30FB\u7D66\u4E0E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: undefined
    }, "\u30B3\u30F3\u30B5\u30FC\u30C8\u306B\u5FDC\u3058\u3066\u5909\u52D5"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: undefined
    }, "\u52DF\u96C6\u8981\u9805"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: undefined
    }), " \u672C\u56E3\u4F53\u306E\u6D3B\u52D5\u7406\u5FF5\u306B\u7406\u89E3\u306E\u3042\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: undefined
    }), " 18\u6B73\u4EE5\u4E0A\uFF08\u9AD8\u6821\u751F\u4E0D\u53EF\uFF09\u203B\u5E74\u9F62\u306B\u4E0A\u9650\u306F\u3042\u308A\u307E\u305B\u3093"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: undefined
    }), " \u69D8\u3005\u306A\u80CC\u666F\u3092\u6301\u3064\u56E3\u54E1\uFF0C\u30B9\u30BF\u30C3\u30D5\u3068\u5354\u8ABF\u3067\u304D\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: undefined
    }), " \u30B2\u30CD\u30D7\u30ED\u672C\u756A\u3092\u542B\u3080\u5FC5\u8981\u6700\u4F4E\u9650\u306E\u7DF4\u7FD2\uFF0C\u6253\u3061\u5408\u308F\u305B\u306B\u53C2\u52A0\u3067\u304D\u308B\u65B9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: undefined
    }), " \u30B3\u30F3\u30B5\u30FC\u30C8\u696D\u52D9\u306B\u643A\u308F\u3063\u305F\u3053\u3068\u306E\u3042\u308B\u65B9\uFF0C\u307E\u305F\u306F\u672A\u7D4C\u9A13\u3067\u3082\u610F\u6B32\u306E\u3042\u308B\u65B9"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: undefined
    }, "\u72B6\u6CC1\u306B\u3088\u3063\u3066\u52DF\u96C6\u5185\u5BB9\u306F\u5909\u66F4\u3044\u305F\u3057\u307E\u3059\u3002\u4E88\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002\u307E\u305A\u306F\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002")),
    background: 'rgb(105, 115, 177)',
    color: 'rgb(27, 45, 158)'
  }]
};

function linksReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (linksReducer);

/***/ }),

/***/ "./src/reducers/ticketsReducer.jsx":
/*!*****************************************!*\
  !*** ./src/reducers/ticketsReducer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initialState = {
  ticketTypes: ["大人", "学生", "小人"],
  ticketMax: 5
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state;
});

/***/ }),

/***/ "./src/static/css/articles.css":
/*!*************************************!*\
  !*** ./src/static/css/articles.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./articles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/articles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./articles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/articles.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./articles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/articles.css");

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

/***/ "./src/static/css/carousel.css":
/*!*************************************!*\
  !*** ./src/static/css/carousel.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./carousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/carousel.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./carousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/carousel.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./carousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/carousel.css");

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

/***/ "./src/static/css/concert.css":
/*!************************************!*\
  !*** ./src/static/css/concert.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./concert.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/concert.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./concert.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/concert.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./concert.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/concert.css");

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

/***/ "./src/static/css/github/400.woff":
/*!****************************************!*\
  !*** ./src/static/css/github/400.woff ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/400.27b47b8f.woff";

/***/ }),

/***/ "./src/static/css/github/400i.woff":
/*!*****************************************!*\
  !*** ./src/static/css/github/400i.woff ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/400i.e0217edf.woff";

/***/ }),

/***/ "./src/static/css/github/700.woff":
/*!****************************************!*\
  !*** ./src/static/css/github/700.woff ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/700.26b4e459.woff";

/***/ }),

/***/ "./src/static/css/github/700i.woff":
/*!*****************************************!*\
  !*** ./src/static/css/github/700i.woff ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/700i.4f21f865.woff";

/***/ }),

/***/ "./src/static/css/github1.css":
/*!************************************!*\
  !*** ./src/static/css/github1.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./github1.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/github1.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./github1.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/github1.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./github1.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/github1.css");

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

/***/ "./src/static/css/header.css":
/*!***********************************!*\
  !*** ./src/static/css/header.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/header.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/header.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/header.css");

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

/***/ "./src/static/css/members.css":
/*!************************************!*\
  !*** ./src/static/css/members.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./members.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/members.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./members.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/members.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./members.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/static/css/members.css");

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

/***/ "./src/store/creatStore.js":
/*!*********************************!*\
  !*** ./src/store/creatStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var _reducers_linksReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/linksReducer */ "./src/reducers/linksReducer.jsx");
/* harmony import */ var _reducers_homepicReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/homepicReducer */ "./src/reducers/homepicReducer.jsx");
/* harmony import */ var _reducers_concertReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/concertReducer */ "./src/reducers/concertReducer.jsx");
/* harmony import */ var _reducers_articlesReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/articlesReducer */ "./src/reducers/articlesReducer.jsx");
/* harmony import */ var _reducers_ticketsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/ticketsReducer */ "./src/reducers/ticketsReducer.jsx");








function createStore(history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    links: _reducers_linksReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    homepic: _reducers_homepicReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    router: react_router_redux__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
    concert: _reducers_concertReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
    articles: _reducers_articlesReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
    tickets: _reducers_ticketsReducer__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])( //ReduxのAction使ってrouter制御できるようになる
  Object(react_router_redux__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)));
}

/* harmony default export */ __webpack_exports__["default"] = (createStore);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/MANI/.musicart/musicart/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/MANI/.musicart/musicart/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map