/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import toutiao_behavior from '../../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior, 'swan://form-field'],
  options: {
    addGlobalClass: true,
  },
  data: {
    value: ''
  },
  properties: {
    value: {
      type: String,
      value: null,
    },
    disabled: {
      type: Boolean,
      value: false
    },
    checked: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#F85959'
    }
  },
  // attached(e) {
  //   this.setData({
  //     value: e.detail.value,
  //   })
  // },
})
