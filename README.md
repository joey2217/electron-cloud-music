# electron-cloud-music

## 目录结构

```bash
├── build                      # 构建相关
├── resources                  # 图标背景
├── app                        # 源代码
│   ├── main                   # 主进程
│   │   ├── trayAndMenu        # 菜单和托盘
│   │   │   ├── index.js       # 入口
│   │   │   ├── darwin.js      # mac
│   │   │   ├── win32.js       # win
│   │   ├── windows            # 窗口管理
│   │   │   ├── main.js        # main窗口
│   │   ├── ipc.js             # IPC 通信
│   │   ├── updater.js         # 更新服务
│   │   ├── index.js           # 程序入口
│   ├── renderer               # 渲染进程
│   │   ├── pages              # 渲染页面
│   │   │   ├── main           # main页面
│   │   ├── src                # 页面源码
│   │   │   ├── main           # main页面源码
└── package.json               # package.json
```
