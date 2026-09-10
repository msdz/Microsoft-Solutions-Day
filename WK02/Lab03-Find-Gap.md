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
- 在 Word、Excel、PowerPoint 和邮件场景中完成项目工作
- 记录了需要重复执行、仍需人工检查的步骤

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

她发现，Copilot 虽然能帮助她快速完成单次任务，但每周仍需要重复打开多个应用、整理资料、分析风险、制作汇报材料和起草行动邮件。

项目状态已经明确：

- 存在供应链风险
- 存在质量风险
- 存在上市延期风险

但是 Amanda 发现：

每周仍然需要执行大量重复工作。

---

## 从 Chat 到 Agent

### Exercise 1 - 发现 Chat 和 Copilot 的局限

通过上一实验的练习可以发现：Copilot 可以快速生成结果，但仍然需要 Amanda 主动打开文件、选择应用、提供上下文并检查输出。

请记录一次完整的工作过程：

```text
我需要打开的文件或应用：

我需要重复执行的提示词：

我仍然需要人工检查的内容：

最容易遗漏的事项：
```

如果 Amanda 每周都要重复完成以下工作：

- 汇总项目状态
- 检查风险和里程碑
- 阅读供应商邮件
- 生成 PowerPoint 评审材料
- 起草行动邮件

请思考：

1. 哪些工作具有固定输入和固定输出？
2. 哪些工作可以由 Agent 预处理？
3. 哪些工作仍然必须由人确认或决策？

### Exercise 2 - 从 Chat 到 Agent 的交接总结

将上一实验中零散的 Copilot 使用经验，整理成一个业务机会：

```text
重复工作：

业务触发：

需要使用的资料：

Agent 可以预处理的内容：

必须由人工确认的内容：

希望得到的输出：
```

建议优先选择：

```text
Launch Readiness Agent
```

现在进入 Gap 分析：找出这些重复工作的具体问题，再判断哪些问题适合由 Agent 承担。

---

## Exercise 3 - 找出工作中的 Gap

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

## Exercise 4 - 判断哪些 Gap 适合 Agent

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

## Exercise 5 - 建立 Agent Roadmap

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

## Exercise 6 - 为 Agent Builder 做准备

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

## 下一步

我们将进入：

➡ [实验 04 - 使用 Agent Builder 固化业务原型](./Lab04-Agent-Builder.html)
