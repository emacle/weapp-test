// custom-tab-bar/index.js
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../store/store'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      active: 'activeTabBarIndex'
    },
    actions:{
      updateActive:'updateActiveTabBarIndex'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    list: [{
        "pagePath": "/pages/index/index",
        "text": "主页"
      },
      {
        "pagePath": "/pages/test/test",
        "text": "消息"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "我的"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath
      })
    }
  }
})