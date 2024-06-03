import PropTypes from "prop-types";
import React, { type MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode | any;
  onClick?: (e?) => void;
  type?: "button" | "submit";
  ref?: MutableRefObject<null>;
  id?: string;
  variant?:
    | "primary"
    | "primaryOutline"
    | "secondary"
    | "danger"
    | "success"
    | "white"
    | "link"
    | "action"
    | "black"
    | "blackOutline"
    | "disabled";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  className?: string;
  dataAttributes?: Record<string, string>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ref,
  id,
  variant = "primary",
  type = "button",
  size = "md",
  disabled = false,
  loading = false,
  block = false,
  className = "",
  dataAttributes = {},
}) => {
  const getVariantClass = (): string => {
    switch (variant) {
      case "white":
        return "border bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-10 focus:border-transparent";
      case "primary":
        return "border border-transparent bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800";
      case "primaryOutline":
        return "border-2 border-primary-500 bg-white text-primary-500 hover:bg-primary-600 hover:border-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800";
      case "danger":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "success":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "link":
        return "border border-transparent text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-0";
      case "action":
        return "border border-transparent text-white bg-primary-600 hover:bg-primary-700 [&>*]:text-white focus:outline-none focus:ring-0";
      case "black":
        return "border border-transparent bg-gray-800 text-white [&>*]:text-white hover:bg-gray-700";
      case "blackOutline":
        return "border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-100";
      case "disabled":
        return "border bg-gray-500 text-white [&>*]:text-white cursor-not-allowed";
      default:
        return "bg-primary-500 hover:bg-primary-600 text-white";
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case "sm":
        return "gap-2 py-2 px-3 text-sm";
      case "md":
        return "gap-2 py-3 px-4 text-sm";
      case "lg":
        return "gap-2 py-3 px-4 text-sm";
      default:
        return "gap-2 py-3 px-4 text-sm md:p-5";
    }
  };

  const loadingClass = loading ? "opacity-50 cursor-not-allowed" : "";
  const blockClass = block ? "w-full" : "";

  return (
    <button
      type={type}
      id={id}
      className={twMerge(
        `rounded-xl inline-flex justify-center items-center transition-all ${getVariantClass()} ${getSizeClass()} ${loadingClass} ${blockClass} ${className}`
      )}
      onClick={onClick}
      disabled={disabled || loading}
      {...dataAttributes}
      ref={ref}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary",
    "primaryOutline",
    "secondary",
    "danger",
    "success",
    "white",
    "link",
    "action",
    "black",
    "blackOutline",
    "disabled",
  ]),
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  className: PropTypes.string,
  dataAttributes: PropTypes.any,
};

export default Button;
