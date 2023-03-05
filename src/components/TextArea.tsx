import React, { ChangeEvent, forwardRef, KeyboardEvent } from "react";

type EnterEvent = KeyboardEvent<HTMLTextAreaElement>;

interface Props {
  className: string | string[];
  id?: string;
  label?: string;
  name?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onEnter: (event: EnterEvent) => void;
  required?: boolean;
  rows?: number;
  value?: string | ReadonlyArray<string> | number;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({className, id, label, name, onChange, onEnter, required, rows, value}, ref) => {
  const classes = ["form-input", className].flat(1).join(" ");

  const handleKeyDown = (event: EnterEvent) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
      event.preventDefault();
      onEnter(event);
    }
  };

  return (
    <div className={classes}>
      <textarea
        ref={ref}
        id={id}
        name={name}
        rows={rows}
        placeholder=" "
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        required={required}
      />
      {label && <label htmlFor={id}>{label}</label>}
      <footer>Press Enter to submit, Shift+Enter to insert a new line.</footer>
    </div>
  );
});

export default TextArea;
