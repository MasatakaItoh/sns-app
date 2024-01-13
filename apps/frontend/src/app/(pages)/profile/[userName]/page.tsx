import Link from "next/link";
import { Suspense } from "react";

import { Share, Spinner } from "@components/elements";
import { ProfileTimeline } from "@features/Timeline";
import { Profile } from "@features/Users";

type ProfilePageProps = {
  params: {
    userName: string;
  };
};

const ProfilePage = ({ params }: ProfilePageProps) => {
  return (
    <>
      <Link href={"/"}>TOP</Link>
      <Suspense fallback={<Spinner />}>
        <Profile userName={params.userName} />
      </Suspense>

      <Share />

      <Suspense fallback={<Spinner />}>
        <ProfileTimeline userName={params.userName} />
      </Suspense>
    </>
  );
};

export default ProfilePage;
