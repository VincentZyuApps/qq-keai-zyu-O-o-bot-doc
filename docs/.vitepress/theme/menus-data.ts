export const MENUS_DATA = {
  "帮助菜单": {
    "name": "帮助菜单",
    "markdown": "# 帮助菜单\n\n> 💡 点击蓝字打开其他菜单捏～\n> ℹ️ <qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/> 都是可以直接点击触发的喵！\n> 🎉 <qqbot-cmd-input text=\"/免艾特申请\" show=\"无需@也可玩机的方法\"/>\n\n📋 **功能分类菜单：**\n> 🎮 <qqbot-cmd-input text=\"/Minecraft菜单\" show=\"Minecraft菜单\"/> ｜ MC成就图、服务器motd与皮肤渲染\n> 🕊️ <qqbot-cmd-input text=\"/光遇菜单\" show=\"光遇菜单\"/> ｜ 每日任务、光遇抽签、碎片预报与光翼查询\n> 🎮 <qqbot-cmd-input text=\"/cs2菜单\" show=\"Steam与CS2菜单\"/> ｜ Steam状态卡、热销榜、CS库存与战绩\n> 🎵 <qqbot-cmd-input text=\"/点歌菜单\" show=\"点歌菜单\"/> ｜ 网易云/落月多模式点歌与点词\n> 🎨 <qqbot-cmd-input text=\"/绘图菜单\" show=\"绘图菜单\"/> ｜ BA Logo、对称、Otto活字印刷、Fa♂语音与语录\n> 📰 <qqbot-cmd-input text=\"/资讯菜单\" show=\"资讯菜单\"/> ｜ 漫展查询、60s早报、天气与多平台热榜等\n> 🛠️ <qqbot-cmd-input text=\"/工具菜单\" show=\"工具菜单\"/> ｜ 免艾特指南、插件市场、图文状态监控与调试\n> ℹ️ <qqbot-cmd-input text=\"/关于bot\" show=\"关于bot\"/> ｜ 机器人介绍与开发者信息\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> 😊 点击上方蓝字即可进入对应菜单喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "关于bot": {
    "name": "关于bot",
    "markdown": "> ℹ️<qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/>都是可以点的喵～\n\n# 🤖 关于Bot\n> ✨ 可爱zyu的bot，一个可爱的bot~\n> 🛠️ 基于 <qqbot-cmd-input text=\"https://koishi.chat/zh-CN/\" show=\"koishi.js\"/> 构建的bot~\n\n\n# 👤 关于作者\n\n> 💻 **作者:** VincentZyu\n> 📮 **QQ:** 1830540513\n> 🌐 **博客:** <qqbot-cmd-input text=\"https://vincentzyu-vitepress.pages.dev/\" show=\"点击获取url\"/>\n\n# 🗪 交流反馈\n> <p><del>💬 bot使用问题、🐛 Bug反馈、👨‍💻 插件开发交流，欢迎加入QQ群：<b>259248174</b>   🎉（这个群G了）</del></p> \n> <p>💬 bot使用问题、🐛 Bug反馈、 👨‍💻 插件开发交流，欢迎加入新QQ群：<b>1085190201</b> 🎉</p>\n> <p>💡 群里直接@我，回复的更快哦~ ✨</p>\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/avatar/koishi-plugin-onebot-info-image%E7%9A%84%E7%94%9F%E5%9B%BE.aui%E6%8C%87%E4%BB%A4.VincentZyu%E7%9A%84QQ~.png)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 玩玩别的",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "Minecraft菜单": {
    "name": "Minecraft菜单",
    "markdown": "# 🎮 Minecraft 菜单\n\n> ℹ️<qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/>都是可以点的喵～\n> 🔙<qqbot-cmd-input text=\"/帮助菜单\" show=\"返回完整帮助菜单\"/> ｜ ℹ️<qqbot-cmd-input text=\"/关于bot\" show=\"关于Bot\"/>\n\n🎮 **Minecraft 常用功能**\n> <qqbot-cmd-input text=\"/mc成就图\" show=\"🏆 MC成就图\"/>\n> <qqbot-cmd-input text=\"/motd\" show=\"🔍 MC服务器motd\"/> ｜ <qqbot-cmd-input text=\"/mcr\" show=\"🎨 渲染mc皮肤\"/>\n> <qqbot-cmd-input text=\"/mbs\" show=\"🟢 BE服务器信息\"/> ｜ <qqbot-cmd-input text=\"/mjs\" show=\"🟠 JE服务器信息\"/>\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> ⛏️ 快来一起玩 Minecraft 喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "光遇菜单": {
    "name": "光遇菜单",
    "markdown": "# 🕊️ 光遇菜单\n\n> ℹ️ <qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/> 都是可以点的喵～\n> 🔙 <qqbot-cmd-input text=\"/帮助菜单\" show=\"返回完整帮助菜单\"/> ｜ ℹ️ <qqbot-cmd-input text=\"/关于bot\" show=\"关于Bot\"/>\n\n🕊️ **光遇常用功能**\n> *光遇抽签默认使用先图后文*\n> *光遇抽签还有 图+md模式、仅图片模式可选~*\n> <qqbot-cmd-input text=\"/光遇抽签\" show=\"🔮 今日光遇抽签\"/> \n> <qqbot-cmd-input text=\"/光遇抽签md\" show=\"✨ 抽签图+markdown\"/> ｜ <qqbot-cmd-input text=\"/光遇抽签图\" show=\"🖼️ 抽签但是只发图\"/>\n> <qqbot-cmd-input text=\"/查询光翼pptr\" show=\"🌟 查询光翼pptr\"/> ｜ <qqbot-cmd-input text=\"/查询光翼canvas\" show=\"🔍 查询光翼canvas\"/>\n> <qqbot-cmd-input text=\"/获取光遇国服玩家id方法\" show=\"🆔 获取光遇国服玩家id方法\"/>\n> <qqbot-cmd-input text=\"/今日光遇国服任务\" show=\"📅 今日光遇国服任务\"/>\n\n🌌 **Sky Shards 碎片喷发预报**\n> 🔴 <qqbot-cmd-input text=\"/国服碎片\" show=\"今日国服碎片\"/> ｜ 🌐 <qqbot-cmd-input text=\"/国际服碎片\" show=\"今日国际服碎片\"/> ｜ ⏳ <qqbot-cmd-input text=\"/国服碎片 +1\" show=\"明日碎片预报 (+1)\"/>\n> 💡 实时推算红石/黑石坠落时间、地图位置与净化蜡烛奖励，支持查询任意日期。\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> 🕯️ 温暖相遇，今天也要元气满满喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "cs2菜单": {
    "name": "cs2菜单",
    "markdown": "# 🎮 Steam & CS2 菜单\n\n> ℹ️<qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/>都是可以点的喵～\n> 🔙<qqbot-cmd-input text=\"/帮助菜单\" show=\"返回完整帮助菜单\"/> ｜ ℹ️<qqbot-cmd-input text=\"/关于bot\" show=\"关于Bot\"/>\n\n🎮 **Steam 综合查询**\n> <qqbot-cmd-input text=\"/steam\" show=\"Steam指令帮助\"/>\n> <qqbot-cmd-input text=\"/steam.status\" show=\"👤 Steam个人状态卡\"/> ｜ <qqbot-cmd-input text=\"/steam.recent\" show=\"🕹️ 近两周游玩\"/>\n> <qqbot-cmd-input text=\"/steam.top\" show=\"🔥 Steam热销榜\"/> ｜ <qqbot-cmd-input text=\"/steam.featured\" show=\"🎁 特惠与新品\"/>\n> 💡 支持多账号绑定、年度回顾与个人公开游戏库卡片展示。\n\n♿ **CS2 战绩与库存**\n> <qqbot-cmd-input text=\"/绑定steamid\" show=\"🔑 绑定steamid\"/> ｜ <qqbot-cmd-input text=\"/查询我绑定的steamid\" show=\"🔍 查询绑定\"/>\n> <qqbot-cmd-input text=\"/查cs库存\" show=\"📦 查cs库存\"/> ｜ <qqbot-cmd-input text=\"/获取steamid\" show=\"🆔 获取steamid\"/>\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> 🔫 Rush B 还是开箱？冲冲冲喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "点歌菜单": {
    "name": "点歌菜单",
    "markdown": "# 🎵 点歌菜单\n\n> ℹ️<qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/>都是可以点的喵～\n> 🔙<qqbot-cmd-input text=\"/帮助菜单\" show=\"返回完整帮助菜单\"/> ｜ ℹ️<qqbot-cmd-input text=\"/关于bot\" show=\"关于Bot\"/>\n\n🎵 **多模式点歌**\n> *歌单默认使用canvas出图*\n> *歌单渲染还有markdown，svg出图，puppeteer出图可选~*\n> <qqbot-cmd-input text=\"/网易点歌\" show=\"🎶 网易点歌\"/> ｜ <qqbot-cmd-input text=\"/落月点歌\" show=\"🌙 落月点歌\"/>\n> <qqbot-cmd-input text=\"/网易点歌词\" show=\"🎶 网易点歌词\"/> ｜ <qqbot-cmd-input text=\"/落月点歌词\" show=\"🌙 落月点歌词\"/>\n> <qqbot-cmd-input text=\"/网易点歌md\" show=\"🎶 网易点歌md\"/> ｜ <qqbot-cmd-input text=\"/落月点歌md\" show=\"🌙 落月点歌md\"/>\n> <qqbot-cmd-input text=\"/网易点歌svg\" show=\"🎶 网易点歌svg\"/> ｜ <qqbot-cmd-input text=\"/落月点歌svg\" show=\"🌙 落月点歌svg\"/>\n> <qqbot-cmd-input text=\"/网易点歌pptr\" show=\"🎶 网易点歌pptr\"/> ｜ <qqbot-cmd-input text=\"/落月点歌pptr\" show=\"🌙 落月点歌pptr\"/>\n> <qqbot-cmd-input text=\"/网易点歌canvas\" show=\"🎶 网易点歌canvas\"/> ｜ <qqbot-cmd-input text=\"/落月点歌canvas\" show=\"🌙 落月点歌canvas\"/>\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> 🎧 一起来听好听的音乐喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "绘图菜单": {
    "name": "绘图菜单",
    "markdown": "# 🎨 绘图与整活菜单\n\n> ℹ️ <qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/> 都是可以点的喵～\n> 🔙 <qqbot-cmd-input text=\"/帮助菜单\" show=\"返回完整帮助菜单\"/> ｜ ℹ️ <qqbot-cmd-input text=\"/关于bot\" show=\"关于Bot\"/>\n\n🎨 **BA Logo 生成器**\n> 🔵 <qqbot-cmd-input text=\"/ba Hallo PigGod\" show=\"示例 (Hallo PigGod)\"/> ｜ ⚪ <qqbot-cmd-input text=\"/ba 原神？ 启动\" show=\"中文示例 (原神？ 启动)\"/> ｜ ✨ <qqbot-cmd-input text=\"/ba -t Cute Bot\" show=\"透明背景Logo\"/>\n> 💡 生成蔚蓝档案双色标题 Logo，两个参数分别代表左段与右段文字，`-t` 启用透明底。\n\n🪞 **图片对称与特效**\n> 📖 <qqbot-cmd-input text=\"/对称\" show=\"对称指令帮助\"/> ｜ ⬅️ <qqbot-cmd-input text=\"/左对称\" show=\"左对称 (保留左半边)\"/> ｜ ➡️ <qqbot-cmd-input text=\"/右对称\" show=\"右对称 (保留右半边)\"/>\n> 💡 发送指令同时带图，或回复某条图片消息点击指令；亦可先点指令并在 30 秒内发送待处理图片。\n\n📻 **Otto 活字印刷发音人**\n> 🎙️ <qqbot-cmd-input text=\"/otto 大家好啊我是电棍\" show=\"/otto 大家好啊我是电棍\"/> ｜ 📦 <qqbot-cmd-input text=\"/otto.pack\" show=\"原件音频包\"/>\n> 💡 搭载电棍鬼畜全明星活字印刷发音人，文字转活字印刷语音，群友生草互动神器。\n\n♂️ **Fa♂ 哲学原声语音图鉴**\n> 🎵 <qqbot-cmd-input text=\"/fa乖乖站好\" show=\"/fa 乖乖站好\"/> ｜ 📑 <qqbot-cmd-input text=\"/fa.list -t\" show=\"分类查看语音列表\"/> ｜ 🎲 <qqbot-cmd-input text=\"/fa\" show=\"随机哲学发音\"/>\n> 💡 哲学全明星经典原声图鉴，支持拼音模糊匹配与关键词触发，轻点即听。\n\n💬 **名人名言语录制作**\n> 🎭 <qqbot-cmd-input text=\"/aqt\" show=\"/aqt 语录制作\"/> ｜ 🎨 <qqbot-cmd-input text=\"/acs\" show=\"/acs 样式列表\"/>\n> 💡 引用/回复群友消息发送 `/aqt` 即可将聊天发言制作成高大上的黑白名人名言语录图。\n\n✨ **PJSK 表情包生成**\n> 🎲 <qqbot-cmd-input text=\"/pjsk.绘制 今天吃什么\" show=\"随机角色绘制\"/> ｜ 🎯 <qqbot-cmd-input text=\"/pjsk.绘制 -n 1 辛苦了\" show=\"指定表情 (-n 1)\"/> ｜ 📑 <qqbot-cmd-input text=\"/pjsk.列表.角色分类\" show=\"角色贴纸列表\"/>\n> 💡 Project SEKAI 表情包制作，输入文本可绘制随机/指定角色表情，支持换行与自适应排版。\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> 🖌️ 发挥创意，画出可爱表情包与趣味整活喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "工具菜单": {
    "name": "工具菜单",
    "markdown": "# 🛠️ 工具菜单\n\n> ℹ️ <qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/> 都是可以点的喵～\n> 🔙 <qqbot-cmd-input text=\"/帮助菜单\" show=\"返回完整帮助菜单\"/> ｜ ℹ️ <qqbot-cmd-input text=\"/关于bot\" show=\"关于Bot\"/>\n\n🔓 **全量主动配置指南**\n> 🔓 <qqbot-cmd-input text=\"/免艾特申请\" show=\"免艾特申请\"/> ｜ 📖 <qqbot-cmd-input text=\"/qqbot-guide\" show=\"免艾特手动配置指南\"/>\n> *无需@也可与机器人畅快玩机的方法*\n> 💡 群主可通过申请指令获取配置跳转链接，或查看手Q图文设置指南。\n\n⚙️ **Koishi 自带与系统监控**\n> 🧐 <qqbot-cmd-input text=\"/inspect\" show=\"inspect 事件结构\"/> ｜ 📊 <qqbot-cmd-input text=\"/status\" show=\"status 文本状态\"/> ｜ 🖼️ <qqbot-cmd-input text=\"/picstatus\" show=\"picstatus 图文监控\"/>\n> 💡 inspect 用于查看用户、群聊或消息的事件详情；status / picstatus 分别以文本和精美图文卡片呈现服务器与机器人运行状态。\n\n🛒 **Koishi 插件市场**\n> 📦 <qqbot-cmd-input text=\"/market\" show=\"🛒 插件市场首页\"/> ｜ 🔍 <qqbot-cmd-input text=\"/market qq\" show=\"🔍 搜索QQ相关插件\"/>\n> 💡 全网 4800+ 插件索引检索，支持多镜像源切换与微信/QQ小程序直达。\n\n🧩 **消息调试与 Dump 工具**\n> 📝 <qqbot-cmd-input text=\"/dump-json-md\" show=\"dump-json-md\"/> ｜ <qqbot-cmd-input text=\"/dump-yaml-md\" show=\"dump-yaml-md\"/> ｜ <qqbot-cmd-input text=\"/dump-toml-md\" show=\"dump-toml-md\"/>\n> 🖼️ <qqbot-cmd-input text=\"/dump-json\" show=\"dump-json\"/> ｜ <qqbot-cmd-input text=\"/dump-yaml\" show=\"dump-yaml\"/> ｜ <qqbot-cmd-input text=\"/dump-toml\" show=\"dump-toml\"/>\n> 💡 回复任意一条消息并点击对应指令，可序列化导出该消息结构数据。\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> ⚙️ 实用小工具，助你高效玩机喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  "资讯菜单": {
    "name": "资讯菜单",
    "markdown": "# 📰 资讯菜单\n\n> ℹ️ <qqbot-cmd-input text=\"你看，真的可以点\" show=\"蓝字\"/> 都是可以点的喵～\n> 🔙 <qqbot-cmd-input text=\"/帮助菜单\" show=\"返回完整帮助菜单\"/> ｜ ℹ️ <qqbot-cmd-input text=\"/关于bot\" show=\"关于Bot\"/>\n\n🎪 **漫展活动查询**\n> 🎫 <qqbot-cmd-input text=\"/漫展\" show=\"漫展查询 (CPP)\"/> ｜ 🎫 <qqbot-cmd-input text=\"/漫展b\" show=\"漫展b查询 (B站)\"/>\n> *支持无差别同人站(CPP)与B站会员购双平台漫展活动查询*\n> 🔍 指令示范：<qqbot-cmd-input text=\"/漫展.图片查询 上海\" show=\"点我一键查询上海CPP漫展\"/> ｜ <qqbot-cmd-input text=\"/漫展b.图片查询 上海\" show=\"点我一键查询上海B站漫展\"/>\n\n📰 **60s 每日早报与资讯**\n> 📅 <qqbot-cmd-input text=\"/60s.早报\" show=\"60s 早报\"/> ｜ 📜 <qqbot-cmd-input text=\"/60s.历史\" show=\"历史上的今天\"/> ｜ 🐟 <qqbot-cmd-input text=\"/60s.摸鱼\" show=\"摸鱼人日历\"/>\n> 💡 一览今日国内外重点新闻、历史今日大事件与摸鱼小贴士。\n\n🌤️ **生活与实用行情**\n> 🌤️ <qqbot-cmd-input text=\"/60s.天气 上海\" show=\"实时天气\"/> ｜ 💱 <qqbot-cmd-input text=\"/60s.汇率 USD\" show=\"外汇汇率\"/> ｜ ⛽ <qqbot-cmd-input text=\"/60s.油价 上海\" show=\"今日油价\"/>\n> 🪙 <qqbot-cmd-input text=\"/gold\" show=\"💰 招行实时金价\"/> ｜ 📈 <qqbot-cmd-input text=\"/gold-image 7 d\" show=\"📈 7日走势图\"/> ｜ 📊 <qqbot-cmd-input text=\"/gold-image 30 d\" show=\"📊 30日走势图\"/>\n> 💡 招行实时金价支持买卖报价与价差；走势图支持指定时间跨度（如 1d、7d、30d）。\n\n🔥 **多源热榜聚合**\n> 👁️‍🗨️ <qqbot-cmd-input text=\"/60s.热榜.weibo\" show=\"微博热搜\"/> ｜ 📺 <qqbot-cmd-input text=\"/60s.热榜.bili\" show=\"B站热搜\"/> ｜ 💡 <qqbot-cmd-input text=\"/60s.热榜.zhihu\" show=\"知乎热榜\"/>\n> 🎵 <qqbot-cmd-input text=\"/60s.热榜.douyin\" show=\"抖音热搜\"/> ｜ 💻 <qqbot-cmd-input text=\"/60s.热榜.it-rank\" show=\"IT之家热榜\"/> ｜ 🔍 <qqbot-cmd-input text=\"/60s.热榜.baidu\" show=\"百度热搜\"/>\n\n🏁 **多平台竞赛查询**\n> 🌐 <qqbot-cmd-input text=\"/contest.all\" show=\"全部比赛\"/> ｜ 🔎 <qqbot-cmd-input text=\"/contest.list cf\" show=\"Codeforces\"/> ｜ 🧩 <qqbot-cmd-input text=\"/contest.list nc\" show=\"牛客\"/> ｜ 🧠 <qqbot-cmd-input text=\"/contest.list lc\" show=\"LeetCode\"/> ｜ 🌲 <qqbot-cmd-input text=\"/contest.list lg\" show=\"洛谷\"/> ｜ 🎯 <qqbot-cmd-input text=\"/contest.list atc\" show=\"AtCoder\"/>\n> 💡 支持 Codeforces、牛客、LeetCode、洛谷、AtCoder 未来赛事查询。\n\n🎵 **术力口周榜**\n> 📺 <qqbot-cmd-input text=\"/周榜b\" show=\"bili周榜\"/> ｜ 🎵 <qqbot-cmd-input text=\"/周榜n\" show=\"nico周榜\"/>\n> 📜 <qqbot-cmd-input text=\"/周榜.历史\" show=\"历史期数\"/> ｜ 🔍 <qqbot-cmd-input text=\"/周榜.查歌 关键词\" show=\"查歌\"/> ｜ 🧭 <qqbot-cmd-input text=\"/周榜.帮助\" show=\"使用帮助\"/> ｜ ♻️ <qqbot-cmd-input text=\"/周榜.刷新\" show=\"刷新数据\"/>\n> 💡 支持按期数查看、按关键词搜歌；简写别名为 bbb、nbb、bb、bb.history、bb.search、bb.reload。\n\n🎉 **趣味小工具**\n> 💬 <qqbot-cmd-input text=\"/60s.一言\" show=\"每日一言\"/> ｜ 📖 <qqbot-cmd-input text=\"/60s.答案\" show=\"答案之书\"/> ｜ 📚 <qqbot-cmd-input text=\"/60s.百科\" show=\"今日百科\"/> ｜ 🌐 <qqbot-cmd-input text=\"/60s.翻译 hello\" show=\"智能翻译\"/>\n\n![text #500px #500px](https://gh-proxy.org/https://raw.githubusercontent.com/VincentZyu233/VincentZyu233/main/docs/public/mahiro/mahiro-pfp-19.jpg)\n> 📰 今日天下事尽在掌握中喵(*╹▽╹*)\n",
    "keyboard": {
      "msg_type": 2,
      "msg_id": "${session.messageId}",
      "event_id": "${INTERACTION_CREATE}",
      "markdown": {
        "content": "${markdown}"
      },
      "keyboard": {
        "content": {
          "rows": [
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎲 根菜单",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/帮助菜单",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "ℹ️ 关于bot",
                    "style": 1
                  },
                  "action": {
                    "type": 2,
                    "permission": {
                      "type": 2
                    },
                    "data": "/关于bot",
                    "enter": true
                  }
                }
              ]
            },
            {
              "buttons": [
                {
                  "render_data": {
                    "label": "🎯进群交流",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qm.qq.com/q/LOODJpXbGi",
                    "enter": true
                  }
                },
                {
                  "render_data": {
                    "label": "🎉拉bot进群",
                    "style": 1
                  },
                  "action": {
                    "type": 0,
                    "permission": {
                      "type": 2
                    },
                    "data": "https://qun.qq.com/qunpro/robot/share?robot_appid=102513925",
                    "enter": true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
};
