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
    selectable: {
      type: Boolean,
      value: false,
    },
    space: {
      type: String,
      value: '',
    },
    decode: {
      type: Boolean,
      value: false,
    },
    value: {
      type: String,
      value: '',
      observer(newVal) {
        const value = this.properties.decode ? this._decode(newVal) : newVal
        this.setData({value})
      }
    }
  },
  data: {},

  methods: {
    _decode(str) {
      if (!str) return ''
      str = str.replace(/&nbsp;/g, ' ')
      str = str.replace(/&lt;/g, '<')
      str = str.replace(/&gt;/g, '>')
      str = str.replace(/&apos;/g, "'")
      str = str.replace(/&ensp;/g, ' ')
      str = str.replace(/&emsp;/g, '  ')
      str = str.replace(/&amp;/g, '&')
      return str
    }
  }
})
