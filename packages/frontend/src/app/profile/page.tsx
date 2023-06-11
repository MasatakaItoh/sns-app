import { Profile } from "@/components/Profile";
import { Share } from "@/components/Share";

import { Post } from "../../features/Post";

const ProfilePage = () => {
  return (
    <>
      <Profile />
      <Share />
      <Post />
    </>
  );
};

export default ProfilePage;
