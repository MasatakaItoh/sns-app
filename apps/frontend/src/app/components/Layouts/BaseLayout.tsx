import { PropsWithChildren } from "react";

import { LeftBar } from "./LeftBar";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={"flex h-[100vh]"}>
      <div className={"pl-8 w-[max(20%, 300px)] overflow-y-auto"}>
        <LeftBar />
      </div>

      <div className={"flex-1 p-4 overflow-y-auto"}>{children}</div>
    </div>
  );
};
