import Image from "next/image";

const Stories = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className=" w-full p-4 bg-white rounded-lg shadow-md overflow-scroll hide-scrollbar  text-xs">
      <div className=" flex gap-8 w-max">
        {stories.map((story) => {
          return (
            <div
              key={story}
              className=" flex flex-col items-center gap-2 cursor-pointer "
            >
              <Image
                src={
                  "https://images.pexels.com/photos/7016662/pexels-photo-7016662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
                width={56}
                height={56}
                className=" w-16 rounded-full ring-2 h-16"
              />
              <span className="font-medium">Marvin</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
