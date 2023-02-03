import React, { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  id?: string;
  type?: HTMLInputTypeAttribute;
  label: string;
  required?: boolean;
  fullWidth?: boolean;
  errorMessage?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
const InputField: React.FC<InputProps> = ({
  id,
  type = "text",
  label,
  errorMessage,
  required = false,
  fullWidth = false,
  value,
  disabled = false,
  onChange,
}) => {
  const _id = !id ? label?.replace("/s/g", "")?.toLowerCase() + "-id" : id;

  const handleOnChange = (val: string) => {
    if (!onChange) {
      return;
    }

    onChange(val);
  };

  return (
    <div className={`flex flex-col items-start gap-8 p-0`}>
      <label
        data-testid={"input-label"}
        htmlFor={_id}
        className={required ? "required" : ""}
      >
        <span className="text-gray-700">{label}</span>
      </label>
      <input
        className={`border border-t-0 border-l-0 border-r-0 border-gray-200 bg-transparent ${
          fullWidth ? "w-full" : ""
        }`}
        type={type}
        id={_id}
        name={_id}
        value={value}
        data-error={errorMessage}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange(e.target.value)
        }
        disabled={disabled}
      />
      <div data-testid={"input-error"} className={"relative text-error-600"}>
        <span className="text-sm leading-sm">
          {errorMessage ? errorMessage : ""}
        </span>
      </div>
    </div>
  );
};

export default InputField;
