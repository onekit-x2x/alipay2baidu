module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable no-console */

var _PROMISE = __webpack_require__(5);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

var _TASK = __webpack_require__(6);

var _TASK2 = _interopRequireDefault(_TASK);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import TheKit from './tools/TheKit'
var my = function () {
  function my() {
    _classCallCheck(this, my);
  }

  // ////////////////////  基础  ///////////////////////////

  my.canIUse = function canIUse(schema) {
    return swan.canIUse(schema);
  };

  my.getAppIdSync = function getAppIdSync() {
    if (getApp().onekit_AppId) {
      return getApp().onekit_AppId;
    }
  };

  my.getLaunchOptionsSync = function getLaunchOptionsSync() {
    return console.warn('TO DO ... ');
  };

  my.getRunScene = function getRunScene() {
    var my_res = {
      envVersion: 'develop'
    };
    return my_res;
  };

  my.SDKVersion = function SDKVersion(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.getSystemInfo({
        success: function success(swan_res) {
          var my_res = {
            SDKVersion: swan_res.SDKVersion
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // ////////////////////  应用级事件  ///////////////////////////

  my.offAppHide = function offAppHide(callback) {
    return swan.offAppHide(callback);
  };

  my.offAppShow = function offAppShow(callback) {
    return swan.offAppShow(callback);
  };

  my.offComponentError = function offComponentError() {
    getApp().onekit_ComponentError = false;
  };

  my.offError = function offError(callback) {
    return swan.offError(callback);
  };

  my.offUnhandledRejection = function offUnhandledRejection() {
    getApp().onekit_UnhandledRejection = false;
  };

  my.onAppHide = function onAppHide(callback) {
    return swan.onAppHide(callback);
  };

  my.onAppShow = function onAppShow(callback) {
    getApp().onekit_AppId = callback.referrerInfo.appid;
    return swan.onAppShow(callback);
  };

  my.onComponentError = function onComponentError() {
    getApp().onekit_ComponentError = true;
  };

  my.onError = function onError(callback) {
    return swan.onError(callback);
  };

  my.onUnhandledRejection = function onUnhandledRejection() {
    getApp().onekit_UnhandledRejection = true;
  };

  // ////////////////////  界面  ///////////////////////////

  // ///// 导航栏 /////


  my.getTitleColor = function getTitleColor() {
    return console.warn('getTitleColor is not support');
  };

  my.hideBackHome = function hideBackHome() {
    return console.warn('hideBackHome is not support');
  };

  my.setNavigationBar = function setNavigationBar(my_object) {
    var my_title = my_object.title;
    var my_backgroundColor = my_object.backgroundColor;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var title = my_title;
    var backgroundColor = my_backgroundColor;
    var frontColor = '#ffffff';
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.setNavigationBarTitle({
        title: title,
        success: function success() {
          var my_res = {
            success: true
          };
          SUCCESS(my_res);
        }
      });
      swan.setNavigationBarColor({
        backgroundColor: backgroundColor,
        frontColor: frontColor,
        success: function success() {
          var my_res = {
            success: true
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.hideNavigationBarLoading = function hideNavigationBarLoading() {
    return swan.hideNavigationBarLoading();
  };

  my.showNavigationBarLoading = function showNavigationBarLoading() {
    return swan.showNavigationBarLoading();
  };

  // ///// tabBar /////


  my.hideTabBar = function hideTabBar(my_object) {
    return swan.hideTabBar(my_object);
  };

  my.hideTabBarRedDot = function hideTabBarRedDot(my_object) {
    return swan.hideTabBarRedDot(my_object);
  };

  my.removeTabBarBadge = function removeTabBarBadge(my_object) {
    return swan.removeTabBarBadge(my_object);
  };

  my.setTabBarBadge = function setTabBarBadge(my_object) {
    return swan.setTabBarBadge(my_object);
  };

  my.setTabBarItem = function setTabBarItem(my_object) {
    return swan.setTabBarItem(my_object);
  };

  my.setTabBarStyle = function setTabBarStyle(my_object) {
    return swan.setTabBarStyle(my_object);
  };

  my.showTabBar = function showTabBar(my_object) {
    return swan.showTabBar(my_object);
  };

  my.showTabBarRedDot = function showTabBarRedDot(my_object) {
    return swan.showTabBarRedDot(my_object);
  };

  // //////  路由  /////////

  my.switchTab = function switchTab(my_object) {
    return swan.switchTab(my_object);
  };

  my.reLaunch = function reLaunch(my_object) {
    return swan.reLaunch(my_object);
  };

  my.redirectTo = function redirectTo(my_object) {
    return swan.redirectTo(my_object);
  };

  my.navigateTo = function navigateTo(my_object) {
    return swan.navigateTo(my_object);
  };

  my.navigateBack = function navigateBack(my_object) {
    return swan.navigateBack(my_object);
  };

  // //////  交互反馈  /////////


  my.alert = function alert(my_object) {
    var my_title = my_object.title;
    var my_content = my_object.content;
    var my_confirmText = my_object.buttonText;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var title = my_title;
      var content = my_content;
      var confirmText = my_confirmText;
      swan.showModal({
        title: title,
        content: content,
        confirmText: confirmText,
        success: function success() {
          var my_res = {};
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.confirm = function confirm(my_object) {
    var my_title = my_object.title;
    var my_content = my_object.content;
    var my_confirmText = my_object.confirmButtonText;
    var my_cancelText = my_object.cancelButtonText;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var title = my_title;
      var content = my_content;
      var confirmText = my_confirmText;
      var cancelText = my_cancelText;
      swan.showModal({
        title: title,
        content: content,
        confirmText: confirmText,
        cancelText: cancelText,
        success: function success(swan_res) {
          if (swan_res.confirm) {
            var my_res = {
              confirm: true,
              cancel: false
            };
            SUCCESS(my_res);
          } else if (swan_res.cancel) {
            var _my_res = {
              confirm: false,
              cancel: true
            };
            SUCCESS(_my_res);
          }
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.hideLoading = function hideLoading(my_object) {
    return swan.hideLoading(my_object);
  };

  my.hideToast = function hideToast(my_object) {
    return swan.hideToast(my_object);
  };

  my.prompt = function prompt() {
    return console.warn('prompt is not support');
  };

  my.showActionSheet = function showActionSheet(my_object) {
    var my_items = my_object.items;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var itemList = my_items;
      swan.showActionSheet({
        itemList: itemList,
        success: function success(swan_res) {
          var my_res = {
            index: swan_res.tapIndex
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.showLoading = function showLoading(my_object) {
    var my_title = my_object.content;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var title = my_title;
      swan.showLoading({
        title: title,
        success: function success() {
          var my_res = {
            success: true
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.showToast = function showToast(my_object) {
    var my_title = my_object.content;
    var my_duration = my_object.duration || 3000;
    var my_icon = my_object.type || 'none';
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var title = my_title;
      var duration = my_duration;
      var icon = my_icon;
      swan.showToast({
        title: title,
        duration: duration,
        icon: icon,
        success: function success() {
          var my_res = {};
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // //////  下拉刷新  /////////


  my.startPullDownRefresh = function startPullDownRefresh(my_object) {
    return swan.startPullDownRefresh(my_object);
  };

  my.stopPullDownRefresh = function stopPullDownRefresh(my_object) {
    return swan.stopPullDownRefresh(my_object);
  };

  // //////  联系人  /////////


  my.choosemypayContact = function choosemypayContact() {
    return console.warn('choosemypayContact is not support');
  };

  my.chooseContact = function chooseContact() {
    return console.warn('chooseContactt is not support');
  };

  my.choosePhoneContact = function choosePhoneContact() {
    return console.warn('choosePhoneContact is not support');
  };

  // //////  选择城市  /////////


  my.chooseCity = function chooseCity() {
    return console.warn('chooseCity is not support');
  };

  my.onLocatedComplete = function onLocatedComplete() {
    return console.warn('onLocatedComplete is not support');
  };

  my.setLocatedCity = function setLocatedCity() {
    return console.warn('setLocatedCity is not support');
  };

  my.regionPicker = function regionPicker() {
    return console.warn('regionPicker is not support');
  };

  // //////  选择日期  /////////


  my.datePicker = function datePicker() {
    return console.warn('datePicker is not support');
  };

  // //////  动画  /////////


  my.createAnimation = function createAnimation(my_object) {
    return swan.createAnimation(my_object);
  };

  // //////  画布  /////////


  my.createCanvasContext = function createCanvasContext(canvasId) {
    return swan.createCanvasContext(canvasId);
  };

  // //////  地图  /////////


  my.createMapContext = function createMapContext(mapId) {
    return swan.createMapContext(mapId);
  };

  my.getMapInfo = function getMapInfo() {
    return console.warn('getMapInfo is not support');
  };

  // //////  计算路径  /////////


  my.calculateRoute = function calculateRoute() {
    return console.warn('calculateRoute is not support');
  };

  // //////  滚动  /////////


  my.pageScrollTo = function pageScrollTo(my_object) {
    var my_scrollTop = my_object.scrollTop || 200;
    var my_duration = my_object.duration;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var scrollTop = my_scrollTop;
      var duration = my_duration;
      swan.pageScrollTo({
        scrollTop: scrollTop,
        duration: duration,
        success: function success() {
          var my_res = {
            success: true
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // //////  节点查询  /////////


  my.createIntersectionObserver = function createIntersectionObserver(my_object) {
    return swan.createIntersectionObserver(my_object);
  };

  my.createSelectorQuery = function createSelectorQuery() {
    return swan.createSelectorQuery();
  };

  // //////  选项选择器  /////////


  my.optionsSelect = function optionsSelect() {
    return console.warn('optionsSelect is not support');
  };

  // //////  设置窗口背景  /////////


  my.setBackgroundColor = function setBackgroundColor(my_object) {
    var my_backgroundColor = my_object.backgroundColor;
    var my_backgroundColorTop = my_object.backgroundColorTop;
    var my_backgroundColorBottom = my_object.backgroundColorBottom;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var backgroundColor = my_backgroundColor;
      var backgroundColorTop = my_backgroundColorTop;
      var backgroundColorBottom = my_backgroundColorBottom;
      swan.setBackgroundColor({
        backgroundColor: backgroundColor,
        backgroundColorTop: backgroundColorTop,
        backgroundColorBottom: backgroundColorBottom,
        success: function success() {
          var my_res = {
            success: true
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.setBackgroundTextStyle = function setBackgroundTextStyle(my_object) {
    return swan.setBackgroundTextStyle(my_object);
  };

  // //////  设置页面是否支持下拉  /////////


  my.setCanPullDown = function setCanPullDown() {
    return console.error('setCanPullDown is not support');
  };

  // //////  字体  /////////


  my.loadFontFace = function loadFontFace(my_object) {
    var my_source = my_object.source;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var url = my_source;
      swan.downloadFile({
        url: url,
        success: function success(swan_res) {
          var my_res = {
            tempFilePath: swan_res.swan_res,
            statusCode: swan_res.statusCode,
            success: true
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // ////////////////////  多媒体  ///////////////////////////

  // //////  图片  /////////


  my.chooseImage = function chooseImage(my_object) {
    var my_count = my_object.count || 1;
    var my_sizeType = my_object.sizeType || ['original', 'compressed'];
    var my_sourceType = my_object.sourceType || ['camera', 'album'];
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var count = my_count;
      var sizeType = my_sizeType;
      var sourceType = my_sourceType;
      swan.chooseImage({
        count: count,
        sizeType: sizeType,
        sourceType: sourceType,
        success: function success(res) {
          var my_res = {
            tempFiles: res.tempFiles,
            apFilePaths: res.tempFilePaths
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.compressImage = function compressImage(my_object) {
    var my_apFilePaths = my_object.apFilePaths;
    var my_compressLevel = my_object.compressLevel || 4;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var swan_qumyty = void 0;
      if (my_compressLevel) {
        swan_qumyty = 80;
      } else {
        swan_qumyty = (my_compressLevel + 1) * 25;
      }
      (0, _TASK2.default)(my_apFilePaths, function (my_apFilePath, callback) {
        var swan_src = my_apFilePath;
        swan.compressImage({
          src: swan_src,
          qumyty: swan_qumyty,
          success: function success(res) {
            var apFilePath = res.tempFilePath;
            callback(apFilePath);
          }
        });
      }, function (apFilePaths) {
        var my_res = {
          apFilePaths: apFilePaths
        };
        SUCCESS(my_res);
      });
    }, my_success, my_fail, my_complete);
  };

  my.getImageInfo = function getImageInfo(my_object) {
    return swan.getImageInfo(my_object);
  };

  my.previewImage = function previewImage(my_object) {
    return swan.previewImage(my_object);
  };

  my.saveImage = function saveImage(my_object) {
    var my_url = my_object.url;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var filpath = my_url;
      swan.saveImageToPhotosAlbum({
        filpath: filpath,
        success: function success() {
          var my_res = {
            succcess: true
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // //////  视频播放  /////////


  my.createVideoContext = function createVideoContext(videoId) {
    return swan.createVideoContext(videoId);
  };

  // //////  音频播放  /////////


  my.createInnerAudioContext = function createInnerAudioContext() {
    return swan.createInnerAudioContext();
  };

  my.getAvailableAudioSources = function getAvailableAudioSources() {
    return console.warn('getAvailableAudioSources is not support');
  };

  my.getBackgroundAudioManager = function getBackgroundAudioManager() {
    return swan.getBackgroundAudioManager();
  };

  my.offAudioInterruptionBegin = function offAudioInterruptionBegin() {
    return console.warn('offAudioInterruptionBegin is not support');
  };

  my.offAudioInterruptionEnd = function offAudioInterruptionEnd() {
    return console.warn('offAudioInterruptionEnd is not support');
  };

  my.onAudioInterruptionBegin = function onAudioInterruptionBegin() {
    return console.warn('onAudioInterruptionBegin is not support');
  };

  my.onAudioInterruptionEnd = function onAudioInterruptionEnd() {
    return console.warn('onAudioInterruptionEnd is not support');
  };

  // ////////////////////  缓存  ///////////////////////////

  my.clearStorage = function clearStorage() {
    return swan.clearStorage();
  };

  my.clearStorageSync = function clearStorageSync() {
    return swan.clearStorageSync();
  };

  my.getStorage = function getStorage(my_object) {
    return swan.getStorage(my_object);
  };

  my.getStorageInfo = function getStorageInfo(my_object) {
    return swan.getStorageInfo(my_object);
  };

  my.getStorageInfoSync = function getStorageInfoSync() {
    return swan.getStorageInfoSync();
  };

  my.getStorageSync = function getStorageSync(my_object) {
    var my_key = my_object.key;
    my_object = null;
    var swan_res = swan.getStorageSync(my_key);
    var my_res = {
      success: true,
      data: swan_res
    };
    return my_res;
  };

  my.removeStorage = function removeStorage(my_object) {
    return swan.removeStorage(my_object);
  };

  my.removeStorageSync = function removeStorageSync(my_object) {
    var my_key = my_object.key;
    my_object = null;
    return swan.removeStorageSync(my_key);
  };

  my.setStorage = function setStorage(my_object) {
    return swan.setStorage(my_object);
  };

  my.setStorageSync = function setStorageSync(my_object) {
    var my_key = my_object.key;
    var my_data = my_object.data;
    my_object = null;
    return swan.setStorageSync(my_key, my_data);
  };

  // ////////////////////  文件  ///////////////////////////

  my.getFileInfo = function getFileInfo(my_object) {
    var my_apFilePath = my_object.apFilePath;
    var my_digestAlgorithm = my_object.digestAlgorithm || 'md5';
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var filePath = my_apFilePath;
      var digestAlgorithm = my_digestAlgorithm;
      swan.getFileInfo({
        filePath: filePath,
        digestAlgorithm: digestAlgorithm,
        success: function success(swan_res) {
          var my_res = {
            size: swan_res.size,
            digest: swan_res.digest
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.getSavedFileInfo = function getSavedFileInfo(my_object) {
    var my_apFilePath = my_object.apFilePath;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var filePath = my_apFilePath;
      swan.getSavedFileInfo({
        filePath: filePath,
        success: function success(swan_res) {
          var my_res = {
            size: swan_res.size,
            createTime: swan_res.createTime
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.getSavedFileList = function getSavedFileList(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.getSavedFileList({
        success: function success(swan_res) {
          var my_fileList = swan_res.fileList.map(function (file) {
            return {
              size: file.size,
              createTime: file.createTime,
              apFilePath: file.filePath
            };
          });
          var my_res = {
            fileList: my_fileList
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.openDocument = function openDocument(my_object) {
    return swan.openDocument(my_object);
  };

  my.removeSavedFile = function removeSavedFile(my_object) {
    var my_apFilePath = my_object.apFilePath;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var filePath = my_apFilePath;
    var success = my_success;
    var fail = my_fail;
    var complete = my_complete;
    var swan_object = {
      filePath: filePath,
      success: success,
      fail: fail,
      complete: complete
    };
    return swan.removeSavedFile(swan_object);
  };

  my.saveFile = function saveFile(my_object) {
    var my_apFilePath = my_object.apFilePath;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var tempFilePath = my_apFilePath;
      swan.saveFile({
        tempFilePath: tempFilePath,
        success: function success(swan_res) {
          var my_res = {
            apFilePath: swan_res.savedFilePath
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // ////////////////////  位置  ///////////////////////////


  my.chooseLocation = function chooseLocation(my_object) {
    return swan.chooseLocation(my_object);
  };

  my.getLocation = function getLocation(my_object) {
    var my_type = my_object.type || 0;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var swan_type = null;
    if (my_type === 0) {
      swan_type = 'wgs84';
    } else {
      swan_type = 'gcj02';
    }
    (0, _PROMISE2.default)(function (SUCCESS) {
      var type = swan_type;
      swan.getLocation({
        type: type,
        success: function success(swan_res) {
          var my_res = {
            longitude: swan_res.longitude,
            latitude: swan_res.latitude,
            accuracy: swan_res.accuracy,
            horizontalAccuracy: swan_res.horizontalAccuracy,
            country: swan_res.country,
            countryCode: swan_res.countryCode,
            province: swan_res.province,
            city: swan_res.city,
            cityAdcode: swan_res.cityCode,
            district: swan_res.district,
            streetNumber: swan_res.streetNumber,
            pois: [],
            speed: swan_res.speed,
            altitude: swan_res.altitude,
            verticalAccuracy: swan_res.verticalAccuracy,
            isFullAccuracy: swan_res.isFullAccuracy
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.openLocation = function openLocation(my_object) {
    var my_longitude = my_object.longitude;
    var my_latitude = my_object.latitude;
    var my_keyword = my_object.name;
    var my_scale = my_object.scale || 15;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var longitude = my_longitude;
    var latitude = my_latitude;
    var name = my_keyword;
    var success = my_success;
    var fail = my_fail;
    var complete = my_complete;
    var scale = my_scale;
    var swan_object = {
      longitude: longitude,
      latitude: latitude,
      scale: scale,
      name: name,
      success: success,
      fail: fail,
      complete: complete
    };

    return swan.openLocation(swan_object);
  };

  // ////////////////////  网络  ///////////////////////////

  // //////  发起请求  /////////


  my.request = function request(my_object) {
    var my_url = my_object.url;
    var my_headers = my_object.headers;
    var my_method = my_object.method || 'GET';
    var my_data = my_object.data;
    var my_timeout = my_object.timeout || 30000;
    var my_dataType = my_object.dataType || 'JSON';
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var url = my_url;
      var header = my_headers;
      var method = my_method;
      var data = my_data;
      var timeout = my_timeout;
      var dataType = my_dataType;
      swan.request({
        url: url,
        header: header,
        method: method,
        data: data,
        timeout: timeout,
        dataType: dataType,
        success: function success(swan_res) {
          var my_res = {
            data: swan_res.data,
            statusCode: swan_res.statusCode,
            headers: swan_res.header
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // //////  上传、下载  /////////


  my.downloadFile = function downloadFile(my_object) {
    var my_url = my_object.url;
    var my_header = my_object.header;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var url = my_url;
      var header = my_header;
      swan.downloadFile({
        url: url,
        header: header,
        success: function success(swan_res) {
          var my_res = {
            apFilePath: swan_res.tempFilePath,
            statusCode: swan_res.statusCode
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.uploadFile = function uploadFile(my_object) {
    var my_url = my_object.url;
    var my_filePath = my_object.filePath;
    var my_fileName = my_object.fileName;
    var my_fileType = my_object.fileType;
    var my_header = my_object.header;
    var my_formData = my_object.formData;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      var url = my_url;
      var header = my_header;
      var filePath = my_filePath;
      var fileType = my_fileType;
      var name = my_fileName;
      var formData = my_formData;
      swan.uploadFile({
        url: url,
        header: header,
        filePath: filePath,
        fileType: fileType,
        name: name,
        formData: formData,
        success: function success(swan_res) {
          var my_res = {
            statusCode: swan_res.statusCode,
            data: swan_res.data,
            header: {}
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // //////  webScoket  /////////


  my.connectSocket = function connectSocket(my_object) {
    return swan.connectSocket(my_object);
  };

  my.onSocketOpen = function onSocketOpen(callback) {
    return swan.onSocketOpen(callback);
  };

  my.onSocketError = function onSocketError(callback) {
    return swan.onSocketError(callback);
  };

  my.sendSocketMessage = function sendSocketMessage(my_object) {
    return swan.sendSocketMessage(my_object);
  };

  my.onSocketMessage = function onSocketMessage(callback) {
    return swan.onSocketMessage(callback);
  };

  my.closeSocket = function closeSocket(my_object) {
    return swan.closeSocket(my_object);
  };

  my.onSocketClose = function onSocketClose(callback) {
    return swan.onSocketClose(callback);
  };

  my.offSocketClose = function offSocketClose() {
    getApp().onekit_SocketClose = false;
  };

  my.offSocketMessage = function offSocketMessage() {
    getApp().onekit_SocketMessage = false;
  };

  my.offSocketOpen = function offSocketOpen() {
    getApp().onekit_SocketOpen = false;
  };

  my.offSocketError = function offSocketError() {
    getApp().onekit_SocketError = false;
  };

  // ////////////////////  设备  ///////////////////////////

  // //////  系统消息  /////////


  my.getSystemInfo = function getSystemInfo(my_object) {
    return swan.getSystemInfo(my_object);
  };

  my.getSystemInfoSync = function getSystemInfoSync() {
    return swan.getSystemInfoSync();
  };

  // //////  网络状态  /////////


  my.getNetworkType = function getNetworkType(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.getNetworkType({
        success: function success(swan_res) {
          var my_res = {
            networkType: swan_res.networkType,
            networkAvailable: true
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return swan.onNetworkStatusChange(callback);
  };

  my.offNetworkStatusChange = function offNetworkStatusChange() {
    getApp().onekit_NetworkStatusChange = false;
  };

  // //////  摇一摇  /////////


  my.watchShake = function watchShake() {
    return console.warn('watchShake is not support');
  };

  // //////  震动  /////////


  my.vibrate = function vibrate(my_object) {
    return swan.vibrateShort(my_object);
  };

  my.vibrateLong = function vibrateLong(my_object) {
    return swan.vibrateLong(my_object);
  };

  my.vibrateShort = function vibrateShort(my_object) {
    return swan.vibrateShort(my_object);
  };

  // //////  加速度计  /////////


  my.onAccelerometerChange = function onAccelerometerChange(callback) {
    return swan.onAccelerometerChange(callback);
  };

  my.offAccelerometerChange = function offAccelerometerChange(callback) {
    return swan.offAccelerometerChange(callback);
  };

  // //////  陀螺仪  /////////


  my.onGyroscopeChange = function onGyroscopeChange(callback) {
    return swan.onGyroscopeChange(callback);
  };

  my.offGyroscopeChange = function offGyroscopeChange() {
    return console.warn('offGyroscopeChange is not support');
  };

  // //////  罗盘  /////////


  my.onCompassChange = function onCompassChange(callback) {
    return swan.onCompassChange(callback);
  };

  my.offCompassChange = function offCompassChange(callback) {
    return swan.offCompassChange(callback);
  };

  // //////  拨打电话  /////////


  my.makePhoneCall = function makePhoneCall(my_object) {
    return swan.makePhoneCall(my_object);
  };

  // //////  获取服务器时间  /////////


  my.getServerTime = function getServerTime() {
    return console.warn('getServerTime is not support');
  };

  // //////  用户截屏事件  /////////


  my.onUserCaptureScreen = function onUserCaptureScreen(callback) {
    return swan.onUserCaptureScreen(callback);
  };

  my.offUserCaptureScreen = function offUserCaptureScreen() {
    return console.warn('offUserCaptureScreen is not support');
  };

  // //////  屏幕亮度  /////////


  my.getScreenBrightness = function getScreenBrightness(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.getScreenBrightness({
        success: function success(swan_res) {
          var my_res = {
            brightnes: swan_res.value
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.setScreenBrightness = function setScreenBrightness(my_object) {
    var my_brightness = my_object.brightness;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var value = my_brightness;
    var success = my_success;
    var fail = my_fail;
    var complete = my_complete;
    var swan_object = {
      value: value,
      success: success,
      fail: fail,
      complete: complete
    };
    return swan.setScreenBrightness(swan_object);
  };

  my.setKeepScreenOn = function setKeepScreenOn(my_object) {
    return swan.setKeepScreenOn(my_object);
  };

  // //////  设置  /////////


  my.getSetting = function getSetting(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.getSetting({
        success: function success(swan_res) {
          var my_res = {
            authSetting: {
              location: swan_res.authSetting['scope.userLocation'],
              album: swan_res.authSetting['scope.writePhotosAlbum'],
              camera: swan_res.authSetting['scope.camera'],
              mypaysports: swan_res.authSetting['scope.werun'],
              phoneNumber: '000000',
              myaddress: swan_res.authSetting['scope.address'],
              userinfo: swan_res.authSetting['scope.userInfo'],
              userLocationBackground: swan_res.authSetting['scope.userLocationBackground'],
              record: swan_res.authSetting['scope.record'],
              invoice: swan_res.authSetting['scope.invoice'],
              invoiceTitle: swan_res.authSetting['scope.invoiceTitle'],
              _RVA_APPID: null
            }
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.openSetting = function openSetting(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.openSetting({
        success: function success(swan_res) {
          var my_res = {
            authSetting: {
              location: swan_res.authSetting['scope.userLocation'],
              album: swan_res.authSetting['scope.writePhotosAlbum'],
              camera: swan_res.authSetting['scope.camera'],
              werun: swan_res.authSetting['scope.werun'],
              address: swan_res.authSetting['scope.address'],
              userinfo: swan_res.authSetting['scope.userInfo'],
              userLocationBackground: swan_res.authSetting['scope.userLocationBackground'],
              record: swan_res.authSetting['scope.record'],
              invoice: swan_res.authSetting['scope.invoice'],
              invoiceTitle: swan_res.authSetting['scope.invoiceTitle']
            }
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // //////  添加手机联系人  /////////


  my.addPhoneContact = function addPhoneContact(my_object) {
    return swan.addPhoneContact(my_object);
  };

  // //////  权限引导  /////////


  my.showAuthGuide = function showAuthGuide() {
    return console.warn('showAuthGuide is not support');
  };

  // //////  扫码  /////////


  my.scan = function scan(my_object) {
    var my_scanType = my_object.scanType || ['qrCode', 'barCode'];
    var my_hideAlbum = my_object.hideAlbum || false;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var scanType = my_scanType;
    var onlyFromCamera = my_hideAlbum;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.scanCode({
        scanType: scanType,
        onlyFromCamera: onlyFromCamera,
        success: function success(swan_res) {
          var my_res = {
            code: 'code data',
            qrCode: 'qrCode data',
            barCode: 'barCode data',
            codeContent: swan_res.result,
            imageChannel: '',
            rawData: '',
            charSet: swan_res.charSet,
            path: swan_res.path
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  // //////  内存不足警告  /////////


  my.onMemoryWarning = function onMemoryWarning(callback) {
    return swan.onMemoryWarning(callback);
  };

  my.offMemoryWarning = function offMemoryWarning() {
    return console.warn('offMemoryWarning is not support');
  };

  // //////  获取设备电量  /////////


  my.getBatteryInfo = function getBatteryInfo() {
    return console.warn('getBatteryInfo is not support');
  };

  my.getBatteryInfoSync = function getBatteryInfoSync() {
    return console.warn('getBatteryInfoSync is not support');
  };

  // //////  传统蓝牙  /////////


  my.openBluetoothAdapter = function openBluetoothAdapter(my_object) {
    return swan.openBluetoothAdapter(my_object);
  };

  my.startBluetoothDevicesDiscovery = function startBluetoothDevicesDiscovery(my_object) {
    return swan.startBluetoothDevicesDiscovery(my_object);
  };

  my.onBluetoothDeviceFound = function onBluetoothDeviceFound(callback) {
    swan.onBluetoothDeviceFound(function (swan_res) {
      var my_devices = swan_res.devices.map(function (device) {
        return {
          name: device.name,
          deviceName: device.name,
          deviceId: device.deviceId,
          localName: device.localName,
          RSSI: device.RSSI,
          advertisData: device.advertisData,
          advertisServiceUUIDs: device.advertisServiceUUIDs,
          serviceData: device.serviceData
        };
      });
      var my_res = {
        devices: my_devices
      };
      callback(my_res);
    });
  };

  my.stopBluetoothDevicesDiscovery = function stopBluetoothDevicesDiscovery(my_object) {
    return swan.stopBluetoothDevicesDiscovery(my_object);
  };

  my.onBluetoothAdapterStateChange = function onBluetoothAdapterStateChange(callback) {
    return swan.onBluetoothAdapterStateChange(callback);
  };

  my.getConnectedBluetoothDevices = function getConnectedBluetoothDevices(my_object) {
    var my_deviceId = my_object.deviceId;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var services = [my_deviceId];
    var success = my_success;
    var fail = my_fail;
    var complete = my_complete;
    var swan_object = {
      services: services,
      success: success,
      fail: fail,
      complete: complete
    };
    return swan.getConnectedBluetoothDevices(swan_object);
  };

  my.getBluetoothDevices = function getBluetoothDevices(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.getBluetoothDevices({
        success: function success(swan_res) {
          var my_devices = swan_res.devices.map(function (device) {
            return {
              name: device.name,
              deviceName: device.name,
              deviceId: device.deviceId,
              localName: device.localName,
              RSSI: device.RSSI,
              manufacturerData: device.advertisData,
              advertisServiceUUIDs: device.advertisServiceUUIDs,
              serviceData: device.serviceData
            };
          });
          var my_res = {
            devices: my_devices
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.getBluetoothAdapterState = function getBluetoothAdapterState(my_object) {
    return swan.getBluetoothAdapterState(my_object);
  };

  my.closeBluetoothAdapter = function closeBluetoothAdapter(my_object) {
    return swan.closeBluetoothAdapter(my_object);
  };

  my.offBluetoothAdapterStateChange = function offBluetoothAdapterStateChange() {
    return console.warn('offBluetoothAdapterStateChange is not support');
  };

  my.offBluetoothDeviceFound = function offBluetoothDeviceFound() {
    return console.warn('getBatteryInfoSync is not support');
  };

  // //////  低功耗蓝牙  /////////


  my.connectBLEDevice = function connectBLEDevice(my_object) {
    return swan.createBLEConnection(my_object);
  };

  my.disconnectBLEDevice = function disconnectBLEDevice(my_object) {
    return swan.closeBLEConnection(my_object);
  };

  my.getBLEDeviceCharacteristics = function getBLEDeviceCharacteristics(my_object) {
    var swan_res = swan.getBLEDeviceCharacteristics(my_object);
    var my_characteristics = swan_res.characteristics.map(function (characteristic) {
      return {
        characteristicId: characteristic.uuid,
        properties: characteristic.properties,
        value: '',
        localName: ''
      };
    });
    var my_res = {
      characteristics: my_characteristics
    };
    return my_res;
  };

  my.getBLEDeviceServices = function getBLEDeviceServices(my_object) {
    var swan_res = swan.getBLEDeviceServices(my_object);
    var my_services = swan_res.services.map(function (service) {
      return {
        serviceId: service.uuid,
        isPrimary: service.isPrimary
      };
    });
    var my_res = {
      services: my_services
    };
    return my_res;
  };

  my.notifyBLECharacteristicValueChange = function notifyBLECharacteristicValueChange(my_object) {
    return swan.notifyBLECharacteristicValueChange(my_object);
  };

  my.onBLECharacteristicValueChange = function onBLECharacteristicValueChange(callback) {
    swan.onBLECharacteristicValueChange(function (swan_res) {
      var my_res = {
        deviceId: swan_res.deviceId,
        serviceId: swan_res.serviceId,
        characteristicId: swan_res.characteristicId,
        value: swan_res.value,
        connected: true
      };
      callback(my_res);
    });
  };

  my.onBLEConnectionStateChange = function onBLEConnectionStateChange(callback) {
    return swan.onBLEConnectionStateChange(callback);
  };

  my.readBLECharacteristicValue = function readBLECharacteristicValue(my_object) {
    var swan_res = swan.readBLECharacteristicValue(my_object);
    var my_res = {
      deviceId: swan_res.deviceId,
      serviceId: swan_res.serviceId,
      characteristicId: swan_res.characteristicId,
      value: swan_res.value
    };
    return my_res;
  };

  my.writeBLECharacteristicValue = function writeBLECharacteristicValue(my_object) {
    var my_deviceId = my_object.deviceId;
    var my_serviceId = my_object.serviceId;
    var my_characteristicId = my_object.characteristicId;
    var my_value = my_object.value;
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    var deviceId = my_deviceId;
    var serviceId = my_serviceId;
    var characteristicId = my_characteristicId;
    var value = [my_value];
    var success = my_success;
    var fail = my_fail;
    var complete = my_complete;
    var swan_object = {
      deviceId: deviceId,
      serviceId: serviceId,
      characteristicId: characteristicId,
      value: value,
      success: success,
      fail: fail,
      complete: complete
    };
    return swan.writeBLECharacteristicValue(swan_object);
  };

  // //////  iBeacon  /////////


  my.getBeacons = function getBeacons(my_object) {
    var my_success = my_object.success;
    var my_fail = my_object.fail;
    var my_complete = my_object.complete;
    my_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      swan.getBeacons({
        success: function success(swan_res) {
          var my_res = {
            beacons: swan_res.beacons,
            errCode: '0',
            errorMsg: 'ok'
          };
          SUCCESS(my_res);
        }
      });
    }, my_success, my_fail, my_complete);
  };

  my.startBeaconDiscovery = function startBeaconDiscovery(my_object) {
    return swan.startBeaconDiscovery(my_object);
  };

  my.stopBeaconDiscovery = function stopBeaconDiscovery(my_object) {
    return swan.stopBeaconDiscovery(my_object);
  };

  my.onBeaconServiceChange = function onBeaconServiceChange(my_object) {
    var my_success = my_object.success;
    my_object = null;
    return swan.onBeaconServiceChange(my_success);
  };

  my.onBeaconUpdate = function onBeaconUpdate(my_object) {
    var my_success = my_object.success;
    my_object = null;
    return swan.onBeaconUpdate(my_success);
  };

  // ////////////////////  数据安全  ///////////////////////////

  // ////////////////////  分享  ///////////////////////////


  my.showSharePanel = function showSharePanel() {
    return swan.showShareMenu();
  };

  my.hideShareMenu = function hideShareMenu(my_object) {
    return swan.hideShareMenu(my_object);
  };

  // //////////////////////// serverless ///////////////////////////

  _createClass(my, null, [{
    key: 'env',
    get: function get() {
      var my_res = {
        USER_DATA_PATH: 'https://usr'
      };
      return my_res;
    }
  }, {
    key: 'serverless',
    get: function get() {
      return null;
    }
  }]);

  return my;
}();

exports.default = my;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.my = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(2);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(3);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(7);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(8);
exports.OnekitPage = OnekitPage_1.default;
var my_1 = __webpack_require__(0);
exports.my = my_1.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable camelcase */

function OnekitApp(my_object) {
  var swan_object = my_object;
  return App(swan_object);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;

var _STRING = __webpack_require__(4);

var _STRING2 = _interopRequireDefault(_STRING);

var _my = __webpack_require__(0);

var _my2 = _interopRequireDefault(_my);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitBehavior(object) {
  var my_object = {
    onInit: function onInit(query) {
      var created = void 0;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function created() {};
      }
      created.call(this, query);
    },
    didMount: function didMount() {
      var attached = void 0;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function attached() {};
      }
      attached.call(this);
      // //////
      var ready = void 0;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function ready() {};
      }
      ready.call(this);
    },
    didUnmount: function didUnmount() {
      var detached = void 0;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function detached() {};
      }
      detached.call(this);
    }
  };
  if (object) {
    if (!object.methods) {
      object.methods = {};
    }
    object.methods.triggerEvent = function (name, data) {
      var funcName = 'on' + _STRING2.default.firstUpper(name);
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    };
    object.methods.createSelectorQuery = _my2.default.createSelectorQuery;
  }
  for (var _iterator = Object.keys(object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    var value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case 'properties':
        my_object.props = {};
        for (var _iterator2 = Object.keys(value), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var p = _ref2;

          var v = value[p];
          my_object.props[p] = v && v.value ? v.value : null;
        }
        break;
      default:
        my_object[key] = value;
    }
  }

  return my_object;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("oneutil/STRING");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable camelcase */
/* harmony default export */ __webpack_exports__["default"] = (function (body, success, fail, complete) {
  try {
    return body(res => {
      if (success) {
        success(res)
      }
      if (complete) {
        complete(res)
      }
    }, res => {
      if (fail) {
        fail(res)
      }
      if (complete) {
        complete(res)
      }
    },)
  } catch (e) {
    const res = {
      errMsg: e.message
    }
    if (fail) {
      fail(res)
    }
    if (complete) {
      complete(res)
    }
    return null
  }
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (items, func, success) {
  const result = []
  let i = 0
  let itemCallback = null
  itemCallback = function (res) {
    result.push(res)
    if (i >= items.length) {
      success(result)
      return
    }
    func(items[i++], itemCallback)
  }
  func(items[i++], itemCallback)
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;
/* eslint-disable camelcase */
function OnekitComponent(my_object) {
  var swan_object = my_object;
  return Component(swan_object);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable no-console */
/* eslint-disable camelcase */
function OnekitPage(my_object) {
  var swan_object = my_object;

  return Page(swan_object);
}

/***/ })
/******/ ]);