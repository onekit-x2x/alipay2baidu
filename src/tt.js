/* eslint-disable no-console */
// import {STRING} from 'oneutil'
// import LivePlayerContext from './api/LivePlayerContext'
// import CameraContext from './api/CameraContext'

// // import Context from "./api/Context.js"
export default class tt {
  static canIuse() {
    return true
  }

  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+')
    const commonContent = Buffer.from(base64, 'base64')
    return commonContent
  }

  static arrayBufferToBase64(arrybufferr) {
    const base64Content = Buffer.from(arrybufferr).toString('base64')
    return base64Content
  }

  static getLaunchOptionsSync() {
    // baidu is not surpport
  }

  static exitSmartprogram() {
    // baidu is not support
  }

  static canIPutStuffOverComponent() {
    return true
  }

  static getUpdateManager() {
    return swan.getUpdateManager()
  }

  static updateManager() {
    return swan.updateManager()
  }

  static onAppShow(callback) {
    return swan.onAppShow(callback)
  }

  static offAppshow(callback) {
    return swan.offAppshow(callback)
  }

  static onAppHide(callbak) {
    return swan.onAppHide(callbak)
  }

  static offAppHide(callback) {
    return swan.offAppHide(callback)
  }

  static onError(callback) {
    return swan.onError(callback)
  }

  static offError(callback) {
    return swan.offError(callback)
  }

  static get env() {
    const VERSION = 'production'
    const USER_DATA_PATH = swan.env.USER_DATA_PATH
    const obj = {
      VERSION,
      USER_DATA_PATH
    }
    return Object(obj)
  }

  static downloadFile(optios) {
    return swan.downloadFile(optios)
  }

  static request(options) {
    return swan.request(options)
  }

  static uploadFile(options) {
    return swan.uploadFile(options)
  }

  static connectSocket(options) {
    return swan.connectSocket(options)
  }

  static chooseImage(options) {
    return swan.chooseImage(options)
  }

  static saveImageToPhotosAlbum(options) {
    return swan.saveImageToPhotosAlbum(options)
  }

  static previewImage(options) {
    return swan.previewImage(options)
  }

  static getImageInfo(options) {
    return swan.getImageInfo(options)
  }

  static compressImage(options) {
    return swan.compressImage(options)
  }

  static getRecorderManager() {
    return swan.getRecorderManager()
  }

  static createInnerAudioContext() {
    return swan.createInnerAudioContext()
  }

  static getBackgroundAudioManager() {
    return swan.getBackgroundAudioManager()
  }

  static chooseVideo() {
    return swan.chooseVideo()
  }

  static saveVideoToPhotosAlbum() {
    return swan.saveVideoToPhotosAlbum()
  }

  static createVideoContext() {
    return swan.createVideoContext()
  }

  static createLivePlayerContext() {
    return swan.createLivePlayerContext()
  }

  static createCameraContext(id) {
    // return new CameraContext(swan.createCameraContext())
    return swan.createCanvasContext(id)
  }

  static createMapContext() {
    return swan.createCameraContext()
  }

  static saveFile(object) {
    return swan.saveFile(object)
  }

  static getFileInfo(object) {
    return swan.getFileInfo(object)
  }

  static getSavedFileList(object) {
    return swan.getSavedFileList(object)
  }

  static openDocument(options) {
    return swan.openDocument(options)
  }

  static removeSavedFile(options) {
    return swan.removeSavedFile(options)
  }

  static getFileSystemManager() {
    return swan.getFileSystemManager()
  }

  static createCanvasContext(canvasId) {
    // return new CanvasContext(swan.createCanvasContext(canvasId))
    return swan.createCanvasContext(canvasId)
  }


  static canvasToTempFilePath(object) {
    return swan.canvasToTempFilePath(object)
  }

  static canvasPutImageData(object) {
    return swan.canvasPutImageData(object)
  }

  static canvasGetImageData(object) {
    return swan.canvasGetImageData(object)
  }

  // //////////// Device //////////////////
  static onBeaconServiceChange(object) {
    return swan.onBeaconServiceChange(object)
  }

  static onBeaconUpdate(object) {
    return swan.onBeaconUpdate(object)
  }

  static getBeacons(object) {
    return swan.getBeacons(object)
  }

  static stopBeaconDiscovery(object) {
    return swan.stopBeaconDiscovery(object)
  }

  static startBeaconDiscovery(object) {
    return swan.startBeaconDiscovery(object)
  }

  static stopWifi(object) {
    return swan.stopWifi(object)
  }

  static startWifi(object) {
    return swan.startWifi(object)
  }

  static setWifiList(object) {
    return swan.setWifiList(object)
  }

  static onWifiConnected(object) {
    return swan.onWifiConnected(object)
  }

  static onGetWifiList(object) {
    return swan.onGetWifiList(object)
  }

  static getWifiList(object) {
    return swan.getWifiList(object)
  }

  static getConnectedWifi(object) {
    return swan.getConnectedWifi(object)
  }

  static connectWifi(object) {
    return swan.connectWifi(object)
  }

  //
  static onAccelerometerChange(callback) {
    return swan.onAccelerometerChange(callback)
  }

  static stopAccelerometer(object) {
    return swan.stopAccelerometer(object)
  }

  static startAccelerometer(object) {
    return swan.startAccelerometer(object)
  }

  static getBatteryInfoSync(object) {
    return swan.getBatteryInfoSync(object)
  }

  static _getBatteryInfo(result) {
    return swan._getBatteryInfo(result)
  }

  static getBatteryInfo(object) {
    return swan.getBatteryInfo(object)
  }

  //
  static getClipboardData(object) {
    return swan.getClipboardData(object)
  }

  static setClipboardData(object) {
    return swan.setClipboardData(object)
  }

  static onCompassChange(callback) {
    return swan.onCompassChange(callback)
  }

  static stopCompass(object) {
    return swan.stopCompass(object)
  }

  static startCompass(object) {
    return swan.startCompass(object)
  }

  static addPhoneContact(object) {
    return swan.addPhoneContact(object)
  }

  static onGyroscopeChange(callback) {
    return swan.onGyroscopeChange(callback)
  }

  static stopGyroscope(object) {
    return swan.stopGyroscope(object)
  }

  static startGyroscope(object) {
    return swan.startGyroscope(object)
  }

  //
  static onDeviceMotionChange(object) {
    return swan.onDeviceMotionChange(object)
  }

  static stopDeviceMotionListening(object) {
    return swan.stopDeviceMotionListening(object)
  }

  static startDeviceMotionListening(object) {
    return swan.startDeviceMotionListening(object)
  }


  static getNetworkType(object) {
    return swan.getNetworkType(object)
  }

  static _network(res) {
    return swan._network(res)
  }

  static onNetworkStatusChange(callback) {
    return swan.onNetworkStatusChange(callback)
  }

  //
  static makePhoneCall(object) {
    return swan.makePhoneCall(object)
  }

  static scanCode(object) {
    return swan.scanCode(object)
  }

  //
  static vibrateLong(object) {
    return swan.vibrateLong(object)
  }

  static vibrateShort(object) {
    return swan.vibrateShort(object)
  }

  //
  static onMemoryWarning(object) {
    return swan.onMemoryWarning(object)
  }

  //
  static writeBLECharacteristicValue(object) {
    return swan.writeBLECharacteristicValue(object)
  }

  static readBLECharacteristicValue(object) {
    return swan.readBLECharacteristicValue(object)
  }

  static onBLEConnectionStateChange(object) {
    return swan.onBLEConnectionStateChange(object)
  }

  static onBLECharacteristicValueChange(object) {
    return swan.onBLECharacteristicValueChange(object)
  }

  static notifyBLECharacteristicValueChange(object) {
    return swan.notifyBLECharacteristicValueChange(object)
  }

  static getBLEDeviceServices(object) {
    return swan.getBLEDeviceServices(object)
  }

  static getBLEDeviceCharacteristics(object) {
    return swan.getBLEDeviceCharacteristics(object)
  }

  static createBLEConnection(object) {
    return swan.createBLEConnection(object)
  }

  static closeBLEConnection(object) {
    return swan.closeBLEConnection(object)
  }

  //
  static stopBluetoothDevicesDiscovery() {
    /*
return swan.stopBluetoothDevicesDiscovery(object);
 */
  }

  static startBluetoothDevicesDiscovery(object) {
    return swan.startBluetoothDevicesDiscovery(object)
  }

  static openBluetoothAdapter() {
    /* return swan.openBluetoothAdapter(object); */
  }

  static onBluetoothDeviceFound(object) {
    return swan.onBluetoothDeviceFound(object)
  }

  static onBluetoothAdapterStateChange(object) {
    return swan.onBluetoothAdapterStateChange(object)
  }

  static getConnectedBluetoothDevices(object) {
    return swan.getConnectedBluetoothDevices(object)
  }

  static getBluetoothDevices(object) {
    return swan.getBluetoothDevices(object)
  }

  static getBluetoothAdapterState(object) {
    return swan.getBluetoothAdapterState(object)
  }

  static closeBluetoothAdapter(object) {
    return swan.closeBluetoothAdapter(object)
  }

  //
  static stopHCE(object) {
    return swan.stopHCE(object)
  }

  static startHCE(object) {
    return swan.startHCE(object)
  }

  static sendHCEMessage(object) {
    return swan.sendHCEMessage(object)
  }

  static onHCEMessage(object) {
    return swan.onHCEMessage(object)
  }

  static getHCEState(object) {
    return swan.getHCEState(object)
  }

  //
  static setScreenBrightness(object) {
    return swan.setScreenBrightness(object)
  }

  static setKeepScreenOn(object) {
    return swan.setKeepScreenOn(object)
  }

  static onUserCaptureScreen(object) {
    return swan.onUserCaptureScreen(object)
  }

  static getScreenBrightness(object) {
    return swan.getScreenBrightness(object)
  }

  // ///////////////// Ext //////////////
  static getExtConfigSync(object) {
    return swan.getExtConfigSync(object)
  }

  static getExtConfig(object) {
    return swan.getExtConfig(object)
  }

  // ////////////////// File //////////


  static getSavedFileInfo(object) {
    return swan.getSavedFileInfo(object)
  }

  // ////////// Location ///////////////
  static openLocation(object) {
    return swan.openLocation(object)
  }

  static getLocation(object) {
    return swan.getLocation(object)
  }

  static chooseLocation(object) {
    return swan.chooseLocation(object)
  }


  static stopVoice(object) {
    return swan.stopVoice(object)
  }

  static pauseVoice(object) {
    return swan.pauseVoice(object)
  }

  static playVoice(object) {
    return swan.playVoice(object)
  }

  static setInnerAudioOption(object) {
    return swan.setInnerAudioOption(object)
  }

  static getAvailableAudioSources(object) {
    return swan.getAvailableAudioSources(object)
  }

  static createAudioContext(object) {
    return swan.createAudioContext(object)
  }

  static onBackgroundAudioStop(object) {
    return swan.onBackgroundAudioStop(object)
  }

  static onBackgroundAudioPause(object) {
    return swan.onBackgroundAudioPause(object)
  }

  static onBackgroundAudioPlay(object) {
    return swan.onBackgroundAudioPlay(object)
  }

  static stopBackgroundAudio(object) {
    return swan.stopBackgroundAudio(object)
  }

  static seekBackgroundAudio(object) {
    return swan.seekBackgroundAudio(object)
  }

  static pauseBackgroundAudio(object) {
    return swan.pauseBackgroundAudio(object)
  }

  static playBackgroundAudio(object) {
    return swan.playBackgroundAudio(object)
  }

  static getBackgroundAudioPlayerState(object) {
    return swan.getBackgroundAudioPlayerState(object)
  }

  static createLivePusherContext(object) {
    return swan.createLivePusherContext(object)
  }


  static onSocketError(object) {
    return swan.onSocketError(object)
  }

  static onSocketMessage(object) {
    return swan.onSocketMessage(object)
  }

  static onSocketClose(object) {
    return swan.onSocketClose(object)
  }

  static onSocketOpen(object) {
    return swan.connectSocket(object)
  }

  static sendSocketMessage(object) {
    return swan.sendSocketMessage(object)
  }

  static closeSocket(object) {
    return swan.closeSocket(object)
  }

  static offLocalServiceResolveFail(object) {
    return swan.offLocalServiceResolveFail(object)
  }

  static onLocalServiceResolveFail(object) {
    return swan.onLocalServiceResolveFail(object)
  }

  static offLocalServiceDiscoveryStop(object) {
    return swan.offLocalServiceDiscoveryStop(object)
  }

  static onLocalServiceDiscoveryStop(object) {
    return swan.onLocalServiceDiscoveryStop(object)
  }

  static offLocalServiceLost(object) {
    return swan.offLocalServiceLost(object)
  }

  static onLocalServiceLost(object) {
    return swan.onLocalServiceLost(object)
  }

  static offLocalServiceFound(object) {
    return swan.offLocalServiceFound(object)
  }

  static onLocalServiceFound(object) {
    return swan.onLocalServiceFound(object)
  }

  static stopLocalServiceDiscovery(object) {
    return swan.stopLocalServiceDiscovery(object)
  }

  static startLocalServiceDiscovery(object) {
    return swan.startLocalServiceDiscovery(object)
  }

  // /////// Open Interface //////////
  static _checkSession() {
    const now = new Date().getTime()
    return getApp().onekitwx._jscode &&
      getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3
  }

  static checkSession(object) {
    if (tt._checkSession()) {
      if (object.success) {
        object.success()
      }
      if (object.complete) {
        object.complete()
      }
    } else {
      if (object.fail) {
        object.fail()
      }
      if (object.complete) {
        object.complete()
      }
    }
  }

  static login(object) {
    if (!object) {
      swan.login(object)
      return
    }
    const object2 = {}
    object2.success = function (res) {
      getApp().onekitwx._jscode = res.code
      getApp().onekitwx._login = new Date().getTime()
      const result = {
        code: res.code
      }
      if (object.success) {
        object.success(result)
      }
      if (object.complete) {
        object.complete()
      }
    }
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res)
      }
      if (object.complete) {
        object.complete(res)
      }
    }
    if (tt._checkSession()) {
      object2.success({
        code: getApp().onekitwx._jscode
      })
    } else {
      swan.login(object2)
    }
  }

  static _getUserInfo(data, callback) {
    tt.login({
      success(res) {
        console.log(res)
        const code = res.code
        const withCredentials = getApp().onekitwx.getuserinfo_withCredentials === true
        const url = getApp().onekitwx.server + 'userinfo'
        swan.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            code,
            withCredentials,
            data: JSON.stringify(data)
          },
          success(res) {
            callback(res.data)
          },
          fail(res) {
            console.log(res)
            callback(res)
          }
        })
      },
      fail(res) {
        console.log(res)
      }

    })
  }

  static getUserInfo(object) {
    getApp().onekitwx.getuserinfo_withCredentials = object.withCredentials
    getApp().onekitwx.getuserinfo = (data) => {
      tt._getUserInfo(data, (res) => {
        if (object.success) {
          object.success(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      })
    }
    swan.navigateTo({
      url: '/onekitwx/page/getuserinfo/getuserinfo'
    })
  }

  static getOpenData(object) {
    return swan.getOpenData(object)
  }

  static _getPhoneNumber(data, callback) {
    tt.login({
      success: (res) => {
        const code = res.code
        const url = getApp().onekitwx.server + 'phonenumber'
        console.log(data)
        swan.request({
          url,
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            data: JSON.stringify(data),
            code
          },
          success(res) {
            const data = res.data
            callback(data)
          },
          fail(res) {
            console.log(res.data)
          }
        })
      }
    })
  }

  static getPhoneNumber(object) {
    getApp().onekitwx._bindgetphonenumber = (data) => {
      tt._getPhoneNumber(data, (res) => {
        if (object.success) {
          object.success(res)
        }
        if (object.complete) {
          object.complete(res)
        }
      })
    }
    swan.navigateTo({
      url: 'page/getphonenumber'
    })
  }

  static navigateToSmartprogram(object) {
    return swan.navigateToSmartprogram(object)
  }

  static navigateBackSmartprogram(object) {
    return swan.navigateBackSmartprogram(object)
  }

  static getAccountInfoSync(object) {
    return swan.getAccountInfoSync(object)
  }

  static reportMonitor(object) {
    return swan.reportMonitor(object)
  }

  static reportAnalytics(object, eventName) {
    return swan.reportAnalytics(object, eventName)
  }

  static pay(object) {
    const url = getApp().onekitwx.server + 'orderinfo'
    swan.request({
      url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        orderInfo: JSON.stringify(object.orderInfo)
      },
      success(res) {
        console.log(res)
        const data = {
          out_order_no: res.data.tpOrderId
        }
        swan.requestPolymerPayment({
          orderInfo: res.data,
          success() {
            if (object.getOrderStatus) {
              object.getOrderStatus(data)
              console.log('ok')
            }
          },
          fail(res) {
            console.log(res)
          }
        })
      },
      fail(res) {
        console.log(res)
      },
    })
  }

  static authorize(object) {
    return swan.authorize(object)
  }

  static openSetting(object) {
    return swan.openSetting(object)
  }

  static getSetting(object) {
    return swan.getSetting(object)
  }

  static chooseAddress(object) {
    return swan.chooseAddress(object)
  }

  static openCard(object) {
    return swan.openCard(object)
  }

  static addCard(object) {
    return swan.addCard(object)
  }

  static chooseInvoiceTitle(object) {
    return swan.chooseInvoiceTitle(object)
  }

  static chooseInvoice(object) {
    return swan.chooseInvoice(object)
  }

  static startSoterAuthentication(object) {
    return swan.startSoterAuthentication(object)
  }

  static checkIsSupportSoterAuthentication(object) {
    return swan.checkIsSupportSoterAuthentication(object)
  }

  static checkIsSoterEnrolledInDevice(object) {
    return swan.checkIsSoterEnrolledInDevice(object)
  }

  static getWeRunData(object) {
    return swan.getWeRunData(object)
  }

  // //////// Router //////////////
  static navigateBack(object) {
    return swan.navigateBack(object)
  }

  static switchTab(object) {
    return swan.switchTab(object)
  }

  static navigateTo(object) {
    return swan.navigateTo(object)
  }

  static reLaunch(object) {
    return swan.reLaunch(object)
  }

  static redirectTo(object) {
    return swan.redirectTo(object)
  }

  // /////////// Share /////////////
  static updateShareMenu(object) {
    return swan.updateShareMenu(object)
  }

  static showShareMenu() {
    console.error('Baidu is not support!')
  }

  static hideShareMenu() {
    console.error('Baidu is not support!')
  }

  static navigateToVideoView() {
    console.error('Baidu is not support!')
  }

  static getShareInfo(object) {
    return swan.getShareInfo(object)
  }

  // ///////////// Storage //////////////
  static getStorageInfoSync(object) {
    return swan.getStorageInfoSync(object)
  }

  static getStorageInfo(object) {
    return swan.getStorageInfo(object)
  }

  static clearStorageSync(object) {
    return swan.clearStorageSync(object)
  }

  static clearStorage(object) {
    return swan.clearStorage(object)
  }

  static removeStorageSync(object) {
    return swan.removeStorageSync(object)
  }

  static removeStorage(object) {
    return swan.removeStorage(object)
  }

  static setStorageSync(key, value) {
    return swan.setStorageSync(key, value)
  }

  static setStorage(object) {
    return swan.setStorage(object)
  }

  static getStorageSync(key) {
    return swan.getStorageSync(key)
  }

  static getStorage(object) {
    return swan.getStorage(object)
  }

  // //////////// UI ////////////////
  static showActionSheet(object) {
    return swan.showActionSheet(object)
  }

  static showFavoriteGuide(options) {
    return swan.showFavoriteGuide(options)
  }

  static showInteractionBar() {
    console.error('showInteractionBar is not support in Baidu')
  }

  static hideLoading(object) {
    return swan.hideLoading(object)
  }

  static showLoading(object) {
    return swan.showLoading(object)
  }

  static hideToast(object) {
    return swan.hideToast(object)
  }

  static showToast(object) {
    return swan.showToast(object)
  }

  static showModal(object) {
    return swan.showModal(object)
  }

  static setNavigationBarColor(object) {
    return swan.setNavigationBarColor(object)
  }

  static hideNavigationBarLoading(object) {
    return swan.hideNavigationBarLoading(object)
  }

  static showNavigationBarLoading(object) {
    return swan.showNavigationBarLoading(object)
  }

  static hideHomeButton() {
    console.error('Baidu is note support hideHomeButton!')
  }

  static setNavigationBarTitle(object) {
    return swan.setNavigationBarTitle(object)
  }

  static setBackgroundTextStyle(object) {
    return swan.setBackgroundTextStyle(object)
  }

  static setBackgroundColor(object) {
    return swan.setBackgroundColor(object)
  }

  static setTabBarItem(object) {
    return swan.setTabBarItem(object)
  }

  static setTabBarStyle(object) {
    return swan.setTabBarStyle(object)
  }

  static hideTabBar(object) {
    return swan.hideTabBar(object)
  }

  static showTabBar(object) {
    return swan.showTabBar(object)
  }

  static hideTabBarRedDot(object) {
    return swan.hideTabBarRedDot(object)
  }

  static showTabBarRedDot(object) {
    return swan.showTabBarRedDot(object)
  }

  static removeTabBarBadge(object) {
    return swan.removeTabBarBadge(object)
  }

  static setTabBarBadge(object) {
    return swan.setTabBarBadge(object)
  }

  static loadFontFace(object) {
    return swan.loadFontFace(object)
  }

  static pageScrollTo(object) {
    return swan.pageScrollTo(object)
  }

  static onPullDownRefresh() {
    return swan.onPullDownRefresh()
  }

  static setTopBarText(object) {
    return swan.setTopBarText(object)
  }

  static stopPullDownRefresh(object) {
    return swan.stopPullDownRefresh(object)
  }

  static startPullDownRefresh(object) {
    return swan.startPullDownRefresh(object)
  }

  static nextTick(object) {
    return swan.nextTick(object)
  }

  static getMenuButtonBoundingClientRect(object) {
    return swan.getMenuButtonBoundingClientRect(object)
  }


  static createAnimation(options) {
    return swan.createAnimation(options)
  }

  static offWindowResize(object) {
    return swan.offWindowResize(object)
  }

  static onWindowResize(object) {
    return swan.onWindowResize(object)
  }

  // //////////// Worker ///////////////
  static createWorker() {
    return swan.createWorker()
  }

  // //////////// WXML ///////////////
  static createSelectorQuery(object) {
    return swan.createSelectorQuery(object)
  }

  static createIntersectionObserver(object) {
    return swan.createIntersectionObserver(object)
  }

  // ///////////////////////////////////
  static hideKeyboard(object) {
    return swan.hideKeyboard(object)
  }

  // /////////////////////////////////
  static createARCameraContext() {
    console.error('Baidu is not support createARCameraContext!!')
  }
}
