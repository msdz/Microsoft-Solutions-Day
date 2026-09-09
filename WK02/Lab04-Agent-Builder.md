---
lab:
    title: 实验 04 - 使用 Agent Builder 固化业务原型
    description: 使用 Agent Builder 创建 Launch Readiness Agent，并验证 Agent 如何帮助项目经理减少重复工作。
    duration: 40 分钟
    level: 300
    islab: true
---

# 实验 04 - 使用 Agent Builder 固化业务原型

## 实验目标

在上一实验中，您已经：

- 发现业务 Gap
- 设计 Agent
- 定义 Agent Persona
- 定义 Agent Goal

现在需要把设计变成真正的 Agent。

完成本实验后，您将能够：

- 创建业务 Agent
- 为 Agent 配置知识源
- 定义 Agent 指令
- 测试 Agent 输出
- 理解 Agent 的工作方式

---

## 场景背景

Amanda 每周需要：

- 阅读项目资料
- 汇总项目状态
- 分析风险
- 准备管理层周报

这些工作已经被定义为：

```text
Launch Readiness Agent
```

接下来使用 Agent Builder 进行实现。

---

## Exercise 1 - 创建 Agent

### Step 1 - 打开 Microsoft 365 Copilot 并进入 Agent Builder

1. 打开Microsoft 365 Copilot <https://m365.cloud.microsoft.com/>

2. 点击：智能体。
3. 选择：新建智能体。

![](./media/QQBrowser_156_XZdlCIhD7N.png/)

4. 在页面中 LLM 创建右侧，选择跳过，打开“新智能体” 页面。

---

### Step 2 - 填写 Agent 信息

填写 Agent 信息。

智能体名称：

```text
Launch Readiness Agent
```

智能体描述：

```text
帮助项目经理分析项目状态、发现风险、生成管理层摘要，并识别需要人工确认的事项。
```

智能体指令：

```text
你是 Launch Readiness Agent。

你的角色：
Launch Program Management Assistant（上市项目管理助手）。

你的职责：

- 分析项目状态
- 汇总关键里程碑
- 识别项目阻塞事项
- 发现高风险问题
- 生成管理层摘要
- 输出未来行动建议

工作规则：

1. 仅基于知识库中的内容回答问题；
2. 不得编造不存在的数据、日期、责任人或结论；
3. 如多个文件存在冲突，必须标记为“需人工确认”；
4. 所有结论必须说明来源依据；
5. 不允许批准上市；
6. 不允许修改风险等级；
7. 不允许替代管理层做决策。

当用户询问项目状态时：

请按以下格式输出：

【当前状态】: 说明项目整体状态。
【关键里程碑】: 列出已完成和未完成的重要里程碑。
【高风险事项】: 列出 Critical Risk 和 High Risk。
【阻塞事项】: 列出当前 Blocked 项目。
【管理层待决策事项】: 列出需要管理层确认或批准的事项。
【建议行动】: 给出未来两周建议行动。
【需人工确认】: 列出资料冲突、缺失信息或无法确认的内容。

输出内容应保持：

- 专业
- 简洁
- 可执行
- 适合管理层阅读

你的目标不是批准产品上市，而是帮助项目经理快速理解项目状态并发现风险。
```

![](./media/QQBrowser_158_cGDolBJxzC.png)

---

## Exercise 2 - 配置知识源

### Step 1 - 上传知识文件

上传知识文件。

- 01_Product_Overview.docx
- 02_Launch_Milestones.xlsx
- 03_Risk_Register.xlsx
- 05_Cross_Functional_Updates.docx

![](./media/QQBrowser_159_4v4WuLEqjW.png)

---

### Step 2 - 验证知识源

验证知识源已建立, 切换到预览窗格， 

询问：

```text
请总结当前项目状态。
```

观察结果。

![](./media/QQBrowser_160_voqiDLHk4M.png)

完成后，知识源验证成功。

---

## Exercise 3 - 测试 Agent

### Step 1 - 向 Agent 提问

向 Agent 提问。

```text
请生成本周 Launch Readiness Review 摘要。
```

---

### Step 2 - 验证 Agent 输出

验证：

- 是否能正确识别 Blocked 项目
- 是否能识别 Critical Risk
- 是否发现管理层决策

完成后，记得右上角点击创建即可。

![](./media/QQBrowser_161_example.png)

---

## Exercise 4 - 从原型到扩展

### 场景

现在已经有：

✅ Launch Readiness Agent

但是项目中还有：

- Risk Monitoring Agent
- Supplier Monitoring Agent

如果每个 Agent 都能完成自己的工作：

是否能够形成：

```text
多个 Agent 协同？
```

---

### 思考

如果需要：

- 状态分析
- 风险分析
- 供应商分析
- 演示文稿生成
- 行动邮件生成

是否应该由一个 Agent 完成？

还是由多个 Agent 协同完成？

---

## 实验总结

本实验中，您已经：

✅ 创建业务 Agent

✅ 配置知识源

✅ 验证知识源

✅ 编写 Agent 指令

✅ 测试 Agent 输出

✅ 完成业务原型验证

---

下一实验中：

您将体验：

➡ [Lab05 - 使用 Cowork 构建 Launch Readiness Command Center](./Lab05-Cowork.html)

届时多个 Agent 将协同完成完整业务流程，实现从：

Chat

→ Agent

→ Multi-Agent

→ Cowork

的最终演进。