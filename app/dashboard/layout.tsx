import Navbar from "@/components/Navbar";
import React from "react";

export default function RootLayout({ children }): React.ReactNode {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
