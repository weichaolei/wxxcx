//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '那些年你随的份子',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 点击我的份子按钮
   */
  clickMe: function () {
    // var cashListData = []
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

    wx.navigateTo({
      url: '../gift/gift',
    })
  }
})
