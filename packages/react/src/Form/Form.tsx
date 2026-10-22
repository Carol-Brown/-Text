import type { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';
import './form.css';

export interface FieldProps {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function Field({ label, hint, error, required, children }: FieldProps) {
  return <label className={`xw-field ${error ? 'xw-field--error' : ''}`}>
    <span className="xw-field__label">{label}{required && <span aria-hidden="true"> *</span>}</span>
    {children}
    {(error || hint) && <span className="xw-field__message">{error || hint}</span>}
  </label>;
}

export const Input = ({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) =>
  <input className={`xw-input ${className}`.trim()} {...props} />;

export const Select = ({ className = '', children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) =>
  <select className={`xw-select ${className}`.trim()} {...props}>{children}</select>;

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> { label: string; }
export function Switch({ label, className = '', ...props }: SwitchProps) {
  return <label className={`xw-switch ${className}`.trim()}>
    <input type="checkbox" role="switch" {...props} />
    <span className="xw-switch__track" aria-hidden="true"><span /></span>
    <span>{label}</span>
  </label>;
}
