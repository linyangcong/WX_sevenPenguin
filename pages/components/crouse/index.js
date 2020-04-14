// pages/components/crouse/index.js
const app = getApp()

Page({
  /**
   * 组件的属性列表
   */
  onLoad:function(e){
    console.log(e)
    this.setData({
      img:e.img,
      uri:e.uri
    })
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    img:'',
    uri:''
  },
})
