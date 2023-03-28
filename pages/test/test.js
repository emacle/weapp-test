// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: "hello mp",
    imgSrc:"https://wx.qlogo.cn/mmhead/mSrWGV3LwS5d6bwT8OGQicXsuMLgylHeYD3W6SCjGSrI/0",
    count: 0,
    msg: "你好，",
    type: 5,
    flag: true,
    colorList:[],
    arr1: ['apple','windows','xiaomi'],
    userList:[
      {id:1,name:"小红"},
      {id:2,name:"小黄"},
      {id:3,name:"小白"}
    ]
  },
  getColors(){
    wx.showLoading({
      title: 'color loading',
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'get',
      success:({data: res})=>{
        this.setData({
          colorList: [...this.data.colorList,...res.data]
        })
        console.log(res)
        console.log(this.data)

      },
      complete: ()=>{
        wx.hideLoading()
      }
    })
  },
      // wx.request({
    //   url:"https://www.escook.cn/api/get",
    //   method: "GET",
    //   data:{
    //     name:"zs",
    //     age: 20
    //   },
    //   success: (res) =>{
    //     console.log(res.data)
    //   }
    // })    
  async getInfo(e){
    const { data : res } = await wx.p.request({
      url:"https://www.escook.cn/api/get1",
      method: "GET",
      data:{ name:"zs", age: 20}
    }).catch((e)=>{
      console.log(e)
    }).finally(() => { 
      console.log('finally')   
    })
  },
  inputHandler(e){
    console.log(e)
    console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
  },
  postInfo(e){
    wx.request({
      url:"https://www.escook.cn/api/post",
      method: "post",
      data:{
        name:"ls",
        age: 30
      },
      success: (res) =>{
        console.log(res.data)
      }
    })
  },
  
  btnTapHandler(e){
    console.log(e)
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("触发下拉刷新事件")
    this.setData({
      count: 0,
      colorList:[]
    })
  
    wx.stopPullDownRefresh() 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getColors()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})