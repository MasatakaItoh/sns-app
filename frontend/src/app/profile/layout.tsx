import { FC, ReactNode } from "react";

import { BaseLayout } from "@/components/Layouts";

export const metadata = {
  title: "SNS App",
  description: "SNS App liked Twitter",
};

type ProfileLayoutProps = {
  children: ReactNode;
};

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default ProfileLayout;
