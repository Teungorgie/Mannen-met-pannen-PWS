import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldWrapperProps = {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
  wrapperClassName?: string;
};

function FieldWrapper({ label, htmlFor, error, required, children, hint, wrapperClassName = "" }: FieldWrapperProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${wrapperClassName}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-bark">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-bark/60">{hint}</p>}
      {error && (
        <p role="alert" className="text-xs font-medium text-terracotta-dark">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  "w-full rounded-lg border border-olive-dark/15 bg-cream-soft px-4 py-2.5 text-[15px] text-bark placeholder:text-bark/40 focus:border-terracotta focus:outline-none transition-colors";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<FieldWrapperProps, "children"> & { wrapperClassName?: string };

export function TextField({ label, error, required, hint, id, wrapperClassName, className, ...rest }: TextFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id!} error={error} required={required} hint={hint} wrapperClassName={wrapperClassName}>
      <input
        id={id}
        className={`${inputClasses} ${className ?? ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
    </FieldWrapper>
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> &
  Omit<FieldWrapperProps, "children"> & { children: ReactNode; wrapperClassName?: string };

export function SelectField({ label, error, required, hint, id, children, wrapperClassName, ...rest }: SelectFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id!} error={error} required={required} hint={hint} wrapperClassName={wrapperClassName}>
      <select id={id} className={`${inputClasses} bg-cream-soft`} aria-invalid={!!error} {...rest}>
        {children}
      </select>
    </FieldWrapper>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<FieldWrapperProps, "children"> & { wrapperClassName?: string };

export function TextareaField({ label, error, required, hint, id, wrapperClassName, ...rest }: TextareaFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id!} error={error} required={required} hint={hint} wrapperClassName={wrapperClassName}>
      <textarea id={id} className={`${inputClasses} min-h-[120px] resize-y`} aria-invalid={!!error} {...rest} />
    </FieldWrapper>
  );
}
