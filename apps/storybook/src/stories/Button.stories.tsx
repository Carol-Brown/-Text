import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@xiaowei/react';

const meta = { title: '研发示例/按钮', component: Button, tags: ['autodocs'], args: { children: '开始体验' } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const 主要按钮: Story = {};
export const 次要按钮: Story = { args: { variant: 'secondary' } };
export const 加载中: Story = { args: { loading: true, children: '处理中' } };
export const 禁用: Story = { args: { disabled: true } };
export const 尺寸: Story = { render: () => <div className="xw-story-grid"><Button size="small">小按钮</Button><Button size="medium">中按钮</Button><Button size="large">大按钮</Button></div> };
