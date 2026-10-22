# XiaoWei Design Lab

独立于产品研发 Repo 的惠小微设计系统与 Prototype Monorepo。

## Structure

- `packages/tokens`：语义化 Design Tokens，含浅色/深色主题。
- `packages/react`：React + TypeScript 组件。
- `apps/storybook`：Storybook、MDX 规范和交互样例。
- `docs`：实施路线与设计/工程决策。

## Commands

```bash
pnpm install
pnpm storybook
pnpm typecheck
pnpm build:storybook
```

## 在线预览

推送到 `main` 分支后，GitHub Actions 会自动构建并发布 Storybook：

- https://carol-brown.github.io/-Text/

## Figma baseline

- File: `awdxxB8TRaNsw1rZC32fKb`
- Node: `4358:5074`
- 当前已核对：浅/深色、字体层级、卡片、按钮、选择控件和状态色。
- 图标暂只保留组件插槽；在完成源组件命名与映射前不做近似重绘。

详细步骤见 [`docs/implementation-plan.md`](./docs/implementation-plan.md)。
