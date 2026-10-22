import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import './data-display.css';

export function EmptyState({ title, description, action = '添加内容' }: { title: string; description: string; action?: string }) {
  return <div className="xw-empty"><span aria-hidden="true">◇</span><strong>{title}</strong><p>{description}</p><Button size="small">{action}</Button></div>;
}

export function DataTable({ rows }: { rows: Array<{ name: string; type: string; status: ReactNode }> }) {
  return <div className="xw-table-wrap"><table className="xw-table"><thead><tr><th>名称</th><th>类型</th><th>状态</th><th><span className="xw-sr-only">操作</span></th></tr></thead><tbody>{rows.map(row => <tr key={row.name}><td>{row.name}</td><td>{row.type}</td><td>{row.status}</td><td><button aria-label={`更多操作：${row.name}`}>•••</button></td></tr>)}</tbody></table></div>;
}
