import Image from "next/image";

import { Post } from "@/components/Post";
import { Share } from "@/components/Share";

const Home = () => {
  return (
    <>
      <Share />
      <Post />
    </>
  );
};

export default Home;
