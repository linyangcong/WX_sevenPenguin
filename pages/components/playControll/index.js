// pages/components/playControll/index.js
const app =getApp()
var audio=wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    serverURI:'http://47.115.124.190:3301//search?keywords=',
    musicName:'海阔天空',
    percentage:0,
    musicPath:'http://47.115.124.190/WebView/message.mp4',
    playState:false,
    currentTime:'',
    durations:'',
    showPage:false,
    showTime: '00:02.000',
    lyrics:'[00:00.000] 作曲 : 黄家驹\n[00:00.666] 作词 : 黄家驹\n[00:02.000] 编曲 : Beyond / Kunihiko Ryo\n[00:03.000] 制作人 : Beyond / Kunihiko Ryo\n[00:04.000]\n[00:18.466] 今天我 寒夜里看雪飘过\n[00:25.110] 怀着冷却了的心窝漂远方\n[00:30.950] 风雨里追赶 雾里分不清影踪\n[00:37.229] 天空海阔你与我\n[00:40.291] 可会变 (谁没在变)\n[00:43.440] 多少次 迎着冷眼与嘲笑\n[00:50.050] 从没有放弃过心中的理想\n[00:55.907] 一刹那恍惚 若有所失的感觉\n[01:02.133] 不知不觉已变淡\n[01:05.243] 心里爱 (谁明白我)\n[01:08.801] 原谅我这一生不羁放纵爱自由\n[01:15.799] 也会怕有一天会跌倒\n[01:22.008] 背弃了理想 谁人都可以\n[01:28.276] 哪会怕有一天只你共我\n[01:34.102]\n[01:42.695] 今天我 寒夜里看雪飘过\n[01:49.284] 怀着冷却了的心窝漂远方\n[01:55.189] 风雨里追赶 雾里分不清影踪\n[02:01.405] 天空海阔你与我\n[02:04.535] 可会变 (谁没在变)\n[02:08.014] 原谅我这一生不羁放纵爱自由\n[02:15.040] 也会怕有一天会跌倒\n[02:21.279] 背弃了理想 谁人都可以\n[02:27.531] 哪会怕有一天只你共我\n[02:33.633]\n[03:08.454] 仍然自由自我 永远高唱我歌\n[03:15.064] 走遍千里\n[03:19.739] 原谅我这一生不羁放纵爱自由\n[03:26.734] 也会怕有一天会跌倒\n[03:33.005] 背弃了理想 谁人都可以\n[03:39.257] 哪会怕有一天只你共我\n[03:45.496] 背弃了理想 谁人都可以\n[03:51.756] 哪会怕有一天只你共我\n[03:57.201] 原谅我这一生不羁放纵爱自由\n[04:04.204] 也会怕有一天会跌倒\n[04:10.456] 背弃了理想 谁人都可以\n[04:16.647] 哪会怕有一天只你共我\n[04:22.828]\n[04:25.000] OP : Amuse Inc. & Fun House Inc.\n[04:28.000] SP : Amuse H.K. Ltd.\n'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log(options)
  this.getarrLyrics()
  this.requestMusic(this.data.musicName)
  audio.src=this.data.musicPath
      // audio.autoplay=true
  // setTimeout(function(){
  //   this.setData({
  //     showTime:'showTime'
  //   })
  // },5000)
  },
  formerTimes:function(time){
    let minus=parseInt(time/60).toString().length<2?'0'+parseInt(time/60):parseInt(time/60)//假如音频小于十分钟的
    let second=parseInt(time%60).toString().length<2?'0'+parseInt(time%60):parseInt(time%60)
    return minus+':'+second
    // console.log()
  },
  changePlay:function(){
    this.setData({
      playState:!this.data.playState
    },()=>{
      if(this.data.playState){
      audio.play()
      audio.onTimeUpdate(()=>{
        if(this.data.durations==''){
          this.setData({
            durations:this.formerTimes(audio.duration)
          })
        }
        this.setData({
          percentage:(audio.currentTime/audio.duration)*100,
          currentTime:this.formerTimes(audio.currentTime)
        })
      })
      audio.onEnded(()=>{
        this.setData({
          playState:false,
          currentTime:'',
          durations:'',
          percentage:0
        })
      })
    }
    else{
      audio.pause()
    }
    })
  },
  seeLyrics:function(){
    this.setData({
      showPage:!this.data.showPage
    })
  },
  requestMusic:function(musicName){
    wx.request({
      url: this.data.serverURI+musicName,
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  getarrLyrics:function(){
    let lyricsarr=[]
    // let exg =/[\d{2}:\d{2}.\d{3}]/
    let datalists=this.data.lyrics.split('\n')
    // console.log(datalists)
    datalists.map(item=>{
      let i=item.split(']')
      lyricsarr.push({ time: i[0].split('[')[1],ly:i[1]})
    })
    this.setData({
      lyrics: lyricsarr
    })
    // console.log(lyricsarr)
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