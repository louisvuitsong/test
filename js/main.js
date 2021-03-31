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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("$(function () {\n  var delta,\n      loop,\n      num = 0;\n  $('.slidewrap').on('mousewheel DOMMouseScroll', function (e) {\n    delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;\n    clearTimeout(loop);\n    loop = setTimeout(function () {\n      if (delta < 0) {\n        //down\n        if (num < 2) num++;\n      } else {\n        //up\n        if (num > 0) num--;\n      }\n\n      $('.slidelist').css({\n        transform: 'translateX(' + -num + '00%)'\n      });\n      console.log(num);\n      $('.indicater div a').removeClass('active');\n      $('.indicater div a').eq(num).addClass('active');\n    }, 250);\n  });\n  var indi = 0,\n      indiNum = 0;\n  var slidelistLi = document.querySelectorAll('.slidelist li');\n  var indiDiv = document.querySelector('.indicater div');\n  var indiPoint;\n  var slideUl = document.querySelector('.slidelist');\n  var indiArrow = document.querySelectorAll('.indicater > a');\n  slidelistLi.forEach(function () {\n    indiDiv.innerHTML += '<a></a>';\n  });\n  indiPoint = document.querySelectorAll('.indicater div a');\n  $('.indicater div a').eq(0).addClass('active');\n  indiPoint.forEach(function (e) {\n    e.addEventListener('click', function () {\n      indi = $(this).index();\n      slideUl.style = \"transform:translateX(\".concat(indi * -100, \"%)\");\n      $('.indicater div a').removeClass('active');\n      $(this).addClass('active');\n    });\n  });\n  indiArrow[0].addEventListener('click', function () {\n    if (indiNum > -1) indiNum--;\n    $('.indicater div a').removeClass('active');\n    $('.indicater div a').eq(indiNum).addClass('active');\n    slideUl.style = \"transform:translateX(-\".concat(indiNum * 100, \"%)\");\n  });\n  indiArrow[1].addEventListener('click', function () {\n    if (indiNum < indiPoint.length - 1) indiNum++;\n    $('.indicater div a').removeClass('active');\n    $('.indicater div a').eq(indiNum).addClass('active');\n    slideUl.style = \"transform:translateX(-\".concat(indiNum * 100, \"%)\");\n  });\n});\n\n//# sourceURL=webpack://dior/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;