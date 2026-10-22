import type { HTMLAttributes } from 'react';
import './status-badge.css';

export type StatusTone = 'success' | 'warning' | 'error';
export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> { tone: StatusTone; }

export function StatusBadge({ tone, children, className = '', ...props }: StatusBadgeProps) {
  return <span className={`xw-status xw-status--${tone} ${className}`.trim()} {...props}><span className="xw-status__dot" />{children}</span>;
}
