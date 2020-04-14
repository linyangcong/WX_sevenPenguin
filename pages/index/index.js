//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeCrouse:1,
    crouseKey: ['crouseKeyActive', 'crouseKey', 'crouseKey'],
    crouse:[
      {index:1, uri: '', img:'http://47.115.124.190/WebView/discovery/走马灯/z1.jpg'},
      { index: 2, uri: '', img: 'http://47.115.124.190/WebView/discovery/走马灯/z2.jpg' },
      { index: 3, uri: '', img: 'http://47.115.124.190/WebView/discovery/走马灯/z3.jpg' },
    ],
    list0:[
      { title: '每日推荐', url: 'http://47.115.124.190/WebView/User/u1.jpg' },
      { title: '排行榜', url: 'http://47.115.124.190/WebView/User/u2.jpg' },
      { title: '直播', url: 'http://47.115.124.190/WebView/User/u3.jpg' }
    ],
    list: [
      { title: '新歌', url:'http://47.115.124.190/WebView/discovery/d1.jpg'},
      { title: '抖音最火', url:'http://47.115.124.190/WebView/discovery/d2.jpg'},
      { title: '经典音乐', url: 'http://47.115.124.190/WebView/discovery/d3.jpg'},
      { title: '流行音乐', url: 'http://47.115.124.190/WebView/discovery/d4.jpg'}
    ],
    list1: [
      { title: '想麻雀一样脆弱而顽强的往前飞吧', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v1.jpg' },
      { title: '恐怕每份认都会羡慕这样的默契', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v2.jpg' },
      { title: '数据003', url: 'http://47.115.124.190/WebView/Video/LOOK直播/v3.jpg' }
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
    const crouseImg = wx.createSelectorQuery()
  setInterval(()=>{
    // console.log(this.data.activeCrouse)
    if(this.data.activeCrouse<3&&this.data.activeCrouse>=1){
      // crouseImg.select('#crouse'+this.data.activeCrouse).show
      
      this.setData({
        activeCrouse:++this.data.activeCrouse,
      },()=>{
        this.changeTab()
      })
      // crouseKeyActive.map(item=>{
        // crouseKeyActive[this.data.activeCrouse]=
      // })
      
    }else{
      this.setData({
        activeCrouse:1
      },()=>{
        this.changeTab()
      })
    }
    
  },5000)
  },
  changeTab: function () {
    switch (this.data.activeCrouse) {
      case 1: this.setData({ crouseKey: ['crouseKeyActive', 'crouseKey', 'crouseKey'] }); break;
      case 2: this.setData({ crouseKey: ['crouseKey', 'crouseKeyActive', 'crouseKey'] }); break;
      case 3: this.setData({ crouseKey: ['crouseKey', 'crouseKey', 'crouseKeyActive'] }); break;
    }
  },
  changeTap:function(e){
    console.log(e.target)
    this.setData({
      activeCrouse:e.target.id
      },()=>{
        this.changeTab()
      })
  },
  goPersonView:function(e){
    console.log(e.target.dataset)
    // console.log(e.target.dataset.item.img, e.target.dataset.uri)
    wx.navigateTo({
      url: '../components/crouse/index?img=' + e.target.dataset.item.img + '&uri=' + e.target.dataset.item.uri,
      success:function(){
        console.log('success')
      }
    })
  }
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
