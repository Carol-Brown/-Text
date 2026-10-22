import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, StatusBadge } from '@xiaowei/react';

const meta = { title: '研发示例/卡片', component: Card, tags: ['autodocs'] } satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const 默认: Story = { args: { style: { maxWidth: 360 }, title: '电脑状态良好', children: '未发现需要立即处理的问题。上次检查：今天 10:24', footer: <Button size="small">查看详情</Button> } };
export const 可交互: Story = { args: { ...默认.args, interactive: true } };
export const 带状态: Story = { args: { style: { maxWidth: 360 }, title: '系统检查', children: <StatusBadge tone="success">已完成</StatusBadge> } };
