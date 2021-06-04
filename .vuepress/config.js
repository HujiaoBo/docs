const { CHAR_ZERO_WIDTH_NOBREAK_SPACE } = require("picomatch/lib/constants");

module.exports = {
  title: '胡椒',
  description: '胡椒波的小博客',
  base: '/docs/',
  // theme: '@vuepress/blog', // 好难看
  themeConfig: {
    logo: '/assets/img/logo.png',
    sidebar: 'auto',
    lastUpdated: '更新于', // 最后更新时间
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Article',
        items: [
          { text: 'learnVuePress', link: '/article/aboutVuePress/learnVuePress' },
          { text: '求赞', link: '/article/second' }
        ]
      }
    ],
    sidebar: {
      '/article/aboutVuePress/': [
        {
          title: 'AboutVuePress',
          collapsable: false,
          children: [
            {
              title: 'vuePress学习',
              path: '/article/aboutVuePress/learnVuePress'
            }
          ]
        },
        {
          title: '求赞',
          path: '/article/second'
        }
      ]
    },
  },
  plugins: ['@vuepress/nprogress']
}