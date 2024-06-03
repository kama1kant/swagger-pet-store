"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  user: string | undefined;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const UserContext = createContext<UserContextType>({
  user: "",
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {}, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
