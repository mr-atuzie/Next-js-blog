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
              <div className=" relative w-16 h-16">
                <Image
                  src={
                    "https://images.pexels.com/photos/15057524/pexels-photo-15057524/free-photo-of-group-of-cheerful-friends.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  alt=""
                  fill
                  className=" object-cover rounded-full ring-2"
                />
              </div>
              <span className="font-medium">Marvin</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
