// import Image from "next/image";

import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";

const Home = () => {
  return (
    <div className=" flex gap-6 pt-6">
      <div className="hidden lg:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full md:w-[70%] lg:w-[50%]">
        <div className=" flex-col gap-6 flex">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden md:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default Home;
