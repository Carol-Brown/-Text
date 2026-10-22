import { useState, type ReactNode } from 'react';
import {
  Alert, Button, Card, Checkbox, DataTable, Dialog, Drawer, EmptyState, Field,
  Input, Progress, Radio, Select, Skeleton, Spinner, StatusBadge, Steps, Switch, Tabs, Toast,
} from '@xiaowei/react';
import './catalog.css';

export type Maturity = '现有' | '修正' | '新增' | '按需';
export interface CatalogSpec {
  name: string;
  summary: string;
  maturity: Maturity;
  demo: string;
  usage: string[];
  avoid?: string[];
  states?: string[];
  source?: string;
}

const glyphs = ['问答', '电脑', '会议', '字幕', '提取', '知识', '搜索', '技能', '复制', '下载', '删除', '筛选'];

function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`xw-catalog-demo ${className}`}>{children}</div>;
}

function Demo({ kind }: { kind: string }) {
  switch (kind) {
    case 'button': return <Panel><Button>主要操作</Button><Button variant="secondary">次要操作</Button><Button variant="ghost">文字操作</Button><Button variant="danger">危险操作</Button></Panel>;
    case 'float-button': return <Panel className="is-center"><button className="xw-float-button" aria-label="打开小微">✦</button><button className="xw-float-button is-extended">✦ 问问小微</button></Panel>;
    case 'icon': return <Panel><div className="xw-icon-grid">{glyphs.map((g, i) => <div key={g}><span>{['◉','▣','◫','文','⌁','◇','⌕','✦','□','⇩','×','≡'][i]}</span><small>{g}</small></div>)}</div></Panel>;
    case 'typography': return <Panel className="is-stack"><h2 style={{margin:0}}>页面标题 20/28</h2><h3 style={{margin:0}}>区块标题 18/24</h3><p style={{margin:0}}>正文内容 14/22，用于主要说明与信息阅读。</p><small>辅助文字 12/18</small></Panel>;
    case 'divider': return <Panel className="is-stack"><span>账户信息</span><hr /><span>隐私设置</span></Panel>;
    case 'flex': return <Panel>{['状态','内存','磁盘'].map(x => <span className="xw-mini-card" key={x}>{x}</span>)}</Panel>;
    case 'grid': return <Panel><div className="xw-demo-grid">{['电脑清理','驱动检查','磁盘诊断','应用管理'].map(x => <span className="xw-mini-card" key={x}>{x}</span>)}</div></Panel>;
    case 'layout': return <Panel><div className="xw-layout-demo"><aside>导航</aside><main>内容区域</main><section>详情</section></div></Panel>;
    case 'space': return <Panel><Button size="small">保存</Button><Button size="small" variant="secondary">取消</Button></Panel>;
    case 'splitter': return <Panel><div className="xw-split-demo"><div>原始文件</div><i /><div>识别结果</div></div></Panel>;
    case 'breadcrumb': return <Panel><nav className="xw-breadcrumb">知识库 <b>/</b> 售后资料 <b>/</b> 产品手册.pdf</nav></Panel>;
    case 'dropdown': return <Panel><div className="xw-dropdown"><Button variant="secondary" size="small">导出为⌄</Button><div className="xw-menu"><button>Word 文档</button><button>PDF 文件 <span>›</span></button><div className="xw-submenu"><button>标准 PDF</button><button>带批注 PDF</button></div><button className="is-disabled">纯文本（不可用）</button></div></div></Panel>;
    case 'menu': return <Panel><nav className="xw-vertical-tabs"><button className="is-active">问问小微</button><button>电脑管理</button><button>会议记录</button><button>AI 知识库</button></nav></Panel>;
    case 'pagination': return <Panel><div className="xw-pagination"><button>‹</button><button className="is-active">1</button><button>2</button><button>3</button><span>…</span><button>12</button><button>›</button></div></Panel>;
    case 'steps': return <Panel><Steps items={['添加资料','解析内容','完成']} current={1} /></Panel>;
    case 'tabs-h': return <Panel><Tabs items={['概览','扫描结果','历史记录']} active={1} /></Panel>;
    case 'tabs-v': return <Panel><nav className="xw-vertical-tabs"><button className="is-active">通用设置</button><button>账号设置</button><button>快捷键</button><button>关于小微</button></nav><div className="xw-settings-panel">通用设置内容</div></Panel>;
    case 'anchor': return <Panel><nav className="xw-anchor"><a className="is-active">使用场景</a><a>结构</a><a>状态</a><a>无障碍</a></nav></Panel>;
    case 'input': return <Panel><Field label="知识库名称" hint="最多 30 个字符"><Input placeholder="请输入名称" /></Field></Panel>;
    case 'number': return <Panel><Field label="保留时长"><Input type="number" defaultValue="30" /><span className="xw-unit">天</span></Field></Panel>;
    case 'choice': return <Panel className="is-stack"><Checkbox label="系统临时文件" defaultChecked /><Radio label="本地处理" name="mode" defaultChecked /><Switch label="完成后通知我" defaultChecked /></Panel>;
    case 'select': return <Panel><Field label="处理方式"><Select defaultValue="local"><option value="local">本地处理</option><option value="cloud">云端处理</option></Select></Field></Panel>;
    case 'date': return <Panel><Field label="会议日期"><Input type="date" defaultValue="2026-10-22" /></Field><Field label="开始时间"><Input type="time" defaultValue="09:30" /></Field></Panel>;
    case 'slider': return <Panel className="is-stack"><label>麦克风音量　68%</label><input className="xw-range" type="range" defaultValue="68" /></Panel>;
    case 'upload': return <Panel><div className="xw-upload"><strong>拖放文件到这里</strong><span>支持 PDF、Word、Excel，单个不超过 20 MB</span><Button size="small" variant="secondary">选择文件</Button></div></Panel>;
    case 'card': return <Panel><Card style={{width:320}} title="电脑状态良好" footer={<Button size="small">查看详情</Button>}>未发现需要立即处理的问题。</Card></Panel>;
    case 'summary': return <Panel><div className="xw-summary-card"><header><span>会议总结</span><StatusBadge tone="success">已完成</StatusBadge></header><h3>产品 6.0 设计评审</h3><p>确认 3 项决策，产生 6 条行动项，2 项需要本周完成。</p><div><span><b>3</b> 项决策</span><span><b>6</b> 条行动</span><span><b>42</b> 分钟</span></div><footer><Button size="small">查看总结</Button><Button size="small" variant="ghost">导出</Button></footer></div></Panel>;
    case 'avatar': return <Panel>{['李','王','陈','周'].map(x => <span className="xw-avatar" key={x}>{x}</span>)}</Panel>;
    case 'badge': return <Panel><span className="xw-badge-wrap">任务中心 <b>3</b></span><StatusBadge tone="success">已完成</StatusBadge><StatusBadge tone="warning">需处理</StatusBadge></Panel>;
    case 'empty': return <Panel><div className="xw-empty-gallery"><EmptyState title="暂无资料" description="添加第一份资料后即可开始问答。" action="添加资料" /><EmptyState title="没有搜索结果" description="尝试更换关键词或清除筛选。" action="清除筛选" /></div></Panel>;
    case 'image': return <Panel><div className="xw-image-demo">图片预览</div></Panel>;
    case 'list': return <Panel className="is-stack">{['产品手册.pdf','售后政策.docx','价格表.xlsx'].map((x,i) => <div className="xw-list-row" key={x}><span>▧</span><strong>{x}</strong><StatusBadge tone={i===2?'warning':'success'}>{i===2?'解析中':'已完成'}</StatusBadge><button>•••</button></div>)}</Panel>;
    case 'popover': return <Panel><div className="xw-popover-anchor"><Button variant="secondary" size="small">查看来源</Button><div className="xw-popover"><strong>来源信息</strong><p>《产品手册》第 12 页</p><a>打开原文</a></div></div></Panel>;
    case 'segmented': return <Panel><Tabs items={['卡片','列表','紧凑']} active={0} /></Panel>;
    case 'statistic': return <Panel>{[['98','健康度'],['12.4 GB','可清理'],['3','待处理']].map(([v,l]) => <div className="xw-stat" key={l}><strong>{v}</strong><span>{l}</span></div>)}</Panel>;
    case 'table': return <Panel><DataTable rows={[{name:'产品手册.pdf',type:'PDF',status:<StatusBadge tone="success">已完成</StatusBadge>},{name:'售后政策.docx',type:'Word',status:<StatusBadge tone="warning">解析中</StatusBadge>}]} /></Panel>;
    case 'tag': return <Panel>{['全部','PDF','本地处理','已安装'].map((x,i)=><span key={x} className={`xw-tag ${i===0?'is-active':''}`}>{x}{i>1&&<button>×</button>}</span>)}</Panel>;
    case 'timeline': return <Panel><ol className="xw-timeline"><li className="is-done"><b>10:24</b> 完成设备扫描</li><li className="is-active"><b>10:25</b> 正在修复驱动</li><li><b>等待</b> 验证修复结果</li></ol></Panel>;
    case 'tooltip': return <Panel className="is-center"><div className="xw-tooltip-anchor"><button className="xw-icon-button" aria-label="复制">□</button><span role="tooltip">复制</span></div><div className="xw-tooltip-anchor"><button className="xw-icon-button" aria-label="删除">×</button><span role="tooltip">删除记录</span></div></Panel>;
    case 'tree': return <Panel><div className="xw-tree"><div>⌄ 售后资料库</div><div className="is-child">⌄ 产品资料</div><div className="is-leaf">产品手册.pdf</div><div className="is-leaf">规格表.xlsx</div></div></Panel>;
    case 'alert': return <Panel className="is-stack"><Alert title="文件将在本地处理" description="不会上传到云端。"/><Alert tone="warning" title="需要重启电脑" description="驱动更新将在重启后生效。"/></Panel>;
    case 'banner': return <Panel className="is-stack"><div className="xw-banner xw-banner--info"><span>i</span><p><strong>小微 6.0 已有新版本</strong> 更新后可使用新的设备连接能力。</p><Button size="small">立即更新</Button><button aria-label="关闭">×</button></div><div className="xw-banner xw-banner--warning"><span>!</span><p><strong>当前处于离线状态</strong> 云端能力暂不可用，本地功能仍可继续。</p><button aria-label="关闭">×</button></div></Panel>;
    case 'drawer': return <Panel className="is-right"><Drawer title="扫描详情"><StatusBadge tone="warning">发现 3 项建议</StatusBadge><p>启动项 2 项，磁盘空间 1 项。</p></Drawer></Panel>;
    case 'toast-app': return <Panel className="is-stack"><Toast message="已复制到剪贴板"/><Toast tone="error" message="文件上传失败" detail="网络恢复后可以重试。"/></Panel>;
    case 'toast-system': return <Panel><div className="xw-system-toast"><span className="xw-app-logo">✦</span><div><strong>惠小微 · 会议总结已完成</strong><p>已生成 6 条行动项，点击查看。</p><small>现在</small></div><button>查看</button></div></Panel>;
    case 'dialog-reminder': return <Panel className="is-center"><Dialog title="是否允许小微使用麦克风？" description="用于会议转写和语音输入。你可以稍后在设置中关闭。" /></Panel>;
    case 'dialog-confirm': return <Panel className="is-center"><Dialog danger title="删除“售后资料库”？" description="24 个来源和索引记录将被删除，此操作无法撤销。" /></Panel>;
    case 'dialog-error': return <Panel className="is-center"><Dialog title="无法连接设备" description="请确认设备已开机并与电脑连接到同一网络，然后重试。"><Alert tone="error" title="连接超时" description="错误代码：DVC-104" /></Dialog></Panel>;
    case 'dialog-select': return <Panel className="is-center"><Dialog title="选择导出格式" description="导出的内容包含会议原文和 AI 总结。"><div className="is-stack"><Radio name="export" label="Word 文档（.docx）" defaultChecked/><Radio name="export" label="PDF 文件（.pdf）"/><Radio name="export" label="纯文本（.txt）"/></div></Dialog></Panel>;
    case 'popconfirm': return <Panel><div className="xw-popconfirm"><strong>移除这个文件？</strong><p>仅从知识库移除，不会删除本地文件。</p><footer><Button variant="ghost" size="small">取消</Button><Button variant="danger" size="small">移除</Button></footer></div></Panel>;
    case 'progress': return <Panel className="is-stack"><Progress value={68} label="正在上传会议录音" detail="68 MB / 100 MB"/><Progress label="正在生成会议总结" detail="已完成转写，正在提取行动项"/></Panel>;
    case 'result': return <Panel><div className="xw-result"><span>✓</span><h3>扫描完成</h3><p>未发现高风险问题，有 3 项优化建议。</p><Button size="small">查看建议</Button></div></Panel>;
    case 'skeleton': return <Panel><Skeleton lines={4}/></Panel>;
    case 'spin': return <Panel><Spinner label="正在连接设备"/></Panel>;
    case 'watermark': return <Panel><div className="xw-watermark"><span>内部资料 · 惠小微</span><Card title="设备报告">此报告仅用于内部评审。</Card></div></Panel>;
    case 'task': return <Panel><Card style={{width:420,maxWidth:'100%'}} title="整理会议记录" footer={<Button size="small">查看任务</Button>}><StatusBadge tone="warning">正在生成</StatusBadge><div style={{height:12}}/><Progress label="正在提取行动项" detail="已完成转写和发言人识别"/></Card></Panel>;
    case 'composer': return <Panel><div className="xw-composer"><div>▧ 产品手册.pdf　<span>已解析</span></div><textarea aria-label="向小微提问" placeholder="问问小微，或描述你想完成的任务…"/><footer><button>＋</button><button>🎙</button><Button size="small">发送</Button></footer></div></Panel>;
    case 'permission': return <Panel className="is-center"><Dialog title="允许访问这个文件夹？" description="小微将读取“售后资料”中的文件，用于创建知识库。文件将使用云端处理。"><Alert title="访问范围" description="仅本次任务；完成后自动失效。"/></Dialog></Panel>;
    case 'device': return <Panel><div className="xw-device-card"><span>▣</span><div><strong>OPPO Find X8</strong><small>已连接 · 电量 82%</small></div><Button size="small" variant="secondary">管理</Button></div><div className="xw-device-card is-searching"><Spinner label="正在搜索附近设备"/></div></Panel>;
    case 'login': return <Panel><div className="xw-login"><span className="xw-app-logo">✦</span><h3>登录惠小微</h3><p>使用手机扫码登录，任务与知识库可跨设备同步。</p><div className="xw-qr">二维码</div><a>使用账号密码登录</a></div></Panel>;
    case 'pricing': return <Panel>{['体验包','标准包','专业包'].map((x,i)=><div className={`xw-price ${i===1?'is-featured':''}`} key={x}><strong>{x}</strong><b>{i===0?'¥0':i===1?'¥29':'¥59'}</b><small>/ 月</small><Button size="small" variant={i===1?'primary':'secondary'}>{i===0?'当前方案':'选择'}</Button></div>)}</Panel>;
    case 'recording': return <Panel><div className="xw-recording"><span>● 00:12:46</span><strong>屏幕录制中</strong><button>暂停</button><button className="is-danger">结束</button></div></Panel>;
    default: return <Panel><div className="xw-generic-demo"><span>✦</span><strong>组件视觉示例</strong><small>遵循小微语义变量、状态和键盘规范</small></div></Panel>;
  }
}

export function CatalogStory({ spec }: { spec: CatalogSpec }) {
  const [tab, setTab] = useState<'preview'|'usage'|'states'>('preview');
  return <main className="xw-catalog-page">
    <header className="xw-catalog-header"><div><span className={`xw-maturity xw-maturity--${spec.maturity}`}>{spec.maturity}</span><h1>{spec.name}</h1><p>{spec.summary}</p></div>{spec.source && <small>来源：{spec.source}</small>}</header>
    <nav className="xw-catalog-tabs" aria-label="组件文档视图"><button onClick={()=>setTab('preview')} className={tab==='preview'?'is-active':''}>视觉示例</button><button onClick={()=>setTab('usage')} className={tab==='usage'?'is-active':''}>使用说明</button><button onClick={()=>setTab('states')} className={tab==='states'?'is-active':''}>状态与验收</button></nav>
    {tab === 'preview' && <Demo kind={spec.demo}/>} 
    {tab === 'usage' && <section className="xw-catalog-copy"><div><h2>何时使用</h2><ul>{spec.usage.map(x=><li key={x}>{x}</li>)}</ul></div>{spec.avoid?.length ? <div><h2>避免使用</h2><ul>{spec.avoid.map(x=><li key={x}>{x}</li>)}</ul></div>:null}</section>}
    {tab === 'states' && <section className="xw-catalog-copy"><div><h2>必须覆盖的状态</h2><div className="xw-state-list">{(spec.states || ['默认','悬停','按下','键盘聚焦','禁用']).map(x=><span key={x}>{x}</span>)}</div></div><div><h2>通用验收</h2><ul><li>浅色、深色与高对比度可辨识。</li><li>键盘可操作，焦点清晰可见。</li><li>中文长文案与 200% 缩放不裁切。</li><li>状态不能只依赖颜色表达。</li></ul></div></section>}
  </main>;
}
