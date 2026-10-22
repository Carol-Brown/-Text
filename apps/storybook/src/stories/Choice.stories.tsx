import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Radio } from '@xiaowei/react';

const meta = { title: '研发示例/选择控件', component: Checkbox } satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const 复选框: Story = { render: () => <div style={{ display: 'grid', gap: 16 }}><Checkbox label="包含系统临时文件" /><Checkbox label="默认选中" defaultChecked /><Checkbox label="不可用" disabled /></div> };
export const 单选框: Story = { render: () => <div style={{ display: 'grid', gap: 16 }}><Radio name="mode" label="本地处理" defaultChecked /><Radio name="mode" label="云端处理" /><Radio name="mode" label="不可用" disabled /></div> };
