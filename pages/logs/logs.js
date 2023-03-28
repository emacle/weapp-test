// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    // 导航传闻过来的空对象
    query:{}
  },
  onLoad(options) {
    console.log(options)
    this.setData({
      query: options
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
