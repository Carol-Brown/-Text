import type { Preview } from '@storybook/react';
import '@xiaowei/tokens/css';
import '../src/storybook.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: '小微主题',
      defaultValue: 'light',
      toolbar: { icon: 'mirror', items: [{ value: 'light', title: '浅色' }, { value: 'dark', title: '深色' }] },
    },
  },
  decorators: [
    (Story, context) => (
      <div data-xw-theme={context.globals.theme} className="xw-story-canvas">
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: { expanded: true, sort: 'requiredFirst' },
    options: { storySort: { order: ['开始', '基础', '组件', '规范详解', '研发示例', '维护'] } },
    a11y: { test: 'todo' },
    backgrounds: { disable: true },
  },
};

export default preview;
