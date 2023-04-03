// index.js
// 获取应用实例
const app = getApp()

import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store'

Page({
  data: {
    motto: '你好，Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  gotoTest() {
    wx.switchTab({
      url: '/pages/test/test',
    })
  },
  // 编程式跳转非tabbar页面
  gotoLogs() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNum1']
    })
  },
  btnHandler1(e){
    console.log(e)
    this.updateNum1(e.target.dataset.step)
  },
  btnHandler2(e){
    this.updateNum1(e.target.dataset.step)
  },

  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

})