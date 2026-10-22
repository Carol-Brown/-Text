import type { CatalogSpec } from './CatalogStory';
import { CatalogStory } from './CatalogStory';

const chineseTitle = (name: string) => name.replace(/^[A-Za-z]+\s+/, '');

export const story = (spec: CatalogSpec) => ({ name: chineseTitle(spec.name), render: () => <CatalogStory spec={spec} /> });
export const baseStates = ['默认','悬停','按下','键盘聚焦','禁用'];
export const asyncStates = [...baseStates,'加载','成功','失败'];
