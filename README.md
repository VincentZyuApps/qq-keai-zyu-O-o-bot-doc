# 🤖 可爱zyu的bot 官方站点与菜单仓库

> QQ 官方机器人 · 全量 Markdown 蓝字互动 · 游戏 / 资讯 / 工具多维互联

[![QQ Bot 直达](https://img.shields.io/badge/QQ%E6%9C%BA%E5%99%A8%E4%BA%BA-%E7%82%B9%E5%87%BB%E4%B8%80%E9%94%AE%E6%8B%89%E7%BE%A4%2F%E7%A7%81%E8%81%8A-12B7F5?style=flat-square&logo=tencentqq&logoColor=white)](https://bot.q.qq.com/s/x0ZL0Sqm7C)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitepress.dev)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Online-success?style=flat-square&logo=githubpages&logoColor=white)](https://vincentzyuapps.github.io/qq-keai-zyu-O-o-bot-doc/)

🌐 **在线文档与交互演示**：[https://vincentzyuapps.github.io/qq-keai-zyu-O-o-bot-doc/](https://vincentzyuapps.github.io/qq-keai-zyu-O-o-bot-doc/)  
🐧 **官方机器人快速添加（一键拉群 / 发起私聊）**：[https://bot.q.qq.com/s/x0ZL0Sqm7C](https://bot.q.qq.com/s/x0ZL0Sqm7C)

---

## 📸 站点与交互预览

### 🏠 首页全局视图与功能矩阵
![首页全局视图](preview/preview.homepage.png)

### 📱 1:1 仿真 Markdown 菜单交互
![仿真菜单交互](preview/preview.menu.png)

---

## 📌 项目亮点

- **1:1 像素级 QQ 客户端渲染**：在 Web 网页中完美复刻手机与桌面 QQ 的消息气泡体验，支持深色（Dark）与浅色（Light）双主题随心切换。
- **真实指令点击无缝跳转与复制**：仿真官方蓝字 `<qqbot-cmd-input>` 标签，点击不仅将对应指令复制到剪贴板，还支持直接在聊天气泡内丝滑切换子菜单！
- **纯正 Git 历史演进**：`menu/` 目录完整保留了自 2026 年 6 月至今的 8 轮真实菜单升级 Commit 记录。
- **全自动双向安全同步**：内置 `scripts/sync-menus.cjs` 脚本，支持从服务器快速拉取菜单，或一键 push 推送最新菜单至生产环境热生效。

---

## 🧩 插件生态与开源仓库

可爱zyu的bot 所搭载的自研拓展、生态定制插件以及各类魔改 Fork 模块，均已在开源社区公开归档维护：

- 👤 个人开源主页：[@VincentZyu233 Repositories](https://github.com/VincentZyu233?tab=repositories)
- 🏢 专属应用组织：[@VincentZyuApps Repositories](https://github.com/orgs/VincentZyuApps/repositories)

> 💡 **想要查看所有插件的详细功能说明与对应代码仓库？**  
> 请点击访问在线文档的 [👉 🧩 插件生态与源码全景表](https://vincentzyu233.github.io/qq-keai-zyu-O-o-bot-doc/plugins) 查看完整清单与双端（GitHub / Gitee）仓库直达链接。

---

## 🛠️ 本地开发与构建

```bash
# 1. 安装依赖
yarn install

# 2. 启动本地开发热重载调试
yarn docs:dev

# 3. 构建静态站点
yarn docs:build

# 4. 本地预览构建产物
yarn docs:preview
```

---

## 🔄 从服务器同步最新菜单

```bash
# 复制并配置私密连接凭证
cp scripts/.env.example scripts/.env

# 执行脱敏同步（自动过滤冗余备份文件）
yarn sync:menu
```

---

## 📄 开源许可

本项目遵循 MIT 协议开源。
