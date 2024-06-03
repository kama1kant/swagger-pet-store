"use client";
import PropTypes from "prop-types";
import React from "react";
import { twMerge } from "tailwind-merge";

interface IconsProps {
  variant?: "white";
  size?: "sm" | "md" | "lg" | "xl";
  onChange?: (e?) => void;
  onBlur?: (e?) => void;
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  type?: "text" | "email" | "password" | "textarea";
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
}

const InputText: React.FC<IconsProps> = ({
  variant = "white",
  size = "md",
  onChange,
  onBlur,
  className = "",
  id = "",
  name = "",
  value = "",
  placeholder = "",
  label = "",
  type = "text",
  disabled = false,
  rows = 4,
  maxLength = 1000,
}) => {
  const getVariantClass = (): string => {
    switch (variant) {
      case "white":
        return "border border-gray-200 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
      default:
        return "border border-gray-200 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case "sm":
        return "py-2 px-3";
      case "md":
        return "py-3 px-4";
      case "lg":
        return "py-3 px-4 sm:p-5";
      default:
        return "py-3 px-4";
    }
  };

  return (
    <>
      <label htmlFor="input-label" className="sr-only">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
        id={id}
          className={twMerge(
            `py-3 px-4 h-auto block w-full border border-gray-200 rounded-lg text-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 ${className}`
          )}
          value={value}
          name={name}
          rows={rows}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          maxLength={maxLength}
        ></textarea>
      ) : (
        <input
        id={id}
          type={type}
          value={value}
          name={name}
          className={twMerge(
            `block w-full ${getVariantClass()} ${getSizeClass()} ${className}`
          )}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          maxLength={maxLength}
        ></input>
      )}
    </>
  );
};

InputText.propTypes = {
  variant: PropTypes.oneOf(["white"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "textarea"]),
  disabled: PropTypes.bool,
};

export default InputText;
