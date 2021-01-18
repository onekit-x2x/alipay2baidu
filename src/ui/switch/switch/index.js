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
    value: false
  },
  properties: {
    checked: {
      type: Boolean,
      value: false,
      observer(newValue) {
        function fixBoolean(obj) {
          if (typeof obj === 'string') {
            return obj === 'checked'
          } else if (typeof obj === 'boolean') {
            return obj
          } else if (typeof obj === 'number') {
            return obj === 0
          } else {
            return obj != null
          }
        }
        const checked = fixBoolean(newValue)
        this.setData({
          value: checked
        })
      }
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    type: {
      type: String,
      value: 'switch',
    },
    color: {
      type: String,
      value: '#F85959'
    },
  },
  methods: {
    switch_change(e) {
      const checked = e.detail.checked
      this.setData({
        value: checked
      })
      this.triggerEvent('Change', {checked})
    },
  }
})
