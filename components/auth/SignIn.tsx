"use client";
import Alert from "@/component-library/Alert";
import Button from "@/component-library/Button";
import InputText from "@/component-library/InputText";
import { AlertMessage } from "@/types/auth";
import { isValidPassword, isValidUserName } from "@/utils/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser } from "./UserContext";
import { API_ENDPOINTS, PAGE_URL } from "@/utils/constants";

export default function SignIn(): React.ReactElement {
  const router = useRouter();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    if (!isValidUserName({ username: formData.username })) {
      setAlert({
        message: "User name is not valid",
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
    } else {
      setAlert({ message: "User is logged in", variant: "success" });
      return true;
    }
  };

  const handleAuth = async (): Promise<void> => {
    if (isFormValid()) {
      await login({ username: formData.username, password: formData.password });
    }
  };

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<void> => {
    try {
      const response = await axios.get(API_ENDPOINTS.login, {
        params: {
          username,
          password,
        },
      });
      if (response.status === 200) {
        setUser(username);
        router.push(PAGE_URL.dashboard);
      } else {
        console.error(response?.data?.message);
      }
    } catch (err) {
      console.error("Could not fetch Pets");
    }
  };

  return (
    <div className="flex flex-col gap-4 text-start">
      <p className="text-4xl font-bold py-8">Sign In</p>
      <div>
        <label htmlFor="userName" className="block text-sm mb-2">
          Username
        </label>
        <InputText
          id="userName"
          type="text"
          name="username"
          className="rounded-xl"
          value={formData.username}
          onChange={handleChange}
        ></InputText>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm mb-2">
          Password
        </label>
        <InputText
          id="password"
          type="password"
          name="password"
          className="rounded-xl"
          value={formData.password}
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
        Sign In
      </Button>
      {alert !== undefined && alert.message.length > 0 && (
        <div data-testid="alertMessage">
          <Alert
            variant={alert.variant}
            className="mt-4"
            message={alert.message}
          />
        </div>
      )}
    </div>
  );
}
