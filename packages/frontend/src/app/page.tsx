import { BaseLayout } from "@/components/Layouts";
import { Share } from "@/components/Share";

import { Post } from "../features/Post";

const HomePage = () => {
  return (
    <BaseLayout>
      <Share />
      <Post />
    </BaseLayout>
  );
};

export default HomePage;
