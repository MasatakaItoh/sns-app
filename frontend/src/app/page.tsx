import { BaseLayout } from "@/components/Layouts";
import { Post } from "@/components/Post";
import { Share } from "@/components/Share";

const HomePage = () => {
  return (
    <BaseLayout>
      <Share />
      <Post />
    </BaseLayout>
  );
};

export default HomePage;
