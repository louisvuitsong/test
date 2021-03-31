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

/***/ "./src/js/perfume.js":
/*!***************************!*\
  !*** ./src/js/perfume.js ***!
  \***************************/
/***/ (() => {

eval("$(function () {\n  $('.perfume-main > div').on({\n    mouseenter: function mouseenter() {\n      $(this).find('video')[0].play();\n    },\n    mouseleave: function mouseleave() {\n      $(this).find('video')[0].pause();\n    }\n  });\n  $(\".regular\").slick({\n    dots: false,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    arrows: true,\n    fade: true,\n    speed: 1000 // centerMode: true,\n    // vertical: true\n\n  });\n  $('.regular').on({\n    'beforeChange': function beforeChange(event, slick, currentSlide, nextSlide) {\n      console.log('before');\n    },\n    'afterChange': function afterChange(slick, currentSlide) {\n      console.log('after');\n    }\n  }); //end\n});\n\n//# sourceURL=webpack://dior/./src/js/perfume.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/perfume.js"]();
/******/ 	
/******/ })()
;