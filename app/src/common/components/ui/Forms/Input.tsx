import { InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { AlertCircle } from "react-feather";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  Icon?: ReactNode;
  error?: boolean;
  valid?: boolean;
  errorText?: string;
}

export default function Input({
  label,
  placeholder,
  className,
  containerClassName,
  value,
  type,
  Icon,
  error,
  valid,
  errorText,
  onChange,
}: Props) {
  const renderErrorStyle = () => {
    if (error) {
      return "border-error";
    }
    if (valid) {
      return "border-valid";
    }
  };

  return (
    <div className={twMerge("", containerClassName)}>
      {label && <p className="label mb-1">{label}</p>}
      <div
        className={twMerge(
          "w-full px-2 border-1 border-gray50 relative rounded-regular",
          renderErrorStyle()
        )}
      >
        <input
          className={twMerge(
            "h-input rounded-regular outline-none bg-transparent  w-full",
            className
          )}
          placeholder={placeholder || "Placeholder"}
          onChange={onChange}
          value={value}
          type={type}
        />
        {Icon && !error ? (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            {Icon}
          </div>
        ) : error ? (
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <AlertCircle className="text-error" />
          </div>
        ) : null}
      </div>
      {error && errorText ? (
        <p className="text-error error mt-1">{errorText}</p>
      ) : null}
    </div>
  );
}
