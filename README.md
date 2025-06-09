# GoMail 🚀

**前身为 Smail，现已全面升级为 GoMail！**

一个基于 Cloudflare Workers 的现代化临时邮箱服务，采用 React Router v7 构建，具备完整的统一配置管理系统和企业级功能。

## 🌟 项目演进

**GoMail** 是在 Smail 基础上的重大升级版本：

### 📈 从 Smail 到 GoMail 的升级亮点：
- 🔧 **统一配置管理**：引入 `config.cjs` 一键配置系统
- 📊 **广告系统集成**：完整的 Google AdSense 动态配置
- 📈 **数据统计**：百度统计无缝集成
- 🛠️ **自动化工具**：配置验证和自动生成脚本
- 🎨 **UI/UX 优化**：全新的响应式设计和用户体验
- 📱 **移动端优化**：完美的移动设备适配
- 🔐 **安全增强**：ads.txt 自动配置和安全策略

## ✨ 核心功能特性

### 🚀 **邮箱服务**
- 💨 **即时生成**：无需注册，一键生成专属临时邮箱
- 📧 **实时接收**：自动接收并实时显示邮件内容
- 📎 **附件支持**：完整的邮件附件查看和下载功能
- ⏰ **智能过期**：24小时自动过期，保护用户隐私
- 🔄 **自动刷新**：10秒智能刷新，不错过任何邮件

### 🎯 **配置管理**
- 🔧 **统一配置**：只需修改 `config.cjs` 一个文件
- ⚙️ **自动生成**：配置文件自动生成和同步
- ✅ **配置验证**：内置验证工具确保配置正确性
- 📋 **类型安全**：完整的 TypeScript 类型支持

### 💰 **商业化功能**
- 📊 **Google AdSense**：完整的广告系统集成
- 📈 **百度统计**：用户行为数据分析
- 🎨 **响应式广告**：自适应不同设备的广告展示
- 💡 **条件显示**：可配置的广告开关控制

### 🛡️ **安全与性能**
- 🔒 **隐私保护**：军用级加密和零日志策略
- ⚡ **极速访问**：基于 Cloudflare 全球网络
- 📱 **PWA 支持**：渐进式 Web 应用体验
- 🌐 **SEO 优化**：完整的搜索引擎优化

## 🛠️ 技术栈

### 前端技术
- **框架**：React Router v7
- **样式**：Tailwind CSS + 自定义组件库
- **构建**：Vite 6.x
- **类型**：TypeScript

### 后端服务
- **运行时**：Cloudflare Workers
- **数据库**：Cloudflare D1 (SQLite)
- **存储**：Cloudflare R2 (附件存储)
- **缓存**：Cloudflare KV
- **邮件**：Cloudflare Email Workers

### 开发工具
- **ORM**：Drizzle ORM
- **包管理**：pnpm
- **代码质量**：Biome
- **部署**：Wrangler CLI

## 🚀 快速开始

### 📋 环境要求

- Node.js 18+
- pnpm 8+
- Cloudflare 账户

### 🔧 一键配置部署

1. **克隆项目**
```bash
git clone https://github.com/xn030523/Go-Email.git
cd Go-Email
```

2. **安装依赖**
```bash
pnpm install
```

3. **配置项目**
```bash
# 编辑主配置文件
vim config.cjs

# 验证配置
pnpm run validate-config

# 生成所有配置文件
pnpm run generate-configs
```

4. **本地开发**
```bash
pnpm dev
```

5. **部署到 Cloudflare**
```bash
# 登录 Cloudflare
wrangler auth login

# 创建资源（按照 DEPLOYMENT.md 指南）
# 然后部署
pnpm run deploy
```

## 📁 项目结构

```
GoMail/
├── 📁 app/                     # 应用核心代码
│   ├── 📁 components/          # React 组件
│   │   ├── 📁 ui/             # UI 基础组件
│   │   ├── AdSense.tsx        # 广告组件
│   │   ├── Navigation.tsx     # 导航组件
│   │   └── Footer.tsx         # 页脚组件
│   ├── 📁 routes/             # 路由页面
│   ├── 📁 config/             # 配置管理
│   │   ├── app.ts            # 应用配置（自动生成）
│   │   └── analytics.ts      # 统计配置
│   ├── 📁 lib/                # 工具库
│   └── 📁 db/                 # 数据库相关
├── 📁 workers/                # Cloudflare Workers
├── 📁 scripts/                # 自动化脚本
│   ├── generate-configs.cjs   # 配置生成器
│   └── validate-config.cjs    # 配置验证器
├── 📁 docs/                   # 文档
│   ├── adsense-setup.md       # AdSense 配置指南
│   └── adsense-usage-examples.md
├── 📁 public/                 # 静态资源
│   └── ads.txt               # AdSense 验证文件
├── config.cjs                 # 🎯 主配置文件
├── wrangler.jsonc            # Cloudflare 配置（自动生成）
├── .dev.vars                 # 开发环境变量（自动生成）
└── DEPLOYMENT.md             # 部署指南（自动生成）
```

## 🎯 统一配置管理系统

GoMail 的最大特色是**统一配置管理**，只需修改一个文件即可完成整个项目的配置：

### 📝 主配置文件 `config.cjs`

```javascript
module.exports = {
  // 🏷️ 项目基本信息
  project: {
    name: "gomail-app",
    displayName: "GoMail",
    description: "免费、安全、无广告的临时邮箱服务",
  },

  // 🌐 域名配置
  domain: {
    primary: "184772.xyz", // 您的域名
  },

  // ☁️ Cloudflare 资源配置
  cloudflare: {
    database: { name: "gomail-database" },
    kv: { name: "gomail-kv" },
    r2: { name: "gomail-attachments" },
  },

  // 📊 Google AdSense 配置
  secrets: {
    googleAdsense: {
      clientId: "ca-pub-您的客户端ID",
      enabled: true,
    },
    baiduAnalytics: {
      id: "您的百度统计ID",
      enabled: true,
    },
  },
};
```

### 🔄 自动化工具

```bash
# 验证配置
pnpm run validate-config

# 生成所有配置文件
pnpm run generate-configs

# 自动生成的文件：
# ├── wrangler.jsonc      # Cloudflare Workers 配置
# ├── .dev.vars          # 开发环境变量
# ├── app/config/app.ts  # 应用配置
# └── DEPLOYMENT.md      # 部署指南
## 🌟 特色功能

### 📊 **Google AdSense 集成**
- 🎯 **动态配置**：无需修改代码，配置文件控制
- 📱 **响应式广告**：自适应不同设备尺寸
- 💡 **条件显示**：可随时启用/禁用广告
- 🔧 **多广告位**：支持顶部横幅、侧边栏、内容广告

### 📈 **数据统计分析**
- 📊 **百度统计**：完整的用户行为分析
- 🎛️ **配置化管理**：统计功能可配置开关
- 📱 **移动端优化**：完美支持移动设备统计

### 🔐 **安全与隐私**
- 🛡️ **ads.txt 自动配置**：Google AdSense 验证文件
- 🔒 **Session 加密**：安全的用户会话管理
- 🚫 **零日志策略**：不记录用户隐私数据
- ⏰ **自动过期**：24小时后自动清理数据

## 📚 文档与指南

- 📖 **[部署指南](DEPLOYMENT.md)** - 完整的部署流程
- 📊 **[AdSense 配置](docs/adsense-setup.md)** - 广告配置详解
- 💡 **[使用示例](docs/adsense-usage-examples.md)** - 代码使用示例

## 🎯 部署状态

- ✅ **在线演示**: https://184772.xyz
- ✅ **GitHub 仓库**: https://github.com/xn030523/Go-Email
- ✅ **技术支持**: 完整的文档和示例

## 🤝 贡献指南

1. **Fork 项目**
2. **创建功能分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **发起 Pull Request**

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- **Cloudflare** - 提供强大的边缘计算平台
- **React Router** - 现代化的路由解决方案
- **Tailwind CSS** - 优秀的 CSS 框架
- **Drizzle ORM** - 类型安全的 ORM

## 📞 支持与反馈

- 🐛 **Bug 报告**: [GitHub Issues](https://github.com/xn030523/Go-Email/issues)
- 💡 **功能建议**: [GitHub Discussions](https://github.com/xn030523/Go-Email/discussions)
- 📧 **邮件联系**: 通过项目临时邮箱服务联系

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给我们一个 Star！⭐**

**从 Smail 到 GoMail，我们一直在进步！🚀**

</div>


