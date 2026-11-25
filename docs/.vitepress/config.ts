import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/qq-keai-zyu-O-o-bot-doc/',
  title: '可爱zyu的bot',
  description: '一个可爱的 QQ 官方机器人 · 全量 Markdown 互动 · 游戏/资讯/工具多元互联',
  head: [
    ['link', { rel: 'icon', href: '/qq-keai-zyu-O-o-bot-doc/images/bot-avatar-v2.png' }],
    ['meta', { name: 'theme-color', content: '#0099ff' }]
  ],
  themeConfig: {
    logo: '/images/bot-avatar-v2.png',
    siteTitle: '可爱zyu的bot',
    nav: [
      { text: '首页', link: '/' },
      { text: '📱 交互菜单演示', link: '/menus' },
      { text: '🧩 插件源码', link: '/plugins' },
      { text: '📖 免艾特设置指南', link: '/guide' },
      { text: '🐧 一键拉Bot进群 / 私聊', link: 'https://bot.q.qq.com/s/x0ZL0Sqm7C' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VincentZyuApps/qq-keai-zyu-O-o-bot-doc' }
    ],
    footer: {
      message: '基于 VitePress 构建 | QQ 官方机器人交互与功能展示',
      copyright: 'Copyright © 2026 VincentZyu'
    }
  }
})
