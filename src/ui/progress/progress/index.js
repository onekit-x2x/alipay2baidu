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
    percent: {type: Number, value: 0},
    strokeWidth: {type: Number, value: 6},
    color: {type: String, value: '#F85959'},
    activeColor: {type: String, value: '#F85959'},
    backgroundColor: {type: String, value: '#EBEBEB'},
    active: {type: Boolean, value: false},
    activeMode: {type: String, value: 'backwards'},
  },
})
