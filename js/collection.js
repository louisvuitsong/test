/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/collection.js":
/*!******************************!*\
  !*** ./src/js/collection.js ***!
  \******************************/
/***/ (() => {

eval("$(function () {\n  //plus icon\n  $('.plus').on('click', function () {\n    $('.plus p').slideToggle(500);\n  }); //looks img li\n\n  var tagList = '';\n\n  for (var i = 1; i < 45; i++) {\n    tagList += \"<li><img src='imgs/collection/model/look-\" + i + \"_width_3000.jpg' alt='model'></li>\";\n  }\n\n  $('.looks ul').append(tagList);\n  $(\".regular\").slick({\n    dots: false,\n    infinite: false,\n    slidesToShow: 4,\n    slidesToScroll: 4,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    arrows: true // fade:true,\n    // speed:1000\n    // centerMode: true,\n    // vertical: true\n\n  });\n  $('.regular').on({\n    'beforeChange': function beforeChange(event, slick, currentSlide, nextSlide) {\n      console.log('before');\n    },\n    'afterChange': function afterChange(slick, currentSlide) {\n      console.log('after');\n    }\n  });\n  $('.looks li img').on('click', function (e) {\n    var imgSrc = $(this).attr('src');\n    $('.looks-pop').addClass('active');\n    $('.looks-pop p img').attr('src', imgSrc);\n  });\n  $('.looks-pop').on('click', function () {\n    $('.looks-pop').removeClass('active');\n  });\n});\n\n//# sourceURL=webpack://dior/./src/js/collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/collection.js"]();
/******/ 	
/******/ })()
;