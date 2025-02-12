Page({
  data: {
    post: {
      title: '微信小程序开发入门指南',
      content: '微信小程序是一种新的开放能力，开发者可以快速开发一个微信小程序。微信小程序为微信用户提供了更多便利，开发者可以为微信用户提供更多的服务。这篇指南将介绍如何开始微信小程序开发，包括环境准备、基础知识、项目实战等内容。',
      time: '2023-10-25 08:30'
    },
    comments: [
      {
        author: '程序员小张',
        content: '非常有用的指南，谢谢分享！',
        time: '2023-10-25 09:00'
      },
      {
        author: '开发者小李',
        content: '请问有相关的进阶教程吗？',
        time: '2023-10-25 09:30'
      },
      {
        author: '学生小王',
        content: '感谢，解决了我很多问题！',
        time: '2023-10-25 10:00'
      },
      {
        author: '前端小赵',
        content: '写得很清楚，点赞！',
        time: '2023-10-25 10:30'
      },
      {
        author: '小程序小吴',
        content: '很期待下一篇教程！',
        time: '2023-10-25 11:00'
      },
      {
        author: '产品小马',
        content: '从产品的角度也收获很多，谢谢！',
        time: '2023-10-25 11:30'
      }
    ]
  },

  // 页面加载时执行的函数
  onLoad: function(options) {
    // 可以在这里获取帖子和评论的数据，例如通过wx.request函数从服务器获取数据
    // 例如：
    // wx.request({
    //   url: 'https://example.com/getPostDetail',
    //   data: {
    //     postId: options.postId
    //   },
    //   success: (res) => {
    //     this.setData({
    //       post: res.data.post,
    //       comments: res.data.comments
    //     });
    //   }
    // });
  },
  
});
