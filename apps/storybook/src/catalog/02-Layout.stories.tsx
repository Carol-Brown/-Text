import type { Meta } from '@storybook/react'; import { story } from './factory';
export default { title:'组件/2 布局', parameters:{layout:'fullscreen'} } satisfies Meta;
export const 分割线=story({name:'Divider 分割线',summary:'在间距不足以表达分组时提供轻量边界。',maturity:'新增',demo:'divider',usage:['用于设置项、列表分组和弹层区块。'],avoid:['不要与强阴影和背景分组同时使用。']});
export const 弹性布局=story({name:'Flex 弹性布局',summary:'管理同一方向组件的对齐、换行与伸缩。',maturity:'新增',demo:'flex',usage:['操作组、状态行和工具栏优先使用。'],states:['水平','垂直','换行','两端对齐']});
export const 栅格=story({name:'Grid 栅格',summary:'组织重复卡片、技能与设备模块。',maturity:'修正',demo:'grid',usage:['卡片间距 16px，窄窗口自动降列。'],states:['4 列','3 列','2 列','1 列']});
export const 应用布局=story({name:'Layout 应用布局',summary:'定义窗口栏、主导航、内容区和详情区。',maturity:'现有',demo:'layout',usage:['1200×800 为大面板参考，不是硬性最小值。'],states:['标准','窄窗口','详情展开','导航折叠'],source:'首页与对话 4574:57048'});
export const 瀑布流=story({name:'Masonry 瀑布流',summary:'仅用于高度不一但阅读顺序不关键的推荐内容。',maturity:'按需',demo:'grid',usage:['探索页推荐卡片可按需使用。'],avoid:['任务列表、文件与比较内容不用瀑布流。']});
export const 间距=story({name:'Space 间距',summary:'使用 4px 基数统一组件间距。',maturity:'新增',demo:'space',usage:['常用 8、12、16、20、24px。'],states:['紧凑 8','标准 12','宽松 16']});
export const 分隔面板=story({name:'Splitter 分隔面板',summary:'支持来源与结果、列表与详情的可调分栏。',maturity:'修正',demo:'splitter',usage:['默认 40/60，单栏最小 320px。'],states:['默认','拖动','最小值','窄窗口折叠'],source:'文字提取、会议笔记'});
