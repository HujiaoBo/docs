const { CHAR_ZERO_WIDTH_NOBREAK_SPACE } = require("picomatch/lib/constants");

module.exports = {
  title: '胡椒',
  description: 'Just playing around',
  base: '/docs/',
  themeConfig: {
    logo: '/assets/img/logo.png',
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Article',
        items: [
          { text: 'FirstTest', link: '/article/first' },
          { text: 'SecondTest', link: '/article/second' }
        ]
      }
    ],
    sidebar: {
      '/article/': [
        {
          title: '文章',
          collapsable: false,
          children: [
            {
              title: '第一个练习',
              path: '/article/first'
            },
            {
                title: '第二个练习',
                path: '/article/second'
            }
          ]
        }
      ]
    },
  }
}