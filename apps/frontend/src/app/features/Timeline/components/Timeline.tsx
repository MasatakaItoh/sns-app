import { Post } from "@features/Post";

import { getTimeline } from "../apis";

export const Timeline = async () => {
  // TODO: userId取得
  const timeline = await getTimeline({ userId: "637e222b62ef3cc6a14231a2" });

  return (
    <div>
      {timeline?.map((data) => (
        <Post key={data._id} {...data} />
      ))}
    </div>
  );
};
