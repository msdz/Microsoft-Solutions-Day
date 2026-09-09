---
lab:
    title: 实验 03 - 发现 Gap 与构建路径
    description: 基于 Launch Readiness 项目，识别业务流程中的 Gap，并设计 Agent 落地路径。
    duration: 15 分钟
    level: 200
    islab: true
---

# 实验 03 - 发现 Gap 与构建路径

## 实验目标

在上一实验中，您已经使用 Microsoft 365 Copilot：

- 阅读项目资料
- 分析风险
- 调查问题原因
- 发现 Agent Opportunity

但是，一个重要问题仍未解决：

> 为什么这些工作仍然需要人工完成？

本实验的目标是：

- 发现业务流程中的 Gap
- 分析当前 Copilot 无法解决的问题
- 设计 Agent 可以承担的工作
- 为 Agent Builder 实验做准备

---

## 场景背景

Amanda 已经利用 Copilot 完成了 Launch Readiness Review 准备工作。

项目状态已经明确：

- 存在供应链风险
- 存在质量风险
- 存在上市延期风险

但是 Amanda 发现：

每周仍然需要执行大量重复工作。

---

## Exercise 1 - 找出工作中的 Gap

### Step 1 - 列出每周任务

回顾前面完成的工作。

列出 Amanda 每周需要执行的任务。

| 工作内容 |
|----------|
| 项目状态汇总 |
| 风险分析 |
| 供应商监控 |
| 培训率检查 |
| 管理层周报 |
| 行动项跟踪 |

---

### Step 2 - 分析问题

分析这些工作存在的问题。

| 工作 | 当前做法 | 存在问题 |
|--------|--------|--------|
| 状态汇总 | 人工汇总文件 | 耗时 |
| 风险分析 | 每次重新分析 | 重复 |
| 供应商监控 | 人工查看邮件 | 容易遗漏 |
| 培训检查 | 手工查看进度 | 不及时 |

---

### Step 3 - 填写观察

填写你的观察。

```text
最耗时的工作：

______________________

最容易遗漏的工作：

______________________

最重复的工作：

______________________
```

---

## Exercise 2 - 判断哪些 Gap 适合 Agent

### Step 1 - 判断哪些 Gap 适合 Agent

请完成下表。

| Gap | 是否重复 | 是否有规则 | 是否适合Agent |
|--------|--------|--------|--------|
| 风险分析 | 是 | 是 | ✅ |
| 状态汇总 | 是 | 是 | ✅ |
| 培训检查 | 是 | 是 | ✅ |
| 邮件分类 | 是 | 是 | ✅ |
| 管理层决策 | 否 | 否 | ❌ |
| 上市审批 | 否 | 否 | ❌ |

---

### Step 2 - 讨论适合与不适合 Agent 的 Gap

讨论

为什么 Agent 适合：

- 分析
- 提醒
- 分类
- 监控

而不适合：

- 商业决策
- 风险批准
- 上市审批

---

## Exercise 3 - 建立 Agent Roadmap

### Step 1 - 设计第一批 Agent

请为项目设计第一批 Agent。

#### Launch Readiness Agent

职责：

- 项目状态分析
- 管理层摘要生成

---

#### Risk Monitoring Agent

职责：

- 风险跟踪
- 风险升级提醒

---

#### Supplier Monitoring Agent

职责：

- 供应商邮件分析
- 延期影响评估

---

### Step 2 - 确定 Agent 优先级

确定优先级。

| Agent | 业务价值 | 实施难度 | 优先级 |
|---------|---------|---------|---------|
| Launch Readiness Agent | 高 | 低 | P1 |
| Risk Monitoring Agent | 高 | 低 | P1 |
| Supplier Monitoring Agent | 中 | 低 | P1 |
| Training Tracking Agent | 中 | 中 | P2 |
| Executive Review Agent | 高 | 高 | P3 |

---

## Exercise 4 - 为 Agent Builder 做准备

### Step 1 - 选择一个 Agent

选择一个 Agent。

推荐：

```text
Launch Readiness Agent
```

---

### Step 2 - 完成 Agent Definition

完成 Agent Definition。

#### Agent Name

```text
Launch Readiness Agent
```

#### Persona

```text
Launch Program Management Assistant
```

#### Goal

```text
每天分析项目状态
发现风险
生成项目摘要
```

#### Knowledge

```text
项目文件
风险数据
部门更新
```

#### Output

```text
Launch Readiness Brief
```

---

## 实验总结

本实验中，您已经完成：

✅ 识别业务 Gap

✅ 判断 Agent Opportunity

✅ 建立 Agent 路线图

✅ 完成第一个 Agent 设计

下一实验中，您将使用 Agent Builder：

将设计真正构建成业务 Agent。

---

请继续：

➡ [Lab04 - 使用 Agent Builder 固化业务原型](./Lab04-Agent-Builder.html)
