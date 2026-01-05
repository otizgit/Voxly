import Image from "next/image";
import clouds from "@/assets/images/sky.jpg";
import avatar1 from "@/assets/images/avatar1.svg";
import avatar2 from "@/assets/images/avatar2.svg";
import chatImg from "@/assets/images/chat-img.png";
import { Icon } from "@iconify/react";

export default function IllustrationContainer({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden flex flex-col justify-center relative p-2 bg-primary">
      <div className="relative z-3 text-center w-[70%] mx-auto">
        <h1 className="text-white leading-7.5 mb-1 font-semibold text-[1.4rem]">
          {title}
        </h1>
        <p className="text-gray-100 text-small mb-12 w-100 mx-auto">
          {description}
        </p>

        <div className="rounded-xl relative bg-black/30 w-[86%] 2xl:w-100 mx-auto shadow-sm border- pb-5 border-[0.3em] border-black/30">
          {/* <Image
            draggable={false}
            className="w-35 absolute -right-15 top-3 -scale-x-100"
            src={avatar1}
            alt="chat 3d icon"
          />
          <Image
            draggable={false}
            className="w-35 absolute bottom-10 -left-15"
            src={avatar2}
            alt="chat 3d icon"
          /> */}

          <div className="rounded-tr-lg rounded-tl-lg bg-[#E9E9E9] h-9 mb-6 plain-flex gap-3 px-5">
            <span className="w-3 h-3 rounded-full bg-[#FC5C58]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FDBE46]"></span>
            <span className="w-3 h-3 rounded-full bg-[#39C84D]"></span>
          </div>

          <div className="px-4">
            <div className="mb-4">
              <div className="mb-2 relative w-60 bg-primary plain-flex flex-col items-start gap-2 rounded-xl p-3">
                <div className="flex items-end justify-center w-11 h-11 overflow-hidden bg-white border-[0.1em] border-black/80 rounded-full absolute -top-2 -left-1">
                    <Image className="w-9" src={avatar1} alt="male avatar" />
                  </div>
                <span className="absolute -bottom-3 left-3 w-0 h-0 border-t-10 border-b-10 border-l-20 rotate-90 border-t-transparent border-b-transparent border-l-primary"></span>
                <span className="w-[90%] h-1.5 rounded-full bg-white"></span>
                <span className="w-[60%] h-1.5 rounded-full bg-white"></span>
                <span className="w-[40%] h-1.5 rounded-full bg-white"></span>
              </div>
              <Icon
                icon="icon-park-outline:check-one"
                className="text-small text-primary"
              />
            </div>

            <div className="mb-4">
              <div className="relative w-60 ml-auto bg-primary plain-flex flex-col items-start gap-2 rounded-xl p-3 mb-2">
                <div className="flex items-end justify-center w-11 h-11 overflow-hidden bg-white border-[0.1em] border-black/80 rounded-full absolute -top-2 -right-1">
                    <Image
                      className="w-8.5"
                      src={avatar2}
                      alt="image of a phone"
                    />
                  </div>
                <span className="absolute -bottom-3 right-3 w-0 h-0 border-t-10 border-b-10 border-l-20 rotate-90 border-t-transparent border-b-transparent border-l-primary"></span>
                <span className="w-[25%] h-1.5 rounded-full bg-white"></span>
                <span className="w-[55%] h-1.5 rounded-full bg-white"></span>
                <span className="w-[85%] h-1.5 rounded-full bg-white"></span>
              </div>
              <Icon
                icon="icon-park-outline:check-one"
                className="text-small text-primary ml-auto"
              />
            </div>

            <div className="bg-white/20 rounded-lg px-3 custom-flex">
              <div className="plain-flex gap-2 py-4">
                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                <span className="w-20 h-2 rounded-full bg-gray-300"></span>
              </div>
              <Icon
                icon="material-symbols:send-rounded"
                className="text-[1.5rem] text-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <span className="absolute inset-0 w-full h-full bg-black/20"></span>
        <Image
          className="w-full h-full object-cover"
          src={clouds}
          alt="image of clouds and sea"
        />
      </div>
    </div>
  );
}
