//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list0:[
      { title: '数据001', url: 'http://47.115.124.190/WebView/User/u1.jpg' },
      { title: '数据002', url: 'http://47.115.124.190/WebView/User/u2.jpg' },
      { title: '数据001', url: 'http://47.115.124.190/WebView/User/u3.jpg' }
    ],
    list: [
      { title: '数据001', url:'http://47.115.124.190/WebView/discovery/d1.jpg'},
      { title: '数据002', url:'http://47.115.124.190/WebView/discovery/d2.jpg'},
      { title: '数据003', url: 'http://47.115.124.190/WebView/discovery/d3.jpg'},
      { title: '数据001', url: 'http://47.115.124.190/WebView/discovery/d4.jpg'}
    ],
    list1: [
      { title: '数据001', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v1.jpg' },
      { title: '数据002', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v2.jpg' },
      { title: '数据003', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v3.jpg' },
      { title: '数据001', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v4.jpg' },
      { title: '数据001', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v5.jpg' },
      { title: '数据002', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v6.jpg' },
      { title: '数据003', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v7.jpg' },
      { title: '数据001', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v8.jpg' },
    ],
    playControll:'playControll'
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  showPlayControll: function (e) {
    if (this.data.playControll =='playControll'){
      this.setData({
        playControll: 'playControll playControll1'
      })
    }else{
      this.setData({
        playControll: 'playControll'
      })
    }
   
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    // const query = wx.createSelectorQuery().select('canvas')
    // console.log(query)
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
