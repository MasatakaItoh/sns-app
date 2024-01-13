import { PropsWithChildren } from "react";

import { BaseLayout } from "@components/Layouts";

import "./globals.css";

export const metadata = {
  title: "SNS App",
  description: "SNS App liked Twitter",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ja">
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
};

export default RootLayout;
