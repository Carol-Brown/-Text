import type { Meta } from '@storybook/react';
import { story, baseStates, asyncStates } from './factory';
export default { title:'组件/1 通用', parameters:{layout:'fullscreen'} } satisfies Meta;

export const 按钮 = story({name:'Button 按钮',summary:'触发即时操作，是页面行动层级的基础。',maturity:'修正',demo:'button',usage:['一个决策区域只保留一个主要按钮。','危险操作使用明确的危险样式与二次确认。'],avoid:['不要用按钮承担普通导航。'],states:asyncStates,source:'6.0 首页、电脑管理、弹窗'});
export const 悬浮按钮 = story({name:'FloatButton 悬浮按钮',summary:'桌面小球与高频快捷入口。',maturity:'现有',demo:'float-button',usage:['作为全局唤起、录音或任务返回入口。','扩展态最多承载 3–6 个快捷行动。'],avoid:['不承载复杂表单或完整导航。'],states:['默认','悬停','展开','聆听','执行中','失败'],source:'桌面小球 9034:74648'});
export const 图标库 = story({name:'Icon 图标库',summary:'统一导航、业务、状态和操作图标的命名与尺寸。',maturity:'修正',demo:'icon',usage:['16px 行内、20px 状态、24px 默认、32px 强调。','图标只表达稳定含义，并配可访问名称。'],avoid:['不混用不同描边粗细；不从插画中抽取图标色。'],states:baseStates,source:'组件页与小微问问 7885:87848'});
export const 排版 = story({name:'Typography 排版',summary:'建立桌面中文界面的阅读层级。',maturity:'现有',demo:'typography',usage:['正文默认 14/22，页面标题 20/28。','Microsoft YaHei UI 为 Windows 参考字体。'],avoid:['关键内容不小于 12px。'],states:['浅色','深色','200% 缩放']});
