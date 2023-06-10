import "./globals.css";

import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";

import { BaseLayout } from "@/components/Layouts";
import { ChakraProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ChakraProvider>
          <BaseLayout>{children}</BaseLayout>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
