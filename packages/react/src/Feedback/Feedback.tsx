import type { ReactNode } from 'react';
import './feedback.css';

export type FeedbackTone = 'info' | 'success' | 'warning' | 'error';
const marks: Record<FeedbackTone, string> = { info: 'i', success: '✓', warning: '!', error: '×' };

export interface AlertProps { tone?: FeedbackTone; title: string; description?: string; action?: ReactNode; }
export function Alert({ tone = 'info', title, description, action }: AlertProps) {
  return <div className={`xw-alert xw-alert--${tone}`} role={tone === 'error' ? 'alert' : 'status'}>
    <span className="xw-alert__mark" aria-hidden="true">{marks[tone]}</span>
    <span className="xw-alert__content"><strong>{title}</strong>{description && <span>{description}</span>}</span>
    {action && <span className="xw-alert__action">{action}</span>}
  </div>;
}

export interface ToastProps { tone?: FeedbackTone; message: string; detail?: string; }
export function Toast({ tone = 'success', message, detail }: ToastProps) {
  return <div className={`xw-toast xw-toast--${tone}`} role="status">
    <span className="xw-toast__mark" aria-hidden="true">{marks[tone]}</span>
    <span><strong>{message}</strong>{detail && <small>{detail}</small>}</span>
    <button aria-label="关闭通知">×</button>
  </div>;
}

export interface ProgressProps { value?: number; label: string; detail?: string; }
export function Progress({ value, label, detail }: ProgressProps) {
  const determinate = typeof value === 'number';
  return <div className="xw-progress">
    <div className="xw-progress__label"><span>{label}</span><strong>{determinate ? `${value}%` : '进行中'}</strong></div>
    <div className={`xw-progress__track ${!determinate ? 'xw-progress__track--indeterminate' : ''}`} role="progressbar" aria-label={label} aria-valuemin={determinate ? 0 : undefined} aria-valuemax={determinate ? 100 : undefined} aria-valuenow={determinate ? value : undefined}>
      <span style={determinate ? { width: `${Math.max(0, Math.min(100, value))}%` } : undefined} />
    </div>
    {detail && <small>{detail}</small>}
  </div>;
}

export const Spinner = ({ label = '正在加载' }: { label?: string }) => <span className="xw-spinner" role="status"><i aria-hidden="true" />{label}</span>;

export function Skeleton({ lines = 3 }: { lines?: number }) {
  return <div className="xw-skeleton" aria-label="内容正在加载">{Array.from({ length: lines }, (_, i) => <span key={i} style={{ width: i === lines - 1 ? '62%' : '100%' }} />)}</div>;
}
