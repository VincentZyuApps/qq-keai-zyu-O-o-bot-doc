---
title: "📱 交互菜单演示"
---

# 📱 交互式菜单中心

> 💡 **交互说明**：本页面完全按 QQ 客户端 **1:1 像素级呈现** 当前运行在机器人中的各板块菜单。
> - 点击气泡内的 **蓝色指令文字**，可立即将对应指令复制到剪贴板，并直接在气泡内无缝跳转对应菜单！
> - 点击顶部的切换按钮，可随时切换预览不同的菜单板块。
> - 支持随页面切换 **深色（Dark）** 与 **浅色（Light）** 双主题！

<QQBotMessage :showTabs="true" initialMenu="帮助菜单" />

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

---

## 📋 功能分类说明

| 分类板块 | 主要功能涵盖 | 核心指令 |
| :--- | :--- | :--- |
| **🎮 Steam & CS2** | Steam个人状态卡、热销榜、近两周游玩、特惠新品、CS2库存与战绩 | `/steam`、`/steam.top`、`/查cs库存` |
| **📰 资讯行情** | 招行实时金价与走势图、CPP/B站漫展查询、60s早报与多平台热榜 | `/gold`、`/gold-image 7 d`、`/漫展`、`/60s.早报` |
| **🛠️ 工具与市场** | 全量免艾特指南、Koishi 插件市场检索、inspect调试、消息导出 | `/market`、`/inspect`、`/status`、`/dump-json-md` |
| **📋 帮助导览** | 全局主入口，汇聚所有模块跳转链接 | `/帮助菜单`、`/免艾特申请` |
| **🎮 Minecraft** | 成就图生成、服务器motd状态查询、玩家皮肤渲染、OpenBMCLAPI监控 | `/motd`、`/mcr`、`/mc成就图`、`/bmcl.大盘` |
| **🕊️ 光遇专区** | 每日国服任务、每日祈福签、光翼查询、Sky Shards 碎片喷发预报 | `/国服碎片`、`/光遇抽签`、`/今日光遇国服任务` |
| **🎨 绘图与整活** | BA Logo、图片对称、Otto活字印刷发音人、Fa♂哲学原声图鉴、语录图制作 | `/ba`、`/otto`、`/fa`、`/aqt`、`/左对称` |
| **🎵 点歌与音频** | 网易云/落月多模式点歌、点词，支持 SVG/Canvas/图片等多种渲染输出 | `/网易点歌svg`、`/落月点歌canvas` |
| **ℹ️ 关于bot** | 机器人背景设定、开发者信息与版本历程 | `/关于bot` |
