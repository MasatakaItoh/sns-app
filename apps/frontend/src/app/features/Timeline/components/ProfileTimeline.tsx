import { Post } from "@features/Post";

import { getProfileTimeline } from "../apis";

type ProfileTimelineProps = {
  userName: string;
};

export const ProfileTimeline = async ({ userName }: ProfileTimelineProps) => {
  const timeline = await getProfileTimeline({ userName });

  return (
    <div>
      {timeline.map((data) => (
        <Post key={data._id} {...data} />
      ))}
    </div>
  );
};
