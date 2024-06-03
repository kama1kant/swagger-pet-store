import { UserProvider } from "@/components/auth/UserContext";
import { Poppins } from "next/font/google";
import React from "react";
import "./globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }): React.ReactNode {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={poppins.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
