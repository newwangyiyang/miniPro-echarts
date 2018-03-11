import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
// 添加 config json
export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'ec-canvas': '../../../static/ec-canvas/ec-canvas'
    },
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#c7ecee",
    "navigationBarTitleText": "你好世界",
    "navigationBarTextStyle": "black"
  }
}
