import { Post } from "@/components/Post";
import { Profile } from "@/components/Profile";
import { Share } from "@/components/Share";

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
