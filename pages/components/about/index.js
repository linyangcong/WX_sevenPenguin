// pages/components/about/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    author:{
      decorations:'该系统创作者由sevenPenguin所有，如有疑问可咨询:',
      produce:"听说喜欢听音乐的朋友不容易老，希望你们喜欢我的小程序；如果有什么问题，建议我希望您能联系我；这是我的邮箱：",
      eMail:'linyc_gd@163.com'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goReport:function(){
      console.log('hello, go report！')
    }
  }
})
