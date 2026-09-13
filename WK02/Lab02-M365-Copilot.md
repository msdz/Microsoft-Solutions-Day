---
lab:
  title: "实验 02：使用智能 Microsoft 365 Copilot 副驾驶® 理解业务并加速工作"
  description: "使用智能 Microsoft 365 Copilot 副驾驶® 对话助手和 Microsoft 365 应用，整合新品上市资料、分析关键依赖并准备管理层评审内容。"
  duration: "45 分钟"
  level: 200
  islab: true
---

# 实验 02：使用智能 Microsoft 365 Copilot 副驾驶® 理解业务并加速工作

## 实验目标

在上一实验中，您选择了 Launch Readiness 作为优先探索场景。本实验将使用智能 Microsoft 365 Copilot 副驾驶® 对话助手，以下简称“对话助手”，帮助您理解业务上下文并形成高质量工作成果。

完成本实验后，您将能够：

- 使用对话助手快速理解复杂业务背景
- 基于多份文件提取事实并分析关联
- 在 Word、Excel、PowerPoint 和邮件场景中使用 Copilot
- 形成项目状态摘要、关键业务关联和管理层评审草稿
- 记录适合在后续实验中进一步复用的工作步骤

## 场景背景

您将扮演 Amanda Chen，Launch Readiness Program Manager，负责 Contoso Edge Gateway X500 的新品上市管理、风险管理、跨部门协调和管理层汇报。

今天上午，项目发起人 James 向您发送了一条消息：

```Text
Amanda，

下周将召开 Launch Readiness Review。

请评估项目当前状态，并准备管理层评审材料。

James
```

项目发起人希望 Amanda 为下一次 Launch Readiness Review 准备：

1. 项目状态摘要
2. 关键风险与阻塞事项
3. 管理层待决策事项
4. 未来两周行动建议

项目资料包括：

| 文件 | 内容 |
| --- | --- |
| `01_Product_Overview.docx` | 产品概览 |
| `02_Launch_Milestones.xlsx` | 里程碑计划 |
| `03_Risk_Register.xlsx` | 风险登记表 |
| `04_Market_Enablement.pptx` | 市场赋能资料 |
| `05_Cross_Functional_Updates.docx` | 跨部门更新 |
| `06_Supplier_Alert_Email.docx` | 供应商更新 |
| `07_Beta_Customer_Feedback.docx` | 客户反馈 |
| `08_Quality_Incident_Report.docx` | 质量事件 |

## Exercise 1：准备项目资料

在开始实验之前，你需要通过 Web 访问 Microsoft 365。可使用以下主要入口之一：

- 主门户: <https://m365.cloud.microsoft/>
- 全部应用: <https://m365.cloud.microsoft/apps/>

你也可以通过以下链接直接访问单个应用：

- OneDrive: <https://onedrive.cloud.microsoft/>
- Word: <https://word.cloud.microsoft/>
- Excel: <https://excel.cloud.microsoft/>
- PowerPoint: <https://powerpoint.cloud.microsoft/>
- Outlook: <https://outlook.office.com/>

### Step 1：登录并打开 OneDrive

1. 使用实验账户登录 Microsoft 365。
2. 打开 OneDrive。
   ![登录并打开 OneDrive](./media/QQBrowser_147_oZsDlltCrA.png)

3. 新建文件夹 `项目资料`。
4. 上传上述 8 份项目文件。
5. 确认所有文件均可正常打开。
6. 确认所有文件已成功附加到对话助手中。

![在 OneDrive 中创建项目资料文件夹](./media/QQBrowser_149_ya3b1Sb908.png)
   ![所有文件均可正常打开](./media/QQBrowser_150_xNEF0VkIGj.png)

### Step 2：打开对话助手

1. 打开智能 Microsoft 365 Copilot 副驾驶®对话助手。
2. 选择“添加内容”或加号按钮。
3. 选择“附加云文件”。
4. 添加 8 份项目文件，或在界面支持时添加整个项目资料文件夹。

![在对话助手中添加云文件](./media/QQBrowser_152_cxrbyb7WzO.png)

![在对话助手中添加云文件](./media/QQBrowser_151_8PTeVCzBac.png)

## Exercise 2：建立项目全局视图

### Step 1：生成项目状态摘要

输入：

```text
我刚刚接手 Contoso Edge Gateway X500 上市项目。
请仅基于已附加的项目资料，生成一份项目状态摘要，包括：
1. 产品与上市目标
2. 当前项目状态
3. 已完成的关键事项
4. 关键里程碑
5. 高风险和阻塞事项
6. 管理层待决策事项
7. 未来两周建议行动
请为关键结论注明依据。资料之间如有不一致，请并列展示并标记“需人工确认”。
```

![生成项目状态摘要](./media/QQBrowser_153_NI6iKZJ3wz.png)

### Step 2：核验输出

![项目状态输出](./media/154_project_status_output.png)

检查：

- 项目目标是否来自产品概览
- 里程碑状态是否与工作簿一致
- 风险等级是否被准确保留
- 结论是否说明资料依据
- 不一致信息是否被标记为需人工确认

记录：

- 当前总体状态：
- 最重要的三项风险：
- 管理层待决策事项：

## Exercise 3：关联信息，形成业务洞察

### Step 1：分析供应链影响

输入：

```text
请基于供应商更新、里程碑计划和风险登记表，分析供应链变化可能影响的工作流和关键节点。
请区分：资料中的事实、基于事实的分析、建议行动和需人工确认的信息。
```

### Step 2：分析质量与客户反馈

输入：

```text
请交叉核对 07_Beta_Customer_Feedback.docx、08_Quality_Incident_Report.docx 和 03_Risk_Register.xlsx。
说明共同主题、可能关联、业务影响和需要进一步确认的证据。
不要把相关性直接表述为已确认的因果关系。
```

### Step 3：形成管理层视图

输入：

```text
请将以上分析整理为一页管理层评审内容。
使用“进展、关键依赖、风险与影响、待决策事项、未来两周行动、需人工确认”六个部分。
内容应简洁、可执行，并保留关键资料依据。
```

## Exercise 4：在 Microsoft 365 应用中完成工作

### Step 1：在 Word 中整理摘要

打开 `05_Cross_Functional_Updates.docx`，使用 Copilot 将内容整理为管理层摘要。要求保留原始事实，并标记需要确认的信息。

### Step 2：在 Excel 中分析里程碑和风险

打开 `02_Launch_Milestones.xlsx` 和 `03_Risk_Register.xlsx`，使用 Copilot 辅助识别延期、即将到期或受到 Critical / High Risk 影响的里程碑。核对字段、筛选条件、日期和状态。

### Step 3：在 PowerPoint 中准备评审结构

打开 `04_Market_Enablement.pptx`，使用 Copilot 提出三页评审结构：

1. 项目状态与进展
2. 关键风险与业务影响
3. 管理层待决策事项与后续行动

每页不超过三个要点，不补充资料中没有的结论。

### Step 4：准备供应商回复草稿

打开 `06_Supplier_Alert_Email.docx`，生成一封专业、合作式的回复草稿，确认延期原因、恢复计划和新的交付日期。发送前由 Amanda 检查收件人、日期、承诺和责任归属。

## Exercise 5：记录可复用的工作步骤

填写：

| 观察项 | 记录 |
|---|---|
| 经常使用的资料 |  |
| 可重复使用的提示或分析结构 |  |
| 希望保持一致的输出格式 |  |
| 需要人工核验的内容 |  |
| 适合进一步复用的工作步骤 |  |

## 验收标准

- [ ] 8 份资料已上传并可使用
- [ ] 已形成项目状态摘要
- [ ] 已完成供应链、质量和客户反馈的关联分析
- [ ] 已在至少两个 Microsoft 365 应用中完成任务
- [ ] 已核验来源、状态和责任边界
- [ ] 已完成可复用工作步骤记录

## 实验总结

本实验中，您使用对话助手和 Microsoft 365 应用形成了项目全局视图、关键业务关联和管理层评审草稿，也记录了适合进一步标准化和复用的工作步骤。

## 下一步

进入 [实验 03：识别智能体增量价值与构建路径](./Lab03-Find-Value.html)。
