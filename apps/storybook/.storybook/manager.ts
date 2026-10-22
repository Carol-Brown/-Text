import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
  brandTitle: '小微设计系统',
    brandUrl: '.',
    brandTarget: '_self',
    colorPrimary: '#6663FF',
    colorSecondary: '#6663FF',
    appBg: '#F8F9FF',
    appContentBg: '#FFFFFF',
    appBorderColor: '#E5E7EB',
    appBorderRadius: 12,
    fontBase: 'Microsoft YaHei UI, Microsoft YaHei, PingFang SC, system-ui, sans-serif',
  }),
  sidebar: { showRoots: true, collapsedRoots: ['基础', '业务模式', '维护'] },
});
