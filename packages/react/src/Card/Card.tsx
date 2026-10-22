import type { HTMLAttributes, ReactNode } from 'react';
import './card.css';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  interactive?: boolean;
  title?: ReactNode;
  footer?: ReactNode;
}

export function Card({ interactive = false, title, footer, children, className = '', ...props }: CardProps) {
  return (
    <div className={`xw-card ${interactive ? 'xw-card--interactive' : ''} ${className}`.trim()} {...props}>
      {title && <div className="xw-card__title">{title}</div>}
      <div className="xw-card__body">{children}</div>
      {footer && <div className="xw-card__footer">{footer}</div>}
    </div>
  );
}
