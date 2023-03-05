import React, { ChangeEvent, forwardRef } from "react";

interface Props {
  autoFocus?: boolean;
  className: string | string[];
  id?: string;
  label?: string;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  rows?: number;
  type?: string;
  value?: string | ReadonlyArray<string> | number;
}

const Input = forwardRef<HTMLInputElement, Props>(({autoFocus, className, id, label, name, onChange, required, type, value}, ref) => {
  const classes = ["form-input", className].flat(1).join(" ");

  return (
    <div className={classes}>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type || "text"}
        placeholder=" "
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
});

export default Input;
