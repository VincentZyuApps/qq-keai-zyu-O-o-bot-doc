---
layout: home

hero:
  name: "可爱zyu的bot"
  text: "QQ官方机器人"
  tagline: "一个集游戏辅助、生活行情、实用工具、趣味互动于一身的可爱 Bot"
  image:
    src: /images/bot-avatar-v2.png
    alt: 可爱zyu的bot
  actions:
    - theme: brand
      text: 🐧 一键拉 Bot 进群 / 发起私聊
      link: https://bot.q.qq.com/s/x0ZL0Sqm7C
    - theme: alt
      text: 📱 交互菜单演示
      link: /menus
    - theme: alt
      text: 📖 免艾特设置指南
      link: /guide

features:
  - icon: 🎮
    title: Steam 社区与游戏库
    details: 支持绑定多 Steam 账号，查询个人状态卡片、公开游戏库与近两周游玩时长；一键查看 Steam 特惠新品与热销排行榜。
  - icon: 🔫
    title: CS2 战绩与实时库存
    details: 输入 SteamID 一键检索玩家 CS2 个人战绩；实时渲染个人公开库存总览图，支持绑定快捷查询。
  - icon: ⛏️
    title: Minecraft 垂直生态
    details: 实时查询 MC 服务器（JE/BE）MOTD 运行状态与在线人数；支持玩家皮肤 3D 渲染、自定成就图生成及 OpenBMCLAPI 监控。
  - icon: 🕊️
    title: 光遇 Sky 旅人助手
    details: 同步每日国服任务与大蜡烛位置；集成每日祈福抽签、光翼查询，以及 Sky Shards 碎片喷发事件精准预报。
  - icon: 📰
    title: 60s API 与多源资讯
    details: 对接 60s 开放 API，涵盖每日早报、多平台热搜榜（微博/B站/知乎/抖音）、实时金价与汇率油价、全国漫展日程及算法竞赛日历。
  - icon: 🛒
    title: Koishi 插件生态市场
    details: 索引全网 4800+ 官方与社区插件，支持多镜像源关键词快速检索；无缝联动微信与 QQ 插件市场小程序，移动端一键直达。
  - icon: 🎨
    title: 绘图创作与声效整活
    details: 提供 BA 双色 Logo、3D 渲染骰子与图片对称滤镜；搭载鬼畜全明星 Otto 活字印刷发音人与哲学 Fa♂ 语音触发词库，内置电台与语音图鉴，创意与生草兼具。
  - icon: 🛠️
    title: 官方 Markdown 互动与工具
    details: 全量适配 QQ 官方机器人原生 Markdown，支持可点击蓝字直达与交互式底栏键盘；集成免艾特设置指南、picstatus 图文状态监控与消息 Dump。
---

<div class="hero-badges-wrapper">
  <div class="hero-avatar-box">
    <img src="/images/bot-avatar-v2.png" alt="grok bot风格头像" class="hero-avatar-img" />
    <span class="hero-avatar-label">✨ grok bot风格头像</span>
  </div>
  <div class="hero-avatar-box">
    <img src="/images/bot-avatar-v1.png" alt="早期动漫手绘风头像" class="hero-avatar-img legacy" />
    <span class="hero-avatar-label">🎨 早期动漫手绘风头像</span>
  </div>
</div>

<div style="text-align: center; margin: 3rem 0 1rem 0;">
  <h2>📱 真实客户端效果演示（1:1 像素级交互）</h2>
  <p style="color: var(--vp-c-text-2); line-height: 1.6;">
    下方为网页端 1:1 模拟的手机 QQbot 发送的 Markdown 按钮指令菜单聊天气泡<br>
    点击任意蓝字可体验无缝切换菜单与指令复制：
  </p>
</div>

<QQBotMessage initialMenu="帮助菜单" :showTabs="false" />

<div class="tip custom-block" style="margin-top: 1.5rem; text-align: center;">
  <p class="custom-block-title" style="margin-bottom: 0.25rem;">💖 QQ 机器人菜单模板插件致谢</p>
  <p style="margin: 0; font-size: 0.95rem; line-height: 1.7;">
    本机器人在 QQ 客户端中运行的强大 Markdown 指令菜单与交互按钮，由开源插件 
    <a href="https://github.com/koishi-shangxue-plugins/koishi-shangxue-apps/tree/main/plugins/qq-markdown-button" target="_blank" rel="noopener noreferrer">
      <b>@shangxueink/koishi-plugin-qq-markdown-button</b> ↗
    </a> 驱动模板解析，特别感谢作者打造的好用的 Markdown 菜单插件！<br>
    <span style="font-size: 0.85rem; color: var(--vp-c-text-2);">（注：上方演示为网页端参考 QQ 原生客户端 Markdown 按钮消息规范实现的 1:1 仿真交互）</span>
  </p>
</div>

<div style="text-align: center; margin: 3rem 0 2rem 0;">
  <h2>📲 手机扫码直达</h2>
  <p style="color: var(--vp-c-text-2); margin-bottom: 1rem;">群主或管理员使用手机 QQ 扫描下方二维码，即可直接将 Bot 添加至群聊：</p>
  <img src="/images/qrcode-bot-invite.png" alt="拉群二维码" style="width: 180px; border-radius: 12px; margin: 0 auto; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
  <div style="margin-top: 1rem;">
    <a href="https://bot.q.qq.com/s/wItKEI8kSs" target="_blank" class="vp-button medium brand" style="display: inline-block; padding: 6px 18px; border-radius: 20px; background: #0099ff; color: #fff; text-decoration: none; font-weight: 500;">
      🔗 点击在手机 QQ 中直接打开加群链接
    </a>
  </div>
</div>
