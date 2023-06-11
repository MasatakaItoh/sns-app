import "./globals.css";

import { FC, ReactNode } from "react";

import { ChakraProvider } from "@/providers";

export const metadata = {
  title: "SNS App",
  description: "SNS App liked Twitter",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
