import SignIn from "@/components/auth/SignIn";
import { isValidEmail, isValidPassword, isValidUserName } from "@/utils/auth";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("SignIn Component", () => {
  it("successfully signs in a user with valid credentials", async () => {
    render(<SignIn />);
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button");

    if (!usernameInput || !passwordInput || !signInButton) {
      throw new Error("Element not found");
    }

    expect(usernameInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(signInButton).toBeDefined();

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, {
      target: { value: "CiscoSecure@123" },
    });
    fireEvent.click(signInButton);

    await waitFor(() => {
      const submittedData = screen.getByTestId("alertMessage");
      expect(submittedData).toBeInTheDocument();
    });
  });
});

test("identifies emails without '@' symbol", () => {
  expect(isValidEmail({ email: "emaiIdwithout" })).toBe(false);
});

test("validates email format correctly", () => {
  expect(isValidEmail({ email: "example@cisco.com" })).toBe(true);
});

test("identifies invalid password", () => {
  expect(isValidPassword({ password: "invalidPassword" })).toBe(false);
});

test("validates password format correctly", () => {
  expect(isValidPassword({ password: "invalidPassword@1234" })).toBe(true);
});

test("identifies invalid username", () => {
  expect(
    isValidUserName({ username: "username with spaces not allowed" })
  ).toBe(false);
});

test("validates username format correctly", () => {
  expect(isValidUserName({ username: "exampleUsername" })).toBe(true);
});
