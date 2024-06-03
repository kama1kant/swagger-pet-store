"use client";
import Alert from "@/component-library/Alert";
import Button from "@/component-library/Button";
import InputText from "@/component-library/InputText";
import type { AlertMessage } from "@/types/auth";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhoneNumber,
} from "@/utils/auth";
import React, { useState } from "react";

export default function SignUp(): React.ReactElement {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, setAlert] = useState<AlertMessage | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = (): boolean => {
    if (!isValidName({ name: formData.userName })) {
      setAlert({
        message: "User Name is not valid. Keep it under 15 characters",
        variant: "warning",
      });
      return false;
    } else if (!isValidName({ name: formData.firstName })) {
      setAlert({
        message: "First Name is not valid. Keep it under 15 characters",
        variant: "warning",
      });
      return false;
    } else if (!isValidName({ name: formData.lastName })) {
      setAlert({
        message: "Last Name is not valid. Keep it under 15 characters",
        variant: "warning",
      });
      return false;
    } else if (!isValidPhoneNumber({ phoneNumber: formData.phone })) {
      setAlert({
        message: "Phone number is not valid",
        variant: "warning",
      });
      return false;
    } else if (!isValidEmail({ email: formData.email })) {
      setAlert({
        message: "Email is not valid",
        variant: "warning",
      });
      return false;
    } else if (!isValidPassword({ password: formData.password })) {
      setAlert({
        message:
          "Password is not valid. Should be atleast 8 characters long & contain at least one lowercase, uppercase, digit & special character",
        variant: "warning",
      });
      return false;
    } else if (formData.password !== formData.confirmPassword) {
      setAlert({
        message: "Password does not match",
        variant: "warning",
      });
      return false;
    } else {
      return true;
    }
  };

  const handleAuth = async (): Promise<void> => {
    if (isFormValid()) {
      setAlert({
        message: "Account created succesfully",
        variant: "success",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 text-start">
      <>
        <p className="text-4xl font-bold py-8">Sign Up</p>
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            User Name
          </label>
          <InputText
            type="text"
            label="userName"
            name="userName"
            className="rounded-xl"
            value={formData.userName}
            onChange={handleChange}
          ></InputText>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            First Name
          </label>
          <InputText
            type="text"
            label="firstName"
            name="firstName"
            className="rounded-xl"
            value={formData.firstName}
            onChange={handleChange}
          ></InputText>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Last Name
          </label>
          <InputText
            type="text"
            label="lastName"
            name="lastName"
            className="rounded-xl"
            value={formData.lastName}
            onChange={handleChange}
          ></InputText>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Phone
          </label>
          <InputText
            type="text"
            label="phone"
            name="phone"
            className="rounded-xl"
            value={formData.phone}
            onChange={handleChange}
          ></InputText>
        </div>
      </>

      <div>
        <label htmlFor="email" className="block text-sm mb-2">
          Email address
        </label>
        <InputText
          type="email"
          label="Email"
          name="email"
          className="rounded-xl"
          value={formData.email}
          onChange={handleChange}
        ></InputText>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm mb-2">
          Password
        </label>
        <InputText
          type="password"
          label="Password"
          name="password"
          className="rounded-xl"
          value={formData.password}
          onChange={handleChange}
        ></InputText>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm mb-2">
          Confirm Password
        </label>
        <InputText
          type="password"
          label="confirmPassword"
          name="confirmPassword"
          className="rounded-xl"
          value={formData.confirmPassword}
          onChange={handleChange}
        ></InputText>
      </div>
      <Button
        variant="black"
        className="w-full"
        onClick={() => {
          void handleAuth();
        }}
      >
        Sign Up
      </Button>
      {alert?.message !== undefined && alert.message.length > 0 && (
        <Alert
          variant={alert.variant}
          className="mt-4"
          message={alert.message}
        />
      )}
    </div>
  );
}
