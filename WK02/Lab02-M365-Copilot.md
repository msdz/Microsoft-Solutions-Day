---
lab:
    title: 实验 02 - 使用 Microsoft 365 Copilot 理解业务
    description: 使用 Microsoft 365 Copilot 分析智能制造新品上市项目资料，学习如何从 Chat 走向 Agent，再走向 Cowork。
    duration: 45 分钟
    level: 200
    islab: true
---

# 实验 02 - 利用 Microsoft 365 Copilot 接管你的日常工作

## 实验目标

在上一实验中，您已经识别出了多个 Agent Opportunity。

但是，在创建 Agent 之前，首先需要深入理解业务。

在本实验中，您将扮演 Launch Readiness Program Manager，通过 Microsoft 365 Copilot：

- 理解复杂业务背景
- 分析项目风险
- 发现问题之间的关联
- 理解 Agent 的价值
- 逐步完成从 Chat → Agent → Cowork 的思维转变

完成本实验后，您将能够：

- 使用 Copilot Chat 快速理解业务
- 使用 Copilot 进行跨文件分析
- 识别重复性工作
- 判断哪些工作应交给 Agent
- 理解 Cowork 的应用场景

---

## 场景背景

您是：

Amanda Chen
Launch Readiness Program Manager

负责：

- 新品上市项目管理
- 风险管理
- 跨部门协调
- 管理层汇报

今天上午，项目发起人 James 向您发送了一条消息：

> Amanda，
>
> 下周将召开 Launch Readiness Review。
>
> 请评估项目当前状态，并准备管理层评审材料。
>
> James

然而，此时您刚刚接手项目。

项目团队已经提供了以下资料：

| 文件 | 内容 |
| --------| -------- |
| 01_Product_Overview.docx | 产品介绍 |
| 02_Launch_Milestones.xlsx | 里程碑计划 |
| 03_Risk_Register.xlsx | 风险登记表 |
| 04_Market_Enablement.pptx | 市场赋能资料 |
| 05_Cross_Functional_Updates.docx | 部门周报 |
| 06_Supplier_Alert_Email.docx | 供应商延期通知 |
| 07_Beta_Customer_Feedback.docx | 客户反馈 |
| 08_Quality_Incident_Report.docx | 质量异常报告 |

您的第一项任务：

快速了解项目现状。

---

## Exercise 1 - 使用 Copilot Chat 快速理解项目

### 任务目标

利用 Microsoft 365 Copilot Chat 快速了解项目整体状态。

---

### Step 0 - 准备工作

在开始实验之前，你需要通过 Web 访问 Microsoft 365。可使用以下主要入口之一：

- 主门户: <https://m365.cloud.microsoft/>
- 全部应用: <https://m365.cloud.microsoft/apps/>

你也可以通过以下链接直接访问单个应用：

- OneDrive: <https://onedrive.cloud.microsoft/>
- Word: <https://word.cloud.microsoft/>
- Excel: <https://excel.cloud.microsoft/>
- PowerPoint: <https://powerpoint.cloud.microsoft/>
- Outlook: <https://outlook.office.com/>


确保您已经：

- 登录 Microsoft 365
- 打开 Microsoft 365 Copilot Chat
- 下载好引用项目相关文件

- 然后进入9宫格，打开并进入 “OneDrive”.

    ![](./media/QQBrowser_147_oZsDlltCrA.png)
- 跳过指引内容。

    ![](./media/QQBrowser_148_JPwZzgCWpp.png)

- 新建文件夹： **“项目资料”**。
  
  ![](./media/QQBrowser_149_ya3b1Sb908.png)

- 将项目相关文件已经上传至 OneDrive。
- 确认所有文件已成功上传至 OneDrive。

    ![](./media/QQBrowser_150_xNEF0VkIGj.png)


---

### Step 1 - 打开 Copilot Chat 并引用项目文件

1. 打开 Microsoft 365 Copilot Chat。

2. 引用以下全部文件：

```text
01_Product_Overview.docx
02_Launch_Milestones.xlsx
03_Risk_Register.xlsx
04_Market_Enablement.pptx
05_Cross_Functional_Updates.docx
06_Supplier_Alert_Email.docx
07_Beta_Customer_Feedback.docx
08_Quality_Incident_Report.docx
```
![点击加号，附加云文件](./media/QQBrowser_152_cxrbyb7WzO.png)
![](./media/QQBrowser_151_8PTeVCzBac.png)

对话框中输入：

```text
我刚刚接手 Contoso Edge Gateway X500 上市项目。

请阅读所有资料。

生成一份项目状态摘要。

包括：

1. 产品与上市目标
2. 当前项目状态
3. 已完成关键事项
4. 阻塞事项
5. 高风险事项
6. 管理层待决策事项

如资料之间存在冲突，请标记“需人工确认”。
```

![](./media/QQBrowser_153_NI6iKZJ3wz.png)

---

### Step 2 - 查看 Copilot 输出

查看 Copilot 输出。

![](./media/154_project_status_output.png)

思考：

- 目前项目状态是什么？
- 哪些工作流存在风险？
- 哪些问题可能影响上市？

记录结果：

```text
当前项目状态：

_____________________

最重要风险：

_____________________

待决策事项：

_____________________
```

---

## Exercise 2 - 调查问题根因

### 任务目标

不要满足于“发现问题”。

尝试找到问题之间的关联。

---

### Step 1 - 询问项目整体状态

继续向 Copilot 提问：

```text
为什么项目整体状态被评估为 Attention Required？

请说明：

1. 主要依据
2. 涉及哪些文件
3. 对上市可能产生的影响
```

![](./media/QQBrowser_155_attention_required.png)

---

### Step 2 - 调查供应链问题

继续提问：

```text
供应链问题将影响哪些项目里程碑？

请说明：

1. 涉及哪些工作流
2. 会影响哪些关键节点
3. 哪些风险会被放大
```

---

### Step 3 - 调查质量异常影响

继续提问：

```text
质量异常是否已经影响客户？

请结合：

07_Beta_Customer_Feedback
08_Quality_Incident_Report

说明：

1. 是否发现关联
2. 有哪些共同问题
3. 应向管理层关注什么
```

---

### 思考

在这个过程中：

您做了什么？

```text
阅读文件
分析信息
寻找关联
发现问题
```

那么如果每天都要重复这些工作，该怎么办？

---

## Exercise 3 - 发现 Chat 的局限

### 任务目标

理解：

Copilot Chat 非常强大。

但 Chat 有一个问题：

需要人主动提问。

---

### 场景讨论

请尝试回答：

项目经理 Amanda 每周都要执行哪些工作？

```text
____________________
```

---

以下哪些工作每周都会发生？

- 项目状态汇总
- 风险跟踪
- 供应商监控
- 培训完成率检查
- 管理层周报
- 行动项提醒

---

### 思考

如果这些工作：

- 每天发生
- 每周发生
- 具有固定规则

是否应该每次都重新提问？

---

## Exercise 4 - 从 Chat 到 Agent

### 任务目标

通过前面几个实验，您已经使用 Copilot Chat：

阅读项目资料
分析风险
理解依赖关系
发现管理层关注事项

现在请思考：

如果这些工作需要每天重复执行，是否应该交给 Agent？

---

### Step 1 - 分析工作重复性与规则性

请回顾前面完成的任务。

请完成下表。

| 工作 | 是否重复 | 是否有规则 | 是否适合 Agent |
|--------|--------|--------|--------|
| 风险分析 | | | |
| 项目状态汇总 | | | |
| 培训率检查 | | | |
| 供应商监控 | | | |
| 管理层决策 | | | |
| 产品上市审批 | | | |

为什么：

Risk Analysis 适合 Agent
Go / No-Go Decision 不适合 Agent

---

### Step 2 - 设计业务 Agent



#### Agent 1 - 设计 Launch Readiness Agent

**背景**

Amanda 每周都需要：

- 收集项目资料
- 阅读部门更新
- 分析里程碑
- 识别高风险
- 编写状态报告

这些工作是否可以交给 Agent 预处理？

名称：Launch Readiness Agent

Agent Persona：项目状态分析与风险监控专家

Agent 目标： 

- 每天分析项目状态
- 生成项目摘要
- 发现阻塞事项

Agent 输入：

- 项目资料
- 部门更新
- 里程碑信息

Agent 输出：

- 项目状态摘要
- 风险清单
- 阻塞事项列表
- 需人工确认清单
- 行动计划

---

#### Agent 2 - 设计 Risk Monitoring Agent

**背景**

项目经理每天都需要检查：

- 新增风险
- 风险等级变化
- Critical Risk

是否适合 Agent？

这些工作是否可以交给 Agent 预处理？

名称：Risk Monitoring Agent

Agent Persona：Risk Analyst

Agent 目标： 

- 每天分析项目风险
- 生成风险摘要
- 发现新增 Critical Risk

Agent 输入：

- 风险点
- 质量异常
- 客户反馈

Agent 输出：

- 风险摘要
- 新增 Critical Risk 列表
- 风险趋势分析
- 风险应对建议

---

#### Agent 3 - 设计 Supplier Monitoring Agent

**背景**

供应链团队经常收到供应商更新。

项目经理需要判断：

- 是否延期
- 影响哪些工作流
- 是否影响上市

是否适合 Agent？这些工作是否可以交给 Agent 预处理？

名称：Supplier Monitoring Agent

Agent Persona：Supply Chain Analyst

Agent 目标： 

- 每天分析供应商更新
- 生成供应商摘要
- 发现潜在延期风险

Agent 输入：

- 供应商更新
- 交付进度
- 质量异常

Agent 输出：

- 延期事项
- 受影响里程碑
- 高风险工作流
- 建议行动

---

### Step 3 - 为下一实验做准备

此时您已经完成了 Agent 设计。

请观察：

|阶段| 您完成了什么|
| ----- | -------- |
|Chat | 分析问题|
|Prompt | 深入调查|
|Agent Design | 定义职责|
|Agent Build | 下一实验完成|

---

### 讨论

如果 Amanda 需要：

状态汇总
风险分析
供应商监控

三个任务同时完成，

是否需要：

多个 Agent 协同工作？

---

## 实验总结

在本实验中，您扮演了 Launch Readiness Program Manager（上市项目负责人），体验了 Microsoft 365 Copilot 如何帮助快速理解复杂业务场景。

通过分析新品上市项目资料，您已经学会：

✅ 使用 Copilot Chat 快速理解业务背景

✅ 从多个文件中提取关键事实

✅ 分析项目风险与依赖关系

✅ 发现跨文件之间的关联

✅ 识别影响新品上市的关键风险

✅ 从日常工作中发现 Agent Opportunity

✅ 理解 Chat、Agent 与 Cowork 的区别

---

### 本实验关键收获

在企业中，很多工作都属于：

- 高频执行
- 规则明确
- 涉及大量信息整理
- 需要跨多个数据来源分析

这些工作非常适合交给 Agent。

而以下工作通常仍然需要人工完成：

- 管理层决策
- 风险批准
- 上市审批
- 商业责任确认

因此：

> Agent 的目标不是替代人，而是减少重复工作，让人把时间投入在更高价值的决策中。

---

### Chat、Agent 与 Cowork 的区别

| 能力 | Chat | Agent | Cowork |
|--------|--------|--------|--------|
| 回答问题 | ✅ | ✅ | ✅ |
| 多文件分析 | ✅ | ✅ | ✅ |
| 自动执行任务 | ❌ | ✅ | ✅ |
| 长时间持续运行 | ❌ | ✅ | ✅ |
| 管理多个任务 | ❌ | ⚠️ | ✅ |
| 协调多个 Agent | ❌ | ❌ | ✅ |
| 完整业务流程执行 | ❌ | ⚠️ | ✅ |

---

### 企业采用路径

本次 workshop 采用以下 Agentic AI 实践路径：

```text
业务流程
↓
Copilot Chat
↓
Agent Opportunity
↓
Business Agent
↓
Multiple Agents
↓
Cowork
↓
Business Transformation
```

下一步，我们将进入：

➡ [Lab03 - 发现 Gap 与构建路径](./lab03-find-gap.html)
