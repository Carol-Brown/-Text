import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Button({
  variant = 'primary', size = 'medium', loading = false,
  leadingIcon, trailingIcon, disabled, children, className = '', ...props
}: ButtonProps) {
  return (
    <button
      className={`xw-button xw-button--${variant} xw-button--${size} ${className}`.trim()}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="xw-button__spinner" aria-hidden="true" /> : leadingIcon}
      <span className="xw-button__label">{children}</span>
      {!loading && trailingIcon}
    </button>
  );
}
