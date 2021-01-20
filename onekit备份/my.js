import PROMISE from '../node_modules/oneutil/PROMISE'
import TASK from '../node_modules/oneutil/TASK'
import serverless from './serverless/serverless'

// import TheKit from './tools/TheKit'
export default class my {

  //////////////////////  基础  ///////////////////////////

	static canIUse(schema) {
		return swan.canIUse(schema);
  }
  
  static getAppIdSync() {
    const my_res = {
      appId: swan_appID
    }
    return my_res
  }
  
  static getLaunchOptionsSync() {
		return console.warn("TO DO ... WANGYEWEI")
  }
  
  static getRunScene(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null

    PROMISE((SUCCESS) =>{
      const swan_accountInfo = swan.getAccountInfoSync()

      const my_res = {
        envVersion: swan_accountInfo.miniProgram.envVersion
      }

      SUCCESS(my_res)
    },my_success, my_fail, my_complete)

  }
  
  static SDKVersion(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.getSystemInfo({
        success: swan_res => {
          const my_res = {
            SDKVersion : swan_res.SDKVersion
          }
          SUCCESS(my_res)
        }
      })
    },my_success, my_fail, my_complete)  

  }
  
  //////////////////////  应用级事件  ///////////////////////////

  static get env() {
		const my_res = {
      USER_DATA_PATH: 'https://usr'
    }
    return my_res
  }

  static offAppHide(callback) {
		return swan.offAppHide(callback)
  }
  
  static offAppShow(callback) {
		return swan.offAppShow(callback)
  }
  
  static offComponentError(callback) {
		return console.warn("offComponentError is not support")
  }
  
  static offError(callback) {
		return swan.offError(callback)
  }
  
  static offUnhandledRejection(callback) {
		return console.warn("offUnhandledRejection is not support")
  }
  
  static onAppHide(callback) {
		return swan.onAppHide(callback)
  }
  
  static onAppShow(callback) {
		swan.onAppShow(swan_res => {
      const my_res = {
        query: swan_res.query,
        scene: swan_res.scene
      }
      callback(my_res)
    })
  }
  
  static onComponentError(callback) {
		return console.warn("onComponentError is not support")
  }

  static onError(callback) {
		return swan.onError(callback)
  }
  
  static onUnhandledRejection(callback) {
		return console.warn("onUnhandledRejection is not support")
  }

  //////////////////////  界面  ///////////////////////////

  /////// 导航栏 /////
  static getTitleColor(my_object) {
		return console.warn("getTitleColor is not support")
  }

  static hideBackHome() {
		return swan.hideHomeButton();
  }

  static setNavigationBar(my_object) {
    const my_title = my_object.title
    const my_backgroundColor = my_object.backgroundColor
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    const title = my_title
    const backgroundColor = my_backgroundColor
    const frontColor = "#ffffff"
    const swan_object1 ={ title }
    const swan_object2 ={ frontColor,backgroundColor }

    PROMISE((SUCCESS) => {
      swan.setNavigationBarTitle(swan_object1)
      swan.setNavigationBarColor(swan_object2)

      const result = {
        errMsg: 'setNavigationBar: ok'
      }

      SUCCESS(result)
    },my_success,my_fail,my_complete)
    
  }

  static hideNavigationBarLoading() {
		return swan.hideNavigationBarLoading()
	}


  static showNavigationBarLoading() {
		return swan.showNavigationBarLoading()
  }
  
  /////// tabBar /////
  static hideTabBar(my_object) {
    return swan.hideTabBar(my_object)
  }
  
  static hideTabBarRedDot(my_object) {
    return swan.hideTabBarRedDot(my_object)
  }
  
  static removeTabBarBadge(my_object) {
    return swan.removeTabBarBadge(my_object)
  }
  
  static setTabBarBadge(my_object) {
    return swan.setTabBarBadge(my_object)		
  }
  
  static setTabBarItem(my_object) {
   return swan.setTabBarItem(my_object)		
  }
  
  static setTabBarStyle(my_object) {
		return swan.setTabBarStyle(my_object)
  }
  
  static showTabBar(my_object) {
   return swan.showTabBar(my_object)
  }
  
	static showTabBarRedDot(my_object) {
    return swan.showTabBarRedDot(my_object)
	
  }
  
  ////////  路由  /////////

	static switchTab(my_object) {
		return swan.switchTab(my_object)
	}

	static reLaunch(my_object) {
		return swan.reLaunch(my_object)
	}

	static redirectTo(my_object) {
		return swan.redirectTo(my_object)
	}

	static navigateTo(my_object) {
   return swan.navigateTo(my_object)
	}

	static navigateBack(my_object) {
		return swan.navigateBack(my_object)
  }
  
  ////////  交互反馈  /////////
  static alert(my_object) {
    const my_title = my_object.title
    const my_content = my_object.content
    const my_confirmText = my_object.buttonText
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      const title = my_title
      const content = my_content
      const confirmText = my_confirmText
      swan.showModal({
        title,
        content,
        confirmText,
        success: () =>{
          const my_res = {
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
  }

  static confirm(my_object) {
    const my_title = my_object.title
    const my_content = my_object.content
    const my_confirmText = my_object.confirmButtonText
    const my_cancelText = my_object.cancelButtonText
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      const title = my_title
      const content = my_content
      const confirmText = my_confirmText
      const cancelText = my_cancelText
      swan.showModal({
        title,
        content,
        confirmText,
        cancelText,
        success: res => {
          if(res.confirm) {
            const res = {
              confirm: true
            }
            SUCCESS(res)
          } else if (res.cancel) {
            const res = {
              confirm: false
            }
            SUCCESS(res)
          }
        }
      })
    }, my_success,my_fail,my_complete)
  }

  static hideLoading(my_object) {
    return swan.hideLoading(my_object)		
  }
  
  static hideToast(my_object) {
    return swan.hideToast(my_object)	
  }

  static prompt(my_object) {
		return console.warn("prompt is not support")
  }
  
  static showActionSheet(my_object) {
    const my_items = my_object.items
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const itemList = my_items
      swan.showActionSheet({
        itemList,
        success: swan_res =>{
          const my_res ={
            index: swan_res.tapIndex
          }
          SUCCESS(my_res)
        }
      })

    },my_success,my_fail,my_complete)
  }
  
  static showLoading(my_object) {
    const my_title = my_object.content
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      const title = my_title
      swan.showLoading({
        title,
        success: () =>{
          const my_res ={
            success: true
          }
          SUCCESS(my_res)
        }
      })
     
    },my_success,my_fail,my_complete)
	}

  static showToast(my_object) {
    const my_title = my_object.content
    const my_duration = my_object.duration
    const my_icon = my_object.type
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const title = my_title
      const duration = my_duration
      const icon = my_icon
      swan.showToast({
        title,
        duration,
        icon,
        success: () =>{
          const my_res = {}
          SUCCESS(my_res)
        }
      })

    },my_success,my_fail,my_complete)
  }
  
  ////////  下拉刷新  /////////
  static startPullDownRefresh(my_object) {
		return swan.startPullDownRefresh(my_object)
  }
  
  static stopPullDownRefresh(my_object) {
		return swan.stopPullDownRefresh(my_object)
  }
  
  ////////  联系人  /////////
  static choosemypayContact(object) {
		return console.warn("choosemypayContact is not support")
  }

  static chooseContact(object) {
		return console.warn("chooseContactt is not support")
  }

  static choosePhoneContact(object) {
		return console.warn("choosePhoneContact is not support")
  }

  ////////  选择城市  /////////
  static chooseCity(object) {
		return console.warn("chooseCity is not support")
  }

  static onLocatedComplete(object) {
		return console.warn("onLocatedComplete is not support")
  }

  static setLocatedCity(object) {
		return console.warn("setLocatedCity is not support")
  }

  static regionPicker(object) {
		return console.warn("regionPicker is not support")
  }

  ////////  选择日期  /////////
  static datePicker(object) {
		return console.warn("datePicker is not support")
  }

  ////////  动画  /////////
  static createAnimation(my_object) {
    const swan_res = swan.createAnimation(my_object)
    const my_res = {
      animations: swan_res.actions,
      config: swan_res.option,
      currentAnimation: swan_res.currentStepAnimates
    }
    return my_res
  }

  ////////  画布  /////////
  static createCanvasContext(canvasId) {
		return swan.createCanvasContext(canvasId)
  }

  ////////  地图  /////////
  static createMapContext(mapId) {
		return swan.createMapContext(mapId)
  }

  static getMapInfo(object) {
		return console.warn("getMapInfo is not support")
  }

  ////////  计算路径  /////////
  static calculateRoute(object) {
		return console.warn("calculateRoute is not support")
  }

  ////////  键盘  /////////
  static calculateRoute() {
		return swan.calculateRoute()
  }

  ////////  滚动  /////////
  static pageScrollTo(my_object) {
    const my_scrollTop = my_object.scrollTop
    const my_duration = my_object.duration
    const my_selector = my_object.selector
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      const scrollTop = my_scrollTop
      const duration = my_duration
      const selector = my_selector
      swan.pageScrollTo({
        scrollTop,
        duration,
        selector,
        success: () =>{
          const my_res ={
            success: true
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
  }

  ////////  节点查询  /////////
  static createIntersectionObserver(my_object) {
   return swan.createIntersectionObserver(my_object)
  }

  static createSelectorQuery() {
    return swan.createSelectorQuery()
  }

  ////////  选项选择器  /////////
  static optionsSelect(my_object) {
    return console.warn("optionsSelect is not support")
  }

  ////////  级联选择  /////////
  static optionsSelect(my_object) {
    return console.warn("multiLevelSelect is not support")
  }

  ////////  设置窗口背景  /////////
  static setBackgroundColor(my_object) {
    const my_backgroundColor = my_object.backgroundColor
    const my_backgroundColorTop = my_object.backgroundColorTop
    const my_backgroundColorBottom = my_object.backgroundColorBottom
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      const backgroundColor = my_backgroundColor
      const backgroundColorTop = my_backgroundColorTop
      const backgroundColorBottom = my_backgroundColorBottom
      swan.setBackgroundColor({
        backgroundColor,
        backgroundColorTop,
        backgroundColorBottom,
        success: () =>{
          const my_res ={
            success: true
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
  }

  static setBackgroundTextStyle(my_object) {
    return swan.setBackgroundTextStyle(my_object)
  }

  ////////  设置页面是否支持下拉  /////////
  static setCanPullDown(my_object) {
    return coonsole.error("setCanPullDown is not support")
  }

  ////////  字体  /////////
  static loadFontFace(my_object) {
    return swan.loadFontFace(my_object)
  }

  //////////////////////  多媒体  ///////////////////////////

  ////////  图片  /////////
  static chooseImage(my_object) {
    const my_count = my_object.count
    const my_sizeType = my_object.sizeType
    const my_sourceType = my_object.sourceType
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      const count = my_count
      const sizeType = my_sizeType
      const sourceType = my_sourceType
      swan.chooseImage({
        count,
        sizeType,
        sourceType,
        success: (res) =>{
          const my_res = {
            tempFiles: res.tempFiles,
            apFilePaths: res.tempFilePaths
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
  }

  static compressImage(my_object) {
    const my_apFilePaths = my_object.apFilePaths
    const my_compressLevel = my_object.compressLevel || 4
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      let swan_qumyty
      if(my_compressLevel){
        swan_qumyty = 80
      }else{
        swan_qumyty = (my_compressLevel+1)*25
      }
    
      TASK(my_apFilePaths, (my_apFilePath,callback)=>{
        const swan_src = my_apFilePath
        swan.compressImage({
          src: swan_src,
          qumyty: swan_qumyty,
          success: (res) =>{
            const apFilePath = res.tempFilePath
            callback(apFilePath)
          }
        })
      }, (apFilePaths)=>{
        const my_res ={
          apFilePaths
        }
        SUCCESS(my_res)
      })
    },my_success,my_fail,my_complete)
  }

  static getImageInfo(my_object) {
    return swan.getImageInfo(my_object)
  }

  static previewImage(my_object) {
    return swan.previewImage(my_object)
  }

  static saveImage(my_object) {
    const my_url = my_object.url
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS)=>{
      const filpath = my_url
      swan.saveImageToPhotosAlbum({
        filpath,
        success:() =>{
          const my_res = {
            succcess: true
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
   
  }

  ////////  视频播放  /////////
  static createVideoContext(videoId) {
    return swan.createVideoContext(videoId)
  }

  ////////  音频播放  /////////
  static createInnerAudioContext() {
    return swan.createInnerAudioContext()
  }

  static getAvailableAudioSources(my_object) {
    return console.warn("getAvailableAudioSources is not support")
  }

  static getBackgroundAudioManager() {
    return swan.getBackgroundAudioManager()
  }

  static offAudioInterruptionBegin(my_object) {
    return console.warn("offAudioInterruptionBegin is not support")
  }

  static offAudioInterruptionEnd(my_object) {
    return console.warn("offAudioInterruptionEnd is not support")
  }

  static onAudioInterruptionBegin(my_object) {
    return console.warn("onAudioInterruptionBegin is not support")
  }

  static onAudioInterruptionEnd(my_object) {
    return console.warn("onAudioInterruptionEnd is not support")
  }

  //////////////////////  缓存  ///////////////////////////

  static clearStorage() {
    return swan.clearStorage()
  }

  static clearStorageSync() {
    return swan.clearStorageSync()
  }

  static getStorage(my_object) {
    return swan.getStorage(my_object)
  }

  static getStorageInfo(my_object) {
    return swan.getStorageInfo(my_object)
  }

  static getStorageInfoSync() {
    return swan.getStorageInfoSync()
  }

  static getStorageSync(my_object) {
    const my_key = my_object.key
    my_object = null
    const swan_res = swan.getStorageSync(my_key)
    const my_res = {
      success: true,
      data: swan_res
    }
    return my_res
  }

  static removeStorage(my_object) {
    return swan.removeStorage(my_object)
  }

  static removeStorageSync(my_object) {
    const my_key = my_object.key
    my_object = null
    return swan.removeStorageSync(my_key)
  }

  static setStorage(my_object) {
    return swan.setStorage(my_object)
  }

  static setStorageSync(my_object) {
    const my_key = my_object.key
    const my_data = my_object.data
    my_object = null
    return swan.setStorageSync(my_key,my_data)
  }

  //////////////////////  文件  ///////////////////////////

  static getFileInfo(my_object) {
    const my_apFilePath = my_object.apFilePath
    const my_digestAlgorithm = my_object.digestAlgorithm || "md5"
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const filePath = my_apFilePath
      const digestAlgorithm = my_digestAlgorithm
      swan.getFileInfo({
        filePath,
        digestAlgorithm,
        success: swan_res =>{
          const my_res ={
            size: swan_res.size,
            digest: swan_res.digest
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
    
  }

  static getSavedFileInfo(my_object) {
    const my_apFilePath = my_object.apFilePath
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const filePath = my_apFilePath
      swan.getSavedFileInfo({
        filePath,
        success: swan_res =>{ 
          const my_res = {
            size: swan_res.size,
            createTime: swan_res.createTime
          }
          SUCCESS(my_res)
        }
      })
      
    },my_success,my_fail,my_complete)
    
  }

  static getSavedFileList(my_object) {
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.getSavedFileList({
        success: swan_res =>{ 
          const my_fileList = swan_res.fileList.map(file =>{ 
            return {
              size: file.size,
              createTime: file.createTime,
              apFilePath: file.filePath
            }
          })
          const my_res = {
            fileList: my_fileList
          }
          SUCCESS(my_res)
        }
      })
      
    },my_success,my_fail,my_complete)
    
  }

  static openDocument(my_object) {
     return swan.openDocument(my_object)
  }

  static removeSavedFile(my_object) {
    const my_apFilePath = my_object.apFilePath
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    const filePath = my_apFilePath
    const success = my_success
    const fail = my_fail
    const complete = my_complete
    const swan_object = {
      filePath,
      success,
      fail,
      complete
    }
    return swan.removeSavedFile(swan_object)
  }

  static saveFile(my_object) {
    const my_apFilePath = my_object.apFilePath
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const tempFilePath = my_apFilePath
      swan.saveFile({
        tempFilePath,
        success: swan_res =>{
          const my_res ={
            apFilePath: swan_res.savedFilePath
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
    
  }

  //////////////////////  位置  ///////////////////////////
  static chooseLocation(my_object) {
		return swan.chooseLocation(my_object) 
  }

  static getLocation(my_object) {
    const my_type = my_object.type || 0
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    let swan_type = null
    if(my_type == 0){
      swan_type = "wgs84"
    }else{
      swan_type = "gcj02"
    }
    PROMISE((SUCCESS) =>{
      const type = swan_type
      swan.getLocation({
        type,
        success: swan_res =>{ 
          const my_res = {
            longitude: swan_res.longitude,
            latitude: swan_res.latitude,
            accuracy: swan_res.accuracy,
            horizontalAccuracy: swan_res.horizontalAccuracy,
          }
          SUCCESS(my_res)
        }
      })
      
    },my_success,my_fail,my_complete)
    
  }

  static openLocation(my_object) {
    const my_longitude = my_object.longitude
    const my_latitude = my_object.latitude
    const my_keyword = my_object.name
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    const longitude = my_longitude
    const latitude = my_latitude
    const name = my_keyword
    const success = my_success
    const fail = my_fail
    const complete = my_complete
    const swan_object = {
      longitude,
      latitude,
      name,
      success,
      fail,
      complete
    }

		return swan.openLocation(swan_object) 
  }

  //////////////////////  网络  ///////////////////////////

  ////////  发起请求  /////////
  static request(my_object) {
    const my_url = my_object.url
    const my_headers = my_object.headers
    const my_method = my_object.method || "GET"
    const my_data = my_object.data
    const my_timeout = my_object.timeout || 30000
    const my_dataType = my_object.dataType || "JSON"
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const url = my_url
      const header = my_headers
      const method = my_method
      const data = my_data
      const timeout = my_timeout
      const dataType = my_dataType
      swan.request({
        url,
        header,
        method,
        data,
        timeout,
        dataType,
        success: swan_res =>{ 
          const my_res = {
            data: swan_res.data,
            statusCode: swan_res.statusCode,
            headers: swan_res.header,
            cookies: swan_res.cookies,
          }
          SUCCESS(my_res)
        }
      })
      
    },my_success,my_fail,my_complete)
  }

  ////////  上传、下载  /////////
  static downloadFile(my_object) {
		const my_url = my_object.url
    const my_header = my_object.header
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const url = my_url
      const header = my_header
      swan.downloadFile({
        url,
        header,
        success: swan_res =>{ 
          const my_res = {
            apFilePath: swan_res.tempFilePath,
            statusCode: swan_res.statusCode, 
          }
          SUCCESS(my_res)
        }
      })
      
    },my_success,my_fail,my_complete)
  }

  static uploadFile(my_object) {
		const my_url = my_object.url
    const my_filePath = my_object.filePath
    const my_fileName = my_object.fileName
    const my_fileType = my_object.fileType
    const my_header = my_object.header
    const my_formData = my_object.formData
		const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      const url = my_url
      const header = my_header
      const filePath = my_filePath
      const fileType = my_fileType
      const name = my_fileName
      const formData = my_formData
      swan.uploadFile({
        url,
        header,
        filePath,
        fileType,
        name,
        formData,
        success: swan_res =>{ 
          const my_res = {
            statusCode: swan_res.statusCode,
            data: swan_res.data, 
            header:{}
          }
          SUCCESS(my_res)
        }
      })
      
    },my_success,my_fail,my_complete)
  }

  ////////  webScoket  /////////
  static connectSocket(my_object) {
		return swan.connectSocket(my_object)
  }

  static onSocketOpen(callback) {
		return swan.onSocketOpen(callback)
  }

  static onSocketError(callback) {
		return swan.onSocketError(callback)
  }

  static sendSocketMessage(my_object) {
		return swan.sendSocketMessage(my_object)
  }

  static onSocketMessage(callback) {
		return swan.onSocketMessage(callback)
  }

  static closeSocket(my_object) {
		return swan.closeSocket(my_object)
  }

  static onSocketClose(callback) {
		return swan.onSocketClose(callback)
  }

  static offSocketClose(callback) {
		return console.warn("offSocketClose is not support")
  }

  static offSocketMessage(callback) {
		return console.warn("offSocketMessage is not support")
  }

  static offSocketOpen(my_object) {
		return console.warn("offSocketOpen is not support")
  }

  static offSocketError(callback) {
		return console.warn("offSocketError is not support")
  }

  //////////////////////  设备  ///////////////////////////

  ////////  系统消息  /////////
  static getSystemInfo(my_object) {
		return swan.getSystemInfo(my_object)
  }

  static getSystemInfoSync() {
		return swan.getSystemInfoSync()
  }

  ////////  网络状态  /////////
  static getNetworkType(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.getNetworkType({
        success: swan_res =>{
          const my_res = {
            networkType: swan_res.networkType,
            networkAvailable: true
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
		
  }

  static onNetworkStatusChange(callback) {
    return swan.onNetworkStatusChange(callback)	
  }

  static offNetworkStatusChange(callback) {
    return console.warn("offNetworkStatusChange is not support")
  }

  ////////  摇一摇  /////////
  static watchShake(my_object) {
    return console.warn("watchShake is not support")
  }

  ////////  震动  /////////
  static vibrate(my_object) {
    return console.warn("vibrate is not support")	
  }

  static vibrateLong(my_object) {
    return swan.vibrateLong(my_object)	
  }

  static vibrateShort(my_object) {
    return swan.vibrateShort(my_object)	
  }

  ////////  加速度计  /////////
  static onAccelerometerChange(callback) {
    return swan.onAccelerometerChange(callback)	
  }

  static offAccelerometerChange(callback) {
    return swan.offAccelerometerChange(callback)	
  }

  ////////  陀螺仪  /////////
  static onGyroscopeChange(callback) {
    return swan.onGyroscopeChange(callback)	
  }

  static offGyroscopeChange(callback) {
    return console.warn("offGyroscopeChange is not support")	
  }

  ////////  罗盘  /////////
  static onCompassChange(callback) {
    return swan.onCompassChange(callback)	
  }

  static offCompassChange(callback) {
    return swan.offCompassChange(callback)	
  }

  ////////  拨打电话  /////////
  static makePhoneCall(my_object) {
    return swan.makePhoneCall(my_object)	
  }

  ////////  获取服务器时间  /////////
  static getServerTime(my_object) {
    return console.warn("getServerTime is not support")	
  }

  ////////  用户截屏事件  /////////
  static onUserCaptureScreen(callback) {
    return swan.onUserCaptureScreen(callback)	
  }

  static offUserCaptureScreen(callback) {
    return console.warn("offUserCaptureScreen is not support")	
  }

  ////////  屏幕亮度  /////////
  static getScreenBrightness(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.getScreenBrightness({
        success: swan_res =>{
          const my_res = {
            brightnes: swan_res.value,
          }
          SUCCESS(my_res)
        }
      })
    },my_success,my_fail,my_complete)
    
  }

  static setScreenBrightness(my_object) {
    const my_brightness = my_object.brightness
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    const value = my_brightness
    const success = my_success
    const fail = my_fail
    const complete = my_complete
    const swan_object = {
      value,
      success,
      fail,
      complete
    }
    return swan.setScreenBrightness(swan_object)
  }

  static setKeepScreenOn(my_object) {
    return swan.setKeepScreenOn(my_object)	
  }

  ////////  设置  /////////
  static getSetting(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.getSetting({
        success: swan_res =>{
          const my_res = {
            authSetting: {
              location: swan_res.authSetting['scope.userLocation'],
              album: swan_res.authSetting['scope.writePhotosAlbum'],
              camera: swan_res.authSetting['scope.camera'],
              mypaysports: swan_res.authSetting['scope.werun'],
              phoneNumber: "000000",
              myaddress: swan_res.authSetting['scope.address'],
              userinfo: swan_res.authSetting['scope.userInfo'],
              userLocationBackground: swan_res.authSetting['scope.userLocationBackground'],
              record: swan_res.authSetting['scope.record'],
              invoice: swan_res.authSetting['scope.invoice'],
              invoiceTitle: swan_res.authSetting['scope.invoiceTitle'],
              _RVA_APPID: null
            }
          }
          SUCCESS(my_res)
        }
      })

    },my_success,my_fail,my_complete)
    
  }

  static openSetting(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.openSetting({
        success: swan_res =>{
          const my_res = {
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
          }
          SUCCESS(my_res)
        }
      })

    },my_success,my_fail,my_complete)
    
  }

  ////////  添加手机联系人  /////////
  static addPhoneContact(my_object) {
    return swan.addPhoneContact(my_object)	
  }

  ////////  权限引导  /////////
  static showAuthGuide (my_object) {
    return console.warn("showAuthGuide is not support")
  }

  ////////  扫码  /////////
  static scan(my_object) {
    const my_scanType = my_object.scanType || ['qrCode','barCode']
    const my_hideAlbum = my_object.hideAlbum || false
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    const scanType = my_scanType
    const onlyFromCamera = my_hideAlbum
    PROMISE((SUCCESS) =>{
      swan.scanCode({
        scanType,
        onlyFromCamera,
        success: swan_res =>{
          const my_res = {
            code: "code data",
            qrCode: "qrCode data",
            barCode: "barCode data",
            codeContent: swan_res.result,
            imageChannel: "",
            rawData: "",
            charSet:swan_res.charSet,
            path: swan_res.path
          }
          SUCCESS(my_res)
        }
      })

    },my_success,my_fail,my_complete)
  }

  ////////  内存不足警告  /////////
  static onMemoryWarning (callback) {
    return swan.onMemoryWarning (callback)	
  }

  static offMemoryWarning (callback) {
    return console.warn("offMemoryWarning is not support")
  }

  ////////  获取设备电量  /////////
  static getBatteryInfo (my_object) {
    return console.warn("getBatteryInfo is not support")	
  }

  static getBatteryInfoSync (my_object) {
    return console.warn("getBatteryInfoSync is not support")	
  }

  ////////  传统蓝牙  /////////
  static openBluetoothAdapter (my_object) {
    return swan.openBluetoothAdapter (my_object)	
  }

  static startBluetoothDevicesDiscovery (my_object) {
    return swan.startBluetoothDevicesDiscovery (my_object)	
  }

  static onBluetoothDeviceFound (callback) {
    swan.onBluetoothDeviceFound (swan_res =>{
      const my_devices = swan_res.devices.map(device =>{ 
        return {
          name: device.name,
          deviceName: device.name,
          deviceId: device.deviceId,
          localName: device.localName,
          RSSI: device.RSSI,
          advertisData: device.advertisData,
          advertisServiceUUIDs: device.advertisServiceUUIDs,
          serviceData: device.serviceData
        }
      })
      const my_res = {
        devices:my_devices
      }
      callback(my_res)
    })	
  }

  static stopBluetoothDevicesDiscovery (my_object) {
    return swan.stopBluetoothDevicesDiscovery (my_object)	
  }

  static onBluetoothAdapterStateChange (callback) {
    return swan.onBluetoothAdapterStateChange (callback)	
  }

  static getConnectedBluetoothDevices (my_object) {
    const my_deviceId = my_object.deviceId
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    const services = [my_deviceId]
    const success = my_success
    const fail = my_fail
    const complete = my_complete
    const swan_object = {
      services,
      success,
      fail,
      complete
    }
    return swan.getConnectedBluetoothDevices (swan_object)	
  }

  static getBluetoothDevices (my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.getBluetoothDevices ({
        success:swan_res =>{
        const my_devices = swan_res.devices.map(device =>{ 
          return {
            name: device.name,
            deviceName: device.name,
            deviceId: device.deviceId,
            localName: device.localName,
            RSSI: device.RSSI,
            manufacturerData: device.advertisData,
            advertisServiceUUIDs: device.advertisServiceUUIDs,
            serviceData: device.serviceData
          }
        })
        const my_res = {
          devices: my_devices
        }
        SUCCESS(my_res)
      }
      })	

    },my_success,my_fail,my_complete)
    
  }

  static getBluetoothAdapterState (my_object) {
    return swan.getBluetoothAdapterState(my_object)
  }

  static closeBluetoothAdapter (my_object) {
    return swan.closeBluetoothAdapter(my_object)
  }

  static offBluetoothAdapterStateChange (callback) {
    return console.warn("offBluetoothAdapterStateChange is not support")	
  }

  static offBluetoothDeviceFound (callback) {
    return console.warn("getBatteryInfoSync is not support")	
  }

  ////////  低功耗蓝牙  /////////
  static connectBLEDevice (my_object) {
    return swan.createBLEConnection(my_object)	
  }

  static disconnectBLEDevice (my_object) {
    return swan.closeBLEConnection(my_object)	
  }

  static getBLEDeviceCharacteristics (my_object) {
    const swan_res = swan.getBLEDeviceCharacteristics(my_object)	
    const my_characteristics = swan_res.characteristics.map(characteristic =>{ 
      return {
        characteristicId: characteristic.uuid,
        properties: characteristic.properties,
        value: "",
        localName: "",
      }
    })
    const my_res = {
      characteristics: my_characteristics 
    }
    return my_res
  }

  static getBLEDeviceServices (my_object) {
    const swan_res = swan.getBLEDeviceServices(my_object)	
    const my_services = swan_res.services.map(service =>{ 
      return {
        serviceId: service.uuid,
        isPrimary: service.isPrimary,
      }
    })
    const my_res = {
      services: my_services 
    }
    return my_res 
  }

  static notifyBLECharacteristicValueChange (my_object) {
    return swan.notifyBLECharacteristicValueChange(my_object)	
  }

  static onBLECharacteristicValueChange (callback) {
    swan.onBLECharacteristicValueChange(swan_res =>{
      const my_res = {
        deviceId: swan_res.deviceId,
        serviceId: swan_res.serviceId,
        characteristicId: swan_res.characteristicId,
        value: swan_res.value,
        connected: true
      }
      callback(my_res)
    })	
  }

  static onBLEConnectionStateChange (callback) {
    return swan.onBLEConnectionStateChange(callback)	
  }

  static readBLECharacteristicValue (my_object) {
    const swan_res =  swan.readBLECharacteristicValue(my_object)	
    const my_res = {
      deviceId: swan_res.deviceId,
      serviceId: swan_res.serviceId,
      characteristicId: swan_res.characteristicId,
      value: swan_res.value,
    }
    return my_res
  }

  static writeBLECharacteristicValue (my_object) {
    const my_deviceId = my_object.deviceId
    const my_serviceId = my_object.serviceId
    const my_characteristicId = my_object.characteristicId
    const my_value = my_object.value
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    const deviceId = my_deviceId
    const serviceId = my_serviceId
    const characteristicId = my_characteristicId
    const value = [my_value]
    const success = my_success
    const fail = my_fail
    const complete = my_complete
    const swan_object = {
      deviceId,
      serviceId,
      characteristicId,
      value,
      success,
      fail,
      complete,
    }
    return swan.writeBLECharacteristicValue(swan_object)
  }

  static offBluetoothAdapterStateChange (callback) {
    return console.warn("offBluetoothAdapterStateChange is not support")	
  }

  static offBluetoothDeviceFound (callback) {
    return console.warn("offBluetoothDeviceFound is not support")	
  }

  ////////  iBeacon  /////////
  static getBeacons (my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) =>{
      swan.getBeacons({
        success: swan_res =>{
          const my_res = {
            beacons: swan_res.beacons,
            errCode: "0",
            errorMsg: "ok"
          }
          SUCCESS(my_res)
        }
      })

    },my_success,my_fail,my_complete)
  }

  static startBeaconDiscovery (my_object) {
    return swan.startBeaconDiscovery (my_object)
  }

  static stopBeaconDiscovery (my_object) {
    return swan.stopBeaconDiscovery (my_object)
  }

  static onBeaconServiceChange (my_object) {
    const my_success = my_object.success
    my_object = null
    return swan.onBeaconServiceChange (my_success)
  }

  static onBeaconUpdate (my_object) {
    const my_success = my_object.success
    my_object = null
    return swan.onBeaconUpdate (my_success)
  }

  //////////////////////  数据安全  ///////////////////////////
  static getBeacons (my_object) {
    console.warn("getBeacons is not support")	
  }

  //////////////////////  分享  ///////////////////////////
  static showSharePanel () {
    return swan.showShareMenu()
  }

  static hideShareMenu (my_object) {
    return swan.hideShareMenu(my_object)
  }

  

  ////////////////////////// serverless ///////////////////////////

  static get serverless() {
    return serverless
  }


	

	
}
