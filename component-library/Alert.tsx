"use client";
import PropTypes from "prop-types";
import React from "react";
import {
  HiCheckCircle,
  HiInformationCircle,
  HiShieldExclamation,
  HiXCircle,
  HiXMark,
} from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import Icons from "./Icons";

interface AlertProps {
  message: string | React.ReactNode;
  variant?: "success" | "information" | "warning" | "danger";
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  message,
  variant = "information",
  className = "",
}) => {
  const getVariantClass = (): string => {
    switch (variant) {
      case "success":
        return "bg-green-50 border-green-200";
      case "information":
        return "bg-blue-50 border-blue-200";
      case "warning":
        return "bg-orange-50 border-orange-200";
      case "danger":
        return "bg-red-50 border-red-200";
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  const getTextClass = (): string => {
    switch (variant) {
      case "success":
        return "text-green-600";
      case "information":
        return "text-blue-600";
      case "warning":
        return "text-orange-600";
      case "danger":
        return "text-red-600";
      default:
        return "text-blue-600";
    }
  };

  const getVariantIcon = (): React.ReactNode => {
    switch (variant) {
      case "success":
        return (
          <Icons
            variant="white"
            size="xl"
            className="text-green-600
          "
          >
            <HiCheckCircle />
          </Icons>
        );
      case "information":
        return (
          <Icons variant="white" size="xl" className="text-blue-600">
            <HiInformationCircle />
          </Icons>
        );
      case "warning":
        return (
          <Icons variant="white" size="xl" className="text-orange-600">
            <HiShieldExclamation />
          </Icons>
        );
      case "danger":
        return (
          <Icons variant="white" size="xl" className="text-red-600">
            <HiXCircle />
          </Icons>
        );
      default:
        return (
          <Icons variant="white" size="xl" className="text-blue-600">
            <HiInformationCircle />
          </Icons>
        );
    }
  };

  return (
    <div
      id="dismiss-alert"
      className={twMerge(
        `hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 border p-4 ${getVariantClass()} ${className}`
      )}
      role="alert"
    >
      <div className="flex">
        <div className="flex-shrink-0">{getVariantIcon()}</div>
        <div className="ml-3">
          <div className={twMerge(`text-sm font-medium ${getTextClass()}`)}>
            {message}
          </div>
        </div>
        <div className="ps-3 ms-auto">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex bg-transparent rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-50"
              data-hs-remove-element="#dismiss-alert"
            >
              <span className="sr-only">Dismiss</span>
              <Icons variant="white" className="text-lg">
                <HiXMark />
              </Icons>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(["success", "information", "warning", "danger"]),
  className: PropTypes.string,
};

export default Alert;
