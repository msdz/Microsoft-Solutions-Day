---
lab:
    title: 实验 01 - 从业务流程中发现 Agentic 机会
    description: 在本实验中，您将学习如何识别适合 Agent 自动化的业务流程，并分析 Launch Readiness Command Center 场景中的潜在 Agent 应用。
    duration: 20 分钟
    level: 100
    islab: true
---

# 实验 01 - 从业务流程中发现 Agentic 机会

## 实验目标

在开始构建 Agent 之前，企业首先需要回答一个问题：

> 「哪些工作真正适合交给 AI Agent 处理？」

完成本实验后，您将能够：

- 理解 Agent 与传统自动化的区别
- 识别 Agentic Workflow 的典型特征
- 从新品上市（Launch Readiness）流程中发现 Agent 化机会
- 为后续 Agent Builder 实验做好准备

---

## 场景背景

您是 Contoso Edge Gateway X500 新品上市项目负责人。

上市过程中涉及：

- 产品研发
- 质量管理
- 供应链
- 市场营销
- 销售赋能
- 客户服务
- 合规认证

团队成员每周需要：

- 阅读项目状态更新
- 分析风险台账
- 跟踪关键里程碑
- 汇总供应商通知
- 编制管理层报告
- 跟踪问题解决情况

随着项目规模扩大，人工处理成本不断增加。

请思考：

> 这些工作中，哪些适合由 AI Agent 自动完成？

---

## 什么是 Agentic Workflow？

Agent 并不只是回答问题。

Agent 可以：

- 持续监控信息
- 发现异常
- 执行多步骤任务
- 主动发起提醒
- 驱动业务流程

---

### Agent 更擅长

✅ 重复性工作

✅ 大量信息汇总

✅ 多文档分析

✅ 状态跟踪

✅ 提醒与通知

✅ 标准化决策流程

---

### Agent 不适合

❌ 最终业务审批

❌ 法规责任签署

❌ 产品上市批准

❌ 战略决策

❌ 替代管理层判断

---

## Exercise 1 - 分析当前业务流程

请阅读以下资料：

- Product Overview
- Launch Milestones
- Risk Register
- Cross Functional Updates

思考以下问题：

### 问题1

项目经理每周需要重复完成哪些工作？

### 问题2

哪些工作需要反复查看多个文件？

### 问题3

哪些工作具有固定规则？

### 问题4

哪些工作最容易遗漏？

---

## 参考分析

可能出现的答案：

### 项目状态汇总

每周读取：

- 风险
- 里程碑
- 部门更新

然后形成项目状态报告。

---

### 风险跟踪

查看：

- 新风险
- 高风险
- 已关闭风险

并更新状态。

---

### 延期检查

识别：

- 即将延期
- 已延期
- Blocked

事项。

---

### 供应商影响分析

分析：

MCU延期

将影响：

- 安全库存
- 区域备货
- 上市时间

---

## Exercise 2 - 寻找 Agent Opportunity

请将工作放入以下矩阵。

| 工作内容 | 重复频率 | 规则明确 | 适合Agent |
| ----------- | ----------- | ----------- | ----------- |
| 风险汇总 | 高 | 高 | ? |
| 管理层决策 | 低 | 低 | ? |
| 周报生成 | 高 | 高 | ? |
| 上市批准 | 低 | 低 | ? |
| 供应商监控 | 高 | 高 | ? |

---

### 判断原则

如果同时满足：

- 高频出现
- 数据可获取
- 规则清晰
- 结果可验证

通常适合 Agent。

---

## Exercise 3 - 设计潜在 Agent

请根据当前业务流程，为新品上市项目设计至少 3 个 Agent。

---

### 示例 Agent 1

#### Launch Readiness Agent

职责：

- 汇总项目状态
- 生成管理层摘要
- 标记阻塞事项

输入：

- Milestones
- Risks
- Weekly Updates

输出：

Launch Readiness Report

---

### 示例 Agent 2

#### Risk Monitoring Agent

职责：

- 每天检查高风险项
- 发现新的 Critical Risk
- 通知项目经理

输入：

Risk Register

输出：

Risk Alert

---

### 示例 Agent 3

#### Supplier Monitoring Agent

职责：

- 分析供应商邮件
- 识别交付延期
- 评估业务影响

输入：

Supplier Alert Email

输出：

Impact Assessment

---

## Exercise 4 - Agent 优先级排序

请根据以下标准评分：

| 标准 | 权重 |
| ------ | ------ |
| 业务价值 | 40% |
| 实施复杂度 | 20% |
| 风险降低 | 20% |
| 用户接受度 | 20% |

---

## 示例

| Agent | 总分 |
| --------- | --------- |
| Launch Readiness Agent | 95 |
| Risk Monitoring Agent | 92 |
| Supplier Monitoring Agent | 88 |
| Meeting Note Agent | 70 |

---

## 思考题

请结合您的企业场景回答：

1. 哪项工作最耗费时间？
2. 哪项工作最容易遗漏？
3. 哪项工作最适合由 Agent 自动执行？
4. 哪项工作必须由人最终确认？

---

## 实验总结

在本实验中，您学习了：

✅ 识别 Agentic Opportunity

✅ 分析业务流程

✅ 判断 Agent 适用场景

✅ 设计 Agent 职责

✅ 识别 Human-in-the-Loop 环节

下一步，我们将进入：

➡ [Lab02 - 利用 Microsoft 365 Copilot 接管你的日常工作](./Lab02-M365-Copilot.html)

基于本实验发现的业务机会，定义 Agent 的：

- Persona
- Goals
- Knowledge
- Actions
- Guardrails

并使用 Agent Builder 构建第一个 Launch Readiness Agent。
