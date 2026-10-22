# XiaoWei Design Lab 分阶段实施计划

## Phase 0 — 工程基线（当前已完成）

- npm workspaces Monorepo；Windows 与 macOS 均可使用。
- `@xiaowei/tokens` 提供浅/深色语义变量。
- `@xiaowei/react` 提供第一批基础组件。
- Storybook + MDX 提供文档、交互预览与可访问性检查入口。

验收：依赖可安装；类型检查通过；Storybook 能构建；浅/深主题下组件状态可见。

## Phase 1 — Figma 对齐与组件契约

- 在 Figma 整理 Foundation / Component / Pattern 三层，并规范组件、变体、属性名称。
- 建立 Figma node ↔ React component 对照表；成熟后再接 Code Connect。
- 补齐图标资产来源、名称、授权和导出策略；禁止用近似图标替换。
- 加入 visual regression 与交互测试。

验收：Button、Card、Checkbox、Radio、Status 逐项视觉对齐；键盘与焦点行为通过。

## Phase 2 — 惠小微复合模式

在 `Patterns` 中建立：

- 左侧主导航与窗口控制；
- 对话 composer 与消息动作；
- Task Card（计划、执行、等待确认、完成、失败）；
- Permission Review（目标、范围、影响、可撤销性）；
- Result Panel（摘要、证据、打开、导出、撤销）；
- 空、加载、离线、部分成功、权限受阻状态。

验收：1200×800 基线，以及 100% / 125% / 150% / 200% Windows 缩放；长中文文案；纯键盘操作。

## Phase 3 — 初步 Prototype

新增 `apps/prototype`，继续依赖 `@xiaowei/react` 与 `@xiaowei/tokens`，不要复制组件代码。

建议首个纵向切片：电脑清理。

`浮球入口 → 大面板扫描 → 范围确认 → 执行 → 可核验结果 → 撤销/继续`

这个切片能同时验证浮球/面板协同、风险分级权限、任务状态、进度、中断恢复与结果证据。

## Phase 4 — 研发交付

- 发布带版本号的 tokens 与 React 包，或由研发 Repo 通过 git dependency/registry 消费。
- 使用 Changesets 管理变更和版本说明。
- 对破坏性 API 变更设迁移指南；Design Lab 不直接耦合产品业务数据层。
- 研发 Repo 只接收稳定组件与契约，实验仍留在 Design Lab。
