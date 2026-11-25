---
title: "🧩 插件生态与开源仓库"
---

# 🧩 插件生态与开源仓库

可爱zyu的bot 基于 [Koishi](https://koishi.chat/) 模块化多插件框架构建。Bot 运行所依赖的大量特色功能插件均为**作者个人自研开源**或深度定制魔改的 **Fork 版本**。

所有相关代码均已在开源社区公开归档维护，欢迎前往浏览、Star 或交流学习：

- 👤 **个人开源主页**：[![VincentZyu233 Repositories](https://img.shields.io/badge/GitHub-VincentZyu233-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyu233?tab=repositories)
- 🏢 **专属应用组织**：[![VincentZyuApps Repositories](https://img.shields.io/badge/GitHub_Org-VincentZyuApps-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/orgs/VincentZyuApps/repositories)

---

## 📋 机器人运行插件全景对照表

下方为线上机器人（生产环境）目前正在加载运行的 **29 个核心插件**，涵盖游戏生态、光遇垂直、绘图声效、资讯早报与系统调试等各大板块：

### 🎮 游戏垂直与电竞生态

| 插件模块名 | 功能简述与特性 | 核心指令 | 开源仓库直达 Badge |
| :--- | :--- | :--- | :--- |
| `awa-mc-ament` | Minecraft 原版成就与进度图生成器，支持自定标题与描述 | `/mc成就图` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-awa-mc-ament) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-awa-mc-ament) |
| `koishi-plugin-cs-lookup-vincentzyu-fork` | Steam 账号绑定，查询 CS2 个人公开库存卡片与比赛战绩 | `/查cs库存`<br>`/绑定steamid` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-cs-lookup-vincentzyu-fork) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-cs-lookup-vincentzyu-fork) |
| `koishi-plugin-mcrenderskin-vincentzyu-fork` | 基于 skinView3D 实时 3D 渲染 Java 玩家皮肤与披风全身照 | `/mcr` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-mcrenderskin-vincentzyu-fork) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-mcrenderskin-vincentzyu-fork) |
| `koishi-plugin-serverinfo-rest-client` | Minecraft BDS / 基岩版服务器 REST API 在线人数与延迟查询 | `/mbs` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-serverinfo-rest-client) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-serverinfo-rest-client) |
| `koishi-plugin-mclistener-ws-client` | 群服互通 WebSocket 客户端，实现 Minecraft 服务器与 QQ 群消息互转 | 群服双向转发 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-mclistener-ws-client) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-mclistener-ws-client) |
| `koishi-plugin-fuzzy-search` | Minecraft 纹理模糊检索与方块资源文件前端浏览 | 贴图材质检索 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-awa-mc-fuzzy-search) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-awa-mc-fuzzy-search) |
| `koishi-plugin-not-just-cf-vincentzyu-fork` | 聚合 CF、力扣、洛谷、牛客与 AtCoder 的多平台算法竞赛助手 | `/竞赛日历`<br>`/cf` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-not-just-cf-vincentzyu-fork) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-not-just-cf-vincentzyu-fork) |

---

### 🕊️ 光遇 Sky 旅人专区

| 插件模块名 | 功能简述与特性 | 核心指令 | 开源仓库直达 Badge |
| :--- | :--- | :--- | :--- |
| `koishi-plugin-sky-renwu-weibo` | 自动同步光遇国服每日四大日常任务与大蜡烛位置，支持主动推送 | `/今日光遇国服任务` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-sky-renwu-weibo) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-sky-renwu-weibo) |
| `koishi-plugin-sky-shards` | Sky Shards 碎片喷发预报，实时推算红石/黑石坠落时间与清理蜡烛 | `/国服碎片`<br>`/国际服碎片` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-sky-shards) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-sky-shards) |
| `koishi-plugin-sky-blessing` | Sky 风格每日祈福签，支持仅图、图文与 QQ Markdown 三种模式 | `/光遇抽签`<br>`/光遇抽签md` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-sky-blessing) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-sky-blessing) |
| `koishi-plugin-wydashen-guangyi-query` | 通过网易大神接口查询光遇国服永久与当前光翼总数 | `/查询光翼pptr`<br>`/查询光翼canvas` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-wydashen-guangyi-query) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-wydashen-guangyi-query) |
| `koishi-plugin-skykid-height-cosmetic-query` | 光遇国服体型身高与装扮数据离线解码查询，支持好友码解析 | `/光遇身高` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-skykid-height-cosmetic-query) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-skykid-height-cosmetic-query) |

---

### 🎨 绘图创作、声效与整活

| 插件模块名 | 功能简述与特性 | 核心指令 | 开源仓库直达 Badge |
| :--- | :--- | :--- | :--- |
| `koishi-plugin-otto-hzys` | 开箱即用、纯 TS 原生实现的 Otto 电棍活字印刷语音合成 | `/otto`<br>`/otto.pack` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-otto-hzys) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-otto-hzys) |
| `koishi-plugin-studyfa-vincentzyu-fork` | 哲学 Fa♂ 原声语音互动与触发词图鉴，支持拼音模糊匹配 | `/fa`<br>`/fa.list` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-studyfa-vincentzyu-fork) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/studyfa-vincentzyu-fork) |
| `koishi-plugin-awa-quote-image` | 引用群友发言一键生成黑白/思源/文楷高质签名人名言语录图 | `/aqt`<br>`/acs` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-awa-quote-image) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-awa-quote-image) |
| `koishi-plugin-dice-games101-3d-renderer` | 零依赖纯软件光栅化 3D 渲染骰子（基于闫令琪老师 GAMES101 作业） | `/dice` 3D 骰子 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-dice-games101-3d-renderer) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-dice-games101-3d-renderer) |
| `koishi-plugin-pics-changer3` | 图像左右/上下对称与轴对称特效处理滤镜 | `/左对称`<br>`/右对称` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyu233/koishi-plugin-pics-changer3) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-pics-changer3) |
| `koishi-plugin-copywrite` | 定型文文案模仿生成器（基于大语言模型语义模仿） | 定型文模仿指令 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-copywrite) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-copywrite) |

---

### 📰 资讯行情与文化生活

| 插件模块名 | 功能简述与特性 | 核心指令 | 开源仓库直达 Badge |
| :--- | :--- | :--- | :--- |
| `koishi-plugin-60s-vincentzyu` | 对接 60s 开放 API，提供每日早报、多平台热榜、实时金价与天气工具 | `/60s.早报`<br>`/热搜` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-60s-vincentzyu) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-60s-vincentzyu) |
| `koishi-plugin-anime-convention-lizard-vincentzyu-fork` | 全国漫展日程查询、漫展详情检索与城市展会订阅推送 | `/漫展` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-anime-convention-lizard-vincentzyu-fork) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-anime-convention-lizard-vincentzyu-fork) |
| `koishi-plugin-billboard-data` | 术力口（Vocaloid）双周榜归档数据源对接与期数战绩查询出图 | `/billboard` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-billboard-data) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-billboard-data) |

---

### 🛠️ 基础平台、免艾特与调试工具

| 插件模块名 | 功能简述与特性 | 核心指令 | 开源仓库直达 Badge |
| :--- | :--- | :--- | :--- |
| `koishi-plugin-adapter-qq-crack` | QQ 官方开放平台适配器增强，支持群管 v2 API、分片上传与官方 Markdown 渲染 | 底层 QQ 官方通信 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/koishi-shangxue-plugins/koishi-plugin-adapter-qq-crack) |
| `koishi-plugin-get-qq-bot-transfer-link` | 生成手机端开放官 Bot 全量与主动设置跳转链接，免艾特配置助手 | `/免艾特申请` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-get-qq-bot-transfer-link) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-get-qq-bot-transfer-link) |
| `koishi-plugin-picstatus` | 跨平台采集 Koishi 运行状态与服务器 CPU/内存/负载等硬件卡片 | `/picstatus` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-picstatus) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-picstatus) |
| `koishi-plugin-quote-debug-msg-json-image` | 将消息事件结构序列化为 JSON / YAML / TOML 图文卡片便于调试 | `/dump-json`<br>`/dump-yaml` | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-quote-debug-msg-json-image) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-quote-debug-msg-json-image) |
| `koishi-plugin-let-me-quote-and-recall` | 智能为指令回复自动增加引用上下文，且在用户撤回指令时自动联动撤回 Bot 消息 | 全局被动增强 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-let-me-quote-and-recall) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-let-me-quote-and-recall) |
| `@shangxueink/koishi-plugin-qq-markdown-button` | QQ 官方机器人 Markdown 按钮指令菜单与模板解析引擎，驱动机器人端多级菜单与按钮响应 | 指令菜单模板引擎 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/koishi-shangxue-plugins/koishi-shangxue-apps/tree/main/plugins/qq-markdown-button) |
| `koishi-plugin-group-manage` | 群管助手，提供基础群成员权限控制与群事件监听 | 群管辅助指令 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyu233/koishi-plugin-group-manage) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-group-manage-vincentzyu-fork) |
| `koishi-plugin-md-tryer` | QQ 原生 Markdown 格式与底栏键盘按钮沙盒测试工具 | `/md` 测试 | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/VincentZyuApps/koishi-plugin-md-tryer-vincentzyu-fork) [![Gitee](https://img.shields.io/badge/Gitee-C71D23?style=flat-square&logo=gitee&logoColor=white)](https://gitee.com/vincent-zyu/koishi-plugin-md-tryer-vincentzyu-fork) |
