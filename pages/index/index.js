// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //简便页面的书写，通过数组循环的方式进行数据的渲染
    img: [
      {
        //食堂管理
        jump: '/pages/canteen/canteen',
        url: '/img/home/n_1001_0006_-3.png',
      },
      {
        //合同管理
        jump: '/pages/contract/contract',
        url: '/img/home/n_1001_0005_-4.png',
      },
      {
        //奖金管理
        jump: '/pages/bonus/bonus',
        url: '/img/home/n_1001_0004_-5.png',
      },
      {
        //收支管理
        jump: '/pages/budget/budget',
        url: '/img/home/n_1001_0003_-6.png',
      },
      {
        //报表管理
        jump: '/pages/report/report',
        url: '/img/home/n_1001_0002_-7.png',
      },
      {
        //审核管理
        jump: '/pages/examine/examine',
        url: '/img/home/n_1001_0001_-8.png',
      },
      {
        //台账管理
        jump: '/pages/accounts/accounts?limit=10&offset=0',
        url: '/img/home/n_1001_0008_-9.png',
      },
      {
        //老师管理
        jump: '/pages/teacher/search',
        url: '/img/home/n_1001_0000_-10.png',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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