const { join } = require('path');

/** @typedef {import('vitepress').UserConfig} UserConfig */

/** @type {UserConfig['head']} */
const head = [];

// if (process.env.NODE_ENV === 'production') {
//   head.push([
//     'script',
//     {
//       src: 'https://unpkg.com/thesemetrics@latest',
//       async: '',
//     },
//   ]);
// }

/** @type {UserConfig} */
const config = {
  outDir: join(process.cwd(), 'dist/docs'),
  lang: 'zh-CN',
  title: 'TowerLight',
  description: 'TowerLight',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TowerLight',
      description: 'TowerLight',
    },
  },
  head,
  themeConfig: {
    repo: 'towerlightorg/towerlight',
    docsRepo: 'towerlightorg/towerlight',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '编辑此页面',
    lastUpdated: '最后更新', // string | boolean
    prevLink: true,
    nextLink: true,
    locales: {
      '/': {
        nav: [
          {
            text: '指南',
            link: '/guide/',
          },
          {
            text: '开发笔记',
            link: '/notes/',
          },
        ],
        sidebar: {
          '/': [
            {
              text: '介绍',
              link: '/',
            },
          ],
          '/guide/': [
            {
              text: '开始',
              link: '/guide/',
            },
          ],
          '/notes/': [
            {
              text: '开发笔记',
              link: '/notes/',
            },
            {
              text: '基础设施',
              link: '/notes/infrastructure',
            },
          ],
        },
      },
    },
  },
};

module.exports = config;
