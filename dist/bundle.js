/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _info_block_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-block/index */ \"./app/info-block/index.js\");\n/* harmony import */ var _info_block_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_info_block_index__WEBPACK_IMPORTED_MODULE_0__);\n// Main File\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZTkyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYWluIEZpbGVcbmltcG9ydCBcIi4vaW5mby1ibG9jay9pbmRleFwiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/index.js\n");

/***/ }),

/***/ "./app/info-block/index.js":
/*!*********************************!*\
  !*** ./app/info-block/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextControl = _wp$components.TextControl;\nregisterBlockType('dev/info', {\n  title: __(\"Info block\", 'dev'),\n  description: __(\"Adding info block\", 'dev'),\n  // common, formatting, layout, widgets, embed\n  category: 'common',\n  icon: 'universal-access',\n  keywords: [__('info', 'dev')],\n  supports: {\n    html: false\n  },\n  attributes: {\n    name: {\n      source: 'text',\n      selector: '.cb_name'\n    },\n    age: {\n      source: 'text',\n      selector: '.cb_age'\n    },\n    city: {\n      source: 'text',\n      selector: '.cb_city'\n    }\n  },\n  edit: function edit(props) {\n    return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: __('Basics', 'dev')\n    }, wp.element.createElement(PanelRow, null, \"Write city info\"), wp.element.createElement(TextControl, {\n      label: __('Name', 'dev'),\n      help: __('Podaj imie', 'dev'),\n      value: props.attributes.name,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          name: new_val\n        });\n      }\n    }), wp.element.createElement(TextControl, {\n      label: __('Wiek', 'dev'),\n      help: __('Podaj wiek', 'dev'),\n      value: props.attributes.age,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          age: new_val\n        });\n      }\n    }), wp.element.createElement(TextControl, {\n      label: __('Miasto', 'dev'),\n      help: __('Podaj miasto', 'dev'),\n      value: props.attributes.city,\n      onChange: function onChange(new_val) {\n        props.setAttributes({\n          city: new_val\n        });\n      }\n    }))), wp.element.createElement(\"div\", {\n      className: props.className\n    }, wp.element.createElement(\"ul\", null, wp.element.createElement(\"li\", null, \"Imie: \", wp.element.createElement(\"span\", {\n      className: \"cb_name\"\n    }, \" \", props.attributes.name)), wp.element.createElement(\"li\", null, \"Wiek: \", wp.element.createElement(\"span\", {\n      className: \"cb_age\"\n    }, \" \", props.attributes.age)), wp.element.createElement(\"li\", null, \"Miasto: \", wp.element.createElement(\"span\", {\n      className: \"cb_city\"\n    }, \" \", props.attributes.city))))];\n  },\n  save: function save(props) {\n    return wp.element.createElement(\"div\", {\n      className: props.className\n    }, wp.element.createElement(\"ul\", null, wp.element.createElement(\"li\", null, \"Imie: \", wp.element.createElement(\"span\", {\n      className: \"cb_name\"\n    }, \" \", props.attributes.name)), wp.element.createElement(\"li\", null, \"Wiek: \", wp.element.createElement(\"span\", {\n      className: \"cb_age\"\n    }, \" \", props.attributes.age)), wp.element.createElement(\"li\", null, \"Miasto: \", wp.element.createElement(\"span\", {\n      className: \"cb_city\"\n    }, \" \", props.attributes.city))));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5mby1ibG9jay9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9pbmZvLWJsb2NrL2luZGV4LmpzPzRiYjMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBJbnNwZWN0b3JDb250cm9scyA9IHdwLmVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbDtcbnJlZ2lzdGVyQmxvY2tUeXBlKCdkZXYvaW5mbycsIHtcbiAgdGl0bGU6IF9fKFwiSW5mbyBibG9ja1wiLCAnZGV2JyksXG4gIGRlc2NyaXB0aW9uOiBfXyhcIkFkZGluZyBpbmZvIGJsb2NrXCIsICdkZXYnKSxcbiAgLy8gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQsIHdpZGdldHMsIGVtYmVkXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgaWNvbjogJ3VuaXZlcnNhbC1hY2Nlc3MnLFxuICBrZXl3b3JkczogW19fKCdpbmZvJywgJ2RldicpXSxcbiAgc3VwcG9ydHM6IHtcbiAgICBodG1sOiBmYWxzZVxuICB9LFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgc291cmNlOiAndGV4dCcsXG4gICAgICBzZWxlY3RvcjogJy5jYl9uYW1lJ1xuICAgIH0sXG4gICAgYWdlOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyxcbiAgICAgIHNlbGVjdG9yOiAnLmNiX2FnZSdcbiAgICB9LFxuICAgIGNpdHk6IHtcbiAgICAgIHNvdXJjZTogJ3RleHQnLFxuICAgICAgc2VsZWN0b3I6ICcuY2JfY2l0eSdcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbnNwZWN0b3JDb250cm9scywgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQm9keSwge1xuICAgICAgdGl0bGU6IF9fKCdCYXNpY3MnLCAnZGV2JylcbiAgICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGFuZWxSb3csIG51bGwsIFwiV3JpdGUgY2l0eSBpbmZvXCIpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgIGxhYmVsOiBfXygnTmFtZScsICdkZXYnKSxcbiAgICAgIGhlbHA6IF9fKCdQb2RhaiBpbWllJywgJ2RldicpLFxuICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMubmFtZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIG5hbWU6IG5ld192YWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdXaWVrJywgJ2RldicpLFxuICAgICAgaGVscDogX18oJ1BvZGFqIHdpZWsnLCAnZGV2JyksXG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5hZ2UsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3X3ZhbCkge1xuICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBhZ2U6IG5ld192YWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgbGFiZWw6IF9fKCdNaWFzdG8nLCAnZGV2JyksXG4gICAgICBoZWxwOiBfXygnUG9kYWogbWlhc3RvJywgJ2RldicpLFxuICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY2l0eSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdfdmFsKSB7XG4gICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIGNpdHk6IG5ld192YWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkpKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lXG4gICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCJJbWllOiBcIiwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY2JfbmFtZVwiXG4gICAgfSwgXCIgXCIsIHByb3BzLmF0dHJpYnV0ZXMubmFtZSkpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIldpZWs6IFwiLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjYl9hZ2VcIlxuICAgIH0sIFwiIFwiLCBwcm9wcy5hdHRyaWJ1dGVzLmFnZSkpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIk1pYXN0bzogXCIsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNiX2NpdHlcIlxuICAgIH0sIFwiIFwiLCBwcm9wcy5hdHRyaWJ1dGVzLmNpdHkpKSkpXTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWVcbiAgICB9LCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIkltaWU6IFwiLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjYl9uYW1lXCJcbiAgICB9LCBcIiBcIiwgcHJvcHMuYXR0cmlidXRlcy5uYW1lKSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiV2llazogXCIsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNiX2FnZVwiXG4gICAgfSwgXCIgXCIsIHByb3BzLmF0dHJpYnV0ZXMuYWdlKSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiTWlhc3RvOiBcIiwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY2JfY2l0eVwiXG4gICAgfSwgXCIgXCIsIHByb3BzLmF0dHJpYnV0ZXMuY2l0eSkpKSk7XG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/info-block/index.js\n");

/***/ })

/******/ });