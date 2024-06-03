import Button from "@/component-library/Button";
import React from "react";
import { useUser } from "./UserContext";

export default function SignOut(): React.ReactElement {
  const { setUser } = useUser();

  const handleSignOut = (): void => {
    setUser(undefined);
  };

  return (
    <Button
      variant="black"
      className="w-full"
      onClick={() => {
        void handleSignOut();
      }}
    >
      Sign Out
    </Button>
  );
}
