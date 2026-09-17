import Image from "next/image";

export const ProfileSection = () => {
  return (
    <div className="relative">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full w-48 h-48 overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/IMG_0395.JPG`}
              width={200}
              height={200}
              alt="profile image"
              loading="eager"
            />
          </div>
          <h1 className="text-xl pt-4 pb-2">Nischal Shrestha</h1>
          <p className="text-paragraph">FullStack Engineer</p>
        </div>
        <hr className="my-4 text-gray-200 drop-shadow-2xl"></hr>
      </div>
      <div className="absolute bg-success rounded-full h-4 w-4 top-[55%] left-[77%] 2xl:left-[75%] y-10"></div>
    </div>
  );
};
