// import Image from "next/image";

import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-3  ">
      {/* text container */}
      <div className=" w-[50%] flex flex-col gap-12 ">
        <h1 className=" text-8xl font-semibold">Creative Thoughts Agency</h1>

        <p className=" text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur
          deleniti accusamus error, a odit vel commodi alias ipsam, nobis earum
          placeat, itaque animi ex?
        </p>

        <div className=" flex gap-5">
          <button className=" min-w-[120px] cursor-pointer border-none p-2 rounded-md text-center bg-[#3673fd]">
            Learn more
          </button>
          <button className=" min-w-[120px] cursor-pointer border-none p-2 rounded-md text-center bg-white text-[#0d0c22]">
            Contact
          </button>
        </div>

        <div>
          <Image
            className=" relative filter grayscale"
            src="/brands.png"
            alt="brands"
            width={500}
            height={50}
          />
        </div>
      </div>

      {/* image container */}
      <div className=" w-[50%] ">
        <Image src="/hero.gif" alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default Home;
