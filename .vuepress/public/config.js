module.exports = {
    title: 'hujiaobo',
    base: '/docs/',
    description: '前端技术分享交流会',
    markdown: {
      lineNumbers: true, // 代码块显示行号
    },
    host: 'localhost', // ip
    port: 8098, // 端口
    evergreen: true, // 浏览器兼容性
    // 使用的主题
    themeConfig: {
      logo: '/assets/images/logo.png',
      sidebar: 'auto', // 按照md标题，自动生成侧边栏
    //   lastUpdated: '更新时间', // 更新时间
      nav: [
        {
          text: '主页',
          link: '/',
        },
        {
          text: '文件',
          items: [
            {
              text: '前端分析交流',
              link: '/doc/analysis',
            },
            {
              text: 'Emoji 表情',
              link: '/doc/emoji',
            },
          ],
        }
      ],
    //   sidebar: {
    //     '/doc/': [
    //       {
    //         title: '文件',
    //         collapsable: false,
    //         children: [
    //           {
    //             title: '前端分析交流',
    //             path: '/doc/analysis',
    //           },
    //           {
    //             title: 'Emoji 表情',
    //             path: '/doc/emoji',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    },
  };