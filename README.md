# MES 制造执行系统（静态演示版）

纯前端静态页面，无后端、无数据库，可直接部署到 GitHub Pages。

## 页面说明

| 文件 | 说明 |
|---|---|
| `login.html` | 登录页（任意账号密码即可登录） |
| `index.html` | 仪表盘首页 |
| `production.html` | 生产工单管理 |
| `equipment.html` | 设备管理 |
| `material.html` | 物料管理 |
| `quality.html` | 品质检验 |
| `style.css` | 全局样式 |
| `app.js` | 前端交互 |

## GitHub Pages 部署

1. 新建公开仓库（例如 `mes-demo`）
2. 把本目录所有文件上传到仓库根目录（main 分支）
3. 仓库 → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)` → Save
4. 等待 1–2 分钟，访问：
   `https://<你的用户名>.github.io/<仓库名>/login.html`

> 注意：这是演示版本，所有数据为示例数据，刷新后不会保存修改。
