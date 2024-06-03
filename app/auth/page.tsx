"use client";
import SignIn from "@/components/auth/SignIn";
import SignOut from "@/components/auth/SignOut";
import SignUp from "@/components/auth/SignUp";
import { useUser } from "@/components/auth/UserContext";
import React, { useState } from "react";

export default function Auth(): React.ReactElement {
  const { user } = useUser();
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const handleSetAuthType = ({ type }: { type: "signUp" | "signIn" }): void => {
    if (type === "signUp") {
      setShowSignUp(true);
    } else {
      setShowSignUp(false);
    }
  };

  return (
    <div className="h-screen container mx-auto px-4 sm:px-16">
      <div className="flex relative md:top-40">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="bg-white p-4 sm:p-7 text-center">
            {user === undefined ? (
              <div className="flex flex-col gap-4 text-start">
                {showSignUp ? <SignUp /> : <SignIn />}
                <div className="flex justify-center">
                  {showSignUp ? (
                    <p className="text-xs">
                      Existing user?{" "}
                      <span
                        className="text-primary-400 hover:underline cursor-pointer"
                        onClick={() => {
                          handleSetAuthType({ type: "signIn" });
                        }}
                      >
                        Sign In
                      </span>
                    </p>
                  ) : (
                    <p className="text-xs">
                      New user?{" "}
                      <span
                        className="text-primary-400 hover:underline cursor-pointer"
                        onClick={() => {
                          handleSetAuthType({ type: "signUp" });
                        }}
                      >
                        Create Account
                      </span>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <>
                <SignOut />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
