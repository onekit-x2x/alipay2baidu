import my from "onekit/my"
App({onekit:{server:"https://百度小程序域名/onekit/api/"},

  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', my.getSystemInfoSync());
    console.log('SDKVersion', my.SDKVersion);
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
  },
});
