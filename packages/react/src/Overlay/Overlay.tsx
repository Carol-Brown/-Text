import type { ReactNode } from 'react';
import { Button } from '../Button/Button';
import './overlay.css';

export interface DialogProps { title: string; description?: string; children?: ReactNode; danger?: boolean; }
export function Dialog({ title, description, children, danger }: DialogProps) {
  return <div className="xw-dialog" role="dialog" aria-modal="true" aria-labelledby="xw-dialog-title">
    <header><h2 id="xw-dialog-title">{title}</h2><button aria-label="关闭">×</button></header>
    {description && <p>{description}</p>}{children}
    <footer><Button variant="ghost" size="small">取消</Button><Button variant={danger ? 'danger' : 'primary'} size="small">{danger ? '确认删除' : '确认'}</Button></footer>
  </div>;
}

export function Drawer({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="xw-drawer" aria-label={title}><header><h2>{title}</h2><button aria-label="关闭">×</button></header><div>{children}</div></aside>;
}
