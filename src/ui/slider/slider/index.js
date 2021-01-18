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
    value: 0
  },
  properties: {
    min: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: 100
    },
    step: {
      type: Number,
      value: 1
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: Number,
      value: 0,
      observer(newValue) {
        const value = parseInt(newValue, 10)
        this.setData({
          value
        })
      }
    },
    color: {
      type: String
    },
    selectedColor: {
      type: String
    },
    activeColor: {
      type: String,
      value: '#F85959'
    },
    backgroundColor: {
      type: String,
      value: '#ddd'
    },
    blockSize: {
      type: Number,
      value: 28
    },
    blockColor: {
      type: String,
      value: '#ffffff'
    },
    showValue: {
      type: Boolean,
      value: false
    },
  },

  methods: {
    slider_Change(e) {
      const value = e.detail.value
      this.setData({
        value
      })
      this.triggerEvent('Change', {value})
    },
    slider_Changing(e) {
      this.triggerEvent('Changing', e.detail)
    }
  }
})
