import { FC, useEffect, useState } from "react";

import { Post } from "@/features/Post";
import { getTimeline } from "@/features/Timeline/apis";

export const Timeline: FC = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getTimeline({ userId: "637e222b62ef3cc6a14231a2" });
      setTimeline(res);
    })();
  }, []);

  return timeline.map(() => <Post />);
};
