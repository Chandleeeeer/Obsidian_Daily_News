---
tags:
  - 信源工具
  - 基础设施
created: 2026-08-28
---

# RSS 基础设施

几乎所有政策 / 行业源都能通过 RSS 统一订阅，下面是最常用的基建。

## 核心工具

| 工具 | 链接 | 说明 |
| --- | --- | --- |
| RSSHub | https://github.com/DIYgod/RSSHub | 给任意网站生成 RSS（政府网站、行业媒体没有 RSS 也能订阅），政策订阅的关键 |
| Folo | https://github.com/Swift-Folo/Folo | AI RSS 阅读器，与 RSSHub 配合极佳 |
| RSSHub Radar | https://github.com/DIYgod/RSSHub-Radar | 浏览器插件，一键发现当前网站的 RSS / RSSHub 路由 |

## 自动化框架（自己拼装）

| 工具 | 链接 | 说明 |
| --- | --- | --- |
| Huginn | https://github.com/huginn/huginn | 通用自动化 agent，可做抓取 → 处理 → 推送 |
| n8n | https://github.com/n8n-io/n8n | 可视化工作流：定时抓取 → LLM 摘要 → 写入 Obsidian / 推微信 |

## 推荐组合

1. RSSHub 生成政策 / 行业源的 RSS
2. Folo 或 Miniflux 阅读；需要日报则用 matcha / condenseit
3. 需要深度分析再用 Huginn / n8n 拼 LLM 流水线
