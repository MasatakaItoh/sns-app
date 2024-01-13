import Link from "next/link";
import { Suspense } from "react";

import { Share, Spinner } from "@components/elements";
import { Timeline } from "@features/Timeline";

const HomePage = () => {
  return (
    <>
      <Share />
      <Link href={"profile/itoh"} prefetch={false}>
        profile
      </Link>
      <Suspense fallback={<Spinner />}>
        <Timeline />
      </Suspense>
    </>
  );
};

export default HomePage;
