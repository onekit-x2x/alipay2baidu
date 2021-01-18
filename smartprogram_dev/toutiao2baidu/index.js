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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
// import {STRING} from 'oneutil'
// import LivePlayerContext from './api/LivePlayerContext'
// import CameraContext from './api/CameraContext'

// // import Context from "./api/Context.js"
var tt = function () {
  function tt() {
    _classCallCheck(this, tt);
  }

  tt.canIuse = function canIuse() {
    return true;
  };

  tt.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    var commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  };

  tt.arrayBufferToBase64 = function arrayBufferToBase64(arrybufferr) {
    var base64Content = Buffer.from(arrybufferr).toString('base64');
    return base64Content;
  };

  tt.getLaunchOptionsSync = function getLaunchOptionsSync() {
    // baidu is not surpport
  };

  tt.exitSmartprogram = function exitSmartprogram() {
    // baidu is not support
  };

  tt.canIPutStuffOverComponent = function canIPutStuffOverComponent() {
    return true;
  };

  tt.getUpdateManager = function getUpdateManager() {
    return swan.getUpdateManager();
  };

  tt.updateManager = function updateManager() {
    return swan.updateManager();
  };

  tt.onAppShow = function onAppShow(callback) {
    return swan.onAppShow(callback);
  };

  tt.offAppshow = function offAppshow(callback) {
    return swan.offAppshow(callback);
  };

  tt.onAppHide = function onAppHide(callbak) {
    return swan.onAppHide(callbak);
  };

  tt.offAppHide = function offAppHide(callback) {
    return swan.offAppHide(callback);
  };

  tt.onError = function onError(callback) {
    return swan.onError(callback);
  };

  tt.offError = function offError(callback) {
    return swan.offError(callback);
  };

  tt.downloadFile = function downloadFile(optios) {
    return swan.downloadFile(optios);
  };

  tt.request = function request(options) {
    return swan.request(options);
  };

  tt.uploadFile = function uploadFile(options) {
    return swan.uploadFile(options);
  };

  tt.connectSocket = function connectSocket(options) {
    return swan.connectSocket(options);
  };

  tt.chooseImage = function chooseImage(options) {
    return swan.chooseImage(options);
  };

  tt.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(options) {
    return swan.saveImageToPhotosAlbum(options);
  };

  tt.previewImage = function previewImage(options) {
    return swan.previewImage(options);
  };

  tt.getImageInfo = function getImageInfo(options) {
    return swan.getImageInfo(options);
  };

  tt.compressImage = function compressImage(options) {
    return swan.compressImage(options);
  };

  tt.getRecorderManager = function getRecorderManager() {
    return swan.getRecorderManager();
  };

  tt.createInnerAudioContext = function createInnerAudioContext() {
    return swan.createInnerAudioContext();
  };

  tt.getBackgroundAudioManager = function getBackgroundAudioManager() {
    return swan.getBackgroundAudioManager();
  };

  tt.chooseVideo = function chooseVideo() {
    return swan.chooseVideo();
  };

  tt.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum() {
    return swan.saveVideoToPhotosAlbum();
  };

  tt.createVideoContext = function createVideoContext() {
    return swan.createVideoContext();
  };

  tt.createLivePlayerContext = function createLivePlayerContext() {
    return swan.createLivePlayerContext();
  };

  tt.createCameraContext = function createCameraContext(id) {
    // return new CameraContext(swan.createCameraContext())
    return swan.createCanvasContext(id);
  };

  tt.createMapContext = function createMapContext() {
    return swan.createCameraContext();
  };

  tt.saveFile = function saveFile(object) {
    return swan.saveFile(object);
  };

  tt.getFileInfo = function getFileInfo(object) {
    return swan.getFileInfo(object);
  };

  tt.getSavedFileList = function getSavedFileList(object) {
    return swan.getSavedFileList(object);
  };

  tt.openDocument = function openDocument(options) {
    return swan.openDocument(options);
  };

  tt.removeSavedFile = function removeSavedFile(options) {
    return swan.removeSavedFile(options);
  };

  tt.getFileSystemManager = function getFileSystemManager() {
    return swan.getFileSystemManager();
  };

  tt.createCanvasContext = function createCanvasContext(canvasId) {
    // return new CanvasContext(swan.createCanvasContext(canvasId))
    return swan.createCanvasContext(canvasId);
  };

  tt.canvasToTempFilePath = function canvasToTempFilePath(object) {
    return swan.canvasToTempFilePath(object);
  };

  tt.canvasPutImageData = function canvasPutImageData(object) {
    return swan.canvasPutImageData(object);
  };

  tt.canvasGetImageData = function canvasGetImageData(object) {
    return swan.canvasGetImageData(object);
  };

  // //////////// Device //////////////////


  tt.onBeaconServiceChange = function onBeaconServiceChange(object) {
    return swan.onBeaconServiceChange(object);
  };

  tt.onBeaconUpdate = function onBeaconUpdate(object) {
    return swan.onBeaconUpdate(object);
  };

  tt.getBeacons = function getBeacons(object) {
    return swan.getBeacons(object);
  };

  tt.stopBeaconDiscovery = function stopBeaconDiscovery(object) {
    return swan.stopBeaconDiscovery(object);
  };

  tt.startBeaconDiscovery = function startBeaconDiscovery(object) {
    return swan.startBeaconDiscovery(object);
  };

  tt.stopWifi = function stopWifi(object) {
    return swan.stopWifi(object);
  };

  tt.startWifi = function startWifi(object) {
    return swan.startWifi(object);
  };

  tt.setWifiList = function setWifiList(object) {
    return swan.setWifiList(object);
  };

  tt.onWifiConnected = function onWifiConnected(object) {
    return swan.onWifiConnected(object);
  };

  tt.onGetWifiList = function onGetWifiList(object) {
    return swan.onGetWifiList(object);
  };

  tt.getWifiList = function getWifiList(object) {
    return swan.getWifiList(object);
  };

  tt.getConnectedWifi = function getConnectedWifi(object) {
    return swan.getConnectedWifi(object);
  };

  tt.connectWifi = function connectWifi(object) {
    return swan.connectWifi(object);
  };

  //


  tt.onAccelerometerChange = function onAccelerometerChange(callback) {
    return swan.onAccelerometerChange(callback);
  };

  tt.stopAccelerometer = function stopAccelerometer(object) {
    return swan.stopAccelerometer(object);
  };

  tt.startAccelerometer = function startAccelerometer(object) {
    return swan.startAccelerometer(object);
  };

  tt.getBatteryInfoSync = function getBatteryInfoSync(object) {
    return swan.getBatteryInfoSync(object);
  };

  tt._getBatteryInfo = function _getBatteryInfo(result) {
    return swan._getBatteryInfo(result);
  };

  tt.getBatteryInfo = function getBatteryInfo(object) {
    return swan.getBatteryInfo(object);
  };

  //


  tt.getClipboardData = function getClipboardData(object) {
    return swan.getClipboardData(object);
  };

  tt.setClipboardData = function setClipboardData(object) {
    return swan.setClipboardData(object);
  };

  tt.onCompassChange = function onCompassChange(callback) {
    return swan.onCompassChange(callback);
  };

  tt.stopCompass = function stopCompass(object) {
    return swan.stopCompass(object);
  };

  tt.startCompass = function startCompass(object) {
    return swan.startCompass(object);
  };

  tt.addPhoneContact = function addPhoneContact(object) {
    return swan.addPhoneContact(object);
  };

  tt.onGyroscopeChange = function onGyroscopeChange(callback) {
    return swan.onGyroscopeChange(callback);
  };

  tt.stopGyroscope = function stopGyroscope(object) {
    return swan.stopGyroscope(object);
  };

  tt.startGyroscope = function startGyroscope(object) {
    return swan.startGyroscope(object);
  };

  //


  tt.onDeviceMotionChange = function onDeviceMotionChange(object) {
    return swan.onDeviceMotionChange(object);
  };

  tt.stopDeviceMotionListening = function stopDeviceMotionListening(object) {
    return swan.stopDeviceMotionListening(object);
  };

  tt.startDeviceMotionListening = function startDeviceMotionListening(object) {
    return swan.startDeviceMotionListening(object);
  };

  tt.getNetworkType = function getNetworkType(object) {
    return swan.getNetworkType(object);
  };

  tt._network = function _network(res) {
    return swan._network(res);
  };

  tt.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return swan.onNetworkStatusChange(callback);
  };

  //


  tt.makePhoneCall = function makePhoneCall(object) {
    return swan.makePhoneCall(object);
  };

  tt.scanCode = function scanCode(object) {
    return swan.scanCode(object);
  };

  //


  tt.vibrateLong = function vibrateLong(object) {
    return swan.vibrateLong(object);
  };

  tt.vibrateShort = function vibrateShort(object) {
    return swan.vibrateShort(object);
  };

  //


  tt.onMemoryWarning = function onMemoryWarning(object) {
    return swan.onMemoryWarning(object);
  };

  //


  tt.writeBLECharacteristicValue = function writeBLECharacteristicValue(object) {
    return swan.writeBLECharacteristicValue(object);
  };

  tt.readBLECharacteristicValue = function readBLECharacteristicValue(object) {
    return swan.readBLECharacteristicValue(object);
  };

  tt.onBLEConnectionStateChange = function onBLEConnectionStateChange(object) {
    return swan.onBLEConnectionStateChange(object);
  };

  tt.onBLECharacteristicValueChange = function onBLECharacteristicValueChange(object) {
    return swan.onBLECharacteristicValueChange(object);
  };

  tt.notifyBLECharacteristicValueChange = function notifyBLECharacteristicValueChange(object) {
    return swan.notifyBLECharacteristicValueChange(object);
  };

  tt.getBLEDeviceServices = function getBLEDeviceServices(object) {
    return swan.getBLEDeviceServices(object);
  };

  tt.getBLEDeviceCharacteristics = function getBLEDeviceCharacteristics(object) {
    return swan.getBLEDeviceCharacteristics(object);
  };

  tt.createBLEConnection = function createBLEConnection(object) {
    return swan.createBLEConnection(object);
  };

  tt.closeBLEConnection = function closeBLEConnection(object) {
    return swan.closeBLEConnection(object);
  };

  //


  tt.stopBluetoothDevicesDiscovery = function stopBluetoothDevicesDiscovery() {
    /*
    return swan.stopBluetoothDevicesDiscovery(object);
    */
  };

  tt.startBluetoothDevicesDiscovery = function startBluetoothDevicesDiscovery(object) {
    return swan.startBluetoothDevicesDiscovery(object);
  };

  tt.openBluetoothAdapter = function openBluetoothAdapter() {
    /* return swan.openBluetoothAdapter(object); */
  };

  tt.onBluetoothDeviceFound = function onBluetoothDeviceFound(object) {
    return swan.onBluetoothDeviceFound(object);
  };

  tt.onBluetoothAdapterStateChange = function onBluetoothAdapterStateChange(object) {
    return swan.onBluetoothAdapterStateChange(object);
  };

  tt.getConnectedBluetoothDevices = function getConnectedBluetoothDevices(object) {
    return swan.getConnectedBluetoothDevices(object);
  };

  tt.getBluetoothDevices = function getBluetoothDevices(object) {
    return swan.getBluetoothDevices(object);
  };

  tt.getBluetoothAdapterState = function getBluetoothAdapterState(object) {
    return swan.getBluetoothAdapterState(object);
  };

  tt.closeBluetoothAdapter = function closeBluetoothAdapter(object) {
    return swan.closeBluetoothAdapter(object);
  };

  //


  tt.stopHCE = function stopHCE(object) {
    return swan.stopHCE(object);
  };

  tt.startHCE = function startHCE(object) {
    return swan.startHCE(object);
  };

  tt.sendHCEMessage = function sendHCEMessage(object) {
    return swan.sendHCEMessage(object);
  };

  tt.onHCEMessage = function onHCEMessage(object) {
    return swan.onHCEMessage(object);
  };

  tt.getHCEState = function getHCEState(object) {
    return swan.getHCEState(object);
  };

  //


  tt.setScreenBrightness = function setScreenBrightness(object) {
    return swan.setScreenBrightness(object);
  };

  tt.setKeepScreenOn = function setKeepScreenOn(object) {
    return swan.setKeepScreenOn(object);
  };

  tt.onUserCaptureScreen = function onUserCaptureScreen(object) {
    return swan.onUserCaptureScreen(object);
  };

  tt.getScreenBrightness = function getScreenBrightness(object) {
    return swan.getScreenBrightness(object);
  };

  // ///////////////// Ext //////////////


  tt.getExtConfigSync = function getExtConfigSync(object) {
    return swan.getExtConfigSync(object);
  };

  tt.getExtConfig = function getExtConfig(object) {
    return swan.getExtConfig(object);
  };

  // ////////////////// File //////////


  tt.getSavedFileInfo = function getSavedFileInfo(object) {
    return swan.getSavedFileInfo(object);
  };

  // ////////// Location ///////////////


  tt.openLocation = function openLocation(object) {
    return swan.openLocation(object);
  };

  tt.getLocation = function getLocation(object) {
    return swan.getLocation(object);
  };

  tt.chooseLocation = function chooseLocation(object) {
    return swan.chooseLocation(object);
  };

  tt.stopVoice = function stopVoice(object) {
    return swan.stopVoice(object);
  };

  tt.pauseVoice = function pauseVoice(object) {
    return swan.pauseVoice(object);
  };

  tt.playVoice = function playVoice(object) {
    return swan.playVoice(object);
  };

  tt.setInnerAudioOption = function setInnerAudioOption(object) {
    return swan.setInnerAudioOption(object);
  };

  tt.getAvailableAudioSources = function getAvailableAudioSources(object) {
    return swan.getAvailableAudioSources(object);
  };

  tt.createAudioContext = function createAudioContext(object) {
    return swan.createAudioContext(object);
  };

  tt.onBackgroundAudioStop = function onBackgroundAudioStop(object) {
    return swan.onBackgroundAudioStop(object);
  };

  tt.onBackgroundAudioPause = function onBackgroundAudioPause(object) {
    return swan.onBackgroundAudioPause(object);
  };

  tt.onBackgroundAudioPlay = function onBackgroundAudioPlay(object) {
    return swan.onBackgroundAudioPlay(object);
  };

  tt.stopBackgroundAudio = function stopBackgroundAudio(object) {
    return swan.stopBackgroundAudio(object);
  };

  tt.seekBackgroundAudio = function seekBackgroundAudio(object) {
    return swan.seekBackgroundAudio(object);
  };

  tt.pauseBackgroundAudio = function pauseBackgroundAudio(object) {
    return swan.pauseBackgroundAudio(object);
  };

  tt.playBackgroundAudio = function playBackgroundAudio(object) {
    return swan.playBackgroundAudio(object);
  };

  tt.getBackgroundAudioPlayerState = function getBackgroundAudioPlayerState(object) {
    return swan.getBackgroundAudioPlayerState(object);
  };

  tt.createLivePusherContext = function createLivePusherContext(object) {
    return swan.createLivePusherContext(object);
  };

  tt.onSocketError = function onSocketError(object) {
    return swan.onSocketError(object);
  };

  tt.onSocketMessage = function onSocketMessage(object) {
    return swan.onSocketMessage(object);
  };

  tt.onSocketClose = function onSocketClose(object) {
    return swan.onSocketClose(object);
  };

  tt.onSocketOpen = function onSocketOpen(object) {
    return swan.connectSocket(object);
  };

  tt.sendSocketMessage = function sendSocketMessage(object) {
    return swan.sendSocketMessage(object);
  };

  tt.closeSocket = function closeSocket(object) {
    return swan.closeSocket(object);
  };

  tt.offLocalServiceResolveFail = function offLocalServiceResolveFail(object) {
    return swan.offLocalServiceResolveFail(object);
  };

  tt.onLocalServiceResolveFail = function onLocalServiceResolveFail(object) {
    return swan.onLocalServiceResolveFail(object);
  };

  tt.offLocalServiceDiscoveryStop = function offLocalServiceDiscoveryStop(object) {
    return swan.offLocalServiceDiscoveryStop(object);
  };

  tt.onLocalServiceDiscoveryStop = function onLocalServiceDiscoveryStop(object) {
    return swan.onLocalServiceDiscoveryStop(object);
  };

  tt.offLocalServiceLost = function offLocalServiceLost(object) {
    return swan.offLocalServiceLost(object);
  };

  tt.onLocalServiceLost = function onLocalServiceLost(object) {
    return swan.onLocalServiceLost(object);
  };

  tt.offLocalServiceFound = function offLocalServiceFound(object) {
    return swan.offLocalServiceFound(object);
  };

  tt.onLocalServiceFound = function onLocalServiceFound(object) {
    return swan.onLocalServiceFound(object);
  };

  tt.stopLocalServiceDiscovery = function stopLocalServiceDiscovery(object) {
    return swan.stopLocalServiceDiscovery(object);
  };

  tt.startLocalServiceDiscovery = function startLocalServiceDiscovery(object) {
    return swan.startLocalServiceDiscovery(object);
  };

  // /////// Open Interface //////////


  tt._checkSession = function _checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3;
  };

  tt.checkSession = function checkSession(object) {
    if (tt._checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }
    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
      }
    }
  };

  tt.login = function login(object) {
    if (!object) {
      swan.login(object);
      return;
    }
    var object2 = {};
    object2.success = function (res) {
      getApp().onekitwx._jscode = res.code;
      getApp().onekitwx._login = new Date().getTime();
      var result = {
        code: res.code
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete();
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    if (tt._checkSession()) {
      object2.success({
        code: getApp().onekitwx._jscode
      });
    } else {
      swan.login(object2);
    }
  };

  tt._getUserInfo = function _getUserInfo(data, callback) {
    tt.login({
      success: function success(res) {
        console.log(res);
        var code = res.code;
        var withCredentials = getApp().onekitwx.getuserinfo_withCredentials === true;
        var url = getApp().onekitwx.server + 'userinfo';
        swan.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            code: code,
            withCredentials: withCredentials,
            data: JSON.stringify(data)
          },
          success: function success(res) {
            callback(res.data);
          },
          fail: function fail(res) {
            console.log(res);
            callback(res);
          }
        });
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
  };

  tt.getUserInfo = function getUserInfo(object) {
    getApp().onekitwx.getuserinfo_withCredentials = object.withCredentials;
    getApp().onekitwx.getuserinfo = function (data) {
      tt._getUserInfo(data, function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      });
    };
    swan.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    });
  };

  tt.getOpenData = function getOpenData(object) {
    return swan.getOpenData(object);
  };

  tt._getPhoneNumber = function _getPhoneNumber(data, callback) {
    tt.login({
      success: function success(res) {
        var code = res.code;
        var url = getApp().onekitwx.server + 'phonenumber';
        console.log(data);
        swan.request({
          url: url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            data: JSON.stringify(data),
            code: code
          },
          success: function success(res) {
            var data = res.data;
            callback(data);
          },
          fail: function fail(res) {
            console.log(res.data);
          }
        });
      }
    });
  };

  tt.getPhoneNumber = function getPhoneNumber(object) {
    getApp().onekitwx._bindgetphonenumber = function (data) {
      tt._getPhoneNumber(data, function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      });
    };
    swan.navigateTo({
      url: 'page/getphonenumber'
    });
  };

  tt.navigateToSmartprogram = function navigateToSmartprogram(object) {
    return swan.navigateToSmartprogram(object);
  };

  tt.navigateBackSmartprogram = function navigateBackSmartprogram(object) {
    return swan.navigateBackSmartprogram(object);
  };

  tt.getAccountInfoSync = function getAccountInfoSync(object) {
    return swan.getAccountInfoSync(object);
  };

  tt.reportMonitor = function reportMonitor(object) {
    return swan.reportMonitor(object);
  };

  tt.reportAnalytics = function reportAnalytics(object, eventName) {
    return swan.reportAnalytics(object, eventName);
  };

  tt.pay = function pay(object) {
    var url = getApp().onekitwx.server + 'orderinfo';
    swan.request({
      url: url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        orderInfo: JSON.stringify(object.orderInfo)
      },
      success: function success(res) {
        console.log(res);
        var data = {
          out_order_no: res.data.tpOrderId
        };
        swan.requestPolymerPayment({
          orderInfo: res.data,
          success: function success() {
            if (object.getOrderStatus) {
              object.getOrderStatus(data);
              console.log('ok');
            }
          },
          fail: function fail(res) {
            console.log(res);
          }
        });
      },
      fail: function fail(res) {
        console.log(res);
      }
    });
  };

  tt.authorize = function authorize(object) {
    return swan.authorize(object);
  };

  tt.openSetting = function openSetting(object) {
    return swan.openSetting(object);
  };

  tt.getSetting = function getSetting(object) {
    return swan.getSetting(object);
  };

  tt.chooseAddress = function chooseAddress(object) {
    return swan.chooseAddress(object);
  };

  tt.openCard = function openCard(object) {
    return swan.openCard(object);
  };

  tt.addCard = function addCard(object) {
    return swan.addCard(object);
  };

  tt.chooseInvoiceTitle = function chooseInvoiceTitle(object) {
    return swan.chooseInvoiceTitle(object);
  };

  tt.chooseInvoice = function chooseInvoice(object) {
    return swan.chooseInvoice(object);
  };

  tt.startSoterAuthentication = function startSoterAuthentication(object) {
    return swan.startSoterAuthentication(object);
  };

  tt.checkIsSupportSoterAuthentication = function checkIsSupportSoterAuthentication(object) {
    return swan.checkIsSupportSoterAuthentication(object);
  };

  tt.checkIsSoterEnrolledInDevice = function checkIsSoterEnrolledInDevice(object) {
    return swan.checkIsSoterEnrolledInDevice(object);
  };

  tt.getWeRunData = function getWeRunData(object) {
    return swan.getWeRunData(object);
  };

  // //////// Router //////////////


  tt.navigateBack = function navigateBack(object) {
    return swan.navigateBack(object);
  };

  tt.switchTab = function switchTab(object) {
    return swan.switchTab(object);
  };

  tt.navigateTo = function navigateTo(object) {
    return swan.navigateTo(object);
  };

  tt.reLaunch = function reLaunch(object) {
    return swan.reLaunch(object);
  };

  tt.redirectTo = function redirectTo(object) {
    return swan.redirectTo(object);
  };

  // /////////// Share /////////////


  tt.updateShareMenu = function updateShareMenu(object) {
    return swan.updateShareMenu(object);
  };

  tt.showShareMenu = function showShareMenu() {
    console.error('Baidu is not support!');
  };

  tt.hideShareMenu = function hideShareMenu() {
    console.error('Baidu is not support!');
  };

  tt.navigateToVideoView = function navigateToVideoView() {
    console.error('Baidu is not support!');
  };

  tt.getShareInfo = function getShareInfo(object) {
    return swan.getShareInfo(object);
  };

  // ///////////// Storage //////////////


  tt.getStorageInfoSync = function getStorageInfoSync(object) {
    return swan.getStorageInfoSync(object);
  };

  tt.getStorageInfo = function getStorageInfo(object) {
    return swan.getStorageInfo(object);
  };

  tt.clearStorageSync = function clearStorageSync(object) {
    return swan.clearStorageSync(object);
  };

  tt.clearStorage = function clearStorage(object) {
    return swan.clearStorage(object);
  };

  tt.removeStorageSync = function removeStorageSync(object) {
    return swan.removeStorageSync(object);
  };

  tt.removeStorage = function removeStorage(object) {
    return swan.removeStorage(object);
  };

  tt.setStorageSync = function setStorageSync(key, value) {
    return swan.setStorageSync(key, value);
  };

  tt.setStorage = function setStorage(object) {
    return swan.setStorage(object);
  };

  tt.getStorageSync = function getStorageSync(key) {
    return swan.getStorageSync(key);
  };

  tt.getStorage = function getStorage(object) {
    return swan.getStorage(object);
  };

  // //////////// UI ////////////////


  tt.showActionSheet = function showActionSheet(object) {
    return swan.showActionSheet(object);
  };

  tt.showFavoriteGuide = function showFavoriteGuide(options) {
    return swan.showFavoriteGuide(options);
  };

  tt.showInteractionBar = function showInteractionBar() {
    console.error('showInteractionBar is not support in Baidu');
  };

  tt.hideLoading = function hideLoading(object) {
    return swan.hideLoading(object);
  };

  tt.showLoading = function showLoading(object) {
    return swan.showLoading(object);
  };

  tt.hideToast = function hideToast(object) {
    return swan.hideToast(object);
  };

  tt.showToast = function showToast(object) {
    return swan.showToast(object);
  };

  tt.showModal = function showModal(object) {
    return swan.showModal(object);
  };

  tt.setNavigationBarColor = function setNavigationBarColor(object) {
    return swan.setNavigationBarColor(object);
  };

  tt.hideNavigationBarLoading = function hideNavigationBarLoading(object) {
    return swan.hideNavigationBarLoading(object);
  };

  tt.showNavigationBarLoading = function showNavigationBarLoading(object) {
    return swan.showNavigationBarLoading(object);
  };

  tt.hideHomeButton = function hideHomeButton() {
    console.error('Baidu is note support hideHomeButton!');
  };

  tt.setNavigationBarTitle = function setNavigationBarTitle(object) {
    return swan.setNavigationBarTitle(object);
  };

  tt.setBackgroundTextStyle = function setBackgroundTextStyle(object) {
    return swan.setBackgroundTextStyle(object);
  };

  tt.setBackgroundColor = function setBackgroundColor(object) {
    return swan.setBackgroundColor(object);
  };

  tt.setTabBarItem = function setTabBarItem(object) {
    return swan.setTabBarItem(object);
  };

  tt.setTabBarStyle = function setTabBarStyle(object) {
    return swan.setTabBarStyle(object);
  };

  tt.hideTabBar = function hideTabBar(object) {
    return swan.hideTabBar(object);
  };

  tt.showTabBar = function showTabBar(object) {
    return swan.showTabBar(object);
  };

  tt.hideTabBarRedDot = function hideTabBarRedDot(object) {
    return swan.hideTabBarRedDot(object);
  };

  tt.showTabBarRedDot = function showTabBarRedDot(object) {
    return swan.showTabBarRedDot(object);
  };

  tt.removeTabBarBadge = function removeTabBarBadge(object) {
    return swan.removeTabBarBadge(object);
  };

  tt.setTabBarBadge = function setTabBarBadge(object) {
    return swan.setTabBarBadge(object);
  };

  tt.loadFontFace = function loadFontFace(object) {
    return swan.loadFontFace(object);
  };

  tt.pageScrollTo = function pageScrollTo(object) {
    return swan.pageScrollTo(object);
  };

  tt.onPullDownRefresh = function onPullDownRefresh() {
    return swan.onPullDownRefresh();
  };

  tt.setTopBarText = function setTopBarText(object) {
    return swan.setTopBarText(object);
  };

  tt.stopPullDownRefresh = function stopPullDownRefresh(object) {
    return swan.stopPullDownRefresh(object);
  };

  tt.startPullDownRefresh = function startPullDownRefresh(object) {
    return swan.startPullDownRefresh(object);
  };

  tt.nextTick = function nextTick(object) {
    return swan.nextTick(object);
  };

  tt.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect(object) {
    return swan.getMenuButtonBoundingClientRect(object);
  };

  tt.createAnimation = function createAnimation(options) {
    return swan.createAnimation(options);
  };

  tt.offWindowResize = function offWindowResize(object) {
    return swan.offWindowResize(object);
  };

  tt.onWindowResize = function onWindowResize(object) {
    return swan.onWindowResize(object);
  };

  // //////////// Worker ///////////////


  tt.createWorker = function createWorker() {
    return swan.createWorker();
  };

  // //////////// WXML ///////////////


  tt.createSelectorQuery = function createSelectorQuery(object) {
    return swan.createSelectorQuery(object);
  };

  tt.createIntersectionObserver = function createIntersectionObserver(object) {
    return swan.createIntersectionObserver(object);
  };

  // ///////////////////////////////////


  tt.hideKeyboard = function hideKeyboard(object) {
    return swan.hideKeyboard(object);
  };

  // /////////////////////////////////


  tt.createARCameraContext = function createARCameraContext() {
    console.error('Baidu is not support createARCameraContext!!');
  };

  _createClass(tt, null, [{
    key: 'env',
    get: function get() {
      var VERSION = 'production';
      var USER_DATA_PATH = swan.env.USER_DATA_PATH;
      var obj = {
        VERSION: VERSION,
        USER_DATA_PATH: USER_DATA_PATH
      };
      return Object(obj);
    }
  }]);

  return tt;
}();

exports.default = tt;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.tt = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(13);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(14);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(16);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(17);
exports.OnekitPage = OnekitPage_1.default;
var tt_1 = __webpack_require__(2);
exports.tt = tt_1.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable camelcase */

function OnekitApp(tt_object) {
  var swan_object = tt_object;
  return App(swan_object);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;

var _STRING = __webpack_require__(15);

var _STRING2 = _interopRequireDefault(_STRING);

var _tt = __webpack_require__(2);

var _tt2 = _interopRequireDefault(_tt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitBehavior(object) {
  var tt_object = {
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
    object.methods.createSelectorQuery = _tt2.default.createSelectorQuery;
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
        tt_object.props = {};
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
          tt_object.props[p] = v && v.value ? v.value : null;
        }
        break;
      default:
        tt_object[key] = value;
    }
  }

  return tt_object;
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("oneutil/STRING");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;
/* eslint-disable camelcase */
function OnekitComponent(tt_object) {
  var swan_object = tt_object;
  return Component(swan_object);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable no-console */
/* eslint-disable camelcase */
function OnekitPage(tt_object) {
  var swan_object = tt_object;

  return Page(swan_object);
}

/***/ })
/******/ ]);