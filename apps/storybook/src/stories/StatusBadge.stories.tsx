import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from '@xiaowei/react';

const meta = { title: '研发示例/状态标签', component: StatusBadge } satisfies Meta<typeof StatusBadge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const 状态: Story = { args: { tone: 'success' }, render: () => <div className="xw-story-grid"><StatusBadge tone="success">已完成</StatusBadge><StatusBadge tone="warning">需要注意</StatusBadge><StatusBadge tone="error">执行失败</StatusBadge></div> };
