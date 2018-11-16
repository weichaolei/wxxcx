// pages/gift/gift.js

var that = {}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    try {
      var localData = wx.getStorageSync('cashObj')
      console.log("localData" + localData)
      that.setData({
        listData: localData
      })
    } catch (e) {

    }
    // // 缓存数据
    // wx.getStorage({
    //   key: 'cashObj',
    //   success: function (res) {
    //     var storeData = res.data
    //     console.log("localdata" + storeData)
    //     var len = storeData.length
    //     for (var i = 0; i < len; i++) {
    //       console.log("bendi123:" + storeData[i])
    //       cashListData.push(storeData[i])
    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 跳转到添加份子页面
   */
  addGiftPage: function () {
    wx.navigateTo({
      url: '../addgift/addgift',
    })
  }
})