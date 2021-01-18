/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import toutiao_behavior from '../../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    addGlobalClass: true,
  },
  properties: {
    unitId: {
      type: String,
      value: null,
    },
    adIntervals: {
      type: Number || String,
      value: null
    },
    fixed: {
      type: Boolean,
      value: null,
    },
    type: {// 做不了
      type: String,
      value: 'banner'
    },
    scale: {// 做不了
      type: Number,
      value: 100
    }
  },
  data: {},
  attached() {
    let adIntervals
    if (this.properties.adIntervals) {
      if (this.properties.type === 'banner' && this.properties.adIntervals >= 30) {
        adIntervals = this.properties.adIntervals
      }
    }
    //
    // let fixed
    // if (this.properties.fixed === true) {
    //   this.properties.fixed = fixed
    // } else {
    //   this.properties.fixed = static
    // }
    //
    // let type = this.properties.type
    // const scale = this.properties.scale
    // swan.createSelectorQuery().select('onekit-ad').boundingClientRect(rect => {
    //   console.log('节点信息', rect)
    // }).exec()
    // if (type) {
    //   switch (type) {
    //     case 'banner':
    //       type = 'banner'
    //       // scale =
    //       break
    //     case 'video':
    //       type = 'feed'
    //       break
    //     case 'large':
    //       type = 'feed'
    //       break
    //     case 'lImg':
    //       type = 'feed'
    //       break
    //     case 'rImg':
    //       type = 'feed'
    //       break
    //     default:
    //       break
    //   }
    // }
    //
    this.setData({
      adIntervals
    })
  },

  detached() {},

  methods: {
    ad_load(e) {
      this.triggerEvent('Load', e)
    },
    ad_error(e) {
      this.triggerEvent('Error', e)
    },
    ad_close(e) {
      this.triggerEvent('Close', e)
    },
  }
})
