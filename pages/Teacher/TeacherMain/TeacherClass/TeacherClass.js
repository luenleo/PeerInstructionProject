Page({
  data: {
    items: [
      { name: '课程1' },
      { name: '课程2' }
    ],
    courseCount: 2 ,  // 初始值设置为2，因为目前有两个课程
  },

  deleteItem: function(e) {
    let index = e.currentTarget.dataset.index;
    let that = this;  // 保存当前的上下文

    wx.showModal({
      title: '确认删除',
      content: '你确定要删除这个课程吗？',
      success (res) {
        if (res.confirm) {
          let items = that.data.items;
          items.splice(index, 1);
          that.setData({
            items: items,
            courseCount: items.length  // 更新课程数量
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  },

  addItem: function() {
    let items = this.data.items;
    items.push({ name: '新的课程xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.setData({
      items: items,
      courseCount: items.length  // 更新课程数量
    });
    wx.navigateTo({
      url: '/pages/Teacher/TeacherMain/TeacherNewClass/TeacherNewClass'
    });
  },

  goToChapterList: function(e) {
    let index = e.currentTarget.dataset.index;
    let itemName = this.data.items[index].name;
    wx.navigateTo({
      url: '/pages/Teacher/TeacherChapter/TeacherChapterList/TeacherChapterList'
    });
  }
});
