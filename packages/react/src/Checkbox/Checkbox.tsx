import { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import './checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> { label?: ReactNode; }

export function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <label className={`xw-choice ${props.disabled ? 'xw-choice--disabled' : ''} ${className}`.trim()} htmlFor={inputId}>
      <input id={inputId} className="xw-choice__input" type="checkbox" {...props} />
      <span className="xw-choice__control xw-choice__control--checkbox" aria-hidden="true" />
      {label && <span>{label}</span>}
    </label>
  );
}
