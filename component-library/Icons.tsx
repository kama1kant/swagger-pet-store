import PropTypes from "prop-types";
import React from "react";
import { twMerge } from "tailwind-merge";

interface IconsProps {
  children: React.ReactNode | any;
  variant?: "white";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Icons: React.FC<IconsProps> = ({
  children,
  variant = "white",
  size = "md",
  className = "",
}) => {
  const getVariantClass = (): string => {
    switch (variant) {
      case "white":
        return "text-gray-700 dark:text-gray-400 dark:hover:text-white";
      default:
        return "text-gray-700 dark:text-gray-400 dark:hover:text-white";
    }
  };

  const getSizeClass = (): string => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "md":
        return "text-md";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      default:
        return "text-md";
    }
  };

  return (
    <div
      className={twMerge(`${getVariantClass()} ${getSizeClass()} ${className}`)}
    >
      {children}
    </div>
  );
};

Icons.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["white"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

export default Icons;
