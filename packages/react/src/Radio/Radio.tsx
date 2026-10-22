import { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import '../Checkbox/checkbox.css';
import './radio.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> { label?: ReactNode; }

export function Radio({ label, id, className = '', ...props }: RadioProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <label className={`xw-choice ${props.disabled ? 'xw-choice--disabled' : ''} ${className}`.trim()} htmlFor={inputId}>
      <input id={inputId} className="xw-choice__input" type="radio" {...props} />
      <span className="xw-choice__control xw-choice__control--radio" aria-hidden="true" />
      {label && <span>{label}</span>}
    </label>
  );
}
