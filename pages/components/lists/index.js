// pages/components/lists/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverURL:'http://47.115.124.190/WebView/Imgs/',
    musicLists:[
      {id:'1', name: 'BeaTsGOy - Piano Beat', music_path: '', music_type: 'mp4', author: '作者1', image:'1'},
      { id: '2', name: 'Diana Boncheva - Purple Passion', music_path: '', music_type: 'mp4', author: '作者1', image: '2' },
      { id: '3',name: 'Janet Leon - Missing You', music_path: '', music_type: 'mp4', author: '作者2', image: '3' },
      { id: '4',name: 'Joy Gruttmann - Schnappi', music_path: '', music_type: 'mp4', author: '作者3', image: '4' },
      { id: '5',name: 'Lovey James - Just So', music_path: '', music_type: 'mp4', author: '作者4', image: '5' },
      { id: '6',name: 'message', music_path: '', music_type: 'mp4', author: '作者5', image: '6' },
      { id: '7', name: 'Nigel Silin - Sakura Tears', music_path: '', music_type: 'mp4', author: '作者6', image: '7' },
      { id: '8',name: 'ProleteR - Faidherbe square', music_path: '', music_type: 'mp4', author: '作者7', image: '8' },
      { id: '9',name: 'Rocky_滕少 - 那就这样吧', music_path: '', music_type: 'mp4', author: '作者8', image: '9' },
      { id: '10',name: '百石元 - 猪突猛進', music_path: '', music_type: 'mp4', author: '作者9', image: '10' },
      { id: '11',name: '赵海洋 - 夜空的寂静', music_path: '', music_type: 'mp4', author: '作者10', image: '11' }
    ]
  },
  goPlay:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../playControll/index?author=' + e.currentTarget.dataset.item.author + '&id=' + e.currentTarget.dataset.item.id + '&name=' + e.currentTarget.dataset.item.name + '&music_path=' + e.currentTarget.dataset.item.music_path
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

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

  }
})