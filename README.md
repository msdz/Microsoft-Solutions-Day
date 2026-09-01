# Microsoft Solutions Day 资料中心

用于集中展示 Microsoft Solutions Day 活动资料的响应式静态站点，支持按技术主题筛选和关键词搜索。

## 本地预览

无需安装依赖，直接打开 `index.html`，或在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 维护资料

资料卡片位于 `index.html` 的 `#resource-grid` 中。添加资料时：

1. 复制一个 `.resource-card` 元素；
2. 设置 `data-category`（`ai`、`cloud`、`data` 或 `security`）；
3. 在 `data-search` 中填写用于搜索的关键词；
4. 更新标题、简介、资料类型和链接。